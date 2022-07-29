




// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(moviesArray) {

  const allDirectors = moviesArray.map(function(movie){
    return movie.director
  })
  return allDirectors
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
      
  if(moviesArray.length === 0){
    return 0;
  }

   let spielbergMovies = moviesArray.filter( movie => {
    if(movie.director ==='Steven Spielberg' && movie.genre.includes('Drama')){
      return movie;
    }
   })
  
   return spielbergMovies.length;
   
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(!moviesArray.length){
      return 0;
    }

    let total = moviesArray.reduce(function(acc,curr){
      return acc + curr.score;
    },0)

      const average = total/moviesArray.length;
      const convertedNumber = Number(average.toFixed(2));
      return convertedNumber;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  if(moviesArray.length === 1){
    return moviesArray[0].score;
   }

    let dramaMovies = moviesArray.filter( movie => {
      if(movie.genre.includes('Drama')){
         return movie;
      }
    })
         const DramaMoviesAverage = scoresAverage(dramaMovies)
      return DramaMoviesAverage;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
