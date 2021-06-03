// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let mappedDirectors = movies.map((singleMovie) => {
    return singleMovie.director
  })
  return mappedDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let fittingMovies =  movies.filter((elem) => {
    return elem.director === "Steven Spielberg" && elem.genre.includes("Drama")
  })
  return fittingMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length){
    return 0
  }else{
    let sumOfScores = movies.reduce((sum, value) => {
      if (value.score){
      return sum + value.score
    }else{
      return sum
    }
    },0) 
    return  Number((sumOfScores/ movies.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (!movies.length){
    return 0
  }else{
    let numOfDramas = 0
    let sumOfScores = movies.reduce((sum, value) => {
      if (value.genre.includes("Drama") && value.score){
        numOfDramas += 1
        return sum + value.score
    }else{
      return sum
    }
    },0) 
    if (numOfDramas === 0){
      return 0
    }
    return  Number((sumOfScores/ numOfDramas).toFixed(2))
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clonedArray = JSON.parse(JSON.stringify(movies));
  let output =  clonedArray.sort((first, second)=> {
    if (first.year < second.year) {
      return -1;
    }
    else if (first.year > second.year) {
      return 1;
    }
    else {
      if (first.title < second.title){
        return -1;
      } else{
        return +1;
    } 
    }
  })
  return output;
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
