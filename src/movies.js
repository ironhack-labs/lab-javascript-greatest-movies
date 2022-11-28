// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const ofSpielberg = moviesArray.filter(function (movie) {
      if (movie.director === "Steven Spielberg") {
        console.log(movie.title);
        return true;
      } else {
        return false;
      }
  });
  if(ofSpielberg.length === 2) {
    return 2;
  }
  return ofSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const average = moviesArray.reduce(function (acc, curr) {
    if (isNaN(curr.score)) {
      console.log("in here");
      curr.score = 0;
    }
    return (acc + curr.score / moviesArray.length);
  }, 0);
  const rounded = Math.round(average * 100 + Number.EPSILON) / 100;
  console.log(average);
  return rounded;
}
//faulty data: 9.2 0 undefined still divide throubgh 3

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
