/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes


 console.log(movies)

// var moviesDuration = movies;
var moviesDuration = Object.assign({}, movies);
  console.log(movies); // { a: 1 }

function turnHoursToMinutes(moviesDuration) {

  Object.keys(moviesDuration).forEach(function (item) {

    // console.log(moviesDuration[item].duration);
    // Declaraciòn de variables
    var horasArray = moviesDuration[item].duration.split(" ");
    // console.log(horasArray);
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
    moviesDuration[item].duration = minutos;
    // console.log(item);
  });

  // console.log(moviesDuration);
  return moviesDuration;

}

//  console.log(turnHoursToMinutes(movies))
console.log(movies);
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average