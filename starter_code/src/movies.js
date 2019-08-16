/* eslint no-restricted-globals: 'off' */

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

const dramaMoviesRate = anyArr => {
  const drama = anyArr.filter(any => {
    return any.genre.includes('Drama')
  })

  if (drama.length > 0) {
    const dramaAvg = ratesAverage(drama)
    {
      return Number(dramaAvg.toFixed(2))
    }
  } else {
    return 0
  }
}

// Iteration 3: Ordering by duration -
/* Order by time duration, ascending 
(in growing order) */

const orderByDuration = arr => {
  const sortedByDuration = arr.sort(function(a,b) {
    return a.duration - b.duration
  })
}

const sortedByTitle = sortedByDuration.sort(function(a,b){
if (a.duration === b.duration) {
  if(a.title < b.title) {return -1}
  if (a.title > b.title) {return 1}

  return 0
}
})

// Iteration 4: Steven Spielberg. The best? 
/*- How many movies did STEVEN SPIELBERG direct
*/

const howManyMovies = (array) => {
  const spielbergMovies = array.filter(   (currentMovie) => {
    return currentMovie.director === "Steven Spielberg" && 
            currentMovie.genre.includes('Drama')
  })

   return spielbergMovies.length
}



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


