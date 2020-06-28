// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies => {
    let getDirectors = movies.map(movie => movie.director)
    return getDirectors
    }

console.log(getAllDirectors);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = moviesArr => {
       let filteredDrama = moviesArr.filter(function (movie) { return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg' })
       return filteredDrama.length
};


howManyMovies();

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// const ratesAverage = movies.reduce((accum, currValue) => {
//     return accum + currValue.rate
// }, 0);

// let avgMovies = ratesAverage / movies.length;
// avgMovies = avgMovies.toFixed(2);

function ratesAverage(movies) {
    return movies.length ? Number((movies.reduce(function (acc, movie) {
        return acc + (movie.rate ? movie.rate : 0);
    }, 0) / movies.length).toFixed(2)) : 0;
}

ratesAverage();

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaAveTotal = arr.filter(movies => movies.genre.includes('Drama'));
    if (dramaAveTotal.length > 0) {
        const aveMovies = dramaAveTotal.reduce(function (acc, value) {
            return acc + value.rate / dramaAveTotal.length
        }, 0)
        return Math.round(aveMovies * 100) / 100
    } else {
        return 0
    }
};

dramaMoviesRate(movies);



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const yearOrdered = [...arr];
    yearOrdered.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        } if (a.year === b.year) {
            return a.title < b.title ? -1 : 1;
        }
    });
    return yearOrdered;
}

orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(arr) {
//     const alphaOrder = [...arr];
//     alphaOrder.sort(function (a, b) {
//         if (a.title < b.title) {
//             return -1;
//         } if (a.title > b.title) {
//             return 1;
//         } if (a.title === b.title) {
//             return a.title < b.title ? -1 : 1;
//         }
//     });
//     alphaOrder.splice(20, 230);
//     return alphaOrder;
// }
function orderAlphabetically(arr) { 
    let alphaOrder = [...arr];
    return alphaOrder.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map(obj => obj.title);
}
 orderAlphabetically(movies);



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    let minutesFinal = JSON.parse(JSON.stringify(arr));
    //let minutesFinal = [...arr];
    minutesFinal.map(obj => {
        let timeOne = obj.duration.split(" ")
        let hours = minutesTwo = parseInt(timeOne[0])
        let minutes = parseInt(timeOne[1])
        if (timeOne.length == 1 && timeOne[0].split("").includes("h")) {
            obj.duration = hours * 60;
        } else if (timeOne.length == 1 && timeOne[0].split("").includes("m")) {
            obj.duration = minutesTwo;
        } else {
            obj.duration = hours * 60 + minutes;
        }
        return obj
    })
    return minutesFinal;
}

turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
    let bestYear = JSON.parse(JSON.stringify(arr));
    if (bestYear.length > 0) {
        let theYears = {};
        bestYear.forEach((elem) => {
            if (!(elem.year in theYears)) {
                theYears[elem.year] = []
                theYears[elem.year].push(elem);
            } else {
                theYears[elem.year].push(elem);
            }
        });
        let highestRateAve = 0;
        let highestRatedYear = 0;
        for (let year in theYears) {
            let rateAverage = ratesAverage(theYears[year])
            console.log(year, rateAverage)
            if (rateAverage > highestRateAve) {
                highestRatedYear = year;
                highestRateAve = rateAverage;
            }

        }
        return `The best year was ${highestRatedYear} with an average rate of ${highestRateAve}`;
    }
    else {
        return null;
    }
}

bestYearAvg(movies);