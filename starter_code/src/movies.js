/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies];
    moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
            else {
                return 1;
            }
        }
        return a.year - b.year;
    });
    
    return moviesCopy;
    
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    let filteredMovies = movies.filter((movie,i) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });

    return filteredMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    let moviesList = movies.map( (movie, i) => {
      return movie.title;
    });
  
    moviesList.sort( (a,b) => {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  
    return moviesList.slice(0,20);
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length === 0) return 0;
  
    let totalofRates = movies.reduce((sum, movie) => {
      if (!movie.rate) { movie.rate = 0; } // set default rating = 0 when there was no rate
      return sum + movie.rate;
    },0);
  
    return parseFloat( (totalofRates / movies.length).toFixed(2) );
  
  }

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
  
    return ratesAverage(dramaMovies);
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

    let moviesWithDurations = movies.map((movie,i,arr) => {
  
      const newMovie = {...movie};
  
      if (movie.hasOwnProperty('duration') && movie.duration.length > 0) {
  
        let totalTime = 0;
        let timeArr = movie.duration.split(" ");
        timeArr.forEach((elem) => {
  
          if ( elem.includes("h") ) {
            totalTime += parseInt(elem.replace('h',''), 10) * 60;
          }
  
          if ( elem.includes("min") ) {
            totalTime += parseInt(elem.replace('min',''), 10);
          }
  
        });
  
        if ( totalTime > 0 ) { newMovie.duration = totalTime; }
  
      }
  
      return newMovie;
  
    });
  
    return moviesWithDurations;
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
