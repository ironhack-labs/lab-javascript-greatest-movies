const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((el) => {
    return el.director;
  });

  const filteredDirectors = allDirectors.filter((el, i, array) => {
    if (i === allDirectors.indexOf(el)) {
      return true;
    } else {
      false;
    }
  });

  return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let movieCount = movies.filter((el) => {
    return el.director === 'Steven Spielberg' && el.genre.includes('Drama');
  });

  // let onlyDramas = movieCount.filter((el) => {
  //   return el.genre.includes('Drama');
  // });

  return movieCount.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // return movies.reduce((acc, movie) => {
  //   acc += movie.score
  //   return acc
  // }, 0); <- TA Example, better

  if (movies.length === 0) return 0;

  const averageScore = movies.reduce((acc, curr) => {
    return curr.score ? acc + curr.score : acc;
  }, 0);

  let averageScoreSummed = averageScore / movies.length;

  return Number(averageScoreSummed.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let counter = 0;
  const dramaScore = movies.reduce((acc, curr) => {
    if (curr.genre.includes('Drama')) {
      acc += curr.score;
      counter++;
    }

    return acc;
  }, 0);

  if (counter === 0) return 0;

  return Number((dramaScore / counter).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortedAsc = myArrayOfObjects.sort((a, b) => {
    let dif = a.year - b.year;
    // 1995 - 1987 = 8
    // a - b will sort in ascending just like a is before b
    // b - a would be backwards "think z -> a" a being last.

    if (dif !== 0) return dif;
    // if 8 is not equal to 0 we short circuit
    // and return "positive" ie: sort b before a

    // If we get to here, it means they're the same
    // and we need another sorting check.

    // String length and alphabet order seems to be hit by > or <.
    // Aalvin is less than Calvin, which means Aalvin comes first.

    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  return test;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newMovies = [...movies];

  newMovies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      0;
    }
  });

  let firstTwenty = newMovies
    .map((element) => {
      return element.title;
    })
    .slice(0, 20);

  return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const refactorTime = movies.map((el) => {
    let originalHour = el.duration.split(' ');
    let hourAsmins = originalHour[0][0] * 60; //good
    let minsAsNums = 0;

    if (originalHour[1]) {
      minsAsNums = originalHour[1].replace('min', '');
    }

    let finalTime = Number(hourAsmins) + Number(minsAsNums);
    return {
      ...el,
      duration: finalTime
    };
  });

  return refactorTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies === null || movies.length === 0) return null;

  let finalCalculation = {};
  let numberToDivideBy = {};

  movies.forEach((el) => {
    if (el.year in finalCalculation) {
      finalCalculation[el.year] += el.score;
      numberToDivideBy[el.year]++;
    } else {
      finalCalculation[el.year] = el.score;
      numberToDivideBy[el.year] = 1;
    }
  });

  for (let year in finalCalculation) {
    finalCalculation[year] = finalCalculation[year] / numberToDivideBy[year];
  }

  let sortAllYears = Object.entries(finalCalculation).sort((a, b) => {
    return b[1] - a[1];
  });

  return `The best year was ${sortAllYears[0][0]} with an average score of ${sortAllYears[0][1]}`;
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
