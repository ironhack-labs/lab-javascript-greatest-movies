// The `movies` array from the file `src/data.js`.

const movies = require("./data.js")
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(arr) { 

  const newArray = arr.map((el) => el.director)
  return newArray;
}

//console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergMovies = arr.filter((el) => {

    return el.director === 'Steven Spielberg' && el.genre.includes('Drama') 
  });
  return spielbergMovies.length;
}

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {

    let newArray = arr.map(el => {
      if (el.score === '' || !el.score) {
        return el.score = 0;
      } else {
        return el.score;
      }
    })
  
    let sum = newArray.reduce((acc, value) => {
      return acc + Number(value)
    }, 0);

    let averageNum = Math.round((sum / newArray.length) * 100) / 100;
    return averageNum;
  }
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
//  genre: ['Drama']
function dramaMoviesScore(arr) {

  let dramaArr = arr.filter((el) => {
   return el.genre.includes('Drama');
  })

  let dramaScore = scoresAverage(dramaArr);
  return dramaScore;
}


console.log(dramaMoviesScore(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedArr = [...arr];
  return sortedArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year
    }
  })
};
//console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // sort the movies alphabetically
  
  let sortedArr = [...arr];
  sortedArr.sort((a, b) => a.title.localeCompare(b.title))
  // console.log(sortedArr)

   
  let sortedTitles = sortedArr.map((el) => el.title)
 
  
  return sortedTitles.splice(0, 20)
  // extract titles from objects, into an array
  //  only first 20 titles

}
console.log(orderAlphabetically(movies))

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
