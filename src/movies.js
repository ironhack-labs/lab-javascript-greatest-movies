// Iteration 1: All directors? - Get the array of all directors.

//const getAllDirectors = (array) => array.map((director) => );

function getAllDirectors(movies) {
  let newMovies = movies.map((movie) => movie.director);

  return newMovies;
}

let getDir = getAllDirectors(movies);
console.log(getDir);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function uniqueDir(array) {
  let uniqueDir = [...new Set(array)];
  return uniqueDir;
}

let newDir = uniqueDir(getDir);
console.log(newDir);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const filteredArray = movies.filter(function (movies) {
      return (
        movies.director === `Steven Spielberg` && movies.genre.includes(`Drama`)
      );
    });
    return filteredArray.length;
  }
}

let movieSpielB = howManyMovies(movies);
console.log(movieSpielB);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const average =
    movies.reduce(function (accumulator, movie) {
      accumulator += movie.rate;
      return accumulator;
    }, 0) / movies.length;
  return movies.length === 0 ? 0 : Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function (movies) {
    return movies.genre == `Drama`;
  });

  const average =
    dramaMovies.reduce(function (accumulator, object) {
      accumulator += object.rate;
      return accumulator;
    }, 0) / dramaMovies.length;

  return dramaMovies.length === 0 ? 0 : Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const reversedMovies = [...movies.reverse()];

function orderByYear(reversedMovies) {
  const sortedYear = reversedMovies.sort(function (yearA, yearB) {
    return yearA.year - yearB.year;
  });
  return sortedYear;
}
let avYears = orderByYear(movies);

console.log(avYears);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  function compareTitle(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.t) {
      return -1;
    } else {
      return 0;
    }
  }
  array.sort(compareTitle);

  return array;
}

let ordA = orderAlphabetically(movies);
console.log(ordA);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
