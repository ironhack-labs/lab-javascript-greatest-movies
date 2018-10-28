/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    var newDuration = "";

    if (movie.duration.indexOf("h") == -1) {
      newDuration = parseInt(movie.duration);
    } else if (movie.duration.indexOf("m") == -1) {
      newDuration = parseInt(movie.duration) * 60;
    } else {
      newDuration =
        parseInt(movie.duration.split(" ")[0]) * 60 +
        parseInt(movie.duration.split(" ")[1]);
    }

    return Object.assign({}, movie, { duration: newDuration });
  });
}












// Get the average of all rates with 2 decimals
function ratesAverage(movies) {

  
  var stringToNum = movies.map(function(film) {
    var num = film.rate.split(".");

    return (num[0] + num[1]) / 10;
  });

  var sumRate = stringToNum.reduce(function(sum, total) {
    return sum + total;
  });

 
  return parseFloat((sumRate / stringToNum.length).toFixed(2));


  
};

var getRate8 = movies.filter(function(film){

  return film.rate === '8.0';

})

  return((ratesAverage(getRate8).toFixed(2)))












// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
