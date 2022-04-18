// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

//const movies = require("./data");



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayMovies) {
let newArrayDirectors = arrayMovies.map(function (array) {
return array.director;
})
return newArrayDirectors;
}
//console.log (getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrayMovies) {
  let numberOfDramaMoviesSpielberg = 0;
  if(arrayMovies.length===0) return 0;
    else {
    let dramaMovies = arrayMovies.filter(array => {
    if (array.director==="Steven Spielberg") {
      for(let i=0; i<array.genre.length; i++) {
            if (array.genre[i]==="Drama") {
              numberOfDramaMoviesSpielberg++;
              return array;
            }
      }
    }
    }
    );
  }
  if (numberOfDramaMoviesSpielberg===0) return 0;
  else return numberOfDramaMoviesSpielberg;
}
//console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if(array.length===0) return 0;
    else {
      const sumScores = array.reduce (function (accumulator, movie) {
        return accumulator + movie.score;
      }, 0);
      return (sumScores / array.length).toFixed(2);
    }
}
  //console.log (scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

//Option 1

function dramaMoviesScore(array) {
  if(array.length===0) return 0;
    else {
      let nrOfDramaMovies=0;
      let sumScoreDrama = array.reduce((accumulator, movie) => {
            if (movie.genre.includes('Drama')) {
              nrOfDramaMovies++;
              return accumulator + movie.score;
            }
     }, 0);
      return (sumScoreDrama / nrOfDramaMovies).toFixed(2);
    }
}
//console.log (dramaMoviesScore(movies))

//Option 2:

// function dramaMoviesScore(array) {
//   if(array.length===0) return 0;
//   else {
//     let nrOfDramaMovies=0;
//     let sumScoreDrama = array.reduce((accumulator, movie) => {
//         for(let i=0; i<movie.genre.length; i++) {
//           if (movie.genre[i]==="Drama") {
//             nrOfDramaMovies++;
//             return accumulator + movie.score;
//           }
//         }
//     }, 0);
//     return (sumScoreDrama/nrOfDramaMovies).toFixed(2);
//   }
// }
// console.log (dramaMoviesScore(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//For ordering by year only:

// function orderByYear(arrayMovies) {
//   let arrayCopy = arrayMovies.slice();
//   arrayCopy.sort((a,b) => a.year - b.year);
//   return arrayCopy;
// }
//console.log(orderByYear(movies))

function orderByYear(arrayMovies) {
  let arrayCopy = arrayMovies.slice();
  arrayCopy.sort( function (a,b) {
    if(a.year < b.year) return -1;
    if(a.year > b.year) return 1;
    if(a.year === b.year) {
      if(a.title.toUpperCase() < b.title.toUpperCase()) return -1;
      if(a.title.toUpperCase() > b.title.toUpperCase()) return 1;
      if(a.title.toUpperCase() === b.title.toUpperCase()) return 0;
    }
  });
  return arrayCopy;
}
//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayMovies) {
  if(arrayMovies.length===0) return 0;
  else {
    let arrayCopy = arrayMovies.slice();
  arrayCopy.sort (function (a,b) {
    if(a.title.toUpperCase() < b.title.toUpperCase()) return -1;
    if(a.title.toUpperCase() > b.title.toUpperCase()) return 1;
    if(a.title.toUpperCase() === b.title.toUpperCase()) return 0;
})
let arrayTwenty =[];
let n=0;
if(arrayCopy.length>20) {
  while (n<20) {
    arrayTwenty.push(arrayCopy[n]);
    n++;
    }
} else {
  while (n<arrayCopy.length) {
    arrayTwenty.push(arrayCopy[n]);
    n++;
    }
}
let arrayFinal=[];
for(let i=0; i<arrayTwenty.length; i++) {
  arrayFinal[i] = arrayTwenty[i].title;
}
return arrayFinal;
  }
}

//console.log(orderAlphabetically(movies))


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
