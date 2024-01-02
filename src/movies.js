// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

      const newMovies = moviesArray.map(movie => movie.director);
      return newMovies;
  }

   console.log(newMovies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

        if (moviesArray.length === 0) {
            return 0;
        }
    const spielbergMovies = moviesArray.filter (movies => movies.director.includes ('Steven Spielberg') && movies.genre.includes ('Drama') === true);
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScores = moviesArray.reduce((acum, element) => {
        if(element.score) {
            return acum + element.score;
        } else {
            return acum;
        }
    }, 0)
    return +(totalScores/moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDramaMovies  = moviesArray.filter(movies => movies.genre.includes ('Drama'));

        if (allDramaMovies.length === 0) {
          return 0;
     }

    const sum = allDramaMovies.reduce((acum,element) => {
        return acum + element.score;
    }, 0)
        return +(sum / allDramaMovies.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
