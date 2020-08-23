// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieArray) {
  let dir = movieArray.map((item) => item.director);
  return dir;

  // Bonus 1.1 Clean the array of directors

  let dirUnique = [];
  dirUnique = dir.map(function (item) {
    if (!dirUnique.includes(item)) {
      dirUnique.push(item);
    }
  });
  return dirUnique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  let movieAmount = movieArray.filter(
    (item) =>
      item.director == "Steven Spielberg" && item.genre.includes("Drama")
  );
  return movieAmount.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  let onlyRatedMovies = movieArray.filter((item) => item.rate);
  let allRates = onlyRatedMovies.map((item) => item.rate);
  let total = allRates.reduce((sum, item) => sum + item);
  return Math.round((total / movieArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray) {
  let onlyDramaMovies = movieArray.filter((item) =>
    item.genre.includes("Drama")
  );
  return ratesAverage(onlyDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }

  movieArray.sort((a, b) => (a.title < b.title ? -1 : 0));
  movieArray.sort((a, b) => a.year - b.year);

  return movieArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray) {
  if (movieArray.length == 0) {
    return [];
  }
  let movieTitles = movieArray.map((item) => item.title);
  movieTitles.sort().splice(20);
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let newMovies = movies.map((movie) => cloneObject(movie));
  newMovies = newMovies.map((newMovie) => {
    newMovie.duration = hoursToMinutes(newMovie.duration);
    return newMovie;
  });
  return newMovies;
}

function hoursToMinutes(str) {
  let arr = str.split(" ");
  let min;

  if (arr.length > 1) {
    arr = str.split("min").join("").split("h ");
    arr = arr.map((x) => Number(x));
    min = arr[0] * 60 + arr[1];
    return min;
  }
  if (arr[0].includes("h")) {
    min = Number(arr[0].slice(0, arr.indexOf("h"))) * 60;
    return min;
  }

  if (arr[0].includes("min")) {
    arr = arr[0].split("min");
    min = Number(arr[0]);
    return min;
  }
}

function cloneObject(object) {
  let clone = {};
  for (let prop in object) {
    if (object[prop] != null && typeof object[prop] == "object") {
      clone[prop] = cloneObject(object[prop]);
    } else {
      clone[prop] = object[prop];
    }
  }
  return clone;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movieArray) {
  if (movieArray.length == 0) {
    return null;
  }

  let yearAll = movieArray.map((item) => item.year);

  let yearList = [];
  yearAll.forEach((item) => {
    if (!yearList.includes(item)) {
      yearList.push(item);
    }
  });

  let yearRates = {};
  for (let i = 0; i < yearList.length; i++) {
    yearRates[yearList[i]] = [];
  }

  for (let keyYear in yearRates) {
    movieArray.forEach((item) => {
      if (item.year == keyYear) {
        yearRates[keyYear].push(item.rate);
      }
    });
  }

  let total;
  for (let keyYear in yearRates) {
    total = 0;
    for (let i = 0; i < yearRates[keyYear].length; i++) {
      total += yearRates[keyYear][i];
    }
    yearRates[keyYear] = parseFloat(
      (total / yearRates[keyYear].length).toFixed(2)
    );
  }

  let highest = 0;
  let bestYear;
  for (let keyYear in yearRates) {
    if (yearRates[keyYear] > highest) {
      bestYear = keyYear;
      highest = yearRates[keyYear];
    }
  }

  return `The best year was ${bestYear} with an average rate of ${highest}`;
}
