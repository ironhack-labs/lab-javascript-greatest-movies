/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  if (movies.length !== 0) {
    var moviesFormated = movies.map(function(e) {
      var durationSplitted;
      var duration = e.duration;
      var clearHours;
      var clearMinutes;
      var totalDuration;
      var parseHourInMinutes;

      //if duration has 2 items
      if (e.duration.indexOf(" ") >= 0) {
        durationSplitted = e.duration.split(" ");
        if (durationSplitted.length === 2) {
          clearHours = durationSplitted[0].slice(0, -1);
          clearMinutes = durationSplitted[1].slice(0, -3);
        }
      } else {
        if (duration.indexOf("h") >= 0) {
          clearHours = duration.slice(0, -1);
        } else {
          clearMinutes = duration.slice(0, -3);
          console.log('MINUTES', clearMinutes);
        }
      }

      if (clearHours && clearMinutes) {
        parseHourInMinutes = parseInt(clearHours) * 60;
        parseMinutes = parseInt(clearMinutes);
        totalDuration = parseHourInMinutes + parseMinutes;
      } else if (clearHours) {
        totalDuration = parseInt(clearHours) * 60;
      } else {
        totalDuration = parseInt(clearMinutes);
      }

      return Object.assign({}, e, {duration:totalDuration});
    });
  }
  return moviesFormated;
}

//console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
