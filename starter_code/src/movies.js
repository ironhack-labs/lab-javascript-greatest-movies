/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes


// console.log(movies)

// var moviesDuration = movies.slice(0);
// // var moviesDuration = [];
// // var moviesDuration = Object.assign({}, movies);
// // Array.prototype.push.apply(moviesDuration, movies);
// // console.log(movies); // { a: 1 }

// // moviesDuration[0].duration = 123;
//  console.log(moviesDuration);

function turnHoursToMinutes(movies) {

  return movies.map(function (item) {

    // Se genera un nuevo array que no cambie el original movies
    var moviesDuration = Object.assign({}, item);

    // Transformamos duration en un array para poder maniiipularlo despues
    var horasArray = moviesDuration.duration.split(" ");

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
    moviesDuration.duration = minutos;

    // Regresamos el valor
    return moviesDuration;
  })
}

//  console.log(turnHoursToMinutes(movies))
// console.log(moviesDuration[1].duration);

turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average