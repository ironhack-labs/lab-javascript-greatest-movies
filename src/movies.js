// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
  
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielberg = movies.filter(movie => (
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ));

  return spielberg.length;
}


function scoresAverage(movies) {
     if (movies.length === 0) {
    return 0; // 
  }

  const totalScore = movies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScore / movies.length;

  return parseFloat(averageScore.toFixed(2)); 

}

// Iteration 4: Drama movies - Get the average of Drama Movies

  function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScore / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
     const sortedMovies = [...movies].sort((a, b) => a.year - b.year);

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
      const copied = [...movies];
  const sortedMovies = copied.sort((a, b) => a.title.localeCompare(b.title));
  const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}
