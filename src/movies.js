// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director)
  const cleanedDirectors = [...new Set(directors)]

  return cleanedDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const director = 'Steven Spielberg'
  const genre = 'Drama'

  return movies.filter(movie => (movie.director === director && movie.genre.indexOf(genre)!== -1)).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const length = movies.length

  if (length === 0) return 0

  const sum = movies.reduce((acc, val) => {
    const score = val.score

    if(typeof score !== 'number' || isNaN(score)){
      return acc
    }

    return acc + score
  }, 0)

  const average = Math.round(sum / length * 100) / 100

  return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const genre = 'Drama'
  const dramas = movies.filter(movie =>  movie.genre.indexOf(genre)!== -1)

  return scoresAverage(dramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const byYear = [...movies].sort((a,b) => (a.year - b.year || a.title.localeCompare(b.title)))

  return byYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(movie => movie.title)
  const byTitle = [...titles].sort((a, b) => a.localeCompare(b))

  return byTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const toMinutes = JSON.parse(JSON.stringify(movies))

  toMinutes.forEach(movie => movie.duration = convertToMin(movie.duration))
  
  return toMinutes
}

//parameter string has this format : "..h ..min"
function convertToMin(string) {
  const timeTab = string.split(/[(h\s)(min)]+/)

  return timeTab[1] ? timeTab[0] * 60 + parseInt(timeTab[1]) : timeTab[0] * 60 
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null

  let years = [...new Set(movies.map(movie => movie.year))]
  let ratingsByYear = {}
 
  for(let year of years){
    ratingsByYear[year]= []
  }
  
  for(let movie of movies){
    const score = movie.score
    const year = movie.year
    
    ratingsByYear[year].push(score)
  }

  for(let year in ratingsByYear){
    ratingsByYear[year] = avg(ratingsByYear[year])
  }

  years = []
  for(let year in ratingsByYear){
    years.push([year, ratingsByYear[year]])
  }

  years.sort((a,b) => b[1] - a[1])

  return `The best year was ${years[0][0]} with an average score of ${years[0][1]}`
}

function avg(tab){
  return tab.reduce((a, v) => a + v)/tab.length
}
 
bestYearAvg([
  { year: 2000, score: 9 },
  { year: 2000, score: 8 },
  { year: 1978, score: 10 },
  { year: 1978, score: 7 },
  { year: 2222, score: 7 }
])

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

