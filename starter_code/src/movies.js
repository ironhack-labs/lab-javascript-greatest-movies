/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes

// 1 - Primero declaro la función con el nombre pedido.
// 2 - Mapeo el array que pida la función como parametro y recorro sus elementos (movie)
// 3 - Creo un nuevo objeto 'newMovie' con 'OBject assign' para no sobreescribir el anterior, por lo que las propiedades ahora van a 'newMovie'.
// 4 - Convierto los números en un array dividida en dos, en ['horas' y 'minutos'].
// 5 - Declaro una variable total para obtener el resultado final en minutos dependiendo de ciertas condiciones:
// 6 - Condición 1; si el array tiene dos elementos, en este caso "h" ó "min"
// 7 - Condición 2; si sólo tiene un elemento y ese elemento tiene la letra 'h', identifica las horas. 
// 8 - Condición 3; que checkea si un array tiene un sólo elemento, y si tiene la palabra 'min', identifica los minutos.
// 9 - La propiedad duration del objeto nuevo, newMovie, es igual al TOTAL = HORAS + MINUTOS, teniendo en cuenta cada caso .
// 10 - Se devuelve el nuevo array de objetos.

function turnHoursToMinutes(array) { // 1
  return array.map(function (movie) { // 2

    var newMovie = Object.assign({}, movie); // 3
    var durationArray = movie.duration.split(' '); // 4
    var total = 0; // 5

    if (durationArray.length === 2) { // 6
      total = (parseInt(durationArray[0]) * 60) + parseInt(durationArray[1]);
    } else if (durationArray.length === 1 && durationArray[0].indexOf('h') > -1) { // 7
      total = (parseInt(durationArray[0]) * 60);
    } else if (durationArray.length === 1 && durationArray[0].indexOf('min') > -1) { // 8
      total = parseInt(durationArray[0]);
    }
    newMovie.duration = total; // 9
    return newMovie; // 10
  })

};

// Get the average of all rates with 2 decimals 

// 1 - Declaro función ratesAverage
// 2 - Con .reduce voy sumando en NÚMEROS, la clave rate del objeto y después lo divido entre el número de elementos del array.
// 3 - El resultado redondeadp es igual al valor numérico de ese valor con 2 decimales como pide el ejercicio.

function ratesAverage(array) { // 1
  var result = array.reduce(function (acc, movie) { // 2
    return acc + Number(movie.rate)
  }, 0) / array.length;

  var roundedResult = Number(result.toFixed(2)) // 3
  return roundedResult
};


// Get the average of Drama Movies

// 1 - Declaro función dramaMoviesRate y una variable 'result'
// 2 - Creo una variable y la igualo a un, array.filter para coger sólo las películas que en el array de genre, alguno de sus elementos es 'Drama'
// 3 - A ese nuevo array dado, le hago un .map para devolver un array con los valores de movie.rate.
// 4 - Sumo todos los elementos de ese array creado con .reduce
// 5 - Divido result entre el número de películas de drama
// 6 - Si no hay peliculas de drama la función devuelve undefined
// 7 - En cualquier otro caso, redondea el valor final con dos decimales.

function dramaMoviesRate(array) { // 1

  var dramaMovies = array.filter(function (movie) { // 2
    return movie.genre.indexOf('Drama') >= 0;
  })

  var result = dramaMovies.map(function (movie) { // 3
    return movie.rate;
  }).reduce(function (acc, rate) { // 4
    return acc + Number(rate);
  }, 0)

  var average = result / dramaMovies.length // 5
  if (dramaMovies.length === 0) { // 6
    return undefined;
  } else {
    return Number(average.toFixed(2)); // 7
  }
};

// Order by time duration, in growing order

// 1 - Primero compruebo si las duraciones son iguales, si es así ordeno movieA y movieB alfabéticamente
// 2 - Después comparo ambas duraciones para ordenarlas antes o después. 
// 3 - Devuelvo el nuevo array.


function orderByDuration(array) {
  var longest = array.sort(function (movieA, movieB) {
    if (movieA.duration === movieB.duration) { // 1
      if (movieA.title < movieB.title) {
        return -1;
      } else {
        return +1;
      }
    } else if (movieA.duration < movieB.duration) { // 2
      return -1;
    } else {
      return +1;
    }
  });
  return longest; // 3
}

// How many movies did STEVEN SPIELBERG

// 1 - Creo una variable para localizar en primer lugar las peliculas que dirigió Steven Spielberg
// 2 - Creo una segunda variable para, sobre la primera, calcular cuantas son del genero 'Drama'
// 3 - Si el array está vacía devuelvo undefined
// 4 - Si Steven Spielberg no dirigió ninguna pelicula de drama, devuelvo el string dado.
// 5 - En caso de que haya dirigido alguna pelicula devuelvo el string dado.

function howManyMovies(array) {

  var spielbergMovies = array.filter(function (movie) { // 1 
    return movie.director === 'Steven Spielberg';
  })
  
  var spielbergDramaMovies = spielbergMovies.filter(function (movie) { // 2
    return movie.genre.indexOf('Drama') >= 0;
  })

  if (array.length === 0) { // 3
    return undefined
  } else if (spielbergDramaMovies.length === 0) { // 4
    return "Steven Spielberg directed 0 drama movies!";
  } else {
    return 'Steven Spielberg directed ' + spielbergDramaMovies.length + ' drama movies!'; // 5
  }
}

// Order by title and print the first 20 titles

// 1 - Ordeno en primer lugar el array creando dos mvaraibles que pongan todo en minúsculas para asegurarme un orden en caso de que haya esta diferencia en los titulares de las películas
// 2 - Ordeno en funcion de los titulos de las películas.
// 3 - Hago un .map para coger solo la propiedad movie.title del array ordenado alfabeticamente.
// 4 - con .slice pinto de ese array, de la posición 0 hasta la 20 teniendo así un array ordenado alfabeticamente y con 20 elementos.

function orderAlphabetically(array) {
  var orderAlphArray = array.sort(function (movieA, movieB) { // 1
    var titleA = movieA.title.toLowerCase();
    var titleB = movieB.title.toLowerCase();
    if (titleA > titleB) { // 2
      return 1;
    } else if (titleA < titleB) {
      return -1;
    }
      return 0;
  })
  return orderAlphArray.map(function (movie) { // 3
    return movie.title
  }).slice(0, 20) // 4

};

// Best yearly rate average

function bestYearAvg(array) {

}