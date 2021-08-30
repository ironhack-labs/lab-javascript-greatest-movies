// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const arrDir = moviesArr.map(result =>{
    return result.director;
  });
  return arrDir;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const totStevenMovies = moviesArr
  .filter((result) => {
    return result.director === 'Steven Spielberg' && result.genre.includes('Drama') === true;
  })
  return totStevenMovies.length;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 Decimals
function scoresAverage(moviesArr) {
  if (moviesArr == false) {
    return 0;
  }
  // [ 1  , 2,  3]
  const totNumDec = moviesArr.reduce((result, valPos) =>{
    if (valPos.score) {
      return result + valPos.score;
    }else {
      return result;
    }
  }, 0);
  return Math.round((totNumDec / moviesArr.length) * 100) / 100;
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  if (moviesArr == false) {
    return 0;
  }
  let count = 0;
  const totNumDec = moviesArr.reduce((result, valPos) =>{
    // console.log(result);
    if (valPos.genre.includes('Drama') === true) {
      count++;
      return result + valPos.score;
    }else {
      return result;
    }
  }, 0);
  if (count == 0) {
    return 0;
  }else {
    return Math.round((totNumDec / count) * 100) / 100;
  }
}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  if (!moviesArr.length) {
    return 0;
  }
  const segArr = moviesArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return segArr;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const arrOrder = moviesArr
  .map((elemento) => {
    return elemento.title;
  })
  .sort((a, b) => {
    return a.localeCompare(b);
  });
  const arrFinal = arrOrder.slice(0, 20);
  return arrFinal;
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  let testArr = [];
  const arrStrgToArr = moviesArr.map( element => {
  let arrStr = element.duration.split(' ');
  if (arrStr.length == 2) {
    return parseFloat(arrStr[0], 10) * 60 + parseFloat(arrStr[1], 10);
  }else if (arrStr[0].indexOf('min') == -1) {
    return parseFloat(arrStr[0], 10) * 60 ;
  }else {
    return parseFloat(arrStr[0], 10);
  }
  });
  for (let i = 0; i < moviesArr.length; i++) {
    testArr.push(moviesArr);
    testArr[i].duration = arrStrgToArr[i];
  }
  return testArr;
}
turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {
  if (moviesArr == '') {
    return null;
  }else if (moviesArr.length > 2) {
    const arrOrdenar = moviesArr.sort((a, b) => {
      if (a.year == b.year) {
        return b.score - a.score;
      }else {
        return a.year - b.year;
      }
    });
    let arrFinal = [];
    for (let i = 0; i < arrOrdenar.length; i++) {
      // if (arrOrdenar[i].year == arrOrdenar[i+1].year) {
      //   arrFinal[i] = {
      //     year : arrOrdenar[i],
      //     score : function () {
      //       return 
      //     }
      //   }
      // }
    }
    console.log(arrOrdenar);
  }
}

const movies2 = [
  {
    year: 1994,
    score: 9.3
  },
  {
    year: 1972,
    score: 9.2
  },
  {
    year: 1974,
    score: 9
  },
  {
    year: 2008,
    score: 9
  },
  {
    year: 1957,
    score: 8.9
  },
  {
    year: 1993,
    score: 8.9
  },
  {
    year: 1994,
    score: 8.9
  },
  {
    year: 2003,
    score: 8.9
  },
  {
    year: 1966,
    score: 8.9
  },
  {
    year: 1999,
    score: 8.8
  }
]
bestYearAvg(movies2);

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
    bestYearAvg,
  };
}
