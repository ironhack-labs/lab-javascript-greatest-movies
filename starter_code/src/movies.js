/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  return movies.map(function(e){
    var hours = 0;
    var minutes = 0;
    if(e.duration.indexOf('h') !== -1){
      hours = parseInt(e.duration[0], 10) * 60;
    }

    if(e.duration.indexOf('min') !== -1){
      minutes = parseInt(e.duration.substring(e.duration.length - 5, e.duration.length - 3), 10);
    }
    return Object.assign({}, e, { duration: hours + minutes });
  });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var numberOfFilms = 0;
  var sum = movies.reduce(function(acum, e){
    numberOfFilms++;
    return acum + parseFloat(e.rate);
  }, 0);
  return parseFloat(sum/numberOfFilms);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  var dramaMovies = movies.filter(function(e){
    if(e.genre.indexOf("Drama") !== -1) {return e; }
  });
      
  var numberOfFilms = 0;

  if(dramaMovies.length > 0){
    var sum = dramaMovies.reduce(function(acum, e){
    numberOfFilms++;
    return acum + (e.rate === "" ? 0 : parseFloat(e.rate));
    }, 0);
    return parseFloat((sum / numberOfFilms).toFixed(2));
  }
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
