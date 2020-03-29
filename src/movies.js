// /* eslint no-restricted-globals: 'off' */
// const movies = require('./dataCopy.js')

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newArr = [...arr]
  newArr.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title)
    }
    return movie1.year - movie2.year
  })
  return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  return movies.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map(movie => movie.title)
    .sort()
    .slice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  let haveRate = movies.filter(movie => movie.rate)
  let total = haveRate.reduce(function(sum, movies) {
    return sum + movies.rate
  }, 0)
  let average = parseFloat((total / movies.length).toFixed(2))
  return average
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let haveRate = movies.filter(
    movie => movie.rate && movie.genre.includes('Drama')
  )
  if (haveRate.length === 0) {
    return 0
  }
  let total = haveRate.reduce(function(sum, movies) {
    return sum + movies.rate
  }, 0)
  let average = parseFloat((total / haveRate.length).toFixed(2))
  return average
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newArr = JSON.parse(JSON.stringify(movies))
  let hour = ''
  let min = ' '
  newArr.forEach(newArr => {
    newArr.duration = newArr.duration.split('')
    if (newArr.duration.includes('h') && newArr.duration.includes('m')) {
      hour = newArr.duration[0] * 60
      min = parseInt((newArr.duration[3] += newArr.duration[4]))
      newArr.duration = hour + min
    } else if (
      newArr.duration.includes('h') &&
      !newArr.duration.includes('m')
    ) {
      hour = newArr.duration[0] * 60
      newArr.duration = hour
    } else if (
      !newArr.duration.includes('h') &&
      newArr.duration.includes('m')
    ) {
      min = parseInt((newArr.duration[0] += newArr.duration[1]))
      newArr.duration = min
    }
  })
  return newArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
