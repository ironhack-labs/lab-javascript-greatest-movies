

/* Iteration 1: All rates average - 
Get the average of all rates with 2 decimals */

const ratesAverage = arr => {
  const arrRate = arr.reduce((sum, elem) => {
    let newSum = parseFloat(elem.rate)
    return (sum += newSum)
  }, 0)

  let avgRate = arrRate / arr.length
  return avgRate
}

ratesAverage(movies)

// Iteration 2: Drama movies -
/*Get the average of Drama Movies*/


function dramaMoviesRate(movieArray) {

  const dramaMovies = movieArray.filter(function(movieElement) {
     return movieElement.genre.indexOf('Drama') !== -1}  )

      if (isNaN  (ratesAverage (dramaMovies) ) ) {return 0}
      return ratesAverage(dramaMovies)
}


// Iteration 3: Ordering by duration -
/* Order by time duration, ascending 
(in growing order) */

function orderByDuration(moviesArray) {
  moviesArray.sort(function(a, b) {
    if (a.duration === b.duration) {
        if (a.title > b.title) {return 1} 
        else if (a.title < b.title) {return -1} 
        else {return 0}     }
    return a.duration - b.duration })
  return moviesArray
}

// Iteration 4: Steven Spielberg. The best? 
/*- How many movies did STEVEN SPIELBERG direct
*/

function howManyMovies(moviesArr) {
  if (moviesArr.length === 0) {return 0}
  
  const directorMovies = moviesArr.filter(function(e) {
    return e.director === 'Steven Spielberg' && e.genre.indexOf('Drama') !== -1
  })
  return directorMovies.length
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {
  moviesArray.sort(function(a, b) {
    return a.title < b.title ? -1 : 1
  })
    const top20Movies = []
    let limit = 20
      if (moviesArray.length < 20) {limit = moviesArray.length}
          for (i = 0; i < limit; i++) {top20Movies.push(moviesArray[i].title)}
    return top20Movies
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(elem) {
    let hours = 0
    let minutes = 0
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10)
    }
    return { ...elem, duration: hours + minutes }
    //return Object.assign({}, elem, { duration: hours + minutes })
  })
}

function bestYearAvg(moviesArr) {
  const ratesYear = {}
  const moviesYear = {}
  const averageYear = {}
  if (moviesArr.length === 0) {
    return null
  }
  moviesArr.forEach(function(e) {
    if (ratesYear[e.year]) {
      moviesYear[e.year] += 1
      ratesYear[e.year] += parseFloat(e.rate)
      averageYear[e.year] = parseFloat((ratesYear[e.year] / moviesYear[e.year]).toFixed(2))
    } else {
      ratesYear[e.year] = parseFloat(e.rate)
      moviesYear[e.year] = 1
      averageYear[e.year] = parseFloat(e.rate)
    }
  })
  const year = Object.keys(averageYear).reduce(function(a, b) {
    if (averageYear[a] === averageYear[b]) {
      if (b < a) {
        return b
      }
      return a
    } else if (averageYear[a] > averageYear[b]) {
      return a
    }
    return b
  })
  return 'The best year was ' + year + ' with an average rate of ' + averageYear[year]
}
