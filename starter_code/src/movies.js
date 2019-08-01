/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let reduced = movies.reduce((total, currentValue) => {
    if (currentValue.rate == "") {
      currentValue.rate = 0;
    }
    return (total += parseInt(currentValue.rate));
  }, 0);
  return Math.round((reduced / movies.length) * 100) / 100;
}
// console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (dramaMovies == 0) {
    return 0;
  } else {
    return ratesAverage(dramaMovies);
  }
}
// // console.log(dramaMoviesRate(movies));

// // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  let newMovies = [...movies];

  let durationArr = [];
  let minutes = [];
  let hours = [];

  newMovies.forEach((movie, index) => {
    durationArr[index] = movie.duration;

    if (
      durationArr[index].substring(
        durationArr[index].indexOf("m") - 2,
        durationArr[index].indexOf("m")
      ) == 0
    ) {
      minutes[index] = 0;
    } else {
      minutes[index] = parseInt(
        durationArr[index].substring(
          durationArr[index].indexOf("m") - 2,
          durationArr[index].indexOf("m")
        )
      );
    }

    hours[index] = parseInt(
      durationArr[index].substring(
        durationArr[index].indexOf("h") - 1,
        durationArr[index].indexOf("h")
      )
    );
  });

  // horas a minutos
  let totalMinutes = hours.map(function(element, index) {
    return element * 60 + minutes[index];
  });

  //asocia el indice actual al arreglo de minutos
  for (let i = 0; i < totalMinutes.length; i++) {
    totalMinutes[i] = [totalMinutes[i], i];
  }

  // realiza ordenamiento de totalMinutes
  totalMinutes.sort(function(a, b) {
    return a[0] - b[0];
  });

  //obtencion del arreglo de los indices derivados de aplicar ordenamiento
  let indexSorted = [];
  for (let i = 0; i < totalMinutes.length; i++) {
    indexSorted[i] = totalMinutes[i][1];
  }

  // aplica los indices de ordenamiento a todo movies
  let moviesSorted = indexSorted.map(function(element) {
    return newMovies[element];
  });
  return moviesSorted;
}

// // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let dramaMoviesWithSpielberg = movies.filter(movie => {
    return (
      movie.genre.indexOf("Drama") !== -1 &&
      movie.director.indexOf("Steven Spielberg") !== -1
    );
  });
  if (dramaMoviesWithSpielberg == 0) {
    return 0;
  } else {
    return dramaMoviesWithSpielberg.length;
  }
}

// // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// // orderna ee array de movies por orden alfabetico sin alterar el arreglo original
function orderByAlphabet(movies) {
  let newMovies = [];
  movies.forEach(function(element, index) {
    newMovies.push(element);
  });

  newMovies.sort((a, b) => {
    if (b.title > a.title) {
      return -1;
    }

    if (b.title < a.title) {
      return 1;
    }

    return 0;
  });
  return newMovies; // retorno final de la función
}

// funcion para seleccionar el top 20 de peliculas por titulo
function topTwenty(movies) {
  let topTwentyMovies = [];
  for (let i = 0; i < movies.length; i++) {
    // esta condicion funciona para arreglos de peliculas que sean menores a 20 de longitud
    if (i < 20) {
      topTwentyMovies[i] = movies[i].title;
    }
  }
  return topTwentyMovies; // retorno final de la función
}

//esta funcion implementa las dos funciones de arriba, ordenando y seleccionando el top de peliculas por titulo
function orderAlphabetically(movies) {
  let newMovies = orderByAlphabet(movies);
  let topTwentyMovies = topTwenty(newMovies);
  return topTwentyMovies;
}

// //---------------------------------------------

// // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // Realiza la copia del arreglo movies recibido como parametro de funcion, en el arreglo differentArrayMovie
  let differentArrayMovie = [...movies];

  // creacion de variables auxiliares
  let durationArr = [];
  let minutes = [];
  let hours = [];

  differentArrayMovie.forEach((movie, index) => {
    // Separa los datos de duracion en el arreglo durationArr
    durationArr[index] = movie.duration;
    if (
      durationArr[index].substring(
        durationArr[index].indexOf("m") - 2,
        durationArr[index].indexOf("m")
      ) == 0
    ) {
      minutes[index] = 0;
    } else {
      // separa los numeros de minutos del string de duration y los agrega al arreglo minutes
      minutes[index] = parseInt(
        durationArr[index].substring(
          durationArr[index].indexOf("m") - 2,
          durationArr[index].indexOf("m")
        )
      );
    }
    // separa los numeros de horas del string de duration y los agrega al arreglo hours
    hours[index] = parseInt(
      durationArr[index].substring(
        durationArr[index].indexOf("h") - 1,
        durationArr[index].indexOf("h")
      )
    );
  });

  // conversion de horas a minutos, los asigna a la variable totalMinutes
  let totalMinutes = hours.map(function(element, index) {
    return element * 60 + minutes[index];
  });

  //asigna cada valor de totalMinutes en la propiedad de duracion del arreglo differentArrayMovie[
  for (let i = 0; i < totalMinutes.length; i++) {
    differentArrayMovie[i].duration = totalMinutes[i];
  }

  // // retorno final de la funcion
  return differentArrayMovie;
}
