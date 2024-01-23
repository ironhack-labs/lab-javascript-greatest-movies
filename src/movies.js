// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = [];
    const directors = moviesArray.map(function(element) {
        if (newArr.includes(element.director)) {
            return false;
        } else {
            newArr.push(element.director);
        }
    })
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(function(element) {
        if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
            return element;
        }
    })
    return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const totalScore = moviesArray.reduce(function(accumulator, curr) {
        if (!curr.score) {
            return accumulator;
        }
        return accumulator + curr.score;
    }, 0)
    let average = totalScore / moviesArray.length;
    round = Math.round(average*100)/100;
    return round;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    for (const movie of moviesArray) {
        if (movie.genre == "Drama") {
            const totalScore = moviesArray.reduce(function(accumulator, curr) {
                if (!curr.score) {
                    return accumulator;
                }
                return accumulator + curr.score;
            }, 0)
            let average = totalScore / moviesArray.length;
            round = Math.round(average*100)/100;
            return round;
        } else if (movie.genre != "Drama") {
            return accumulator;
        } else {
            return 0;
        }
    };
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
