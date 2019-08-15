/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (array) => {
  let sum = array.reduce((accum, currentMovie) => {
    return accum + (currentMovie.rate === '' ? 0 : parseFloat(currentMovie.rate))
  }, 0);
  return parseFloat((sum / array.length).toFixed(2))
}

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => {
  const dramaMovies = array.filter((currentMovie) => currentMovie.genre.includes('Drama'));

  if (dramaMovies.length === 0) {
    return 0
  }

  return ratesAverage(dramaMovies)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// const orderBy
const orderByDuration = (array) => {
  array.sort((movieA, movieB) => {
    if (movieA.duration > movieB.duration) {
      return 1
    } else if (movieB.duration > movieA.duration) {
      return -1
    } else {
      arrayTitles = [movieA.title, movieB.title]
      array.sort()
      if (arrayTitles.indexOf(movieA.title) === 0) {
        return 1
      } else {
        return -1
      }
    }
  })

  return array;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (array) => {
  const spielbergMovies = array.filter((currentMovie) => {
    return currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes('Drama')
  })

  return spielbergMovies.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
  if (array.length > 20) {
    return array.map((currentMovie) => currentMovie.title).sort().slice(0, 20)
  }
  return array.map((currentMovie) => currentMovie.title).sort()
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) => {
  let newArray = array.map((currentMovie) => {
    let newDuration = currentMovie.duration.split(' ')
      .map((element) => {
        if (element.indexOf('h') !== -1) {
          return parseInt(element.match(/[0-9]/g).join('')) * 60;
        } else {
          return parseInt(element.match(/[0-9]/g).join(''));
        }
      })
      .reduce((accum, currentNumber) => accum + currentNumber);

    return {
      ...currentMovie,
      duration: newDuration
    }
  })

  return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
  if (arr.length === 0) {
    return null
  }
  const numberOfYears = arr.reduce((accum, currentMovie) => {
    if (!accum.includes(currentMovie.year)) {
      accum.push(currentMovie.year)
    }
    return accum
  }, [])

  const averageArray = numberOfYears.map((year) => {
    return arr.filter((movie) => movie.year === year)
  }).map((arrayMovies) => {
    return [ratesAverage(arrayMovies), arrayMovies[0].year];
  })

  const bestAverage = averageArray.reduce((accum, currentAverage) => {
    if (accum[0] > currentAverage[0]) {
      return accum
    }
    return currentAverage
  }, [0])

  return `The best year was ${bestAverage[1]} with an average rate of ${bestAverage[0]}`
}