// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movie) {
  let mappedDirectors = movie.map((singleMovie)=>{
    return singleMovie.director
  })
  
  return mappedDirectors

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movie) {

  if(movie.length == 0 ){
    return 0;
  }
  
  let sum = 0;
  
  let filterdirectors = movie.map((elem) => {
    if(elem.director.includes('Steven Spielberg') && elem.genre.includes('Drama')){
      console.log(1) 
    return sum= sum+ 1
  }
    else{
      return 0;
    }
  
 
  }) 
  
 return sum

  
 
  
 
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movie) {

  if(movie.length == 0 ){
    return 0;
  }

  let scores = movie.reduce((sum,elem)=> {

    if(elem.score){
    return sum + elem.score
    }
    else {
      return sum
    }

    
  },0)

  
  
  return Math.round((scores/movie.length)* 100) / 100;

  
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movie) {
  

  let howManydrama = movie.filter((elem)=>{
    return elem.genre.includes('Drama')
  })
  
let scoreOfdrama =0;
  let filterScoreofdrama = movie.map((elem) => {
    if( elem.genre.includes('Drama')){
      
    return scoreOfdrama = scoreOfdrama + elem.score
  }
  })

  return scoreOfdrama /howManydrama.length
  }




  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  let cloneNumber = JSON.parse(JSON.stringify(movie))
  
 let sortMovie = cloneNumber.sort((firstItem, secondItem) => {
   if(firstItem.year > secondItem.year){
     return 1
   }
   else if(secondItem.year >firstItem.year){
     return -1
   }
   else {
     if(firstItem.title>secondItem.title){
       return 1
     }
     else if (firstItem.title<secondItem.title){
       return -1
     }
     else{
       return 0
     }
   }
  
 })
  return sortMovie
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie) {

  let cloneNumber = JSON.parse(JSON.stringify(movie))
  
 let sortMovie = cloneNumber.sort((firstItem, secondItem) => {
   if(firstItem.title > secondItem.title){
     return 1
   }
   else if(secondItem.title >firstItem.title){
     return -1
   }
   else {
     return 0 
   }
  
 })
  return sortMovie.title
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
