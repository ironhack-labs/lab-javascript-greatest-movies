// The `movies` array from the file `src/data.js`.
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function getAllDirectors(array) {
    const directorsNames = array.director;
    return directorsNames;
  });

  return directors;
}

// Iteration 2
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(function howManyMovies(arr) {
    return arr.director === 'Steven Spielberg';
  });

  const spielbergDramas = spielbergMovies.filter(function howManyDramas(
    filteredArr
  ) {
    return filteredArr.genre.includes('Drama');
  });

  return spielbergDramas.length;
}

//Iteration 3
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const averageScore = movies.reduce(function scoresAverage(
    accumulator,
    currentValue
  ) {
    if (!currentValue.score) {
      return accumulator;
    }
    console.log('accumulated:', accumulator);
    console.log('title :', currentValue.title, currentValue.score);
    console.log('WILL RETURN :', currentValue.score + accumulator);

    let sumMovies = accumulator + currentValue.score;
    return sumMovies;
  },
  0);
  let avgScore = averageScore / movies.length;
  let avgScoreTwoDecimals = avgScore.toFixed(2);

  return Number(avgScoreTwoDecimals);
}

// Iteration 4
function dramaMoviesScore(movies) {
  const dramas = movies.filter(function dramaMoviesScore(filteredArr) {
    return filteredArr.genre.includes('Drama');
  });

  if (!dramas.length) {
    return 0;
  }

  console.log(dramas);

  const dramaMovieScoreAvg = dramas.reduce(function dramaScoresAverage(
    accumulator,
    currentValue
  ) {
    if (!currentValue.score) {
      return accumulator;
    }
    let sumMovies = accumulator + currentValue.score;
    return sumMovies;
  },
  0);

  console.log(dramaMovieScoreAvg);

  let dramaAvgScore = dramaMovieScoreAvg / dramas.length;
  let dramaAvgScoreTwoDecimals = dramaAvgScore.toFixed(2);

  return +dramaAvgScoreTwoDecimals;
}

// Iteration 5

function orderByYear(arr) {
  const sortByAbc = arr.slice().sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  const sortByYear = sortByAbc.slice().sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });
  return sortByYear;
}

// Iteration 6
function orderAlphabetically(arr) {
  const sortByAbc = arr.slice().sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return sortByAbc.slice(0, 20).map(function (object) {
    return object.title;
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {
  const hoursNMinutes = movies.map(function (string) {
    return turnHoursToMinutes(string);
  });
  function turnHoursToMinutes(str) {
    let hours = 0;
    //if there are hours
    if (str.indexOf('h') !== -1) {
      hours = parseInt(str.slice(0, str.indexOf('h')));
    }
    let minutes = 0;
    if (str.indexOf('m') !== -1) {
      minutes = parseInt(str.slice(str.indexOf('h') + 1, -1));
    }
    return hours * 60 + minutes;
  }
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg() {}

function bestAvgPerYear(arr) {
  const sortByAbc = arr.slice().sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });
  const sortByYear = sortByAbc.slice().sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });
  return sortByYear;
}

const testLoop = bestAvgPerYear();

for (let i = 0; i < testLoop.length; i++) {
  console.log(i);
}

// The following is required to make unit tests work.
/*Environment setup. Do not modify the below code.*/
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
