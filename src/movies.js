// Code diary:
//---12.06.2021 - Lab esta em atraso(bastante). Refeito com ajuda do material das aulas e do conteudo do curso.

const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  const directors = arr.map(elem => elem.director);
  const uniqueDirectors = directors.filter((elem, i, arr) => {
    arr.indexOf(elem) === i
  });
  return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredMovies = movies.filter(elem =>
    elem.director === `Steven Spielberg` && elem.genre.includes(`Drama`));
  return filteredMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0 };
  const totalSum = movies.reduce((sum, curr) => {
    if (typeof movies.score === `number`) return sum + curr.score;
    return acc;
   } , 0);
  return (totalSum / movies.length).toFixed(2);
};
// --- Nao estou entendo poque nao esta validando tudo em verde no teste :(
// --- Sensacao que tenho que praticar mais para pegar a sintaxe melhor.

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 
  const dramaArr = movies.filter(elem => elem.genre.includes(`Drama`));
  const scoreDrama = dramaArr.reduce((acc, curr) => acc + curr.score);
  return (scoreDrama / dramaArr).toFixed(2);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedArray = movies.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    }
    if (a.year > b.year) {
      return -1;
    }
    return 0
  });
return sortedArray
}

  /* finalArray.unshift(`sortedArray`);
  return finalArray; */
 }

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
