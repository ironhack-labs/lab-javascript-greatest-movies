/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// turnHoursToMinutes
// dont damage original array
// encuentra manera de afectar arreglo original
function turnHoursToMinutes(movies) {
  var clone = clone.map(function(pelicula) {
    var nombre = pelicula.duration;
    nombre = nombre.split(" ");
    var minutos = 0;
    var horas = nombre[0].substring(nombre[0].length - 1, 0);
    if (nombre[1] !== undefined) {
      minutos = nombre[1].substring(nombre[1].length - 1, 0);
      minutos = minutos.substring(minutos.length - 1, 0);
      minutos = minutos.substring(minutos.length - 1, 0);
    }
    var minutoFinales = horas * 60 + minutos * 1;
    pelicula.duration = minutoFinales;
    return pelicula;
  });
  return clone;
}

// function turnHoursToMinutes(movies) {
//   movies.map(function(movie) {
//     var nombre = movie.duration;
//     nombre = nombre.split(" ");
//     var minutos = 0;
//     var horas = nombre[0].substring(nombre[0].length - 1, 0);
//     if (nombre[1] !== undefined) {
//       minutos = nombre[1].substring(nombre[1].length - 1, 0);
//       minutos = minutos.substring(minutos.length - 1, 0);
//       minutos = minutos.substring(minutos.length - 1, 0);
//     }
//     var minutoFinales = horas * 60 + minutos * 1;
//     movie.duration = minutoFinales;
//   });
//   return movies;
// }
// moviesClone = turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals
// ratesAverage

// Get the average of Drama Movies
//dramaMoviesRate

// Order by time duration, in growing order
//orderByDuration

// How many movies did STEVEN SPIELBERG
//howManyMovies

// Order by title and print the first 20 titles
//orderAlphabetically

// Best yearly rate average
//bestMovie
