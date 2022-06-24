// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map(person => person.director)
    return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielMovies = movies.filter (element => {
    return element.director.includes('Steven Spielberg') && element.genre.includes('Drama')
})
    return spielMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const scoreSum = movies.reduce((acc, curr) => {
    
    if (curr.score == undefined) {
      return acc;
    }
    return acc + curr.score;
  }, 0)

  const scoreAvg = scoreSum / movies.length;
  return Number(scoreAvg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(element => element.genre.includes ('Drama'));
  if (dramaMovies.length === 0){
    return 0;
}
  let dramaTotal = dramaMovies.reduce((acc, curr) => {
    if ( curr.score == undefined) {
      return acc;
    }
    return acc + curr.score;
  },0);
  
  let averageDramaScore = dramaTotal / dramaMovies.length;
  return Number(averageDramaScore.toFixed(2));
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArray = [...movies];
  return newArray;
  const sortedByYearAndTitle = newArray.sort(function (a, b) {
    if (a.year === b.year) 
      return a.title.localeCompare(b.title);
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1; 
      
  });
  return sortedByYearAndTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map((movie) => movie.title);
  titles.sort((a,b) => a.localeCompare(b));
  const top20 = titles.slice(0,20);
  return top20;
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
