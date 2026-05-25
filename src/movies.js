// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movie) {
    return movie.director;
  });
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  }).length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  var total = moviesArray.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);

  return Number((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  var dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  return scoresAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .slice()
    .sort(function (a, b) {
      return a.title.localeCompare(b.title);
    })
    .map(function (movie) {
      return movie.title;
    })
    .slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  return moviesArray.map(function(movie) {

    var totalMinutes = 0;

    var hours = Number(movie.duration.split("h")[0]);

    totalMinutes += hours * 60;

    console.log(totalMinutes);

    return movie;
  });
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//----