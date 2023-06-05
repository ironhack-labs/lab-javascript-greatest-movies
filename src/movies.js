// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let director = moviesArray.map((item) => item.director);
  console.log(director);
  return director;

  let directorsClean = [];
  directorsClean.forEach((c) => {
    if (!directorsClean.includes(c)) {
      directorsClean.push(c);
    }
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {
// let howManySpielbergs=moviesArray.filter(index=>
// index.director.includes('Steven Spielberg'));
// }

function howManyMovies(moviesArray) {
  let howManySpielbergs = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return howManySpielbergs.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    let averageScoreArray = moviesArray
      .filter((number) => number.score)
      .map((number) => number.score)
      .reduce((acc, currentValue) => acc + currentValue);
    return Number((averageScoreArray / moviesArray.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let averageDrama = moviesArray
    .filter((movie) => movie.genre.includes("Drama"))
    .map((movie) => movie.score);
  if (averageDrama.length === 0) {
    return 0;
  } else {
    console.log(averageDrama);
    return Number(
      (
        averageDrama.reduce((acc, currentVal) => acc + currentVal) /
        averageDrama.length
      ).toFixed(2)
    );
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderByYearArray = moviesArray
    .map((movie) => movie)
    .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  console.log(orderByYearArray);
  return orderByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let orderAlphaArray = moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  return orderAlphaArray;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
