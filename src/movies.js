// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//   Mi función original, funciona bien, pero la de abajo creo que es el bonus... me sale con el console.log bien al menos...
// function getAllDirectors(list) {
//   return list.map(direct => direct.director)
// }
function getAllDirectors(list) {
  let directors = list.map(direct => direct.director);
  return directors.filter((element, index) => directors.indexOf(element)===index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(list) {
  return list.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg").length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(list){
const scoreAvg = list.reduce(function (scores, movie){
  if (!movie.score){ movie.score = 0}
  return scores + movie.score;
}, 0) /list.length;
return Math.round(scoreAvg*100)/100 || 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(list) {
  let dramaList = {}
  dramaList = list.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaList);   
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(list) {
//  return list.sort(function (mov, numb) {
//     if (mov.year > numb.year) {
//       return 1;
//     }
//     if (mov.year < numb.year) {
//       return -1;
//     }
//     return 0;
//   });
// }

function orderByYear(arr) {
  let yearArr = [...arr];
  return yearArr.sort((a, b) => {
      if(a.year === b.year) {
        return a.title.localeCompare(b.title);
      } else  {
         return a.year - b.year;
      }
     });
 }  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(list) {
  const newList = list.map(titles => titles.title)
  let newList20 =  newList.sort();
  return newList20.slice(0, 20)
}
// function orderAlphabetically(list) {
//   const newList = list.map(titles => titles.title)
//   let newList20 =  newList.sort(function(one, two){
//     if(one > two){
//       return 1
//     }
//     if (one < two){
//       return -1
//     } 
//     return 0
//   })
//   return newList20.slice(1, 21)
// }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(mu) {
  const bulala =[] 
  return bulala
}

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
