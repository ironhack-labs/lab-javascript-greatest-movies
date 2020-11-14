// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => arr.map((movie) => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  let amountMoviesSpielberg = array.filter(
    (m) => m.director === "Steven Spielberg"
  );
  let amountMoviesDrama = amountMoviesSpielberg.filter((n) =>
    n.genre.includes("Drama")
  );
  return amountMoviesDrama.length;
}
// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  // if (array == false){
  //     return 0;
  // }
  let sumOfRates = array.reduce((acc, currVal) => {
    if (!currVal.rate) {
      currVal.rate = 0;
    } else {
      acc += currVal.rate;
    }
    return acc;
  }, 0);
  let average = sumOfRates / array.length;
  let rounded = Math.round(average * 100) / 100;
  return rounded || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let amountMoviesDrama = array.filter((n) => n.genre.includes("Drama"));
  let rateDrama = amountMoviesDrama.map((m) => m.rate);
  var sum = 0;
  for (let i = 0; i < rateDrama.length; i++) {
    sum += rateDrama[i];
  }
  let avg = sum / rateDrama.length;
  return Math.round(avg * 100) / 100 || 0;
}

// console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let ordYear = array.sort(
    (firstMovie, secondMovie) =>
      firstMovie.year - secondMovie.year ||
      firstMovie.title.localeCompare(secondMovie.title)
  );
  let titles = [...ordYear];
  return titles;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let titles = array.map((n) => n.title);
  let titlesSorted = titles.sort();
  let top20 = titlesSorted.slice(0, 20);
  return top20;
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
