/*jshint esversion: 6 */
/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = moviesArr =>
  [...moviesArr].sort((a, b) => {
    if (a.year > b.year) return 1
    else if (a.year < b.year) return -1
    else if (a.year === b.year) return a.title.localeCompare(b.title)
    else return 0
  })

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = moviesArr =>
  moviesArr.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
    .length

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArr =>
  [...moviesArr]
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20)

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = moviesArr => {
  if (moviesArr.length === 0) return 0
  const sum = moviesArr.reduce((acc, current) => {
    return current.rate ? current.rate + acc : acc
  }, 0)
  const avg = sum / moviesArr.length
  return Math.round(avg * 100) / 100
}

// Iteration 5: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = moviesArr =>
  ratesAverage(moviesArr.filter(movie => movie.genre.includes('Drama')))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const hours2Min = hourStr => {
  if (hourStr.length === 2) return Number(hourStr[0]) * 60
  else if (hourStr.length === 5 || hourStr.length === 4) return Number(hourStr.replace('min', ''))
  else {
    let hourArr = hourStr
      .replace('h', '')
      .replace('min', '')
      .split(' ')
    return Number(hourArr[0]) * 60 + Number(hourArr[1])
  }
}

let turnHoursToMinutes = moviesArr =>
  moviesArr.map(movie => {
    const newMovie = { ...movie }
    if (newMovie.duration) newMovie.duration = hours2Min(newMovie.duration)
    return newMovie
  })
