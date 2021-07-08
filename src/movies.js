// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const newArray = movies.map(movie => movie.director);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let moviesBySpielberg = movies.filter(
    movie => movie.director === 'Steven Spielberg'
  );
  let dramaMoviesBySpielberg = moviesBySpielberg.filter(movie =>
    movie.genre.includes('Drama')
  );
  return dramaMoviesBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let movieScores = [];
  movies.forEach(movie => movieScores.push(movie.score));
  let moviesScores = movieScores.reduce(function(accumulator, currentValue) {
    if(currentValue === undefined) {
      return accumulator + 0;
    } else {
      return accumulator + currentValue;
    }
  });
  let averageScore = moviesScores / movies.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  let movieScores = [];
  dramaMovies.forEach(movie => movieScores.push(movie.score));

  if(dramaMovies.length == 0) {
    return 0;
  }

  let moviesScores = movieScores.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  let averageScore = moviesScores / movies.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  var oderedMovies = JSON.parse(JSON.stringify(movies));
  return oderedMovies.sort((movie1, movie2) => movie1.year < movie2.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  moviesSortet = movies.slice(0, movies.length);
  moviesSortet.sort(function(movie1, movie2) {
    var textA = movie1.title.toUpperCase();
    var textB = movie2.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  let onlyTwenty = moviesSortet.slice(0, 20);

  let movieTitles = [];
  onlyTwenty.forEach(element => {
    movieTitles.push(element.title);
  });
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
