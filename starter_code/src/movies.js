/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  const getTotalRates = array.reduce(function(acc, value) {
    if (value.rate) {
      return acc + parseFloat(value.rate);
    }
    return acc;
  }, 0);

  const avg = (getTotalRates / array.length).toFixed(2);

  return parseFloat(avg);
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  const onlyDrama = array.filter(function(value) {
    return value.genre.includes("Drama");
  });
  if (onlyDrama.length >= 1) {
    return ratesAverage(onlyDrama);
  }
  return 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = array => {
  return array.sort(function(a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      if (a.title < b.title) {
        return -1;
      }
      return 1;
    }
  });
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  const onlyDrama = array.filter(function(value) {
    return value.genre.includes("Drama");
  });
  const stevenMovies = onlyDrama.reduce(function(acc, value) {
    if (value.director === "Steven Spielberg") {
      return acc + 1;
    }
    return acc;
  }, 0);
  return stevenMovies;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const firstMovies = array
    .sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      return 1;
    })
    .filter(function(value, index) {
      if (index <= 19) {
        return value;
      }
    })
    .map(function(value) {
      return value.title;
    });

  return firstMovies;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  const newArray = JSON.parse(JSON.stringify(array));
  const durationInMinutes = newArray.map(function(value) {
    //console.log(value.duration.length)
    if (value.duration.length > 5) {
      value.duration =
        parseFloat(value.duration.slice(0, 1) * 60) +
        parseFloat(value.duration.slice(3, 5));
      return value;
    } else if (value.duration.length < 5) {
      value.duration = parseFloat(value.duration.slice(0, 1) * 60);
      return value;
    } else {
      value.duration = parseFloat(value.duration.slice(0, 2));
      return value;
    }
  });
  //return array;
  return durationInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  if (array.length > 0) {
    orderByYear(array);

    let currentYear = 0;
    let avgCounter = 0;
    let avg = 0;
    let moviesByYear = 0;
    let avgByYear = [];

    array.forEach(movie => {
      if (parseFloat(movie.year) !== currentYear) {
        avgByYear.push({ avg, currentYear });
        currentYear = parseFloat(movie.year);
        moviesByYear = 0;
        avgCounter = 0;
        avg = 0;
      }

      moviesByYear++;
      avgCounter += parseFloat(movie.rate);
      avg = (avgCounter / moviesByYear).toFixed(1);
    });

    const theBestYear = avgByYear.sort(function(a, b) {
      if (parseFloat(a.avg) < parseFloat(b.avg)) {
        return 1;
      } else if (parseFloat(a.avg) > parseFloat(b.avg)) {
        return -1;
      }
      return 0;
    });

    return `The best year was ${theBestYear[0].currentYear} with an average rate of ${theBestYear[0].avg}`;
  }

  /* const bestAvg = avgByYear.reduce(function(acc, value){
      if(value.avg > acc){
        return value.avg
      }
      return acc
},0)

const bestYear = avgByYear.reduce((function(acc, value){
      if(value.avg === '9.2'){
        return value.currentYear
      }
      return acc
}))


return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
 */

  return null;
}
