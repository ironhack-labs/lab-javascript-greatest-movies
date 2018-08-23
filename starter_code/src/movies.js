/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  if (movies.length !== 0) {
    var moviesFormated = movies.map(function(e) {
      console.log(typeof e.duration);
      var eSplitted = e.duration.split(" ");
      var hourToMinutes;
      var totalDuration;
      var minutes;
      if (eSplitted.length === 2) {
        hourToMinutes = parseInt(eSplitted[0].slice(0, -1)) * 60;
        minutes = parseInt(eSplitted[1].slice(0, -3));
        totalDuration = hourToMinutes + minutes;
      } else {
        if (eSplitted[0].indexOf("h")) {
          hourToMinutes = parseInt(eSplitted[0].slice(0, -1)) * 60;
          totalDuration = hourToMinutes;
        } else {
          minutes = parseInt(eSplitted[1].slice(0, -3));
          totalDuration = minutes;
        }
      }
      e.duration = totalDuration;
      return e;
    });
  }
  return moviesFormated;
}

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
