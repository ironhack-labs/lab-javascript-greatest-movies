// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => arr.map((film) => film.director);

/* DEUXIEME METHODE
function getAllDirectors(arr) {
  return arr.map(element => element.director);
}
 */

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (arr) =>
  arr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;

/* DEUXIEME METHODE

function howManyMovies(arr) {
  return arr.filter(movie => 
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
}
 */

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.filter((movie) => typeof movie.rate === "number");
  let sumFiltered = sum.reduce(
    (accumulator, movie) => (accumulator += movie.rate),
    0
  );
  var average = Math.round((sumFiltered / arr.length) * 100) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaTypeArr = arr.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(dramaTypeArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  if (arr.length === 0) return [];

  // first : sort by name

  /*  let newArray = Object.assign(
      [emptyArray],
      arr.sort((a, b) => a.year - b.year)
    ); */

  let newArray = arr.sort(function alphaSorting(a, b) {
    if (a.title > b.title) {
      //pourquoi toUpperCase() ne fonctionne pas sur la propriété title ???
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  // console.log("-----1 : sorted by name: ");
  // console.log(newArray);

  // then sort by years :
  arr.sort((a, b) => a.year - b.year);
  // console.log("-----2 : sorted by year: ");
  // console.log(newArray);
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/* Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them. */

function orderAlphabetically(arr) {
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
