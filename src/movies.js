// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = [];
  moviesArray.map((movie) => {
    if (!directorsArray.includes(movie.director)) directorsArray.push(movie.director);
  });
  return directorsArray;
}
// Not sure if this is the best possible way, but I couldn´t make it work without declaring the directorsArray first

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  // const everyScore = [];
  // moviesArray.map((movie) => {
  //   if (movie.score) everyScore.push(movie.score);
  // });
  // return !moviesArray.length ? 0 : reduced(everyScore, moviesArray.length, 100);
  // Better:
  const onlyScores = moviesArray.map((movie) => {
    if (movie.score) return movie.score;
    else return 0;
  });
  return !onlyScores.length ? 0 : reduced(onlyScores, moviesArray.length, 100);
}

function reduced(input, originalInputLength, x) {
  return Math.round((input.reduce((a, b) => a + b) / originalInputLength) * x) / x;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramasArray = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(dramasArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.map((elem) => elem).sort((a, b) => a.year - b.year || (a.title - b.title ? 1 : -1));
  // return moviesArray.map((elem) => elem).sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  // return [...moviesArray].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((a) => a.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// "3h 27min", "2h 1min" or "2h" - thinking about a more generic version ala "find "h"/"min", if index-2 of "h"/"min" is " ", then index-1 is the h/min-value... and so on...
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => {
    if (movie.duration.length === 8) {
      movie.duration = parseInt(movie.duration[0]) * 60 + parseInt(movie.duration[3] + movie.duration[4]);
    } else if (movie.duration.length === 7) {
      movie.duration = parseInt(movie.duration[0]) * 60 + parseInt(movie.duration[3]);
    } else if (movie.duration.length === 2) {
      movie.duration = parseInt(movie.duration[0]) * 60;
    }
    return movie;
  });
  return newMoviesArray;
}
// That was really fun :)

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// Idea how to do it: Create new object with year: 2007, scores [8.2, 8.4, 7.9,],
// than reduce the score arrays and sort. then use [0] for result

function bestYearAvg(arr) {
  const firstStep = arr.map((a) => {
    return { year: a.year, score: [a.score] };
  });

  firstStep.reduce((acc, val) => {
    if (acc[val.year]) {
      acc[val.year][0].push(val.score[0]);
    } else {
      acc[val.year] = [val.score];
    }
    return acc;
  }, {});

  const lastStep = firstStep.map((a) => {
    return { year: a.year, score: reduced(a.score, a.score.length, 10) };
  });

  const final = lastStep.sort((a, b) => b.score - a.score || a.year - b.year);
  return !arr.length ? null : `The best year was ${final[0].year} with an average score of ${final[0].score}`;
}

// I assume there is a shorter way to do this instead of map-reduce-map-sort, but for now I´m happy with my result.
// That really took me some time... But I learned a lot about .reduce :)
