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
  console.log(`OG ARRAY: ${array}`)
  console.log(`ordered array: ${orderedArray}`)
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
  
  orderedArray.forEach(elm => titleArray.push(elm.title));
  console.log(titleArray);

  if (titleArray.length <= 20) {
    console.log (titleArray)
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
  console.log(areDramas)
  const sum = ratesSummation(areDramas)

  const average = sum / areDramas.length
  return parseFloat(average.toFixed(2))
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
