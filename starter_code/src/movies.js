/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  const sum = arr.reduce((acc, current) => acc + Number(current.rate), 0)
  const average = sum / arr.length
  return average
}

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
  const dramaOnly = arr.filter(any => {
    return any.genre.includes('Drama')
  })
  if (dramaOnly.length > 0) {
    const average = ratesAverage(dramaOnly)
    return Number(average.toFixed(2))
  } else {
    return 0
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = arr => {
  const sortedByDuration = arr.sort(function(a, b) {
    return a.duration - b.duration
  })

  const sortedByTitle = sortedByDuration.sort(function(a, b) {
    if (a.duration === b.duration) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    }
  })

  return sortedByTitle
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = arr => {
  const dramaOnly = arr.filter(element => {
    return element.genre.includes('Drama')
  })
  const spielbergOnly = dramaOnly.filter(element => {
    return element.director.includes('Steven Spielberg')
  })
  return spielbergOnly.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const ordered = arr.sort(function(a, b) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })
  const titles = []
  for (let i = 0; i < ordered.length; i++) {
    titles.push(ordered[i].title)
  }
  return titles.slice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
  const getHoursInMin = movie => {
    if (movie.duration.charAt(1) === 'h') {
      const hr = Number(movie.duration.charAt(0))
      const hrInMin = hr * 60
      return hrInMin
    } else {
      return 0
    }
  }
  const getMinutes = movie => {
    let min = 0
    if (movie.duration.length >= 5 && movie.duration.charAt(1) === 'h') {
      min = Number(movie.duration.substring(3, movie.duration.length - 3))
    } else {
      min = Number(movie.duration.substring(0, movie.duration.length - 3))
    }
    return min
  }

  let newArrWithMin = []
  arr.forEach(movie => {
    let singleMovie = { ...movie, duration: getHoursInMin(movie) + getMinutes(movie) }
    newArrWithMin.push(singleMovie)
  })
  return newArrWithMin
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = arr => {
  if (arr.length > 0) {
    const yearlyAvg = arr => {
      let sums = {},
        counts = {},
        results = [],
        year
      for (let i = 0; i < arr.length; i++) {
        year = arr[i].year
        if (!(year in sums)) {
          sums[year] = 0
          counts[year] = 0
        }
        sums[year] += Number(arr[i].rate)
        counts[year]++
      }
      for (year in sums) {
        results.push({
          year: year,
          rate: sums[year] / counts[year]
        })
      }
      return results
    }
    let yearlyAvgArray = yearlyAvg(arr)
    console.log(yearlyAvgArray)
    let bestRate = Math.max.apply(
      Math,
      yearlyAvgArray.map(function(o) {
        return o.rate
      })
    )
    let bestYear = 0
    for (let i = 0; i < yearlyAvgArray.length; i++) {
      if (yearlyAvgArray[i].rate == bestRate) {
        bestYear = yearlyAvgArray[i].year
        break
      }
    }
    return `The best year was ${bestYear} with an average rate of ${bestRate}`
  } else {
    return null
  }
}
