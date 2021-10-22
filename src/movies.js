
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return[... new Set(movies.map(function (movies){
    return movies.director;
  }))]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(function(movie){  
    return movie.director === "Steven Spielberg" && movie.genre.indexOf('Drama') >= 0
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0){
    return 0;
  }
  const scores = movies.map( function (movie){  
    return movie.score ;
  }).filter(Number)
  const total = scores.reduce(function(acc,score){    
    return acc + score;
    },0)
  avg = total/movies.length;

  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter(function(movie){
    return movie.genre.indexOf('Drama') >= 0
  })
  const scoreDrama = scoresAverage(dramas)

  return scoreDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.sort(function (a,b){
    if (a.year === b.year){
      console.log (a.title)
      return a.title.localeCompare(b.title)
    }     
      return a.year - b.year;    
  });
    
  return [...new Set(sorted)];
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copied =[...movies]
  const sorted = copied.sort(function(a,b){
    return a.title.localeCompare(b.title);
  }).slice(0,20);
  
  return sorted.map(function (title){
    return title.title
  })
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
