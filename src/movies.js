// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arr => arr.map( m => m.director);
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = arr => arr.filter( m => m.director === "Steven Spielberg" && m.genre.includes("Drama")).length;
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
/*const ratesAverage = arr => arr.length === 0 ? 0 : Number(arr.map(m => m.rate).reduce((total, r) => total + r, 0)/arr.length).toFixed(2);
ratesAverage(movies);*/

function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let averageScore = [];
  let totalAverage = 0;
  averageScore = array.map(function (el) {
    return el.rate;
  });
  totalAverage = averageScore.reduce(function (total, el) {
    if (el) {
      return total + el;
    } else {
      return total;
    }
  }, 0);
  return Number((totalAverage / averageScore.length).toFixed(2));
}
console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
/*const dramaMoviesRate = ratesAverage(movies.filter(m => m.genre.includes("Drama")));
dramaMoviesRate();*/

function dramaMoviesRate(array) {
  let dramaMovies = [];
  dramaMovies = array.filter(function (el) {
    if (el.genre.includes("Drama")) {
      return el.rate;
    }
  });
  return ratesAverage(dramaMovies);
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*const orderByYear = movies.map(m => m).sort((a.year, b.year) => a.year - b.year);*/

function orderByYear(arr) {
  const otherMovies = arr.map((element) => element);
  otherMovies.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return otherMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const otherMovies = arr.map((element) => element.title);
  otherMovies.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  otherMovies.splice(20, arr.length);
  return otherMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average