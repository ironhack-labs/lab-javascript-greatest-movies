// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  let getAllDirectors = movies.map(( elem ) => {
    return elem.director
      }) 
      return getAllDirectors
        
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

let filtered = movies.filter( (dramaFilm) => {
  if (dramaFilm.director == 'Steven Spielberg' && dramaFilm.genre == 'drama'){   
return dramaFilm
  }  
})
return filtered
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
let scores = movies.reduce((sum , allScores) => {
return sum + allScores.score
}, 0)

let averageScores = scores / movies.length();
let twoDecimalAver = averageScores.toFixed(2);
return twoDecimalAver





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
let dramaGenre = movies.filter( ( genreExtract ) => {
 return genreExtract.genre == 'drama'
})
let dramaSum = dramaGenre.reduce((sum, sumOfDrama) => {
return (sum + sumOfDrama)

},0)

let dramaAverage = dramaSum/ dramaGenre.length()
return dramaAverage
}

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(years) {
let cloneNumber = JSON.parse(JSON.stringify(movies));

let orderByYear = cloneNumber.sort( (a , b ) => {
if (a.year > b.year){
  return 1
}
else if (a.year < b.year){
return -1
}
else {
 if (a.title > b.title){
return 1
}
else if (a.title < b.title){
return -1  
}
else {
  return 0
}
}

})
return orderByYear
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let twentyFirsts = movies.filter( (myMovies) => {
return myMovies.slice(0, 19)
})
return twentyFirsts

function twentiesAlpha (twentyFirsts){
let sortAlpha = twentyFirsts.sort((a, b) => {
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
else {
  return 0
}
})
return sortAlpha
}
}


// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes() {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = {
//     getAllDirectors,
//     howManyMovies,
//     scoresAverage,
//     dramaMoviesScore,
//     orderByYear,
//     orderAlphabetically,
//     turnHoursToMinutes,
//     bestYearAvg,
//   // };
// }
