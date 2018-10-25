/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(films) {

  return films.map(function (movie) {

    var hours = 0;
    var minutes = 0;

    if (movie.duration.indexOf("h") !== - 1) {

      hours = parseInt(movie.duration[0], 10) * 60;

    }
    if (movie.duration.indexOf("min") !== -1) {

      minutes = parseInt(movie.duration.substr(movie.duration.length - 5, movie.duration.length - 3), 10);

    }
    return Object.assign({}, movie, { duration: hours + minutes });

  });
}

// Get the average of all rates with 2 decimals 

function ratesAverage(films) {

  var ratingArray = films.map(function (movies) {
    return movies.rate;
  });

  var avg = ratingArray.reduce(function (ac, cu) {
    return ac + cu;
  });

  avg = (avg / ratingArray.length).toFixed(2);  
  avg = parseFloat(avg);
  return avg;
}



// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
