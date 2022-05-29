// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMovies) {
    
  return arrMovies.map((movie) => {
    return movie.director
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {

  return (arrMovies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {

  if (arrMovies.length === 0) {return 0};


  const sumMovies = arrMovies.reduce((acc, curr) => {

    if (curr.hasOwnProperty('score')) { 

      if (curr.score >= 0) {acc += curr.score;} 
      
        else if (curr.score === '') {acc += 0;}  
    }  
    
      else {acc += 0}

    return Number(acc)
  }, 0)

  return Number((sumMovies / arrMovies.length).toFixed(2));  
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {

  if (arrMovies.length === 0) {return 0};

  const dramaMoviesArr =  arrMovies.filter((movie) => movie.hasOwnProperty('genre') && movie.genre.includes('Drama'));

  if (dramaMoviesArr.length === 0) {return 0}

  const scoreDramaMovies = dramaMoviesArr.reduce((acc, curr) => {

    acc += curr.score;
    
    return acc;
  }, 0)

  return Number((scoreDramaMovies / dramaMoviesArr.length).toFixed(2));  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {

  return arrMovies.slice(0).sort(function(a, b) {

  if (a.year < b.year) {return -1}
  if (a.year === b.year) {
    if (a.title < b.title) { return -1}}
      
});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {

const arrMoviesTitles = arrMovies.map((movie) => movie.title)

return arrMoviesTitles.sort(function(a, b) {if (a < b) {return -1}}).slice(0,20)
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrMovies) {

 return arrMovies.slice(0).forEach((movie, index) => {

  if (index === "movie.duration") {

  let hours = Number(movie.duration.substring(0, 2).replace('h','')) * 60;

  let minutes = Number(movie.duration.substring(3).replace('min',''));

  movie.duration = hours + minutes;
  }
});

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrMovies) {

  if (arrMovies.length === 0) {return null};  

  arrMovies.map((movie) => {
    return movie.year + movie.score;
  })

return `The best year was <YEAR> with an average score of <RATE>`
}



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
