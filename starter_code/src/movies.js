/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayFilm){

  // Me hago una copia del Array original

  let arrayFilmCopy = Array.from(arrayFilm);

  // Las ordeno por año
  
  arrayFilmCopy.sort(function(a,b){
    return a.year-b.year;
  })

  // Vuelvo a ordenarlas: Si tienen el mismo año las ordeno alfabéticamente

  arrayFilmCopy.sort(function(a,b){
    if(a.year == b.year){
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }  
    return 0;
  });

  // Devuelvo el nuevo array ordenado
  
  return arrayFilmCopy;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){

  // Uso .filter para generar un array con las pelis que cumplan ciertas condiciones

  let filmsSpielberg = array.filter(function(film){

    // chequeo que las pelis sean de Spielberg y Dramas, si lo son, los devuelvo

    if(film.director == "Steven Spielberg" && film.genre.includes("Drama")){

      return film;

    }

  // Devuelvo cuantos ítems hay en el array

  })

  return filmsSpielberg.length;

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  // creo un array solo con los títulos
  let movieByTitle = array.map(movie => movie.title)

  // Ordeno el array anterior alfabéticamente, lo corto a las 20 películas y las meto en el array topTwenty
  let topTwenty = movieByTitle.sort((a, b) => (a > b) ? 1 : -1)
     topTwenty.length > 20 ? topTwenty.splice(20) : topTwenty;

  return topTwenty
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
  if(array.length === 0) return 0;
  let averageRate = array.reduce((acc, movie) => {
      if(!movie.rate){
          return acc + 0;
      } else {
          return acc + movie.rate;   
      }
  },0) / array.length;
  return Number(averageRate.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaMovies = arr.slice().filter(movie => (movie.genre.includes("Drama")))
  if (dramaMovies.length !== 0) {
      let averageRate = dramaMovies.reduce((a, b) => {
           return a + b.rate
      }, 0)
      averageRate = averageRate / dramaMovies.length
      return Number(averageRate.toFixed(2))
  }
  return 0
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
