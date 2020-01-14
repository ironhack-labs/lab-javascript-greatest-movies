/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const orderedByYear = arr.slice().sort(function(firstMovie, secondMovie) {
      if (firstMovie.year === secondMovie.year) {
        return firstMovie.title.localeCompare(secondMovie.title);
      }
      return firstMovie.year - secondMovie.year;
    });
  
    return orderedByYear;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    const spielbergDramaMovies = arr.filter(function(movie) {
        if(
            movie.director === "Steven Spielberg" && movie.genre.indexOf ("Drama") > -1
        ) {
            return true;
        }
    });
    return spielbergDramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    const alphabetically = arr.sort(function(firstTitle, secondTitle) {
        return firstTitle.title.localeCompare(secondTitle.title);
      })
      .map(function(object){
        return object.title;
      })
      .slice(0,20);
      return alphabetically;
    }
  

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let rates = arr.reduce(function(accumulator, movieRates) {
      return accumulator + movieRates.rate;
    },0);
    const averageRates = Math.round((rates / arr.length) * 100) / 100;
    return averageRates;
  }  
  

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaRate(arr) {
    const dramaMovies = arr.filter(function(movie) {
        if (movie.genre.indexOf("Drama") > -1) {
            return true;
        }
    });
    return dramaRatesAverage (dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    function timeFormat (time) {
        if (!time.includes("h")) {
            return parseInt(time);
        }
        let hourstoMinutes = time.split (" ");
        return  (parseInt(hourstoMinutes[0])*60+parseInt(hourstoMinutes [1] || 0));
  }
  
  const result = arr.map(function(movie) {
    const movies = Object.assign({}, movie);
    movies.duration = timeFormat (movie.duration);
    return movies;
  });
  return result;
  }
  
  console.log(turnHoursToMinutes(movies));
