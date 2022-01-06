const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  newArr = array.map((obj) => {
    return obj.director;
  });
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  newArr = array.filter((obj) => {
    return (
      obj.director === 'Steven Spielberg' && obj.genre.indexOf('Drama') >= 0
    );
  });
  return newArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let newArr = [];
  array.forEach((element) => {
    if (element.score) {
      newArr.push(element);
    }
  });
  return parseFloat(
    (newArr.reduce((a, b) => a + b.score, 0) / array.length).toFixed(2)
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let newArr = array.filter((element) => element.genre.indexOf('Drama') >= 0);
  if (newArr.length === 0) {
    return 0;
  }
  return parseFloat(
    (newArr.reduce((a, b) => a + b.score, 0) / newArr.length).toFixed(2)
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  if (array.length === 0) {
    return null;
  }
  let newArr = array.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      if (a.title === b.title) return 0;
    }
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let newArr = array.map((element) => element.title);
  newArr.sort();
  finalArr = newArr.slice(0, 20);
  return finalArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let newArr = array.map((element) => {
    return Object.assign({}, element);
  });

  newArr.forEach((element) => {
    if (element.duration.includes('m')) {
      element.duration =
        parseInt(element.duration.slice(0, element.duration.indexOf('h'))) *
          60 +
        parseInt(
          element.duration.slice(
            element.duration.indexOf('h') + 1,
            element.duration.indexOf('m')
          )
        );
    } else {
      element.duration =
        parseInt(element.duration.slice(0, element.duration.indexOf('h'))) * 60;
    }
  });
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {
  if (array.length === 0) return null;

  //create an array of objects with unique years
  let yearArray = [];
  array.forEach((element) => {
    if (!yearArray.includes(element.year)) {
      yearArray.push(element.year);
    }
  });

  //create array of objects for every year
  let yearObjArr = yearArray.map((element) => {
    return {
      year: element,
      score: 0,
      numberOfMovies: 0
    };
  });

  //add ratings to each year
  yearObjArr.forEach((element) => {
    for (const iterator of array) {
      if (iterator.year === element.year) {
        element.score = element.score + iterator.score;
        element.numberOfMovies++;
      }
    }
  });

  //calculate average
  yearObjArr.forEach((element) => {
    element.averageScore = parseFloat(
      (element.score / element.numberOfMovies).toFixed(1)
    );
  });

  const rate = Math.max(...yearObjArr.map((element) => element.averageScore)); //finds highest average
  finalistArray = [];

  //create array of objs who have that highest average
  yearObjArr.forEach((element) => {
    if (element.averageScore === rate) {
      finalistArray.push(element);
    }
  });

  const year = Math.min(...finalistArray.map((element) => element.year)); //find year of oldest movie from array of highest rated

  return `The best year was ${year} with an average score of ${rate}`;
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
