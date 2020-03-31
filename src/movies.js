/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function compare(a, b) {
  if (a.year < b.year) {
    return -1
  } else if (a.year > b.year) {
    return 1
  } else {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    }
  }
}

function orderByYear(array) {
  const orderedArray = [...array].sort(compare)
  return orderedArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieArray) {
  const movieList = movieArray.filter(
    movie =>
      movie.genre.includes('Drama') && movie.director == 'Steven Spielberg'
  )
  return movieList.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const orderedArray = [...array].sort((a, b) => a.title.localeCompare(b.title))
  let titleArray = []

  orderedArray.forEach(elm => titleArray.push(elm.title))

  if (titleArray.length <= 20) {
    return titleArray
  } else {
    return titleArray.splice(0, 20)
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesSummation(array) {
  return array.reduce((acc, movie) => {
    return acc + movie.rate
  }, 0)
}

function ratesAverage(array) {
  if (array.length == 0) {
    return 0
  }
  const hasRate = array.filter(elm => elm.rate)
  const sum = ratesSummation(hasRate)
  const average = sum / array.length
  return parseFloat(average.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  if (array.length == 0) {
    return 0
  }
  const areDramas = array.filter(elm => elm.genre == 'Drama')
  if (areDramas.length == 0) {
    return 0
  }
  const sum = ratesSummation(areDramas)

  const average = sum / areDramas.length
  return parseFloat(average.toFixed(2))
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
//We're gonna use this very janky method because no film is longer than 9 hours, but it's
//extremely hacky. Not my proudest function.

function parseHours(film) {
  let hoursToMinutes
  let minutes

  if (film.duration.includes('h')) {
    hoursToMinutes = parseInt(film.duration[0]) * 60
  } else {
    hoursToMinutes = 0
  }

  if (film.duration.includes('min')) {
    minutes = parseInt(film.duration.slice(-5, -3))
  } else {
    minutes = 0
  }

  return hoursToMinutes + minutes
}

function turnHoursToMinutes(array) {
  const newArray = array.map(elm => {
    const objResult = { ...elm, duration: parseHours(elm) }
    return objResult
  })
  return newArray
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  const yearAverageContainer = {}

  //This produces an object which contains every year represented as keys, with the
  //IMDB ratings of that year's movies in an array as values, plus creates a new object
  //to store the averages
  const yearArrayContainer = array.reduce((acc, obj) => {
    const key = obj.year
    if (!acc[key]) {
      acc[key] = []
      yearAverageContainer[key] = 0
    }
    acc[key].push(obj.rate)
    return acc
  }, {})

  //calculates averages for every year and stores them in that new object
  for (const year in yearArrayContainer) {
    let value = yearArrayContainer[year]
    const yearAvg = value.reduce((acc, n) => acc + n) / value.length
    yearAverageContainer[year] = yearAvg
  }

  //non-iterable???
  const bestestYear = [...yearAverageContainer].sort((a, b) => {
    valueA = yearAverageContainer[a]
    console.log(a, " - ", valueA)
    valueB = yearAverageContainer[b]
    console.log(b, " - ", valueB)

    if (valueA < valueB) {
      return -1
    } else if (valueA > valueB) {
      return 1
    } else {
      if (a < b) {
        return -1
      } else {
        return 1
      }
    }
  })

  console.log(bestestYear)
  console.log(yearAverageContainer)
  console.log('..............')
}
