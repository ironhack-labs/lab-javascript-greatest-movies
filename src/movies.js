//Copy of a few movies

const testmovies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  }
];


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
// const getAllDirectors = (movies) => {
//   const directors = movies.map((movie) => movie.director);
//   console.log(directors);
//     return directors;
// };
// getAllDirectors(movies);

// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => { 
  const directors = movies.map((movie) => movie.director);
  console.log(directors);
  return directors;
};
  getAllDirectors(movies);

// //SAME AS a traditional function
// function getAllDir(film) {
//   const dir = movies.map((film)
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  const howManyMovies = (movies) => { 
    return movies.filter((movie) => {
      return movie.director == "Steven Spielberg" && movie.genre.includes("Drama");
    });
  }
   console.log(howManyMovies(movies).length);

//Iteration 2.B - get only Steven Spielberg movies
function howManyMovies_SS(movies) {
  const result = movies.filter((movie) => {
    movie.director === "Steven Spielberg"
  });
}
console.log(howManyMovies_SS(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals. NB function-in-function below...
function scoresAverage(movies) {
const sum = movies.reduce((accumulator, currentValue) => { //remember, we must have two params for .reduce function
  return accumulator + currentValue.score; //get the specific part of the obj .score as the .reduce function loops through
}, 0); // 0 because we are summing an array of object, and we start the index at 0 for our accumulator (it's always 0)

const average = sum / movies.length; //this is to get the average
return Number(average.toFixed(2)); //and ensuring the average is represented as a whole integer
}
// console.log(sum);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    return scoresAverage(movies);
}
console.log(scoresAverage(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
