// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){

  const director = movies.map (item => item.director)

  return director;

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const stevenDramaMovies = movies.filter( elem => {
    return elem.director.includes("Steven Spielberg") && elem.genre.includes("Drama");
      
  })
  return stevenDramaMovies.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const promMovies = movies.reduce((acc, val) => {
    
  return mathFloor(promMovies / movies.score.length);      
})
    




// Iteration 47: Drama movies - Get the average of Drama Movies



function dramaMoviesScore(movies) {

  const aveDramaMovies = movies.map(movies => movies.genre.includes ('Drama'));
  
  const promDrama = movies.map(movies => {
  movies.score = score.length / aveDramaMovies.length

  return dramaMoviesScore()
})
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const ascenYear = movies.year.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if(a > b){
      return 1;
    } else {
      return 0
    }
    return ascenYear; 
  })
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  if(movies.length < 20){
    return null;
  }
  const numbersInOrder = movies.title.sort()

  return numbersInOrder(array)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const horToMin = movies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  const bestScoreYr = movies
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
