/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const sortedMovies = [...array];
  sortedMovies.sort(function(firstMovie, secondMovie) {
    if (firstMovie.year < secondMovie.year) {
      return -1;
    } else if (firstMovie.year > secondMovie.year) {
      return 1;
    } else if (firstMovie.title.toLowerCase() < secondMovie.title.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedMovies;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

/* function howManyMovies(array) {
  let spielbergMovies = array.filter(function(movie) {
    return movie.director === 'Steven Spielberg';
  });
  let spielbergDramas = spielbergMovies.filter(function(movie) {
    return spielbergMovies.genre === 'drama';
  });
  return spielbergDramas.length;
}*/

function howManyMovies(array) {
  return array.filter(movie => {
    const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
    const isDramaMovie = movie.genre.includes('Drama');
    return isDirectedByStevenSpielberg && isDramaMovie;
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

/* function orderAlphabetically(array) {
  orderedList = array.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  let twentyList = orderedList.slice(0, 20);
  return twentyList;
} */

const orderAlphabetically = array => {
  const sortedMovies = [...array];
  sortedMovies.sort((firstMovie, secondMovie) => {
    return firstMovie.title.localeCompare(secondMovie.title);
  });
  const movieTitles = sortedMovies.map(movie => movie.title);
  return movieTitles.slice(0, 20);
};

/* could also be:

const orderAlphabetically = array => {
  const movieTitles = array.map(movie => movie.title);
  movieTitles.sort((firstMovie, secondMovie) => {
    return firstMovie.title.localeCompare(secondMovie.title);
  });
  return movieTitles.slice(0, 20);
}
*/

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

/* function ratesAverage(array) {
  const rates = array.reduce(function(sum, movie) {
    return sum + movie.rate;
  }, 0);
  averageRate = rates / array.length;
  return averageRate;
}
*/

const ratesAverage = array => {
  if (array.length < 1) {
    return 0;
  }
  const rates = array.map(movie => movie.rate);
  const sumOfAllRates = rates.reduce((accumulator, rate) => {
    if (typeof rate !== 'undefined') {
      return accumulator + rate;
    } else {
      return accumulator;
    }
  }, 0);
  const averageRate = sumOfAllRates / rates.length;
  return Number(averageRate.toFixed(2));
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {
  const dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
  const averageDramaMovieRate = ratesAverage(dramaMovies);
  return averageDramaMovieRate;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = array => {
  return array.map(movie => {
    durationAsString = movie.duration;

    let duration = 0;

    for (let value of durationAsString.split(' ')) {
      const number = parseInt(value);
      if (value.includes('h')) {
        duration += number * 60;
      } else if (value.includes('min')) {
        duration += number;
      }
    }
    return {
      ...movie,
      duration
    };
  });
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
