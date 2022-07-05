// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((eachElement) => {
    return eachElement.director
  })
  return allDirectors
}

console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filterDirector = moviesArray.filter((movie)=>{
    return (movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`)) 
  });
  return filterDirector 
}
console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let total = moviesArray.reduce ((acc,elem)=>{
    if (elem.score >= 1){
      return acc + elem.score
    }
  }, 0)
let avg = total / moviesArray.length
let avg2Dec = avg.toFixed(2)
let avg2DecNum = Number(avg2Dec)
return avg2DecNum 

}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMov = moviesArray.filter((movie)=>{
    return movie.genre.includes(`Drama`)
  });
  let total = dramaMov.reduce ((acc,elem)=>{
    if (elem.score >= 1){
      return acc + elem.score
    }
  }, 0)
let avg = total / dramaMov.length
let avg2Dec = avg.toFixed(2)
let avg2DecNum = Number(avg2Dec)
return avg2DecNum 
}
console.log(dramaMoviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = JSON.parse(JSON.stringify(moviesArray))
  let movieShort = moviesCopy.sort ((elem1, elem2) => {
    
    if (elem1.year > elem2.year){
        return 1
    }else if ( elem2.year > elem1.year){
        return -1
    }else if (elem1.title > elem2.title){
        return 1
    }else if ( elem2.title > elem1.title){
        return -1  
    }else {
      return 0
    }
    
})

return movieShort
}

console.log(orderByYear(movies))

/*
let lettersCopy = JSON.parse(JSON.stringify(someLetters)) 

lettersCopy.sort()
*/ 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesCopy = JSON.parse(JSON.stringify(moviesArray))
  let movieAlphab = moviesCopy.sort ((elem1, elem2) => {
    
    if (elem1.title > elem2.title){
        return 1
    }else if ( elem2.title > elem1.title){
        return -1
    }else {
      return 0
    }
      
   }) 
   
   let movie20 =  movieAlphab.slice(0,20)


   let names = movie20.map((eachMovie) => {
    
    return eachMovie.title
})

return names

}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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
