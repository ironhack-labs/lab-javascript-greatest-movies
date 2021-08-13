// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

const getAllDirectors = (movies) => {
  const directorsArray = [];
  movies.map( (movie) => {
    directorsArray.push(movie.director);
  
})
return directorsArray;
}

// console.log(getAllDirectors(movies));

//use normal for loop i !== indexOf to remove extras

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies() {}

const howManyMovies = (movies) => {
  const filtered = [];
  movies.filter((movie) => (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') ));
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let numMovies = array.length;
  const sum = array.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  return ((sum / (numMovies)).toFixed(2) );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) => {
  let numberOfMovies = 0;
  const sum = movies.reduce((acc, movie) => {
    //test ? true _value_returned : false_value_returned
    // return movie.genre.includes('Drama') ? acc + movie.score : 0;
    if (movie.genre.includes('Drama')) {
      numberOfMovies++;
      return acc + movie.score;
    } else {
      return acc + 0;
    }
  }, 0);
  return (sum / numberOfMovies).toFixed(2); 
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  //sorting a & b where a and b wil be each movie swapping a for b
  //if a has a greater year than b i.e. 1992 & 1980
  const newSorted = movies.sort( (a, b) => (a.year > b.year ? 1 : -1));
  return newSorted;
  }

// console.log(orderByYear(movies));

//bootleg sort function

// function compare(a,b) {
//   if (a.year < b.year) {
//     return -1;
//   }
//   else if (a.year > b.year) {
//     return 1;
//   }
//   //a must be equal to b
//   else {
//     return 0;
//   }
// }

// console.log(compare(m1.year, m2.year));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = () => {
  const newSorted = movies.sort( (a, b) => (a.title > b.title ? 1 : -1));
  return newSorted;
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
