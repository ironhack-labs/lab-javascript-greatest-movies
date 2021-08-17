// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  let directors = arr.map(function(el) {
    return el.director;
  })
  return directors;
  // we need to return this or it just gets undefined
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

const filtered = movies.filter(function(movie){
  if (movie.director === 'Steven Spilberg' && movie.genre.icludes ('Drama')){
    return filtered
  }
})

// filter out
// check out the range of the filtered results

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(array) {

const total = 0; 
const count = 0; 

array.forEach(function(item, index){
total += item; 
count++; 

});

return total/count; ht

}


// diferent way of doing it ES6 


console.log(scoresAverage(array)); 


function scoresAverage(array) {

  const average = array.reduce((total,next) => total + array.average, 0) / arr.score.length
}


//





// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(array) {

const dramas = array.filter(function (genre) { return array.genre === 'Drama'}); 
const average = dramas.reduce((total,next) => total + next.score, 0) / dramas.length; 

console.log(average); 

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

  const sorted = movies.slice().sort(function(a,b){
    if(a.year !== b.year) {
      return ayear - b.year; 
  
    } 
    else {
      return a.title.localeCompare(b.title); 
    }
  })

  return sorted


}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// users.sort(function(a,b){
//   return a.firstname.localeCompare(b.firstname);
// })


function orderAlphabetically(array) {

  const titles = movies.map(function(movie){
    return movie.title
  })


  const sorted = array.sort(function(a,b) {

    return a.title.localeCompare(b.title)

  })

  const solution = sorted.slice(0,20)
  
  return solution;
  
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map (function(movie){
    let convertedDuration = 0; 
    if (movie.convertedDuration.icludes('h'){
      convert convertedDuration
    })
     
    }
  })
}

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
