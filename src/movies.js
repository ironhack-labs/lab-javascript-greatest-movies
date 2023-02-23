
function getAllDirectors(moviesArray) {
    let newDirectors = moviesArray.map((movie) => movie.director)
    return newDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let moviesSpielberg = [];

  if (moviesArray.length === 0) {
    return 0;
  }

  let GenreMovie = moviesArray.filter(function(movie){
    if (movie.genre.includes("Drama")&& movie.director == "Steven Spielberg") {
      return true;
    };
  })
  return GenreMovie.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const bestScore = moviesArray.reduce(function (acc, val) {
        if (val.score === undefined || val.score === "") {
            return acc;
        }
        return (acc + val.score);
    }, 0)
    return Number((bestScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
