// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((theDirector) => theDirector.director);
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielberg = moviesArray.filter(
    (director) =>
      director.director == "Steven Spielberg" &&
      director.genre.includes("Drama")
  );
  return stevenSpielberg.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const avgScore = moviesArray.reduce((acc, curr) => {
    if (!curr.score) return acc;
    return acc + curr.score;
  }, 0);

  const averageRate = (avgScore / moviesArray.length).toFixed(2);
  // console.log(avgScore);
  return Math.round(averageRate * 100) / 100;
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) return 0;

  const dramaScore = dramaMovies.reduce((acc, val) => acc + val.score, 0);

  const dramaMovieAvg = dramaScore / dramaMovies.length;
  return Math.round(dramaMovieAvg * 100) / 100;
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const ascOrder = moviesArray.slice().sort((a, b) => {
    if (b.year !== a.year) {
      return a.year - b.year;
    }
    if (a.title < b.title) return -1; // Acc. to .sort(): a.title is smaller than b.title which returns -1 then a should come before b
    if (a.title > b.title) return 1; //a title is bigger than b.title which returns 1 then b should come before a
    return 0; //equal and original order maintained
  });
  return ascOrder;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphaOrder = moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  return alphaOrder;
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((movie) => ({ ...movie }));
  newArray.forEach((movie) => {
    const duration = movie.duration.split(" ");
    const hours = parseInt(duration[0]) || 0;
    const minutes = parseInt(duration[1]) || 0;

    movie.duration = hours * 60 + minutes;
  });

  return newArray;
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const averageScoresByYear = {};
  const numberOfMoviesByYear = {};

  moviesArray.forEach(movie => {
    const releaseYear = movie.year;
    if (!averageScoresByYear[releaseYear]) {
      averageScoresByYear[releaseYear] = movie.score;
      numberOfMoviesByYear[releaseYear] = 1;
    } else {
      averageScoresByYear[releaseYear] += movie.score;
      numberOfMoviesByYear[releaseYear]++;
    }
  });
  console.log(averageScoresByYear)
  console.log(numberOfMoviesByYear)

  for (const year in averageScoresByYear) {
    averageScoresByYear[year] /= numberOfMoviesByYear[year];
  }

  console.log(averageScoresByYear)

  let bestYear = null;
  let bestAvg = 0;

  for (const year in averageScoresByYear) {
    if (averageScoresByYear[year] > bestAvg || (averageScoresByYear[year] === bestAvg && year < bestYear)) {
      bestYear = year;
      bestAvg = averageScoresByYear[year];
    }
    
  }
  console.log(bestYear)
  console.log(bestAvg)

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
