// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
   
    function getAllDirectors(array){
    
    let maparr = array.map((item)=>item.director)
    return maparr
   }




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  
  let filterarr = array.filter((item) => item.director  === "Steven Spielberg" && item.genre.indexOf("Drama") >= 0 );
  return filterarr.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array){
 
  if (array.length === 0){
    return 0
  }
  
  
  let mediaTotal = array.reduce((acumulador , item) => acumulador + item.score, 0 );
  
  let total = mediaTotal / array.length

  return parseFloat(total.toFixed(2))
  }


scoresAverage(movies)



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  
  let arrayFiltrado = array.filter((item)=> item.genre.includes("Drama"));

  if (arrayFiltrado.length === 0){
    return 0
  }

  let somaScore = arrayFiltrado.reduce((acumulador , item) => acumulador + item.score, 0 );
  
  return parseFloat(( somaScore / arrayFiltrado.length).toFixed(2))
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){

  let oldMovie = array.map((item) => item )
  oldMovie.sort((a, b) =>{
    if(a.year === b.year){
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
  return oldMovie
}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
  
  let orderMovies = array.map((item1) => item1.title)
   orderMovies.sort();
   return orderMovies.slice(0, 20)
  
 
}

orderAlphabetically(movies)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array){

  let minutes= array.map((item) => item.duration);
   
  // if (minutes.includes(h)){
    
  // }
  //  console.log(minutes.includes(h));
  //  console.log(minutes.includes(h, 0))
  
  }
  

 


turnHoursToMinutes(movies)

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array){
  if (array.length === 0 ){
    return null
  }
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
