// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  
  const Directors = array.map(function(movies){
  return movies.director 
  })
  return Directors

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {

  let StevenSpielbergDramaMovies = 0;

  const filterMovies = array.filter(function (movies) {
    
    if (movies.director == 'Steven Spielberg' && movies.genre.includes('Drama'))
    return StevenSpielbergDramaMovies += 1;

  });
  
return StevenSpielbergDramaMovies

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  let length = array.length;

  if (length === 0) {
    return 0
  }

  

  const Scores = array.map(function(number){
    return number.score  
  })

 
  const totalSum = Scores.reduce(function (prev, curr) {
    return prev + curr ;
  })

  let average = totalSum/length;

  let result = Math.round( average * 1e2 ) / 1e2;
  
 return result
  

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let length = array.length;
  let sum = 0;

  const filterMovies = array.filter(function (movies) {
    
    
    if (movies.genre.includes('Drama')) 
    return movies;
    
  });

  for (i = 0; i < filterMovies.length ; i++) {
      sum += filterMovies[i].score; 
  }

  let average = sum/length;
  let result = Math.round( average * 1e2 ) / 1e2;

  return result

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
 
const sorted = array.sort((a, b) => a.year - b.year)

function compare( a, b ) {
  if ( a.year === b.year ){
    return a.title > b.title
  }
  }

// console.log(sorted)
return sorted

  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

   
    let arr20 = array.map(function(el){
      return el
    })
    arr20.sort(function(a,b){
      return a.title.localeCompare(b.title)
    })
     arr20 = arr20.slice(0,20).map(function(el){
      return el.title
    })
    return arr20
  

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {


  // console.log(array.duration[0])

  const Minutes = array.map(function(movies){
    return movies.duration[3]
  })

  // console.log(Minutes)
  return Minutes

  // if duration includes 1 


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
