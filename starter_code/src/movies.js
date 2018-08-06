/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(objeto) {
  var conversion = objeto.map(function(time) {
    var arr_tiempo = time.duration.split(" ");

    if (arr_tiempo[0].indexOf("min") >= 0) {
      return parseInt(arr_tiempo[0].split("min"));
    }

    var horas = parseInt(arr_tiempo[0].split("h")) * 60;
    if (arr_tiempo.length > 1) {
      var minutos = parseInt(arr_tiempo[1].split("min"));

      if (horas === 0) {
        return minutos;
      }

      return horas + minutos;
    }

    return horas;
  });

  if (Array.isArray(conversion)) {
    return conversion;
  }

  console.log(coversion);
  return conversion[0];
}
// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
