// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/////////////////
function getAllDirectors(arr) {
  return arr.map((movie) => movie.director);
}
// 1.1
// Bonus - Iteration 1.1: Clean the array of directors
function uniqueDirector(arr) {
  var seen = {};
  return arr.filter((item) => {
    console.log(item.director);
    return seen.hasOwnProperty(item.director)
      ? false
      : (seen[item.director] = true);
  });
}
// const directorListCleaned = getAllDirector.filter((director, index => ))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramaSpielbergMovies = arr.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });

  return dramaSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let total = arr.reduce((sum, elem) => {
    if (!elem.score) {
      return sum;
    } else {
      return sum + elem.score;
    }
  }, 0);

  return Number((total / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaSpielbergMovies = arr.filter((movie) => {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  let avg = dramaSpielbergMovies.reduce((acc, movie) => {
    return acc + movie.score / dramaSpielbergMovies.length;
  }, 0);
  return Number(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let arrCloned = JSON.parse(JSON.stringify(movies));

  arrCloned.sort((ante, current) => {
    // console.log(ante.year);
    if (ante.year > current.year) {
      return 1;
    } else if (ante.year < current.year) {
      return -1;
    } else {
      if (ante.title > current.title) {
        return 1;
      } else if (ante.title < current.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return arrCloned;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArray = arr.map((movie) => movie.title);
  newArray.sort((ante, current) => {
    if (ante > current) {
      return 1;
    } else if (ante < current) {
      return -1;
    } else {
      return 0;
    }
  });
  return newArray.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let cloneArr = JSON.parse(JSON.stringify(arr));

  if (cloneArr.length === 0) {
    return [{ duration: 0 }];
  }
  cloneArr.map((item, idx) => {
    let min = 0;
    let duration = item.duration;
    let string = duration.split(' ');
    let hours = string[0].replace('h', '');
    if (string[1]) {
      min = string[1].replace('min', '');
    }
    cloneArr[idx].duration = hours * 60 + +min;
  });
  return cloneArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null;
  }
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
