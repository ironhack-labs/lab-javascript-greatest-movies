/* eslint no-restricted-globals: 'off' */
'use strict';


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arrToOrder => {
  //Copiamos el array con el metodo .from() para no modificar el original.
  let moviesCopy = Array.from(arrToOrder).sort(function (a, b) {
    // Ordenamos por year en ascendente.
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    // Si la propiedad year es igual, ordenamos por title.
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  return moviesCopy
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
//Devolvemos las movies en una sola linea con arrow function y .filter()
const howManyMovies = moviesArr => moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArr => {
  //Copiamos array original y ordenamos alfabeticamente
  let newArr = Array.from(moviesArr).sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  })
  //Hacemos un return de los titles con .map() y de los 20 primeros con .slice()
  return newArr.map(a => a.title).slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals



// Si es true, devuelve el rating de todas las peliculas (map) filtrado para que no haya datos invalidos (filter - ratio > 0) y reducido a un numero con dos decimales
const ratesAverage = moviesArr => {
  //newArr contiene todas las peliculas con un rate valido
  let newArr = moviesArr.map(movie => movie.rate).filter(ratio => ratio > 0);
  //arrayReduced contiene la media de todos los rates del array reducido en un unico valor con dos decimales
  let arrayReduced = Math.round(newArr.reduce((acc, elem) => acc + elem, 0) / moviesArr.length * 100) / 100;
  //return solo si el array introducido no esta vacio
  return !arrayReduced ? 0 : arrayReduced
}
//Solucion en una linea para mayor rendimiento
//const ratesAverage = moviesArr => !moviesArr.length ? 0 : Math.round(moviesArr.map(a => a.rate).filter(ratio => ratio > 0).reduce((acc, elem) => acc + elem, 0) / moviesArr.length * 100) / 100;



// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = moviesArr => {
  //Almacenamos en dramaMovies las peliculas filtradas para que solo tengan genero 'Drama' y devolvemos unicamente el rate
  let dramaMovies = moviesArr.filter(movie => movie.genre.includes('Drama') && movie.genre.length === 1).map(a => a.rate);
  //Almacenamos la media de dramaMovies y reducimos a 2 decimales
  let newArr = Math.round(dramaMovies.reduce((acc, elem) => acc + elem, 0) / dramaMovies.length * 100) / 100;
  //Devolvemos newArr si contiene datos para eliminar la posibilidad de que entre un array vacio
  return !newArr ? 0 : newArr;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = moviesArr => {
  //Realizamos una Deep copy del array original con JSON.parse y stringify
  let newArr = JSON.parse(JSON.stringify(moviesArr));
  //Hacemos un map fijandonos en el length de la propiedad duration (es la forma mas sencilla que se me ha ocurrido)
  //Ejemplos: length 8 = Xh XXmin ||length 7 = Xh Xmin || length 2 = Xh || else: XXmin.
  //Length 7 y 8 sumamos los minutos con parseInt y .slice()
  let definitiveArr = newArr.map(movie => {
    if (movie.duration.length === 8) {
      return { duration: movie.duration[0] * 60 + parseInt(movie.duration.slice(-5, -3)) };
    } else if (movie.duration.length === 7) {
        return { duration: movie.duration[0] * 60 + parseInt(movie.duration.slice(-4, -3)) };
    } else if (movie.duration.length === 2) {
        return { duration: movie.duration[0] * 60 };
    } else {
        return { duration: parseInt(movie.duration.slice(0, 2)) };
    }
  })
  return definitiveArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = moviesArr => {
  let newArr = orderByYear(moviesArr).map(movie => {
    return [{ year: movie.year },
    { rate: movie.rate }]
  })

  return newArr ? null : newArr
}

