/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let moviesByYear = [...moviesArray].sort(function(movie1, movie2) {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      //compare them by title
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie2.title < movie2.title) {
        return -1;
      }
    }
  });
  return moviesByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {
  let spielberg = moviesArray.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return spielberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let firstTwentyAlpha = [...moviesArray]
    .sort(function(movie1, movie2) {
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie1.title < movie2.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(function(movieTitle) {
      return movieTitle.title;
    })
    .slice(0, 20);
  return firstTwentyAlpha;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let averageRate = array.reduce(function(accumulator, value) {
    return accumulator + value.rate;
  });
  return averageRate / array.lenght;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
