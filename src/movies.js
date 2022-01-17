// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const neW = movies.map((eachMovies)=>{
    return eachMovies.director;
  })

  return neW
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

    const newArry = movies.filter((eachMovies)=>{
        return eachMovies.genre.toLowerCase() === 'drama';
    })

    return eachMovies.genre;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const scoreArr = movies.reduce(function(accu, current){
   
    return accu + current.score;
  },0)

 

  return Number((scoreArr/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {

  const newArrDrama = array.filter(eachMovies => {
  return eachMovies.genre.includes('Drama')

   })

  const scoreSum = newArrDrama.reduce((accumulat, currentElem)=> {
  return accumulat + currentElem.score; 

  
  },0);

  let average = scoreSum/array.length 

  return average;
 
  

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

  const arrCopy = JSON.parse(JSON.stringify(array))

//   numbers.sort(function compare(a, b) {
//     return a - b;
// })

// console.log('ORDENACIÓN CUSTOMIZADA:', numbers)

  let orderArr = arrCopy.sort(function compare (a, b){

    return a.year - b.year;
  })
 
 return orderArr 
 



}



// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

  const neWarr = array.map((eachMovies)=>{
    return eachMovies.title;
  })
  
  
  const arrCopy = JSON.parse(JSON.stringify(neWarr));
  
  

  const new2 = neW.sort()

  
  return new2.slice(0,20)
}


// console.log(orderAlphabetically(movies));


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
