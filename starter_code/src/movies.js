/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let sortedArray = array.slice().sort(function(a, b) {
    if (a["year"] === b["year"]) {
      return a["title"].localeCompare(b["title"]);
    }

    return a["year"] - b["year"];
  });

  return sortedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let dramaStevenS = array.filter(function(movie) {
    if (
      movie["director"] === "Steven Spielberg" &&
      movie["genre"].includes("Drama")
    ) {
      return true;
    }
  });

  return dramaStevenS.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let alphaOrdered = array.slice().sort(function(a, b) {
    return a["title"].localeCompare(b["title"]);
  });

  let top20 = alphaOrdered.slice(0, 20).map(function(movie) {
    return movie["title"];
  });

  return top20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let rateArray = array.map(function(movie) {
    if (!movie.rate) {
      return 0;
    } else {
      return movie.rate;
    }
  });

  let sum = rateArray.reduce(function(accumulator, value) {
    return accumulator + value;
  }, 0);

  let finalRate = sum / array.length;

  return parseFloat(finalRate.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaArray = array.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });

  return ratesAverage(dramaArray);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  function minutes(string) {
    let minutesTemplate = string.split(" ");

    let time = 0;

    minutesTemplate.forEach(function(el) {
      if (el.includes("h")) {
        time += parseInt(el) * 60;
      }
      if (el.includes("m")) {
        time += parseInt(el);
      }
    });

    return time;
  }

  let moviesInMinutes = array.map(function(movie) {
    return {
      ...movie,
      duration: minutes(movie.duration)
    };
  });

  return moviesInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  //returns null when empty array
  if (array.length === 0) {
    return null;
  }

  //iterating through the array to get all possible year values
  //saving the values in a neew array - yearArr
  let yearArr = [];

  for (let i = 0; i < array.length; i++) {
    if (yearArr.indexOf(array[i].year) === -1) {
      yearArr.push(array[i].year);
    }
  }

  //filter by each year value - make one array of each year
  //push all filtered yearArrays to one array arrFilteredByYears
  let arrFilteredByYears = [];

  for (let yearValue of yearArr) {
    let currentYear = array.filter(function(movie) {
      if (movie.year === yearValue) {
        return true;
      }
    });
    arrFilteredByYears.push(currentYear);
  }

  //sort arrFilteredByYears by ratesAverage

  let arraySortedByRatesAverage = arrFilteredByYears.sort(function(a, b) {
    if (ratesAverage(a) === ratesAverage(b)) {
      return b[0].year - a[0].year;
    } else {
      return ratesAverage(a) - ratesAverage(b);
    }
  });

  //return the last index of the array sorted by ratesAverage - biggest average

  return `The best year was ${
    arraySortedByRatesAverage[arraySortedByRatesAverage.length - 1][0].year
  } with an average rate of ${ratesAverage(
    arraySortedByRatesAverage[arraySortedByRatesAverage.length - 1]
  )}`;
}
