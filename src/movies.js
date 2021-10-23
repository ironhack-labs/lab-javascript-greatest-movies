const movies = require('./data.js') 

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function(movie){
    return movie.director
  })
  const copy = [...directors]
  for (let i = copy.length - 1; i >= 0; i--) {
    if (copy.indexOf(copy[i]) !== i) {
      copy.splice(i, 1)
    }
  }
  return copy
}

getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = []
  movies.map(function(movie){
    if (movie.director === 'Steven Spielberg') {
      movie.genre.filter(function(genre){
        if (genre === 'Drama') {
          dramaMovies.push(movie)
        }
      })
    }
  })
  
  return dramaMovies.length
}

howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const average = movies.reduce(function(acc, movie){
    if (!movie.score) {
      return acc + 0
    } 
    return acc + movie.score / movies.length
  }, 0)
  return Number(average.toFixed(2))
}

scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function(movie){
    if (movie.genre.includes('Drama')) return movie
  })

  if (movies.length >= 1) {
    return scoresAverage(dramaMovies)
  }
}

dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    return null
  }
  const copy = [...movies]
  copy.sort(function(a, b){
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
  return copy
}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copy = [...movies]
  const ordered = copy.sort(function(a, b){
    return a.title.localeCompare(b.title)
  }).map(function(movie){
    return movie.title
  })
  return ordered.slice(0, 20)
}

orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const minutes = movies.map(function(movie){
    let left = parseInt(movie.duration.split('h')[0]) * 60
    let right = parseInt(movie.duration.split('min')[0].split('h ')[1]) || 0
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: left + right,
      genre: movie.genre,
      score: movie.score
    }
  })
  return minutes
}

// FIX: one test fails
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null
  }
  const groupByYear = movies.reduce(function (acc, movie) {
    acc[movie.year] = acc[movie.year] || []
    acc[movie.year].push(movie)

    return acc;
  }, Object.create(null));

  const years = movies.map(function(movie){
    return groupByYear[movie.year]
  })

  for (const [year, movies] of Object.entries(groupByYear)) {
    for (let movie of movies) {
      return `The best year was ${movie.year} with an average score of ${scoresAverage(movies)}`
    }    
  } 
}

bestYearAvg(movies)



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
