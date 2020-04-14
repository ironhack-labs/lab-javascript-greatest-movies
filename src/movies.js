/* eslint no-restricted-globals: 'off' */
"use strict"
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
var orderByYear = moviesDate => {
    let copiaPelis = Array.from(moviesDate).sort(function (movie1, movie2) {     
        if (movie1.year < movie2.year) return -1;
        if (movie1.year > movie2.year) return 1;
        if (movie1.title < movie2.title) return -1;
        if (movie1.title > movie2.title) return 1; });
   return copiaPelis;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
var howManyMovies = pelis => pelis.filter(movie => movie.director === 'Steven Spielberg' && movieCategory(film, "Drama")).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
var orderAlphabetically = pelis => {
    let alpha = Array.from(pelis).sort((movie1,movie2) => {
        if (movie1.title < movie2.title) return -1;
        if (movie1.title > movie2.title) return 1;
    })
    return alpha.map(movie1 => movie1.title).slice(0, 20);

}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
/*var ratesAverage = pelis => {
    let pelis = pelis.map(pelicula => pelicula.rate).filter(ratio => ratio > 0);
    let pelisReduced = Math.round(pelis.reduce((acc, elem) => acc + elem, 0) / pelis.length * 100)/100;
    return !pelisReduced ? 0 : pelisreduced;
}*/

// Iteration 5: Drama movies - Get the average of Drama Movies
var dramaMoviesRate = pelis => {
    let dramaMovies = pelis.filter(movie => movie.genre.includes('Drama')
     && movie.genre.length === 1).map(a => a.rate);
    let newArr = Math.round(dramaMovies.reduce((acc, elem) => 
    acc + elem, 0) / dramaMovies.length * 100) / 100;
    return !newArr ? 0 : newArr;
  }
  
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = pelis => {
    let newArr = JSON.parse(JSON.stringify(pelis))
    let peliculafin = newArr.map(movie => {
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
    return peliculafin;
  }
// BONUS Iteration: Best yearly rate average - Best yearly rate average
