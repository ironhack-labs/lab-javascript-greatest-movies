// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesToParse) => {
    return moviesToParse.map((movie) => {
      return movie.director
      })
    }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const cleanDuplicates = (arrayToClean) => {
    const uniqueElements = {}, uniqueArray = []
    for (element of arrayToClean) {uniqueElements[element] = ''}
    for (uniqueElement in uniqueElements) {uniqueArray.push(uniqueElement)}
    return uniqueArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arrayToFilter) => {
    return (arrayToFilter.filter((movie) => {
      return (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"))
    })).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arrayToAnalize) => {
    if (arrayToAnalize.length === 0) {
      return 0
    } else {
      mappedArray = arrayToAnalize.map((movie) => {
        return movie.rate
      })
      const avgRate = mappedArray.reduce((acc, num) => {
        if (typeof num === 'number') {
          return acc + num
        } else {return acc}
      }, 0)
      return (Math.round(Number(avgRate/arrayToAnalize.length)*100)/100)
    }
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arrayToAnalize) => {
    if (arrayToAnalize.length === 0) {
      return 0
    } else {
      const dramaMoviesArray = arrayToAnalize.filter((movie) => {
        if (movie.genre !== undefined) {
          return movie.genre.includes("Drama")
        }
      })
      if (dramaMoviesArray.length === 0) return 0
      const dramaRating = dramaMoviesArray.reduce((acc, movie) => {
        if (movie !== undefined && Object.keys(movie).length > 0 && movie.rate !== undefined) {
            return acc + movie.rate
        } else {
            return acc
        }
      }, 0)
      return (Math.round(Number(dramaRating/dramaMoviesArray.length)*100)/100)
    }
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arrayToOrder) => {
    const arrayCopy = arrayToOrder.slice()
    arrayCopy.sort((a, b) => {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
    })
    arrayCopy.sort((a, b) => {
      return a.year - b.year
    })
    return arrayCopy
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (originalArray) => {
    const arrayToOrder = originalArray.slice()
    arrayToOrder.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else {
            return -1
        }
    })
    return arrayToOrder.slice(0, 20).map((movie) => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (originalArray) => {
    let arrayToModify = [...originalArray]
    arrayToModify = arrayToModify.filter((movie) => {
      return movie.duration && movie.duration !== undefined
    })
    for (movieIndex in arrayToModify) {
      let timeArray = arrayToModify[movieIndex].duration.split(' ')
      timeArray =  timeArray.map((t) => t.split(''))
      timeCounter = 0
      for (timeCharArray of timeArray) {
        if (timeCharArray.includes('h')) {
          hoursStr = timeCharArray.filter((char) => char !== 'h')
          timeCounter += Number(hoursStr)*60
        } else {
          minutesStr = timeCharArray.filter((char) => {
            return char !== 'm' && char !== 'i' && char !== 'n'
          })
          let fullMinStr = ''
          for (numStr of minutesStr) {
            fullMinStr += numStr
          }
          timeCounter += Number(fullMinStr)
        }
      }
      arrayToModify[movieIndex].duration = timeCounter
    }
    return arrayToModify
  }
  
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (moviesArr) => {
  if (moviesArr.length === 0) {
    return null
  } else {
    const arrayCopy = [...moviesArr]
    arrayCopy.sort((a, b) => {
      return a.year - b.year
    })
    const moviesByYear = {}
    arrayCopy.forEach((movie, index) => {
      if (movie.year in moviesByYear) {
        moviesByYear[movie.year].push(movie)
      } else {
        moviesByYear[movie.year] = [movie]
      }
    })
    const yearWithAvgRate = {}
    let highestRate = 0
    let bestYear = 0

    for (year in moviesByYear) {
      yearWithAvgRate[year] = ratesAverage(moviesByYear[year])
      if (yearWithAvgRate[year] > highestRate) {
        highestRate = yearWithAvgRate[year]
        bestYear = year
      }
    }
    return `The best year was ${bestYear} with an average rate of ${highestRate}`
  }
}