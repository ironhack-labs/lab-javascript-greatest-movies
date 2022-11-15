// const path = require('path');
// const movies = require(path.join(__dirname, 'data.js'));

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  return moviesArray.map((elem) => elem.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((elem, index) => {
    return elem.director === 'Steven Spielberg' && elem.genre.includes('Drama');
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  return (
    Math.round(
      (moviesArray.reduce((acumulator, elem) => {
        if (!elem.score) elem.score = 0;
        return acumulator + elem.score;
      }, 0) /
        moviesArray.length) *
        100
    ) / 100
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0;
  let count = 0;
  let dramaScore =
    Math.round(
      (moviesArray.reduce((prev, current) => {
        if (!current.score) current.score = 0;
        if (!current.genre.includes('Drama')) {
          current.score = 0;
        } else {
          count++;
        }

        return prev + current.score;
      }, 0) /
        count) *
        100
    ) / 100;

  if (!count) return 0;

  return dramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = [...moviesArray];
  newArray = newArray.sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });

  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArray = [...moviesArray];
  newArray = newArray
    .map(function (movie) {
      return movie.title;
    })
    .sort()
    .slice(0, 20);

  return newArray;
}

// console.log(turnHoursToMinutes(movies));
// const returnValue = turnHoursToMinutes(movies);
// console.log(returnValue);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArray = [...moviesArray];

  newArray = newArray.map((elem) => {
    let movieDurationInMinutes = 0;
    let duration = ['0min'];

    if (elem.duration && typeof elem.duration === 'string') {
      duration = elem.duration.split(' ');
    }

    duration.forEach((theTime, index) => {
      let hours = 0;
      let minutes = 0;
      if (theTime.indexOf('h') !== -1)
        hours = Number(theTime.replace('h', '')) * 60;
      if (theTime.indexOf('min') !== -1)
        minutes = Number(theTime.replace('min', ''));
      movieDurationInMinutes += hours + minutes;
    });

    elem.duration = movieDurationInMinutes;

    return elem;
  });

  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  let highRating = 0;
  let highRatingYear = 0;

  moviesArray = moviesArray.reduce((prev, curr) => {
    prev[curr.year] = prev[curr.year] || {};
    prev[curr.year].numOfMovies = prev[curr.year].numOfMovies + 1 || 1;
    prev[curr.year].scoreSum =
      +(prev[curr.year].scoreSum + curr.score).toFixed(2) || curr.score;
    prev[curr.year].avgRating =
      +(prev[curr.year].scoreSum / prev[curr.year].numOfMovies).toFixed(2) ||
      curr.score;
    return prev;
  }, {});

  for (year in moviesArray) {
    if (highRating < moviesArray[year].avgRating) {
      highRating = moviesArray[year].avgRating;
      highRatingYear = year;
    }
  }

  return `The best year was ${highRatingYear} with an average score of ${highRating}`;
}
