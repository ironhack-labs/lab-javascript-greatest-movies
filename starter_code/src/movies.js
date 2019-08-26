/* eslint no-restricted-globals: 'off' */

function formatAverage(number) {
  return +(number.toFixed(2))
}

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(moviesArr) {
  return formatAverage(moviesArr.reduce((ac, movies) => ac += +movies.rate, 0) / moviesArr.length)
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
  let dramaArr = moviesArr.filter(movies => movies.genre.includes('Drama'))
  if (dramaArr.length === 0) {
    return 0;
  }
  return formatAverage(dramaArr.reduce((ac, movies) => ac += +movies.rate, 0) / dramaArr.length)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(moviesArr) {
  return moviesArr.sort((a, b) => {
    if (a.duration !== b.duration) {
      return a.duration - b.duration
    } return a.title.localeCompare(b.title)
  })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr) {
  let stevenArr = moviesArr.filter(movies => movies.genre.includes('Drama') && movies.director.includes('Steven Spielberg'));
  return +stevenArr.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
  return moviesArr.sort((a, b) => a.title.localeCompare(b.title)).map(movies => movies.title).slice(0,20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
  return moviesArr.map(movies => {
    let durationMin

    if(movies.duration.split(' ').length > 1) {
      let hours = movies.duration.split(' ')[0].slice(0, 1)
      let minutes = movies.duration.split(' ')[1].slice(-5, -3)
      durationMin = +(hours) * 60 + +(minutes)
    }
    else if (movies.duration.indexOf('min') >= 0){
      let minutes = movies.duration.slice(-5, -3)
      durationMin = +(minutes)
    }
    else {
      let hours = movies.duration.slice(0, 1)
      durationMin = +(hours) * 60
    }

    return {...moviesArr, duration: durationMin}
  })
} 

// BONUS Iteration: Best yearly rate average - Best yearly rate average
