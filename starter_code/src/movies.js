/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function getTime(timeString) {
  var hours = timeString.match(/(\d+)(?=h)/g),
      minutes = timeString.match(/(\d+)(?=min)/g);

  hours ? hours = parseInt(hours[0]) : hours = 0;
  minutes ? minutes = parseInt(minutes[0]) : minutes = 0;
  return [hours, minutes];
}

function convertToMinutes(timeArray) {
  var totalTime = (timeArray[0] * 60) + timeArray[1];
  return totalTime;
}

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie) {
      movie = { ...movie, duration: convertToMinutes(getTime(movie.duration)) };
      return movie;
  });
}

// Get the average of all rates with 2 decimals

function getTime(timeString) {
  var hours = timeString.match(/(\d+)(?=h)/g),
      minutes = timeString.match(/(\d+)(?=min)/g);

  hours ? hours = parseInt(hours[0]) : hours = 0;
  minutes ? minutes = parseInt(minutes[0]) : minutes = 0;
  return [hours, minutes];
}

function convertToMinutes(timeArray) {
  var totalTime = (timeArray[0] * 60) + timeArray[1];
  return totalTime;
}

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie) {
      movie = { ...movie, duration: convertToMinutes(getTime(movie.duration)) };
      return movie;
  });
}

// Get the average of all rates with 2 decimals

function sumRates(moviesArray) {
  return moviesArray.reduce(function(acc, movie) {
    if (movie.rate) {
      acc += parseFloat(movie.rate);
    } else { return acc };
    return acc;
  }, 0);
}

function ratesAverage(moviesArray) {
  return Math.round(((sumRates(moviesArray) / moviesArray.length) * 1e2)) / 1e2;
}

// Get the average of Drama Movies

function searchGenre(genreArray, genre) {
  if (genreArray.indexOf(genre) != -1) { return true; }
}

// function selectByValue (moviesArray, property, value) {
//   if (property != "genre") {
//     return moviesArray.filter(function(movie) {
//       return movie[property] === value;
//     });
//   } else {
//       var filmsByGenre = moviesArray.filter(function(movie) {
//         return searchGenre(movie.genre, value);
//       });

//       if (filmsByGenre.length === 0) { return; }
//         else { return filmsByGenre; }
//     }
// }

function selectByValue (moviesArray, property, value) {
  if (property != "genre") {
    return moviesArray.filter(function(movie) {
      return movie[property] === value;
    });
  } else {
      var filmsByGenre = moviesArray.filter(function(movie) {
        return searchGenre(movie.genre, value);
      });

      if (filmsByGenre.length === 0) {
        console.log("NO");
        return;
      } else {
        console.log("YES");
        return filmsByGenre;
      }
    }
}

function dramaMoviesRate(moviesArray) {
  var films = selectByValue(movies, "genre", "Drama");
  if (films) { return ratesAverage(films); }
  else { return; }
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
