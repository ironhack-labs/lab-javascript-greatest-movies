// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(movies) {
//   let movieDirectors = movies.map(movie => movie.director)
//   return movieDirectors
// }

//Helper functions
function moviesOfCertainGenre (movies, genre) {
  return movies.filter(movie => movie.genre.includes(genre))
}

const movies = require("./data");

const getAllDirectors = movies => movies.map(movie => movie.director);

// Bonus 1.1
const uniqueDirectors = (movies) => {
  let duplicateDirectors = getAllDirectors(movies);

  // This doesn't work but managed to do it in Bonus 8, not fully getting it yet has something to do with property equation versus reference equatieon (findIndex vs indexOf)
  return duplicateDirectors.filter((director, index) => duplicateDirectors.indexOf(director) === index) // indexOf returns first index, so if not first index it will not put in array
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (arr) => {
  if (!arr.length) {
    return 0;
  }

  let sumScore = arr.reduce((sum,movie) => {
    if("score" in movie) {
      return sum + movie.score
    }
    else {
      return sum
    }
  }, 0)

  let sumMovies = arr.filter(arr => arr.score )
  // let average = (sumScore / sumMovies.length)  // this would be better I think, but the test case does take empty scores into account
  let average = (sumScore / arr.length)

  return parseFloat((average).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let dramaMovies = moviesOfCertainGenre(movies, "Drama");
  if (!dramaMovies.length) {
    return 0
  }

  let sumScore = dramaMovies.reduce((sum,movie) => {
    if("score" in movie) {
      return sum + movie.score;
    }
    else {
      return sum;
    }
  }, 0)

  return parseFloat((sumScore / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  let clonedMovies = JSON.parse(JSON.stringify(movies))

  return clonedMovies.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    else if (a.year < b.year) {
      return -1;
    }
    else {
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
      else {
        return 0;
      }
    }
  })

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // clone movies
  let clonedMovies = JSON.parse(JSON.stringify(movies))

  // sort by title
  let sortedMovies = clonedMovies.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    }
    else {
      return 0;
    }
  })

  // get first 20 cases (can use filter condition with index)
  let twentyMovies = sortedMovies.filter((movie, index) => index < 20 ? movie : null);

  // return only the title using map method
  return twentyMovies.map(movie => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  //change all duration using map method
  return movies.map(movie => {
      let durationArray = movie.duration.split('')
                                  .filter(el => {
                                      if('hmin'.includes(el)) {
                                        return false
                                      }
                                      else {
                                        return true
                                      };
                                    })
      let durationArrayNumbers = durationArray.join('').split(' ')
      amountOfMinutes = 0;
      if (durationArrayNumbers[1]) {
        amountOfMinutes = parseInt(durationArrayNumbers[0]) * 60 + parseInt(durationArrayNumbers[1]) 
      }
      else {
        amountOfMinutes =  parseInt(durationArrayNumbers[0]) * 60
      }
      let minutes = { 
        duration: amountOfMinutes
      }
      return { ...movie, ...minutes}     
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) {
    return null
  }
  
  let bestAvgScore = 0;
  let bestYear = 999;

  // Create array with 1 object for every year
  let uniqueYearObjects = movies.filter((movie, index, movies) => {
    return movies.findIndex(m => m.year === movie.year) === index;
  })

  // use map to create array with only year counts
  let uniqueYearArray = uniqueYearObjects.map(movie => movie.year)
  
  // for each year,
  uniqueYearArray.forEach(year => {

    // use filter to filter the years --> do .length to get the amount of arrays
    moviesOfThatYear = movies.filter(movie => movie.year === year)
    // console.log(moviesOfThatYear)

    // also for each year, use reducer to get the total
    totalOfScores = moviesOfThatYear.reduce((total, movie) => {
      console.log(movie.score, 'score')
      console.log(total, 'total')
      return total + movie.score
    }, 0)
    

    // make the calculation for avgScore
    let avgScore = totalOfScores / moviesOfThatYear.length
    // console.log('avgscore:', avgScore)

    // compare with bestAvgScore
    // Give back oldest year
    if (avgScore === bestAvgScore) {
      if (year < bestYear) {
        bestYear = year;
        bestAvgScore = avgScore;
      }
    }
    else if (avgScore > bestAvgScore) {
      // console.log('run calculation')

      // update bestYear & bestAvgScore
      bestYear = year;
      bestAvgScore = avgScore;
    }
  })

  return `The best year was ${bestYear} with an average score of ${bestAvgScore}`
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
