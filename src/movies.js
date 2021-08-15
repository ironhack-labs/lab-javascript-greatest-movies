// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directors = arr.map(function(el) {
    return el.director;
  })
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergDramas = arr.filter(function(el){
    return el.director == "Steven Spielberg" && el.genre.includes("Drama")
  }) 
  return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const allScores = arr.map(function(el){
    if (el.score === "" || el.score === undefined) {
      return 0
    }
    return el.score
  })
  return allScores.reduce(function(acc, val){
   return Math.round((acc + val / arr.length) * 100) / 100;
  }, 0)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  // Filter Array for Dramas
  let dramas = arr.filter(function(el) {
    return el.genre.includes("Drama")
  }) 
   //console.log(dramas); --> logging array of dramas (works)
  // Map scores of Drama list into new array (map 0 if score = "" or undefined)
  let dramaScores = dramas.map(function(el) {
    if (el.score === "" || el.score === undefined) {
      return 0 };
      return el.score // return scores of drama movies into the new array
  })
    // console.log(dramaScores); --> logging  array of dramaScores (works)
    // calculate average of drama movies score
    dramaScoreAvg = dramaScores.reduce(function(acc, val) {
    return Math.round((acc + val / dramaScores.length) * 100) / 100;
 }, 0)
    // console.log(dramaScoreAvg); --> logs the dramaScoreAverage (works)
    return dramaScoreAvg;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  // deep copy array into string and back to new array
  const newMovieArr = JSON.parse(JSON.stringify(arr));
  // sort new array in ascending order by year
  const sorted = newMovieArr.sort(function(a, b){
   // Sort by year if they don't match
    if (a.year !== b.year) {
     return a.year - b.year
   };
   // if years match, sort by title
   if (a.year === b.year) {
    if (a.title > b.title) {
      return 1
    }
     if (a.title < b.title) {
       return -1
     }
   }
 })
 // return sorted array
 return sorted;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
// copy titles into new array
let allTitles = arr.map(function(el){
  return el.title;
})
// console.log(allTitles); --> logging all titles (work)
// sort titles alphabetically 
const sorted = allTitles.sort(function(a, b) {
if (a < b) {
  return -1;
}
if (a > b) {
  return 1;
}
})
// console.log(sorted); --> logging sorted titles (work)
// return top 20 of sorted titles
  if (sorted.length > 20) {
  return sorted.slice(0, 20);
}
// return final result sorted
return sorted;
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
