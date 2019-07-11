/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function stringToMinutes(string) {
  var arr = string.split("h");
  if (arr.length < 2) {
    arr.unshift("0");
  }
  var hours = Number(arr[0]);
  var minutes = Number(arr[1].split("min")[0]);

  return hours * 60 + minutes;
}
function turnHoursToMinutes(array) {
  let moviesMinutes = array.map(movie => {
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: stringToMinutes(movie.duration),
      genre: movie.genre,
      rate: movie.rate
    };
  });
  return moviesMinutes;
}
// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let moviesRates = array.map(movie => {
    return parseFloat(movie.rate);
  });
  let moviesRatesSum = moviesRates.reduce((acc, rating) => {
    return acc + rating;
  });
  let moviesRatesAverage = moviesRatesSum / moviesRates.length;
  return Math.round(moviesRatesAverage * 100) / 100;
}
ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  const dramaMovies = array.filter(movie => {
    for (i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === "Drama") {
        if (movie.hasOwnProperty("rate")) {
          if (movie.rate > 0) {
            return true;
          } else if (movie.rate === "") {
            movie.rate = 0;
            return true;
          } else {
            return false;
          }
        }
        return false;
      }
    }
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }
  let dramaMoviesRates = dramaMovies.map(movie => {
    if (movie.rate === 0) {
      return Number(0);
    } else {
      return parseFloat(movie.rate);
    }
  });
  let dramaMoviesRatesSum = dramaMoviesRates.reduce((acc, rating) => {
    return acc + rating;
  });
  let dramaMoviesRatesAverage = dramaMoviesRatesSum / dramaMoviesRates.length;
  return Math.round(dramaMoviesRatesAverage * 100) / 100;
}
dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(array) {
  let sortedArray = array.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return sortedArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if (array.length < 1) {
    return undefined;
  }
  const dramaMoviesGeneral = array.filter(movie => {
    for (i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === "Drama") {
        return true;
      }
    }
    return false;
  });
  const dramaMoviesSpielberg = dramaMoviesGeneral.filter(movie => {
    if (movie.director === "Steven Spielberg") {
      return true;
    }
    return false;
  });
  return `Steven Spielberg directed ${
    dramaMoviesSpielberg.length
  } drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let alphabeticallyOrdered = array.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  let alphabeticallyOrderedTitles = [];
  for (let i = 0; i < alphabeticallyOrdered.length; i++) {
    alphabeticallyOrderedTitles.push(alphabeticallyOrdered[i].title);
  }
  return alphabeticallyOrderedTitles.slice(0, 20);
}

// Best yearly rate average

function bestYearAvg(array) {
  if (array.length < 1) {
    return undefined;
  }
  let years = {};
  array.forEach(function(item) {
    if (!years[item.year]) years[item.year] = [Number(item.rate)];
    else years[item.year].push(Number(item.rate));
  });
  let arrRequired = [];
  for (var year in years) {
    arrRequired.push({ Year: year, Rates: years[year] });
  }
  function helperAverage(array) {
    let helperSum = array.reduce((acc, rating) => {
      return acc + rating;
    });
    let helperAverage = helperSum / array.length;
    return Math.round(helperAverage * 100) / 100;
  }
  console.log(arrRequired[0].Year);
  let yearsAverage = arrRequired.map(year => {
    return {
      Year: year.Year,
      Rates: helperAverage(year.Rates)
    };
  });
  console.log(yearsAverage);
  let yearsSumOrdered = yearsAverage.sort((a, b) => {
    if (a.Rates > b.Rates) {
      return -1;
    } else {
      return 1;
    }
  });
  return `The best year was ${
    yearsSumOrdered[0].Year
  } with an average rate of ${yearsSumOrdered[0].Rates}`;
}
