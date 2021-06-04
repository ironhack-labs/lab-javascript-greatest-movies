// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
   
  const movieMap = movies.map((movie) => movie.director );
 
  return movieMap
}
//that receives an array of movies as an argument and returns a new (mapped array)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(directors) {

  const directorsFilter = directors.filter((directors) => getAllDirectors == 'Steven Spielberg' && movie.genre.includes('Drama'); // can i used a forEach?  instead? 
  //get director S.S. and drama 

  return directorsFilter.length   //  gets the count 
  //index starts at 0 so take away one for extra number? DERP!!! IDK -- Feedback 

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(score) {

  const averageScore =  score.reduce(score,0)/ averageScore.length 
   // new array to hold the average   
  //2 decimal scores -  this will need to be fixed with a method rounding *Floating numbers issue*
  // get sum so use reduce 
  // divide .length of scores

  return scoresAverage.toFixed(2);// to fix  decimal 

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(score) {
  const averageScore =  score.reduce(score,0)/ averageScore.length => score.genre == 'Drama' );
    // same logic  as before but only applied   if  movie.genre  =  "Drama"

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
// using sort 
  let cloneNumber = JSON.parse( JSON.stringify(numbers)  ) //always clone first because data will get modified otherwise

cloneNumber.sort((first, second) => { // this format to fix any wierd things like  10000 vs 1  example
    if (first > second) {
        return 1
    }
    else if (first < second) {
      return -1
    }
    else {
      return 0
    }
})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {


  let cloneAlphabetically = JSON.parse( JSON.stringify(numbers)  )
  
  cloneAlphabetically.sort((first, second) => { 
    
    if else(first > second) {
        return 1
    }
    else if (first < second) {
      return -1
    }
    else {
      return 0
    }
})
  
  if (20<=cloneAlphabetically.length) { // 20 titles  if   20 < .length
    return  cloneAlphabetically
 }

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
