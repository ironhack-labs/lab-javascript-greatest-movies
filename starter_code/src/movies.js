/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(elemento) {
  elemento.sort(function(a, b) {
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    }
    return a.year - b.year;
  });
  let newArray = elemento.map(yr => yr);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(peliculas) {
  return peliculas.filter(
    SS => SS.director == "Steven Spielberg" && SS.genre.includes("Drama")
  ).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let titles = movies.map(movie => movie.title);
    return titles.sort().splice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Ejercicio con ayuda de Sitoo 🤪🤪🤪🤪
function ratesAverage(elemen) {
  if (elemen.length == 0) return 0;
  let media = elemen.reduce((ac, cu) => {
    if (typeof cu.rate != "number") cu.rate = 0;
    return ac + cu.rate;
  }, 0);
  return Number((media / elemen.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(peliculas){
    if (peliculas.length == 0) return 0;

    let peliculasDrama = peliculas.filter(genero => genero.genre.indexOf('Drama').toFixed(2) != -1)

    return ratesAverage(peliculasDrama);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array){

}