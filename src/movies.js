// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)? --.filter
function getAllDirectors(diretores) {
  let somenteDiretores = []
  movies.map( diretores => diretores.director);
  somenteDiretores.push(diretores.director)
  return somenteDiretores
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? 

function howManyMovies(dramaMovies) {
  let stevenDrama = 0;
  movies.map ( dramaMovies => dramaMovies.genre === 'Drama')
    stevenDrama ++
  if (dramaMovies.length === 0) {
    return 0;
  };
  if (movies.map(dramaMovies => dramaMovies.director !== 'Steven Spielberg')) {
    return 0;
  };
  return stevenDrama;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals 
function scoresAverage(arr) {
  const scoreAverage = movies.reduce((acc, currentObject, currentIndex, originalArray) => {
    if (currentIndex === originalArray.length -1) {
      acc = acc + currentObject.score
      return acc / originalArray.length
    }
    return acc + currentObject.score
    }, 0);
    if (arr.length === 0)  {
      return 0;
    };
    if (movies.reduce(dramaMovies => dramaMovies.score === 0)) {
      return scoreAverage
    };
  return scoreAverage
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let overallScore = []
  if (movies.map ( dramaMovies => dramaMovies.genre !== 'Drama')) {
    return 0
  }
  if (movies.map ( dramaMovies => dramaMovies.genre === 'Drama')) {
    return scoresAverage
  };
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(ano) {
  let anoOrganizado = []
  const ordemAno = movies.sort((a, b) => {
  })
  return ordemAno
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  if (arr.length < 20) {
    return arr
  };
  let nomeOrganizado = []
  const top20 = movies.slice(0, 20)
  movies.sort((a, b) => {
    return a.title.localeCompare(b.title)
  });
  return top20
  }

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
