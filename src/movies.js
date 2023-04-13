
  // Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function(movie) {
        return movie.director;
    });
    return directorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter( movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const movieScore = moviesArray.reduce(function(value1,value2){
        if (value2.score === undefined || value2.score === "") {
            return value1;
        }
        return (value1 + value2.score);
    },0);
    let avgTotal = movieScore/ moviesArray.length
    return Math.round(avgTotal * 100) /100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter(movie => movie.genre.includes("Drama"))
    return scoresAverage (dramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieYear = [...moviesArray]
    return movieYear.sort((a, b) => {
      if (a.year > b.year) return 1
      else if (a.year < b.year) return -1
      else if (a.title > b.title) return 1
      else if (a.title < b.title) return -1
      return 0
    })
    return movieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovie = moviesArray.map(function(movie){
        return movie.title;
    })
    const finalOrderedMovie = orderedMovie.sort().splice(0,20);
    return finalOrderedMovie;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
