// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const allDirectors = array.map(function(movie){
    return movie.director
  })
  return allDirectors;
} 

// allDirctors.filter(function(director, i){
//   return allDirectors.indexOf(diector) == i
// })


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  const filtered = array.filter(function(movie) { 

     if (movie.director == 'Steven Spielberg' &&
	     movie.genre.includes('Drama')) {
	      return true
     }
 
    })
    return filtered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  allScores = array.map(function(movie){
    return movie.score
  })
  const totalScores = allScores.reduce(function(acc,curr){
    return  acc+(curr||0)
    
  },0)
  let Average
  if (allScores.length == 0){
    Average =0
  } else
   Average = totalScores / array.length
  return Number(Average.toFixed(2))
  
}
// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  

  const dramaFiltered = array.filter(function(movie) { 

     if (movie.genre.includes('Drama')) {
	      return true
     }
  }) 
  const dramaAverage = scoresAverage(dramaFiltered )

  // const allDramaScores = dramaFiltered.map(function(movie){
  //   return movie.score
  // })
  // const totalScores = allDramaScores.reduce(function(acc,curr){
  //   return  acc+curr
    
  // },0)
  // if (dramaFiltered.length == 0){
  //   dramaAverage = 0
  // } else{
  // dramaAverage = totalScores / dramaFiltered.length}
  return dramaAverage
    
  
 
} 
  
          // console.log(dramaMoviesScore(movies))    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
const sorted = arr.slice().sort(function (a,b){
  if (a.year != b.year){
    return a.year - b.year;
  } else{
    return a.title.localeCompare(b.title);
  }
});
return sorted;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
