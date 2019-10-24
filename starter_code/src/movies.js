/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  return (
    Math.round(
      (array.reduce((count, eachMovie) => {
        return count + Number(eachMovie.rate);
      }, 0) /
        array.length) *
        100,
    ) / 100
  );
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMovies(array) {
  let list = array.filter(movie => {
    let validResult = false;
    movie.genre.forEach(gen => {
      if (gen === 'Drama') {
        validResult = true;
      }
    });
    if (validResult === true) {
      return movie;
    }
  });
  return list;
}
function dramaMoviesRate(array) {
  let list = dramaMovies(array);
  return isNaN(list) === true ? ratesAverage(list) : 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(array) {
  let sortedList = [];
  sortedList = array.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return sortedList;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  let dramas = dramaMovies(array);
  let dramasBySpiel = dramas.filter(movie => {
    return (movie.director === 'Steven Spielberg') === true ? movie : 0;
  });
  return dramasBySpiel.length;
}
let testMovies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3',
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2',
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0',
  },
];
let testResult = howManyMovies(movies);
console.log(testResult);
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
