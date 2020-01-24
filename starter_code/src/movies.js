/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  //order the movies by year
  const moviesOrdered = arr.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year == b.year && a.title > b.title) {
      return 1;
    } else if (a.year == b.year && a.title < b.title) {
      return -1;
    }
    return 0;
  });

  const orderByYearArr = moviesOrdered.map(function(value) {
    return value;
  });

  return orderByYearArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  let spielbergMovies = arr.filter(movie => movie.director === 'Steven Spielberg');
  let spilbergDramaMovies = spielbergMovies.filter(movie => movie.genre.includes('Drama'));

  return spilbergDramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const newArr = [...arr];
  let orderedTop20ByTitle = newArr

    .sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    })

    .map(movies => movies.title)
    .slice(0, 20);

  return orderedTop20ByTitle;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  //new array
  const newArray = [...arr];
  // if there is no movie
  if (newArray.length != 0) {
    //array with all the rates
    const moviesRate = newArray
      .map(function(movie) {
        if (typeof movie.rate === 'number') {
          return movie.rate;
        } else {
          return 0;
        }
      })

      .filter(function(movie) {
        return movie >= 0;
      });

    //sum all the rates
    const sumOfAllRates = moviesRate.reduce(function(acc, movie) {
      return acc + movie;
    }, 0);
    //calculate the average
    let avgRates = sumOfAllRates / moviesRate.length;
    //to round to 2 decimals
    return Math.round(avgRates * 100) / 100;
  } else {
    return 0;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// function dramaMoviesRate(arr) {
//   let dramaAvgRate = 0;
//   let allDramasMovies = arr

//   .filter(movie => movie.genre

//   .includes('Drama'))
//   .reduce((accumulator, value) => accumulator + value.rate, 0)),
//     (lengthDrama = allDramasMovies.length);
//   if (lengthDrama === 0) return 0;
//   dramaAvgRate = (avgRateDrama / lengthDrama).toFixed(2);
//   return dramaAvgRate;
// }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
