// Iteration 1: All directors? - Get the array of all directors.

// const movies = require('./data');

// let movies = [
//     {
//       "title": "The Shawshank Redemption",
//       "year": 1994,
//       "director": "Frank Darabont",
//       "duration": "2h 22min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9.3
//     },
//     {
//       "title": "The Godfather",
//       "year": 1972,
//       "director": "Francis Ford Coppola",
//       "duration": "2h 55min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9.2
//     },
//     {
//       "title": "The Godfather: Part II",
//       "year": 1974,
//       "director": "Francis Ford Coppola",
//       "duration": "3h 22min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9
//     }
// ];

function getAllDirectors(arr) {
    let directors = arr.map(element => element.director);
    return directors;
}

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsWithoutDuplicates(arr) {
    const newArray = [];
    arr.forEach(element => {
        if (!newArray.includes(element.director)) {
            newArray.push(element.director);
        }
    });
    return newArray;
}

getAllDirectorsWithoutDuplicates(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let filmStev = arr.filter(element => element.genre.includes("Drama") && element.director === "Steven Spielberg");
    return filmStev.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let averageScore = arr.reduce((accumulator, current) => {
        if (!current.rate) {
            current.rate = 0;
        }
        return accumulator + current.rate;
    }, 0);
    if (arr.length === 0) {
        return 0;
    } else {
        return parseFloat((averageScore / arr.length).toFixed(2));
    }
}

ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let filmDrama = arr.filter(element => element.genre.includes("Drama"));
    let averageScoreDrama = filmDrama.reduce((accumulator, current) => {
        if (!current.rate) {
            current.rate = 0;
        }
        return accumulator + current.rate;
    }, 0);
    if (filmDrama.length === 0) {
        return 0;
    } else {
        return parseFloat((averageScoreDrama / filmDrama.length).toFixed(2));
    }
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    newArray = arr.slice();
    newArray.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        return a.title.localeCompare(b.title);

    });
    return newArray;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const movieTitles = arr.map(movie => movie.title);
    const movieTitlesOrdered = movieTitles.sort((a, b) => a.localeCompare(b));
    return movieTitlesOrdered.slice(0, 20);
    // newArray.sort((a, b) => a.localeCompare(b))

    // newArray.sort((a, b) => a.title.localeCompare(b.title))
}

orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const newMoviesArray = JSON.parse(JSON.stringify(movies));
    const moviesDuration = newMoviesArray.map(movie => movie.duration);
    let arrayTimeInMin = [];
    let timeInHour = 0;
    let positionH = 0;
    let timeinMin = 0;
    let totalDuration = 0;
    // return moviesDuration;
    for (let i = 0; i < moviesDuration.length; i++) {
        for (let j = 0; j < moviesDuration[i].length; j++) {
            if (moviesDuration[i][j] === "h") {
                timeInHour = +moviesDuration[i].slice(0, j);
                positionH = j + 2;
            }
            // arrayTimeInMin.push(timeInHour);
            if (positionH > moviesDuration.length) {
                totalDuration = timeInHour * 60;
                newMoviesArray[i].duration = totalDuration;
            } else {
                if (moviesDuration[i][j] === "m") {
                    timeinMin = +moviesDuration[i].slice(positionH, j);
                }
            }
        }
        totalDuration = timeInHour * 60 + timeinMin;
        // arrayTimeInMin.push(totalDuration);
        newMoviesArray[i].duration = totalDuration;
    }
    return newMoviesArray;
}

turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
