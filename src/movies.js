// Iteration 1: All directors? - Get the array of all directors.
const movies = require('./data.js')

function getAllDirectors(movies) {
const allDirectors = movies.map (elm => elm.director)
  return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaSpilber = movies.filter (elm => elm.director.includes('Spielberg') && elm.genre.includes('Drama'))
  return dramaSpilber.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalScores = movies.reduce((acc, elem) => {
    return acc += elem.score
  },0);
  if(!movies.length){
    return 0;
  }else {
    const averageScore = parseFloat((totalScores/movies.length).toFixed(2));
    return averageScore
  };
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
let genreDramas = movies.filter (elm => elm.genre.includes('Drama'))
return scoresAverage(genreDramas);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesYear = [...movies]
  moviesYear.sort ((a, b) => {
    if(a.year === b.year) {
    return a.title.localeCompare(b.title);
  }
  return a.year - b.year
});
  return moviesYear
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesAlph = [...movies]
  const allTitle= movies.map (elm => {
    return elm.title
  })

  allTitle.sort ((a, b) => {
    if ( a > b) {
      return 1
    } else if (b > a) {
      return -1;
    }
    return 0; })
    
    return allTitle.slice(0,20)
  }
  
  
  
  

  
  /*const allMovies = movies.map ((elm) => {
    return elm.title;
  });
moviesAlph.sort ((a,b) =>{
  return a.title.localeCompare(b.title);
});
return moviesAlph.slice(0,20);
}*/

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
