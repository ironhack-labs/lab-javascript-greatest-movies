// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director);
  return directors
}
function uniq(newArrDir) {
  return newArrDir.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let result =  movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))

  return result.length
  }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(!movies.length) {
    return 0
  }
  const sum = movies.reduce ((a, b) => {
    if(b.score){
      return a + b.score
    }
   },0);

  const avg = (sum / movies.length);
  return Math.round(avg * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
let dramaMovies = movies.filter(movie=>{
  return movie.genre.includes("Drama")
})
const sum = dramaMovies.reduce ((a, b) => {
    if(b.score){
      return a + b.score
    } else {
      return a + 0
    }
   },0);

  const avg = (sum / dramaMovies.length);
  return Math.round(avg * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedYear = movies.sort ((a, b) => {
    return a.year - b.year;
  })
  return orderedYear.slice()
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let titleMovies = movies.map(movie=> {
    return movie.title 
  })

  const sortAlpha = titleMovies.sort ((a, b) => {
     a.title.localeCompare(b.title)
  })
  return sortAlpha
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
