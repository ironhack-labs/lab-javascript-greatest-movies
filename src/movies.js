// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return movies.map((value) => value.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filterMovies = movies.filter((films) => films.director === "Steven Spielberg" && films.genre.includes("Drama"))
        return filterMovies.length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
      function scoresAverage(movies) {
        if (movies.length === 0) {
            return 0;
        }
        const moviesScore = movies.reduce((acc, val) => {
            if(val.score){
                return acc + val.score;
            } else {
                return acc
            }
        }, 0)
        return Number((moviesScore / movies.length).toFixed(2));
      }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter((films) => films.genre.includes("Drama"))
    return scoresAverage(dramaMovies);
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const order = movies.splice(0, moviesArray.length)
    return order.sort(function (a, b) {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0;
            }
        } return a.year - b.year
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    function orderAlphabetically(movies) {

    const movieTitles = movies.map(function (movie) {
        return movie.title;
    })
    const alphabeticalOrder = movieTitles.sort().slice(0, 20);
    return alphabeticalOrder
}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
