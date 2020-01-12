/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  // Shallow copy
  let moviesYears = movies.map( (movie, i) => { return movie });

  // Sort movies by year
  moviesYears.sort( (a,b) => {
      return a.year - b.year;
  });

  // Sort movies of the same year by title
  moviesYears.sort( (a,b) => {
    if (a.year === b.year) {
      return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
    }
  });

  return moviesYears;
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

  // Shallow copy - create an Array of movie titles
  let moviesList = movies.map( (movie, i) => {
    return movie.title;
  });

  // Order the list alphabetically
  moviesList.sort( (a,b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });

  // Return first 20 elements
  return moviesList.slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {

  // If no element in array
  if (movies.length === 0) return 0;

  // Sum all the ratings
  let totalofRates = movies.reduce((sum, movie) => {
    if (!movie.rate) { movie.rate = 0; } // set default rating = 0 when there was no rate
    return sum + movie.rate;
  },0);

  // (total of rating / number of films) then keep only two decimals
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

    // Shallow copy of object movie
    const newMovie = {...movie};

    // Only when we have a duration property && duration is not ""
    if (movie.hasOwnProperty('duration') && movie.duration.length > 0) {

      // Parse text and sum durations
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
function bestYearAvg(movies) {

  if ( movies.length === 0 ) { return null; }
  let averageRatingByYear = {};
  let bestAvg = { year : 0, rate : 0 };

  // Loop on all movies and populate each year's array
  movies.forEach((movie,i) => {
    if ( averageRatingByYear[movie.year] ) {
      averageRatingByYear[movie.year].push(movie.rate);
    } else {
      averageRatingByYear[movie.year] = [movie.rate];
    }
  });

  // For each key value pair
  // Calculate average and update bestAvg Object
  for (year in averageRatingByYear) {
    let ratings = averageRatingByYear[year];
    let ratingAvg = ( ratings.reduce((sum, rate) => { return sum + rate }, 0) ) / ratings.length;
    if ( ratingAvg > bestAvg.rate ) { bestAvg.year = year; bestAvg.rate = ratingAvg; }
  }

  return `The best year was ${bestAvg.year} with an average rate of ${bestAvg.rate}`;

}
