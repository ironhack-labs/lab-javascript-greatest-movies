/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = (arr) => { 
  const sum = arr.reduce((acc, movie) => 
    acc += Number(movie.rate), 0)
  return Number((sum / arr.length).toFixed(2))
}

// Iteration 2: Drama movies - Get the average of Drama Movies

const foundDrama = (arr) => 
  arr.filter(movie => movie.genre.includes('Drama'))

const dramaMoviesRate = (arr) => {
  dramaMoviesArr = foundDrama(arr)
  return dramaMoviesArr.length === 0 ? 0: ratesAverage(dramaMoviesArr)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = (arr) => {
  return arr.sort((a, b) => {
  return (a.duration === b.duration) ? -1 : a.duration - b.duration
 })
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
  return foundDrama(arr).filter(movie => movie.director === 'Steven Spielberg').length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
  return arr.map(currentValue => currentValue.title).sort().slice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const totMinutes = (arr) => {
  return arr.reduce((acc, currentValue, index, array) => {
    if (currentValue === 'h') {
      acc += Number(array[index - 1]) * 60
    } else if (currentValue === 'm' && array[index - 2] === ' ') {
      acc += Number(array[index - 1])
    } else if (currentValue == 'm') {
      acc += Number(array[index - 2] + (array[index - 1]))
    }
    return acc 
  }, 0)
}

const turnHoursToMinutes = (arr) => {
  return arr.map(movie => {
    let arrDuration = movie.duration.split('')
    return {
      "title": movie.title,
      "year": movie.year,
      "director": movie.director,
      "duration": totMinutes(arrDuration),
      "genre": movie.genre,
      "rate": movie.rate
    } 
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const findYears = (arr) => arr.map(movie => movie.year)
  .filter((year, pos, arr) => arr.indexOf(year) === pos).sort((a,b) => a - b)

const bestYearAvg = (arr) => {
  if (arr.length === 0) {
    return null
  }
  let arrOfYears = findYears(arr)
  let arrTotAvg = []
  arrOfYears.forEach((year, i) => {
    let counter = 0
    let tot = 0
    arr.forEach(movie => {
      if (year === movie.year) {
        counter ++
        tot += Number(movie.rate)
      }
    })
    arrTotAvg[i] = Number((tot / counter).toFixed(1))
  })
  let index = arrTotAvg.indexOf(Math.max(...arrTotAvg))
  return `The best year was ${arrOfYears[index]} with an average rate of ${arrTotAvg[index]}`
}