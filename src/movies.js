// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let tools = require('./data');

function getAllDirectors(db) {
  
  const directorsName = []
  
  db.map((movie)=>{
    directorsName.push(movie["director"])
  })

  return directorsName
}

getAllDirectors(tools)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(db) {
  const stevenMovies = db.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))

  return stevenMovies.length
}

howManyMovies(tools)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(db) {
  if(db.length === 0) return 0;

  const allScores = db.reduce(function(acc,element){
    if(!element.score){
      return acc + 0
    }

    return acc + element.score
  },0)

  const avg = (allScores/db.length).toFixed(2)


  return +avg
}

scoresAverage(tools)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore  (db)  {
  const dramaMovies = db.reduce((acc,el)=>{
    if(el.genre.includes('Drama')){
      acc.ratesSum += el.score
      acc.dramaMoviesQt += 1

      return acc
    }

    return acc
  },{ratesSum:0,dramaMoviesQt:0})

  if(dramaMovies.dramaMoviesQt === 0)return 0

  const avg = (dramaMovies.ratesSum/dramaMovies.dramaMoviesQt).toFixed(2)

  return +avg
}

dramaMoviesScore(tools)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(db) {
  const newSort = JSON.parse(JSON.stringify(db))

  newSort.sort((movie1,movie2)=>{
    if(movie1.year < movie2.year)return -1
    if(movie1.year > movie2.year)return 1

    return movie1.title.localeCompare(movie2.title)
  })

  return newSort
}

orderByYear(tools)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(db) {
  const movieTitles =  db.map(movie=>movie.title)

  movieTitles.sort((movie1,movie2)=> movie1.localeCompare(movie2))

  return movieTitles.slice(0,20)
}

orderAlphabetically(tools)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(db) {
  const newSort = JSON.parse(JSON.stringify(db))

  newSort.forEach(movie=>{

    let hoursToMinutes = 0;
    let minutes = 0;

    if(movie.duration.includes('h')){
      const hours = movie.duration.slice(0,1)

      hoursToMinutes += parseInt(hours) * 60
    }

    if(movie.duration.includes('min')){
      const indexMin = movie.duration.indexOf('min')

      const min = movie.duration.slice(indexMin - 2,indexMin)

      minutes = parseInt(min)
    }

    const total = hoursToMinutes + minutes

    movie.duration = total
  })

  return newSort
}

turnHoursToMinutes(tools)

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
