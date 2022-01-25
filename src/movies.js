
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map(element => element.director); //element = parâmetro que a função tá recebendo
}

// poderia usar tbm:
// return movies.map(function(element){
//   return element.director
//   });

// poderia usar tbm II:
// movies.map((element) => {
//   return element.director;
// });


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenSpielberg = movies.filter((currentMovie) => {
    return currentMovie.director === 'Steven Spielberg' && currentMovie.genre.find(element => element === 'Drama')  
  });

  return stevenSpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (!movies.length) {
    return 0;
  }

  let onlyScores = movies.map(element => {
    if (element.score) {
      return element.score;
    }else{
      return 0;
    }
  });
  
  let sum = onlyScores.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
  });

  let result = sum / onlyScores.length;
 
  return +result.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let onlyDrama = movies.filter((currentMovie) => {
    return currentMovie.genre.find(element => element === 'Drama')  
  });

  if (!onlyDrama.length) {
    return 0;
}

  let onlyScores = onlyDrama.map(element => {
    if (element.score) {
      return element.score;
    }else{
      return 0;
    }
  });
  
  let sum = onlyScores.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
  });

  let result = sum / onlyScores.length;
 
  return +result.toFixed(2);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let yearsArr = movies.filter(function(element){
    return element.year;
  });
  
  yearsArr.sort(function(a, b){
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); // comparação da ordem alfabética
      }else{
        return a.year - b.year; // ordem crescente
      };
  });

  return yearsArr;
}  


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
 let titlesArr = movies.filter(function(element){
    element.title;
  });

  titlesArr.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });

  let titlesArrSliced = titlesArr.slice(0, 20);

  let twentyTitlesOnly = titlesArrSliced.map(function(element){
    return element.title;
  });
  return twentyTitlesOnly;
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
