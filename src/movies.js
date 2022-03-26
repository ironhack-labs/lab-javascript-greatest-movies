// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(function(director){return director.director})
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  // filter for drama - see if the string "Drama" is included in the array of the key genre
  const dramaMovies = arr.filter(function(movieD){
    return movieD.genre.includes('Drama')
  })
  
  // filter for Steven Spielberg
  const dramaMoviesFromSteve = dramaMovies.filter(function(movieS){
    return movieS.director === 'Steven Spielberg'
  })
  
  // return array length
  return dramaMoviesFromSteve.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Solution with .map

// function scoresAverage(arr){
//   if (arr.length === 0) {
//     return 0
//   }
  
//   let result = 0
//   arr.map(function(movie){
//     result = result + movie.score
//   })
//   let average = result / arr.length

//   return Math.round(average*100)/100
// }

// Solution with .reduce

function scoresAverage(arr){
  if (arr.length === 0) {
    return 0
  }
  const allScores = arr.reduce(function(sum, val){
    if (val.score === '') {
      return sum + 0
    } 
    else return sum + val.score
      
  },0)

  let average = allScores / arr.length

  return Math.round(average*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length === 0) {
    return 0
  }
  const dramaMovies = arr.filter(function(movieD){
    return movieD.genre.includes('Drama')
  })
  const allScoresDrama = dramaMovies.reduce(function(sum, val){
    return sum + val.score
  },0)

  let averageDrama = allScoresDrama / dramaMovies.length

  return Math.round(averageDrama*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  let newArrayOrderByYear = [...arr]
    
  newArrayOrderByYear.sort(function (a, b){
    if (a.year === b.year) {
      if (a.title < b.title){
        return -1;
      }
      if (a.title > b.title){
        return 1;
      }
      return 0;
    }
    return a.year - b.year
  })
  return newArrayOrderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // creating a new array

  let newArr = [...arr]

  // sorting the array alphabeticly
  newArr.sort(function(a, b){
    if (a.title < b.title){
        return -1;
    }
    if (a.title > b.title){
        return 1;
    }
      return 0
  })
  
  // only returning the first 20 titles of the array
  let newArr20 = []
  for (let i=0; i<20; i++) {
    newArr20.push(newArr[i].title) // why is this line, if I add ".title" failing the tests?
  }
  return newArr20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  // creating a new array

  let newArr = [...arr]

  newArr = newArr.map(function(movie){
    // build a logic to give out only the minutes for every Object in the original array

    let hours = Number(movie.duration.split('h')[0])
    let helpSplit = movie.duration.split(' ')[1]
    let minutes = Number(helpSplit.split('m')[0])
  
    let result = hours * 60 + minutes

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: result,
      genre: movie.genre,
      score: movie.score
    }
  })
  
  return newArr
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
