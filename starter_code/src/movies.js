/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const sum = arr.reduce(function(accumulator, currentValue) {
    let number = parseFloat(currentValue.rate, 10);

    return accumulator + number;
  }, 0);

  return Math.round((sum / arr.length) * 100) / 100;
  //always need to return sth in a function while a reduce is used. if not, printing the function is just undefined.
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  const dramaMovies = arrCopy.filter(function(element) {
    if (element.genre.indexOf("Drama") !== -1) {
      return true;
    }
    //return element.genre.includes("Drama");
  });

  if (dramaMovies.length == 0) {
    return 0;
  }

  const sumOfrate = dramaMovies.reduce(function(
    accumulator,
    currentValue,
    index
  ) {
    if (!currentValue.rate) {
      //= if (currentValue is falsy)
      currentValue.rate = "0";
    }

    let decimalRate = parseFloat(currentValue.rate, 10);
    //let decimalRate = parseFloat(currentValue.rate, 10) || 0;
    return accumulator + decimalRate;
  },
  0);

  return Math.round((sumOfrate / dramaMovies.length) * 100) / 100;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  const sortMovies = arrCopy.sort(function(a, b) {
    let yearA = parseInt(a.year, 10);
    let yearB = parseInt(b.year, 10);

    if (yearA === yearB) {
      if (a.title.localeCompare(b.title) > 0) {
        return 1;
      }
    } else if (yearA > yearB) {
      return 1;
    }
    return -1;
  });

  return sortMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  let SpielbergDrama = arr.filter(function(element) {
    let selectedMovie =
      element.genre.indexOf("Drama") >= 0 &&
      element.director == "Steven Spielberg";

    return selectedMovie;
  });
  return SpielbergDrama.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let arrCopy = JSON.parse(JSON.stringify(arr));

  let sortedMovies = arrCopy.sort(function(a, b) {
    if (a.title.localeCompare(b.title) >= 0) {
      return 1;
    }
    return -1;

    //return a.title - b.title; (won't work)
  });

  let first20 = sortedMovies.filter(function(moviesObj) {
    if (sortedMovies.indexOf(moviesObj) < 20) {
      return true;
    }
  });

  let first20title = first20.map(function(moviesObj) {
    return moviesObj.title;
  });

  return first20title;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  let arrCopy = JSON.parse(JSON.stringify(arr));

  let hr = 0;
  let min = 0;

  arrCopy.forEach(function(element) {
    let time = element.duration.split(" ");

    time.forEach(function(timeElement) {
      if (timeElement.indexOf("h") >= 0) {
        hr = timeElement.replace("h", "");
        hr = parseInt(hr, 10);
      } else {
        min = timeElement.replace("min", "");
        min = parseInt(min, 10);
      }
      element.duration = hr * 60 + min;
    });
  });

  return arrCopy;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  if (arr.length < 1) {
    return null;
  } else {
    let arrCopy = JSON.parse(JSON.stringify(arr));

    let dictionary = {};

    arrCopy.forEach(function(element) {
      element.rate = parseFloat(element.rate, 10);

      if (dictionary.hasOwnProperty(element.year)) {
        dictionary[element.year].push(element.rate);
      } else {
        dictionary[element.year] = [element.rate];
      }
    });

    let highestAverage = 0;
    let bestYear = "";

    for (year in dictionary) {
      let sum = dictionary[year].reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
      });

      dictionary[year] = sum / dictionary[year].length;

      if (highestAverage < dictionary[year]) {
        highestAverage = dictionary[year];
        bestYear = year;
      } else if (highestAverage == dictionary[year]) {
        if (year < bestYear) {
          bestYear = year;
        }
      }
    }
    bestYear = parseFloat(bestYear, 10);
    return `The best year was ${bestYear} with an average rate of ${highestAverage}`;
  }
}
