//Importei a variavel de outro JS, no arquivo data.js eu tive que colocar module.exports = { movies }; no final
//const { movies } = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
//console.log(movies[15].director);
function getAllDirectors(moviesIn) {
    //    let directorsOut = []
    directorsOut = moviesIn.map(movie => movie.director);
    return directorsOut;
}
//console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//let rawDirectors = getAllDirectors(movies);
function nonDupDirectors(dupDirectors) {
    nonDup = dupDirectors.filter((director, index) => dupDirectors.indexOf(director) === index);
    return nonDup;
}

//console.log(rawDirectors.length);
//console.log(nonDupDirectors(rawDirectors));
//console.log(nonDupDirectors(rawDirectors).length);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesIn) {
    let numDramaSteve = 0;
    if (moviesIn.length === 0) {
        return numDramaSteve;
    }

    dramaSteve = moviesIn.filter(function (movie) {
        if (movie.director === 'Steven Spielberg') {
            if (movie.genre.indexOf('Drama') >= 0) {
                return movie;
            }
        }
    });
    numDramaSteve = dramaSteve.length;
    return numDramaSteve;
}

//console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let fromJasmine3 = [{ rate: 6 }, { rate: '' }, {}];

function ratesAverage(moviesIn) {
    let avgRate = 0;
    console.log(moviesIn.length);
    if (moviesIn.length === 0) {
        return avgRate;
    }
    ratesOut = moviesIn.map(movie => movie.rate);
    console.log(ratesOut);
    ratesSum = ratesOut.reduce((accumRate, rate) => {
        console.log(typeof rate);
        if (typeof rate === 'number') {
            console.log(rate + " is a number and this is the accumRate " + accumRate);
            cumRate = accumRate + rate;
        }
        return cumRate;
    }, 0);
    console.log(ratesSum);
    avgRate = ratesSum / moviesIn.length;
    return Number(avgRate.toFixed(2));
}
//console.log(fromJasmine[2]);
console.log(ratesAverage(fromJasmine3));

// Iteration 4: Drama movies - Get the average of Drama Movies
let fromJasmine4 = [
    { genre: ['Drama'], rate: 8 },
    { genre: ['Romance'], rate: 9 },
    { genre: ['Drama'], rate: 7 }
];

function dramaMoviesRate(moviesIn) {
    let dramaAvgRate = 0;
    if (moviesIn.length === 0) {
        return avgRate;
    }
    onlyDrama = moviesIn.filter(function (movie) {
        if (movie.genre.indexOf('Drama') >= 0) {
            return movie;
        }
    });
    dramaAvgRate = ratesAverage(onlyDrama);
    return dramaAvgRate;
}
console.log(dramaMoviesRate(fromJasmine4));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let fromJasmine5 = [
    { title: 'abc', year: 2002 },
    { title: 'bac', year: 1982 },
    { title: 'aab', year: 1982 }
];

function orderByYear(moviesIn) {
    copyOfmoviesIn = [...moviesIn];

    function compareTitle(a, b) {
        const titleA = a.title;
        const titleB = b.title;

        let comparison = 0;
        if (titleA > titleB) {
            comparison = 1;
        } else if (titleA < titleB) {
            comparison = -1;
        }
        return comparison;
    }
    copyOfmoviesIn.sort(compareTitle);

    function compareYear(a, b) {
        const yearA = a.year;
        const yearB = b.year;

        let comparison = 0;
        if (yearA > yearB) {
            comparison = 1;
        } else if (yearA < yearB) {
            comparison = -1;
        }
        return comparison;
    }
    copyOfmoviesIn.sort(compareYear);

    return copyOfmoviesIn;
}

console.log(orderByYear(fromJasmine5));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesIn) {
    copyOfmoviesIn = [...moviesIn];

    function compareTitle(a, b) {
        const titleA = a.title;
        const titleB = b.title;

        let comparison = 0;
        if (titleA > titleB) {
            comparison = 1;
        } else if (titleA < titleB) {
            comparison = -1;
        }
        return comparison;
    }
    copyOfmoviesIn.sort(compareTitle);

    let onlyTitles = copyOfmoviesIn.map(movie => movie.title);

    let only20Titles = onlyTitles.slice(0, 20);

    return only20Titles;
}

console.log(orderAlphabetically(fromJasmine5));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const testMov = [{
    "title": "Amores perros",
    "year": 2000,
    "director": "Alejandro González Iñárritu",
    "duration": "2h 34min",
    "genre": [
        "Drama",
        "Thriller"
    ],
    "rate": 8.1
},
{
    "title": "The Truman Show",
    "year": 1990,
    "director": "Peter Weir",
    "duration": "1h 43min",
    "genre": [
        "Comedy",
        "Drama",
        "Sci-Fi"
    ],
    "rate": 8.1
},
{
    "title": "Hachi: A Dog\"s Tale",
    "year": 1983,
    "director": "Lasse Hallström",
    "duration": "1h 33min",
    "genre": [
        "Drama",
        "Family"
    ],
    "rate": 8.1
}];

const movieTry1 = [{ duration: '2h' }];

const turnHoursToMinutes = function (moviesIn) {
    let moviesDeepCopy = JSON.parse(JSON.stringify(moviesIn));
    let hours = 0;
    let minutes = 0;
    let durationMin = 0;
    moviesDeepCopy = moviesDeepCopy.map(movie => {
        let durationOrig = movie.duration;
        minutes = durationOrig.split('min');
        if (minutes.length < 2 && minutes[0].indexOf('h') >= 0) {
            hours = minutes[0].split('h');
            durationMin = +hours[0] * 60;
        } else if (minutes[1] === '' && minutes[0].indexOf('h') === -1) {
            durationMin = +minutes[0];
        } else {
            hours = minutes[0].split('h ');
            durationMin = (+hours[0] * 60) + +hours[1];
        }
        movie.duration = durationMin;
        return movie;
    });
    return moviesDeepCopy;
}

console.log(turnHoursToMinutes(movieTry1));
let string = "2h 54min";
let test1 = string.split('min');
//let test2 = test1[1].split('min');
console.log(test1);
//console.log(test2);


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = function (moviesIn) {
    let moviesDeepCopy = JSON.parse(JSON.stringify(moviesIn));

    let onlyYearAndAvg = moviesDeepCopy.map(movie => {
        return {
            year: movie.year,
            rate: movie.rate
        }
    })

    let sortedByYear = onlyYearAndAvg.sort((movie1, movie2) => movie1.year - movie2.year);

    let arrayYearSumRateQuantity = [];

    return sortedByYear;
}

console.log(bestYearAvg(testMov));