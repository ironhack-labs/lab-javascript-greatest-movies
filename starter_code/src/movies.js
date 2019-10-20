/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals
//
function ratesAverage(moviesArray) {
    let sum = moviesArray.reduce(function(accum, currentValue) {
       return accum + currentValue.rate;
    }, 0);
    const averageRate = (sum / moviesArray.length).toFixed(2);
    return parseFloat(averageRate);
  }
  // Iteration 2: Drama movies - Get the average of Drama Movies
  function dramaMoviesRate(moviesArray) {
      let sum = moviesArray.reduce(function(accum, currentValue) {
         return accum + currentValue.rate;
      }, 0);
      const averageRate = (sum / moviesArray.length).toFixed(2);
      return parseFloat(averageRate);
    }
  // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
  function orderByYear(moviesArray) {
    let orderedMovies = moviesArray.sort(function(a, b){
      if (a.year !== b.year) {
        return a.year - b.year;
      }
        return a.title.localeCompare(b.title);
    });
    return orderedMovies;
  }
  // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
  function howManyMovies(moviesArray) {
    let spielBergMovies = moviesArray.sort(function(a, b) {
      if (a.director == 'Steven Spielberg') {
        return a.director;
      } else {
        return 0;
      }
    });
    return spielBergMovies;
  }
  // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArray) {
      let alphabetical = moviesArray.sort(function(a, b){
        /* if (a.length < 20) {
          return a.title.localeCompare(b.title);
        } else if (a.length > 20) {
          return a.length.slice(0, 20);
        } else { */
          return a.title.localeCompare(b.title);
      });
        return alphabetical;
    }
  // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes(moviesArray) {
    moviesArray.map(function(movie) {
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: movie.duration * 60,
        genre: movie.genre,
        rate: movie.rate
      };
    });
  }
  // BONUS Iteration: Best yearly rate average - Best yearly rate average
  
