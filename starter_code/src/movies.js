/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var newMoviesArr = movies.map(function (movie) {
    var totalMinutes;
    if (movie.duration.includes(' ')) {
      var durationArray = movie.duration.split(' ');
      totalMinutes = (parseInt(durationArray[0].split('h'), 10) * 60) + parseInt(durationArray[1].split('min', 2), 10);
    } else if (movie.duration.includes('h')) {
      totalMinutes = parseInt(movie.duration.split('h', 1), 10) * 60;
    } else if (movie.duration.includes('min')) {
      totalMinutes = parseInt(movie.duration.split('min', 2), 10);
    }
    return Object.assign({}, movie, { duration: totalMinutes });
  });
  return newMoviesArr;
}

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var averageRate = arr.reduce(function (acc, elem) {
    var rateFloat = parseFloat(elem.rate).toFixed(2);
    return (rateFloat / arr.length) + acc;
  }, 0);
  return averageRate;
}


// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaMovies = arr.filter(function (elem) {
    var dramaList = elem.genre.includes('Drama');
    for (var i = 0; i < dramaList.length; i++) {
      if (dramaList.rate === '') {
        dramaList.rate = 0;
      }
    }
    return dramaList;
  });
  var averageDrama = ratesAverage(dramaMovies).toFixed(2);
  return parseFloat(averageDrama);
}


// Order by time duration, in growing order
function orderByDuration(arr) {
  var arrByDuration = turnHoursToMinutes(arr);
  arrByDuration.sort(function (a, b) {
    return b[duration] - a[duration];
  });
  return arrByDuration;
}

// Array.prototype.orderByNumber = function (property, sortOrder) {
//   // Primero se verifica que la propiedad sortOrder tenga un dato válido.
//   if (sortOrder != -1 && sortOrder != 1) sortOrder = 1;
//   this.sort(function (a, b) {
//     // La función de ordenamiento devuelve la comparación entre property de a y b.
//     // El resultado será afectado por sortOrder.
//     return (a[property] - b[property]) * sortOrder;
//   });
// };

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
