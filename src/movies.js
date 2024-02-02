// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  if (moviesArray.length === 0) {
    return;
  }

  const directors = moviesArray.map((movie) => {
    return movie.director;
  });

  let uniqueDirectos = [];
  directors.forEach((director) => {
    if (!uniqueDirectos.includes(director)) {
      uniqueDirectos.push(director);
    }
  });

  //console.log(uniqueDirectos);
  return uniqueDirectos;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const stevenDramaMovies = stevenMovies.filter((movie) =>
    movie.genre.includes("Drama")
  );

  //console.log(stevenDramaMovies.length);
  return stevenDramaMovies.length;
}

/* const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },] */
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (!moviesArray[i].score || moviesArray[i].score == 0) {
      continue;
    } else {
      totalScore += moviesArray[i].score;
    }
  }

  let averageScore = totalScore / moviesArray.length;
  //console.log(Math.round(averageScore * 100) / 100);
  return Math.round(averageScore * 100) / 100;

}

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
