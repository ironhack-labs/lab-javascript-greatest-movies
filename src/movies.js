// const movies = require('./data');

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrOfMovies) {
  const allDirectors = arrOfMovies.map(function (element) {
    return element.director;
  });
  console.log('All directors: ', allDirectors);
  return allDirectors;
}

getAllDirectors(movies);

//Bonus - Iteration 1.1: Clean the array of directors
function getAllDirectorsUnified(arrOfMovies) {
  const allDirectors = arrOfMovies.reduce(function (acc, movie) {
    if (!acc.includes(movie.director)) {
      acc.push(movie.director);
    }
    return acc;
  }, []);
  console.log('All directors without dupllicates: ', allDirectors);
  return allDirectors;
}

getAllDirectorsUnified(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrOfMovies) {
  const dramaMoviesSpielberg = arrOfMovies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  console.log('Drama movies by Steven Spielberg: ', dramaMoviesSpielberg);
  return dramaMoviesSpielberg.length;
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrOfMovies) {
  if (arrOfMovies.length !== 0) {
    const totalScore = arrOfMovies.reduce(function (acc, val) {
      if (typeof val.score !== 'number') {
        return acc + 0;
      } else {
        return acc + val.score;
      }
    }, 0);
    const avgScore = totalScore / arrOfMovies.length;
    const avgScoreRounded = avgScore.toFixed(2);
    const avgScoreNum = parseFloat(avgScoreRounded);
    // console.log(
    //   'The total score is: ' + totalScore + ' and is typeOf: ' + typeof totalScore
    // );
    // console.log(
    //   'The average score is: ' +
    //     avgScore +
    //     ' and is typeof: ' +
    //     typeof avgScore
    // );
    // console.log(
    //   'The rounded average score is: ' +
    //     avgScoreRounded +
    //     ' and is typeof: ' +
    //     typeof avgScoreRounded
    // );
    // console.log(
    //   'The average score is: ' +
    //     avgScoreNum +
    //     ' and is typeof: ' +
    //     typeof avgScoreNum
    // );
    return avgScoreNum;
  } else {
    return 0;
  }
}

scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrOfMovies) {
  const dramaMovies = arrOfMovies.filter((movie) =>
    movie.genre.includes('Drama')
  );
  console.log('Iteration 4: ' + dramaMovies);
  return scoresAverage(dramaMovies);
}

dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrOfMovies) {
  const orderedArrByYear = arrOfMovies.slice().sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  console.log('Iteration 5: ' + orderedArrByYear);
  return orderedArrByYear;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrOfMovies) {
  const ordered = arrOfMovies.slice().sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  //return only titles:
  const arrOfTitels = ordered.map((movie) => movie.title);
  return arrOfTitels.slice(0, 20);
}

console.log('First 20 of alphatetical order: ', orderAlphabetically(movies));

console.clear();

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrOfMovies) {
  const newArr = arrOfMovies.reduce(function (acc, val) {
    // get duration info:
    const durationOfCurrVal = val.duration;
    console.log(durationOfCurrVal + ' is a: ' + typeof durationOfCurrVal);
    let hoursInMin = 0;
    let minutesInt = 0;
    // console.log('Duration: ' + durationOfCurrVal);
    if (durationOfCurrVal.includes('h')) {
      // get hours of this duration:
      const hoursOfCurrVal = durationOfCurrVal.slice(0, 1);
      // console.log(
      //   'Hours: ' + hoursOfCurrVal + ' are typeof ' + typeof hoursOfCurrVal
      // );
      // turn string of hours into integer:
      const hoursInt = parseInt(hoursOfCurrVal);
      // console.log('Hours: ' + hoursInt + ' are typeof ' + typeof hoursInt);
      // turn hours into minutes:
      hoursInMin = hoursInt * 60;
    }
    if (durationOfCurrVal.includes('min')) {
      // get minutes of current val:
      const minutesOfCurrVal = durationOfCurrVal.slice(3, -3);
      // console.log(
      //   'Minutes: ' + minutesOfCurrVal + ' are typeof ' + typeof minutesOfCurrVal
      // );
      // turn string of minutes into integer:
      minutesInt = parseInt(minutesOfCurrVal);
      // console.log('Minutes: ' + minutesInt + ' are typeof ' + typeof minutesInt);
    }
    // get total of minutes:
    let newDuration = hoursInMin + minutesInt;
    console.log(
      'New duration: ' +
        newDuration +
        ' min (is typeof: ' +
        typeof newDuration +
        ')'
    );
    // assign newDuration to current val:
    console.log('-----------');
    acc.push(val);
    let indexOfValInAcc = acc.indexOf(val);
    acc[indexOfValInAcc].duration = newDuration;
    return acc;
  }, []);
  console.log(newArr);
  return newArr;
}

turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrOfMovies) {
  //
  // get the years:
  const yearsObj = arrOfMovies.reduce(function (acc, movie) {}, {});

  //
  // sum the scores per year:
  const yearsWithTotalScores = arrOfMovies.reduce(function (acc, movie) {
    if (acc[movie.year]) {
      acc[movie.year] += movie.score;
    } else {
      acc[movie.year] = movie.score;
    }
    return acc;
  }, {});
  console.log(yearsWithTotalScores);
  //
  // get number of movies per year:
  const numOfMoviesPerYear = arrOfMovies.reduce(function (acc, movie) {
    if (acc[movie.year]) {
      acc[movie.year]++;
    } else {
      acc[movie.year] = 1;
    }
    return acc;
  }, {});
  console.log(numOfMoviesPerYear);
  //
  // create new Array with Obj that include all relevant keys:
  let newArr = [];
  numOfMoviesPerYear;
  // set yearly total score to average:
}

bestYearAvg(movies);

// Bonus 8 - different approach:
// create new array which holds object
function bestAvgScore(arrOfMovies) {
  // let arr = [];
  // let obj = { year: 0, totalScore: 0, numOfMovies: 0, avgScore: 0 };

  const newArr = arrOfMovies.reduce(function (acc, val) {
    if (acc.includes(val.year)) {
      const indexOfValInAcc = acc.indexOf(val.year);
      acc[indexOfValInAcc];
    }
    // get all movies of same year
    // get number of movies in that year
    // get total score of movies from that year
    // create an object which has three keys: year, total score & number of movies
    // add this object to acc
    return acc;
  }, []);
  return newArr;
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
