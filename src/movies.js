// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const accumulator = students.reduce(
//   // The callback receives "acc" and "el" and MUST return "acc"
//   function(accumulator, element){
//     accumulator = accumulator + element.candy
//     return accumulator
//   },
//   0 // You must provide the first value of the accumultator
// )

function getAllDirectors(movies) {
  let listOfdirectors =  movies.filter((a, b) => movies.indexOf(a) === b)
              .map((movie) => {
                return movie.director
              })
  return listOfdirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDramaMoviesCount = movies.filter((movie) => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
  return spielbergDramaMoviesCount.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) return 0
 let totalMoviesWitScores = movies.filter((movie) => movie.score !== undefined)
                                  .reduce((prev, curr) => {return prev + curr.score},0)
 return parseFloat((totalMoviesWitScores / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(!movies.length) return 0
  let totalDramaMovies = movies.filter((movie) => movie.genre.includes('Drama'))
  return scoresAverage(totalDramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesByYearOrder = JSON.parse(JSON.stringify(movies))

  moviesByYearOrder.sort((a,b) => {
    if(a.year > b.year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else {
      if(a.title > b.title) {
        return 1
      } else if(a.title < b.title) {
        return -1
      }
      return 0
    }
  })

  return moviesByYearOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))

  const moviesByTile = moviesCopy.sort((a,b) => {
    if(a.title > b.title) {
      return 1
    } else if(a.title < b.title) {
      return -1
    } else {
      return 0
    }
  })
  .map(movie => movie.title)
  .slice(0,20)

  return moviesByTile
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let movieCopy = JSON.parse(JSON.stringify(movies))

  movieCopy.forEach(movie => {
      let hoursString = movie.duration.split('h')
      let hoursNumber = Number(hoursString[0]) * 60
      let minString = hoursString[1].split('min')
      let minNumber = Number(minString[0])
      
      movie.duration = (hoursNumber + minNumber)
  });

  return movieCopy
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if(movies.length < 1) return null
  
  let movieCopy = JSON.parse(JSON.stringify(movies))

  let getYears = movieCopy.map(movie => movie.year)
  let allUniqueYears = getYears.filter((year, index, getYears) => getYears.indexOf(year) === index)

  let greatestYear = 0
  let averageOfYear = 0
  let moviesOfYear = 0
  let theYear = 0

  for(let i = 0; i < allUniqueYears.length; i++) {

      moviesOfYear = movieCopy.filter((movie) => movie.year === allUniqueYears[i])
      averageOfYear = scoresAverage(moviesOfYear)
      if(averageOfYear > greatestYear) {
          greatestYear = averageOfYear
          theYear = i
      } else if (averageOfYear == greatestYear) {
        if(allUniqueYears[i] < allUniqueYears[theYear]) {
          theYear = i
        }
      }
  }

        return `The best year was ${allUniqueYears[theYear]} with an average score of ${greatestYear}`
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
