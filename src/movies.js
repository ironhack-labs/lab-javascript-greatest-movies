// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movies => movies.genre.includes('Drama') && movies.director === 'Steven Spielberg').length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    else {
        const validMovies = [...moviesArray];
        const average = validMovies.reduce((sum, movie) => sum + movie.score, 0) / validMovies.length;
        return Number(average.toFixed(2));
      }
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) return 0;
    else if (!moviesArray.some(movie => movie.genre.includes('Drama'))) {
        return 0;
    }
    else {
        const validMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
        const average = validMovies.map(movie => movie.score).reduce((a, b) => a + b, 0) / validMovies.length;
        return Number(average.toFixed(2));
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedArray = moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
      return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedArray = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    const movieTitles = sortedArray.map(movies => movies.title);

    if (movieTitles.length > 20) {
    movieTitles.splice(20);
    }
    return movieTitles;;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
