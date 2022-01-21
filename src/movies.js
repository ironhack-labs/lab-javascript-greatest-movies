const movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  const getDirector = element => element.director
  const uniqueArray = (item, index,arr) => arr.indexOf(item) === index

  const directors = arr.map(getDirector)

  return directors.filter(uniqueArray)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const getMovies = movie => {
    const { genre, director } = movie
    return (
      genre.includes('Drama') && director === 'Steven Spielberg'
    )
  }

  const movies = arr.filter(getMovies)

  return movies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0
  }

  const avg = arr.reduce((acc, current) => {
    const score = current.score === '' || Object.keys(current).length === 0 ? 0 :  current.score
    return acc += score
  }, 0)

  return Number((avg / arr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const getMovies = movie => {
    const { genre } = movie
    return (
      genre.includes('Drama')
    )
  }

  const movies = arr.filter(getMovies)

  const avg = movies.reduce((acc, current) => {
    const { score } = current

    return acc += score
  }, 0)

  return movies.length === 0 ? 0 : Number((avg / movies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  if (arr.length === 0) {
    return
  }

  const sortedByYear = arr.sort((a, b) => {
    return a.year - b.year === 0 ? a.title.localeCompare(b.title) : a.year - b.year
  })


  return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const onlyTitles = arr.map(movie => movie.title)

  const sortedByName = onlyTitles.sort((a, b) => {
    return a.localeCompare(b)
  })
  console.log(sortedByName)

  return sortedByName.length >= 20 ? sortedByName.slice(0, 20) : sortedByName
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(obj) {
  const newArr = obj.map(movie => {
    const onlyNumbers = movie.duration.replace(/[^-.0-9]/g, '')
    const [hours, ...minutes] = onlyNumbers.split('')
    const durationMinutes = (Number(hours) * 60) + Number(minutes.join(''))

    return ({...movie, duration:durationMinutes})
  })

  return newArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) { 

  if(arr.length === 0){
    return null
  }

  const getYears = movie => movie.year
  const uniqueArray = (item, index,arr) => arr.indexOf(item) === index

  const years = arr.map(getYears).filter(uniqueArray)
  const avgPerYear = []
  years.forEach(yearToCalc => {
    const moviesPerYear = arr.filter( movie => movie.year === yearToCalc)
    avgPerYear.push(
      {
        year: yearToCalc,
        average: moviesPerYear.reduce((acc,current) => {
          return  Number( (acc += current.score).toFixed(2) )
        },0) / moviesPerYear.length
      }
    )
  })

  const sortedAvg = avgPerYear.sort((a,b) =>{ 
    return b.average - a.average === 0 ? a.year - b.year : b.average - a.average
  })

  console.log(sortedAvg)

  const {year,average} = sortedAvg[0]
  return `The best year was ${year} with an average score of ${average}`
}


// console.log(getAllDirectors(movies))
// console.log(howManyMovies(movies))
// console.log(scoresAverage(movies))
// console.log(typeof(movies))
// console.log(orderAlphabetically(movies).length)
// turnHoursToMinutes(movies)
console.log(bestYearAvg(movies));

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
