// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  

  const directorList = movies.map(movie => movie.director);

  return directorList

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const stevenMovies = movies.filter(movie => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')   
   })
      return stevenMovies.length
  }

   

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 
 if (movies.length === 0) return 0

  const avgScore = movies.reduce((acc, el) => {
    if (el.score) {
      acc += el.score
    } else {
      acc += 0
    }
    return acc
  }, 0);

let total = avgScore / movies.length

total = Number(total.toFixed(2))
//  Number(total)

return total
 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => {
    return movie.genre.includes('Drama')   
   })
      if (dramaMovies.length === 0){

      return 0}
 //  Number(total)
 
 return scoresAverage(dramaMovies)


  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  movies.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year){
      return -1;
    } else {
      if(movie1.title < movie2.title) { return -1; }
      if(movie1.title > movie2.title) { return 1; }
      return 0;
    }
    
  });

    

  return movies.map(element => element); 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
 
  const newMoviesArr =  movies.map(element => element);

  newMoviesArr.sort((movie1, movie2) => {
    
    if (movie1.title > movie2.title) {
      return 1;
    } else if (movie1.title < movie2.title){
      return -1;
    } else {
      
      return 0;
    }
    
  });


  const moviesTitleArr = newMoviesArr.map(movie => movie.title)

  return moviesTitleArr.slice(0, 20)

 


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
