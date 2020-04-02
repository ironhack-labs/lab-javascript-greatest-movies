/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let arrYear = array.slice();

  arrYear.sort(function(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
  });

  return arrYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let moviesNum = 0;

  const newArray = array.filter(whichMovie => {
    let condition =
      whichMovie.director === "Steven Spielberg" &&
      whichMovie.genre.includes("Drama");

    return condition;
  });

  moviesNum = newArray.length;

  return moviesNum;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let newArray = array.slice();

  newArray.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
  });

  const titleArr = newArray.map(function(movieTitle) {
    return movieTitle.title;
  });

  titleArr.splice(20);

  return titleArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let newArr = array.map(function(movie) {
    return movie.rate;
  });

  let sumRate = newArr.reduce(function(acc, currentvalue) {
    let updatedAccumulator = acc + currentvalue;

    return updatedAccumulator;
  }, 0);

  let avg = sumRate / newArr.length;

  return Math.round(avg * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaArr = array.filter(isDrama => {
    return isDrama.genre.includes("Drama");
  });

  if (dramaArr.length === 0) {
    return 0;
  }

  let newArr = dramaArr.map(function(movie) {
    return movie.rate;
  });

  let sumRate = newArr.reduce(function(acc, currentvalue) {
    let updatedAccumulator = acc + currentvalue;

    return updatedAccumulator;
  }, 0);

  let avg = sumRate / newArr.length;

  return Math.round(avg * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  let firstArray = array.map(movie => {
    //return movie.duration;

    for (let i = 0; i < movie.duration.length; i++) {
      if (movie.duration[i] === "h") {
        let hoursToMin = movie.duration[i - 1] * 60;
      } else if (movie.duration[i] === "min") {
        let min = movie.duration.slice(i - 2, i);
      }

      let totalNum = hoursToMin + min;

      movie.duration[i] = totalNum;
    }
  });

  return firstArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
