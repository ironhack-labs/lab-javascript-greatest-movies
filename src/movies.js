// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  return array.map((newArray) => newArray.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(
    (movies) =>
      movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'),
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  return (
    Math.round(
      (movies.reduce((soma, movies) => soma + movies.score, 0) /
        movies.length) *
        100,
    ) / 100
  );
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
// 1st I want an array with all Drama movies; then I want an array to contain the AverageScore to divide by Dramamovies.length ; then I want to make the last calculation for decimals.
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movies) => movies.genre.includes('Drama'));
  if (dramaMovies.length === 0) return 0;
  const averageScore =
    dramaMovies.reduce((soma, dramaMovies) => soma + dramaMovies.score, 0) /
    dramaMovies.length;
  return Math.round(averageScore * 100) / 100;
}

// DramaMoviesAverage = 8.32

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  return moviesCopy.sort((elem1, elem2) => {
    if (elem1.year === elem2.year) {
      return elem1.title.localeCompare(elem2.title);
    }
    return elem1.year - elem2.year;
  });
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Why this doesn't work?
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];
  const moviesCopyTitles = [moviesCopy.map((moviesCopy) => moviesCopy.title)];
  const first20Titles = [];

  moviesCopy.sort((title1, title2) => {
    return title1.title.localeCompare(title2.title);
  });
  for (let i = 0; i < moviesCopy.length && i < 20; i++) {
    first20Titles.push(moviesCopy[i].title);
  }
  return first20Titles;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  const moviesArrayCopy = [...moviesArray];
  moviesArrayCopy.map((movie) => movie.duration);

  /*if (duration.includes('h')) {
    const hours = parseInt(duration.split('h')[0]);
    const totalInMinutes += (hours * 60);
  }
  if (duration.includes('min')) {
    const minutes = parseInt(duration.split('min')[0]);
    const totalInMinutes = + minutes;
  }*/
}

console.log(turnHoursToMinutes(movies));
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
