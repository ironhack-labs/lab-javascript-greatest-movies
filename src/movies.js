//jshint esversion:6

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  var directorsArr = arr.map(movieDirector);
  uniqDirectors = [...new Set(directorsArr)];
  return uniqDirectors;

}

function movieDirector(movie) {
  if (movie.hasOwnProperty("director")) {
    return movie.director;
  }
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  var moviesSteven = arr.filter(function (movie) {
    return movie.director === 'Steven Spielberg';
  });
  var dramaMoviesSteven = moviesSteven.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  return dramaMoviesSteven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var allRatesArray = arr.map(function (movie) {
    if (typeof movie.rate === "number") {
      return movie.rate;
    } else {
      return 0;
    }
  });
  var averageRate = (allRatesArray.reduce(function (rate, totalRates) {
    return rate + totalRates;
  }) / allRatesArray.length);
  return Number(averageRate.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var dramaMovies = arr.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  var allRatesArray = dramaMovies.map(function (movie) {
    if (typeof movie.rate === "number") {
      return movie.rate;
    } else {
      return 0;
    }
  });
  var averageRate = (allRatesArray.reduce(function (rate, totalRates) {
    return rate + totalRates;
  }) / allRatesArray.length);
  return Number(averageRate.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  var allMovies = JSON.parse(JSON.stringify(arr));
  allMovies.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
    return a.year - b.year;
  });

  return allMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  var allMovies = JSON.parse(JSON.stringify(arr));
  allMovies.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  var twentyMovies = [];
  if (allMovies.length < 21) {
    for (i = 0; i < allMovies.length; i++) {
      twentyMovies.push(allMovies[i].title);
    }
  } else {
    for (i = 0; i < 20; i++) {
      twentyMovies.push(allMovies[i].title);
    }
  }
  return twentyMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  var allMovies = JSON.parse(JSON.stringify(arr));
  for (i = 0; i < allMovies.length; i++) {
    var h = allMovies[i].duration.indexOf("h");
    var hoursToMin = (Number(allMovies[i].duration.charAt(h - 1)) * 60);
    var m = allMovies[i].duration.indexOf("m");
    var totalMinutes = Number((allMovies[i].duration.charAt(m - 2)) + allMovies[i].duration.charAt(m - 1));
    var totalDuration = hoursToMin + totalMinutes;
    allMovies[i].duration = totalDuration;
  }
  return allMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let bestYear = 0;
  let bestAverageScore = 0;
  for (j = 1900; j < 2021; j++) { //1900 as I don't think movies were made before that.
    let yearCount = 0;
    let yearTotal = 0;
    let yearAverage = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].year === j) {
        yearCount += 1;
        yearTotal += arr[i].rate;
      }
    }
    yearAverage = yearTotal / yearCount;
    if (yearAverage > bestAverageScore) {
      bestAverageScore = yearAverage;
      bestYear = j;
    }
  }
  return `The best year was ${bestYear} with an average rate of ${bestAverageScore}`;
}