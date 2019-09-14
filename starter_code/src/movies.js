/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movArr) {
  const sumRates = movArr.reduce((acc, mov) => {
    if (!mov.rate) mov.rate = 0
    return acc + parseFloat(mov.rate)
  }, 0)
  return Number((sumRates / movArr.length).toFixed(2))
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movArr) {
  const dramaMovies = movArr.filter(mov =>
    mov.genre.find(genre => genre === "Drama")
  )
  if (!dramaMovies.length) return (0)
  return ratesAverage(dramaMovies)
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movArr) {
  return movArr.sort((a, b) => {
    if (a.duration === b.duration && a.title > b.title) return 1
    if (a.duration > b.duration) return 1
    return -1
  })
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movArr) {
  return movArr.filter(mov => {
    return (
      mov.genre.includes("Drama") && mov.director.includes("Steven Spielberg")
    )
  }).length
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movArr) {
  const alphabeticOrder = movArr.sort((a, b) => (a.title > b.title ? 1 : -1))
  if (alphabeticOrder.length === 1) return alphabeticOrder[0].title
  if (alphabeticOrder.length > 20)
    return alphabeticOrder.slice(0, 20).map(mov => mov.title)
  return alphabeticOrder.map(mov => mov.title)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movArr) {
  let arrDuration = []
  return movArr.map(mov => {
    arrDuration = mov.duration.split(" ")
    if (arrDuration.length === 2) {
      arrDuration[0] = arrDuration[0].replace("h", "")
      arrDuration[1] = arrDuration[1].replace("min", "")
      arrDuration = Number(arrDuration[0] * 60) + Number(arrDuration[1])
    } else if (arrDuration[0].includes("h") && arrDuration.length === 1) {
      arrDuration = Number(arrDuration[0].replace("h", "")) * 60
    } else {
      arrDuration = Number(arrDuration[0].replace("min", ""))
    }
    return {
      title: mov.title,
      year: mov.year,
      director: mov.director,
      duration: arrDuration,
      genre: mov.genre,
      rate: mov.rate
    }
  })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movArr) {
  if (movArr.length === 0) return null
  let arrYears = []
  movArr.forEach(mov => {
    if (!arrYears.find(movOrd => movOrd === Number(mov.year)))
      arrYears.push(Number(mov.year))
  })

  let bestYear = arrYears
    .map(year => {
      return {
        year: year,
        rate: ratesAverage(movArr.filter(mov => Number(mov.year) === year))        
      }
    })
    .sort((a, b) => {
      if (a.rate === b.rate && a.year > b.year) return 1      
      if (a.rate < b.rate) return 1
      return -1
    })[0]
  return `The best year was ${bestYear.year} with an average rate of ${bestYear.rate}`
}
