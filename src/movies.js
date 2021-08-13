// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const directorsArray = moviesArr.map((movie) => movie.director);
  const uniqueDirectorsArr = directorsArray.filter(
    (director, index) => directorsArray.indexOf(director) === index
  );
  return uniqueDirectorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  return moviesArr.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (moviesArr.length === 0) return 0;
  else if (moviesArr.length === 1) return moviesArr[0].score;

  const scoresArray = moviesArr.map((movie) => (movie.score ? movie.score : 0));
  const result =
    scoresArray.reduce((accumulator, score) => accumulator + score) /
    scoresArray.length;

  return Number.parseFloat(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMoviesArray = moviesArr.filter((movie) =>
    movie.genre.includes('Drama')
  );

  return scoresAverage(dramaMoviesArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  return moviesArr
    .map((movie) => movie)
    .sort((a, b) => {
      if (a.year - b.year === 0) {
        return a.title < b.title ? -1 : 1;
      }
      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  return moviesArr
    .map((value) => value.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  const arrayCopy = JSON.parse(JSON.stringify(moviesArr));

  return arrayCopy.map((movie) => {
    if (typeof movie.duration !== 'number') { // '2h 55min'
      let hours = movie.duration.match(/[^h]*/);
      let mins = movie.duration.match(/(?<=\s).*(?=min)/);

      if (hours) hours = parseInt(hours);
      if (mins) mins = parseInt(mins);

      if (hours !== 0) movie.duration = hours * 60 + (mins === null ? 0 : mins);
      else movie.duration = hours + (mins === null ? 0 : mins);

      return movie;
    }

    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {
  if (moviesArr.length == 0) return null;
  const yearsArr = moviesArr.map((movie) => [movie.year, movie.score]);

  const arrayAverages = [];

  for (let i = 0; i < yearsArr.length; i++) {
    const yearI = yearsArr[i];
    let sum = 0;
    let counter = 0;
    for (let j = 0; j < yearsArr.length; j++) {
      const yearJ = yearsArr[j];

      if (yearJ[0] === yearI[0]) {
        sum += yearJ[1];
        counter++;
      }
    }
    arrayAverages.push([yearI[0], sum / counter]);
  }

  const bestYearAvg = Array.from(new Set(arrayAverages.map(JSON.stringify)))
    .map(JSON.parse)
    .sort((a, b) => b[1] - a[1]);

  let finalBestYear;

  if (bestYearAvg.length !== 1 && bestYearAvg[0][1] === bestYearAvg[1][1])
    finalBestYear = bestYearAvg[1];
  else if (bestYearAvg.length === 1) finalBestYear = bestYearAvg[0];
  else finalBestYear = bestYearAvg[0];

  return `The best year was ${finalBestYear[0]} with an average score of ${finalBestYear[1]}`;

  //
}

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
    bestYearAvg
  };
}
