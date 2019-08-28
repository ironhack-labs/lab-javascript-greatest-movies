/* eslint no-restricted-globals: 'off' */




// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  return parseFloat((array.reduce((sum, current) => {
    return sum += current.rate
  }, 0)/array.length).toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let filtered = array.filter(movie => movie.genre.includes("Drama"))

  if (filtered.length === 0) return 0;

  return parseFloat((filtered.reduce((sum, current) => {
    return sum += current.rate}, 0)/filtered.length).toFixed(2))
  }


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(array) {
  return array.sort((a,b) => {
    if (a.duration < b.duration) return -1
    if (a.duration > a.duration) return 1
    if (a.title < b.title) return -1
    if (a.title > a.title) return 1
  })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  return array.filter(movie => {
    if(movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")) {
      return movie
    }
  }).length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let sorted = array.sort((a,b) => {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
  })
  
  let twenty = []

  sorted.forEach(movie => {
    if (twenty.length < 20) {
      twenty.push(movie.title)
    }
  })
  return twenty
}




// let movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '1h 0min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.3'
//   },
//   {
//     title: 'The Godfather',
//     year: '1972',
//     director: 'Francis Ford Coppola',
//     duration: '55min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.2'
//   }
// ]
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
//    duration: '3h 22min',
function turnHoursToMinutes(array) {
  return array.map(movie => {

  if (movie.duration.includes("h") && movie.duration.includes("min")) {

      let hrs = movie.duration.split("h")[0]
      let mins = movie.duration.split(" ")[1].split("min")[0]
  
      if (hrs == 0) movie.duration = Number(mins)
      if (mins == 0) movie.duration = Number(hrs * 60)
      else movie.duration = Number(hrs * 60) + Number(mins)
        return movie
   }
   if (movie.duration.includes("h")) {
    movie.duration = Number(movie.duration.split("h")[0] * 60)
    return movie
   }
   if (movie.duration.includes("min")) {
    movie.duration = Number(movie.duration.split("min")[0])
    return movie
   }
  })
}


// console.log(turnHoursToMinutes(movies)[1])

// BONUS Iteration: Best yearly rate average - Best yearly rate average
