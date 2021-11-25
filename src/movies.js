const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

  const directors = movies.map(movie => movie.director) //Faz o que o enunciado pede
    const IndividualNameDirector = directors.filter((director, index) => directors.indexOf(director) === index); // Bônus > Filtra para os nomes não se repetirem
  return IndividualNameDirector;
}

// Usei o console.log(getAllDirectors(movies)) para ver os resultados;


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergFilms = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergFilms.length;
}

// console.log(howManyMovies(movies)); para ver o Resultado, que nesse caso foi 4.


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0){
    return 0;
  }

  let allScores = movies.map(function(movie){
    return movie.score;
  }).filter(function(score){
    return score;
  })

  let totalSum = allScores.reduce(function(acc, currentValue){
    return acc + currentValue ;
  }, 0)
  return Math.round((totalSum / movies.length)*100)/100;
}
//console.log(scoresAverage(movies)); Para ver o resultado.


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return scoresAverage(movies.filter(movie => movie.genre.includes('Drama')));
}
//console.log(dramaMoviesScore(movies)); Para ver o resultado.



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const yearOrder = movies.sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    } else {
      return movieA.year - movieB.year;
    }
   });
  return yearOrder;
 }
 
 //console.log(orderByYear(movies)); para ver o resultado.



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  
    const filmsOrder = [];
    for (let i = 0; i < 20; i++) {
      if (movies[i]) {
        filmsOrder.push(movies[i].title);
      }
  
    }
    filmsOrder.sort();
    return filmsOrder;
  }
  
  // console.log(orderAlphabetically(movies)); Para saber o resultado


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
