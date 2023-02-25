// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => movie.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergDramas = moviesArray.filter((movie) => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return stevenSpielbergDramas.length;
  }
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
{ const numMovies = moviesArray.length;

  const ratedMovies = moviesArray.filter(movie => typeof movie.score === 'number');

  const numRatedMovies = ratedMovies.length;

  if (numRatedMovies === 0) {
    return 0;
  }

  const sumScores = ratedMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);

  const averageScore = Number((sumScores / numMovies).toFixed(2));
  return averageScore;
}
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const numMovies = moviesArray.length;

  if (numMovies === 0) {
    return 0;
  }

  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  const numDramaMovies = dramaMovies.length;

  if (numDramaMovies === 0) {
    return 0;
  }

  const sumScores = dramaMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);

  const averageScore = Number((sumScores / numDramaMovies).toFixed(2));

  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      // If the movies have the same year, sort by title
      return a.title.localeCompare(b.title);
    } else {
      // Otherwise, sort by year
      return a.year - b.year;
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const top20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  return top20Titles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {}