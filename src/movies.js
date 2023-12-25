// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let allDirectors=moviesArray.map(x=>x.director)
   return allDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  

function howManyMovies(moviesArray) {
  let result = 0
  if (moviesArray.length===0){
    return result
  }

  let moviesSpielberg = moviesArray.filter (movie => movie.director===`Steven Spielberg`)
  let onlyDrama =[]
  for ( let i = 0; i < moviesSpielberg.length; i ++){
    let genre = moviesSpielberg[i].genre

    for ( let j = 0; j < genre.length; j++ ) {
      const element = genre[j];
      
      if (element==="Drama") {
        result++
        onlyDrama.push(moviesSpielberg[i]) 
      }
      
    }
    
  }
  

 return result

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  let result = 0
  if (moviesArray.length === 0) {//if is empty = 0
    return result
  }

 let scores= moviesArray.map(scores=> scores.score) 
 let suma = 0
 for (let i = 0 ; i < scores.length; i ++){
  let element = scores[i];
  if (element === " " || element === "" || element === undefined ) {//if if one of the movies does not have score = 0
    element = 0
    
  }
  suma += element 
  
 }

let avg = suma / scores.length// average 
result = avg

 return parseFloat(result.toFixed(2))//number with two decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
console.log("hola")


function dramaMoviesScore(moviesArray) {
  
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));console.log(typeof dramaMovies)//creamos un array con las pelis de drama
  if (dramaMovies.length === 0) {
    return 0
  }
  let average=scoresAverage(dramaMovies)
  return average
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

