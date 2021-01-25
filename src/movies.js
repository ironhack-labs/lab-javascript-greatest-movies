// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directors = movies.map((movie) => movie.director);
  return directors;

  /*let directors = movies.map (function(movie){
    return movie.director;
  });
  return directors; */
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArr) {
  const spielbergMovies = movieArr.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movie) {
  if (movie.length === 0) {
    return 0;
  }
  const avg = movie.reduce(function (acc, value) {
    if (!value.rate) {
      return acc;
    }
    return acc + value.rate;
  }, 0);
  //   let rates = movie.map(function (element) {
  //     return element.rate;
  //   });
  //   let onlyrate = rates.filter(function (element) {
  //     return element;
  //   });
  //   let average = onlyrate.reduce(function (acc, value) {
  //     return acc + value;
  //   });
  let finalavg = avg / movie.length;
  return Math.round(finalavg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movie) {
  let drama = movie.filter(function (element) {
    if (element.genre.includes("Drama")) {
      return element.rate;
    }
  });
  let rates = drama.map(function (element) {
    return element.rate;
  });
  if (rates.length === 0) {
    return 0;
  }
  let avg = rates.reduce(function (acc, num) {
    return acc + num;
  });
  let result = avg / rates.length;
  return Math.round(result * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movie) {
  let newMovie = movie.map(function (element) {
    return element;
  });
  let sort = newMovie.sort(function (value1, value2) {
    if (value1.year <= value2.year) {
      return -1;
    } else if (value2.year <= value1.year) {
      return 1;
    }
    return 0;
  });
  return sort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie) {
  let newMovie = movie.map(function (element) {
    return element;
  });
  let sort = newMovie.sort(function (value1, value2) {
    if (value1.title < value2.title) {
      return -1;
    } else if (value2.title < value1.title) {
      return 1;
    }
    return 0;
  });
  let top20 = sort.filter(function (element) {
    if (sort.indexOf(element) < 20) {
      return element.title;
    }
  });
  let newArray = top20.map(function (element) {
    return element.title;
  });
  return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
