/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes


// console.log(movies)

// var moviesDurationOrder = movies.slice(0);
// // var moviesDurationOrder = [];
// // var moviesDurationOrder = Object.assign({}, movies);
// // Array.prototype.push.apply(moviesDurationOrder, movies);
// // console.log(movies); // { a: 1 }

// // moviesDurationOrder[0].duration = 123;
//  console.log(moviesDurationOrder);

function turnHoursToMinutes(movies) {

  return movies.map(function (item) {

    // Se genera un nuevo array que no cambie el original movies
    var moviesDurationOrder = Object.assign({}, item);

    // Transformamos duration en un array para poder maniiipularlo despues
    var horasArray = moviesDurationOrder.duration.split(" ");

    // Asignamos valores iniciales a las variables;
    var horasNumber = 0;
    var minNumber = 0;

    // Si no encuentra la "h" entonces hora = 0
    if (horasArray[0].indexOf("h") == -1) {
      horasNumber = 0;
      minNumber = parseInt(horasArray);
    } else if (!horasArray[1]) { //Si no encuentra los minutos entonces minutos = 0
      horasNumber = parseInt(horasArray);
      minNumber = 0;
    } else {
      horasNumber = parseInt(horasArray); //Hay horas y minutos
      minNumber = parseInt(horasArray[1]);
    }

    // Calculo convierte horas-minutos a minutos
    var minutos = horasNumber * 60 + minNumber;

    //Se adiciona el valor a la matriz
    moviesDurationOrder.duration = minutos;

    // Regresamos el valor
    return moviesDurationOrder;
  })
}
turnHoursToMinutes(movies);



// Get the average of all rates with 2 decimals 
function ratesAverage(rates) {

  // Suma de todos los rates
  var suma = rates.reduce(function (anterior, actual) {
    return sum = anterior + parseFloat(actual.rate);
  }, 0)

  // Promedio
  return Number((suma / rates.length).toFixed(2));
}
var ratesAvrg = ratesAverage(movies);
// console.log(ratesAvrg);


// Get the average of Drama Movies
function dramaMoviesRate(drama) {

  var dramaArray = drama.filter(function (movie) {
    // Si existe "Drama" retorna el array
    if (movie.genre.indexOf("Drama") != -1) {
      return movie;
    }
  });

  // Regresa indefinido si no hay peliculas de drama
  if (dramaArray.length === 0) return undefined;
  if (!dramaArray.rate) {
    drama.rate = 0;
  };

  // Usamos la funcion anteriormente creada para obtener el promedio:
  return ratesAverage(dramaArray);
}
var drm = dramaMoviesRate(movies)
console.log("Drama average rate: " + drm);



// Order by time duration, in growing order

function orderByDuration(movies) {
  var moviesDurationOrder = movies.sort(function(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
  var moviesDurationOrder = moviesDurationOrder.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return moviesDurationOrder;
}


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average