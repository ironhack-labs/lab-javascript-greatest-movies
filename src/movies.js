// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirectors = movies.map(function (cur) {
    return cur.director;
  });
  let cleanDirectors = allDirectors.filter(function (cur, i) {
    return allDirectors.indexOf(cur) === i;
  });
  return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(function (cur) {
    return cur.director == 'Steven Spielberg' && cur.genre.includes('Drama');
  }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let amountOfMovies = movies.length;
  if (!amountOfMovies) return 0;
  let sumMoviesRate = movies.reduce(function (acc, cur) {
    return cur.rate > 0 ? (acc += cur.rate) : acc;
  }, 0);
  return Math.round((sumMoviesRate / amountOfMovies) * 100) / 100;
}
console.log(ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function (cur) {
    return cur.genre.includes('Drama');
  });
  return ratesAverage(dramaMovies);
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return [...movies].sort(function (a, b) {
    if (a.year == b.year) return a.title.localeCompare(b.title);
    return a.year - b.year;
  });
}

console.log(
  orderByYear([
    { title: 'abc', year: 2002 },
    { title: 'bac', year: 1982 },
    { title: 'aab', year: 1982 },
  ])
);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return [...movies]
    .sort(function (a, b) {
      return a.title.localeCompare(b.title);
    })
    .slice(0, 20)
    .map(function (cur) {
      return cur.title;
    });
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function stringKeepNumber(str) {
  return str.replace(/\D/g, '') - 0;
}
function turnHoursToMinutesfromString(str) {
  if (!str.length) return 0;
  let els = str.split(' ');
  if (els.length == 2) {
    return stringKeepNumber(els[0]) * 60 + stringKeepNumber(els[1]);
  } else if (els.length == 1) {
    if (str.indexOf('h') > 0) return stringKeepNumber(str) * 60;
    return stringKeepNumber(els[0]);
  }
  return 0;
}
let turnHoursToMinutesfromStringTEST = turnHoursToMinutesfromString('0h 31min');
console.log('typeof ', typeof turnHoursToMinutesfromStringTEST);
console.log('value ', turnHoursToMinutesfromStringTEST);

function turnHoursToMinutes(movies) {
  return movies.map(function (cur) {
    let newDuration = turnHoursToMinutesfromString(cur.duration);
    return { ...cur, duration: newDuration };
  });
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvgArr(movies) {
  let years = [
    ...new Set(
      movies.map(function (cur) {
        return cur.year;
      })
    ),
  ];

  let yearsRateArr = years
    .map(function (year) {
      let moviesOfThisYear = movies.filter(function (cur) {
        return cur.year == year;
      });
      let avgRatesThisYear = ratesAverage(moviesOfThisYear);
      return { year: year, avgRate: ratesAverage(moviesOfThisYear) };
    })
    .sort(function (a, b) {
      if (a.avgRate == b.avgRate) return a.year - b.year;
      return b.avgRate - a.avgRate;
    });

  return yearsRateArr;
}
function bestYearAvg(movies) {
  if (!movies.length) return null;
  let yearsRateArr = bestYearAvgArr(movies);
  return `The best year was ${yearsRateArr[0].year} with an average rate of ${yearsRateArr[0].avgRate}`;
}

console.log('bestYearAvg', bestYearAvg(movies));

function bestYearAvgConvoluted(movies) {
  if (!movies.length) return null;

  const moviesReducedYearRate = {};
  for (let movie of movies) {
    if (movie.rate) {
      if (!moviesReducedYearRate['y' + movie.year])
        moviesReducedYearRate['y' + movie.year] = [];
      moviesReducedYearRate['y' + movie.year].push(movie.rate);
    }
  }
  let yearIndexMax = '';
  let rateMax = 0;
  for (let yearIndex in moviesReducedYearRate) {
    let tempRateMaxTest = calcArrayAverage(moviesReducedYearRate[yearIndex]);
    if (tempRateMaxTest >= rateMax) {
      rateMax = tempRateMaxTest;
      yearIndexMax = yearIndex;
    }
  }
  let yearMax = yearIndexMax.slice(1);
  return `The best year was ${yearMax} with an average rate of ${rateMax}`;
}

function calcArrayAverage(arr) {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log('bestYearAvgConvoluted', bestYearAvgConvoluted(movies));
