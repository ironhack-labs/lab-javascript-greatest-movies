// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie.director;
    })
    .filter(function (director, index, sourceArray) {
      return sourceArray.indexOf(director) === index;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  return moviesArr.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArr) {
  const avg = movieArr.reduce(function (acc, movie, index, sourceArray) {
    if (!movie.rate) {
      movie.rate = 0;
    }
    if (index === sourceArray.length - 1) {
      acc += movies.rate;
      return acc / sourceArray.length;
    }
    return acc + movie.rate;
  }, 0);
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArr) {
  const drama = movieArr.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr) {
  return movieArr
    .map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
  const onlyTitles = movieArr.map(function (movie) {
    return movie.title;
  });
  onlyTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });
  const top20 = onlyTitles.splice(0, 20);
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function convertTime(timeString) {
  const duration = { hours: 0, minutes: 0 };
  if (timeString.includes('h')) {
    timeString.replace(/[a-z]/g, '');
    duration.hours = timeString;
    return duration;
  }
  timeString.replace(/[a-z]/g, '');
  duration.minutes = timeString;
  return duration;
}
function turnHoursToMinutes(movieArr) {
  return movieArr
    .map(function (movie) {
      return movie;
    })
    .map(function (movie) {
      const durationArr = movie.duration.split(' ');
      let hours = 0;
      let minutes = 0;
      if (durationArr.length === 2) {
        hours = convertTime(durationArr[0]).hours;
        minutes = convertTime(durationArr[1]).minutes;
      } else {
        hours = convertTime(durationArr[0]).hours;
        minutes = convertTime(durationArr[0]).minutes;
      }
      movie.duration = parseInt(hours) * 60 + parseInt(minutes);
      return movie;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movieArr) {
  if (!movieArr.length) {
    return null;
  }

  const yearlyRates = {};
  const yearlyAverages = {};

  movieArr.map(function (movie) {
    if (!yearlyRates.hasOwnProperty(movie.year)) {
      yearlyRates[movie.year] = [];
      yearlyRates[movie.year].push(movie.rate);
    } else {
      yearlyRates[movie.year].push(movie.rate);
    }
  });

  const allYears = Object.keys(yearlyRates);

  allYears.map(function (year) {
    avg = yearlyRates[year].reduce(function (acc, rate, index, sourceArray) {
      if (index === sourceArray.length - 1) {
        acc += rate;

        return acc / sourceArray.length;
      }

      return acc + rate;
    });

    yearlyAverages[year] = parseFloat(avg.toFixed(2));
  });

  const orderedAverages = Object.entries(yearlyAverages).sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(orderedAverages);

  return `The best year was ${orderedAverages[0][0]} with an average rate of ${orderedAverages[0][1]}`;
}

console.log(bestYearAvg(movies));

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
