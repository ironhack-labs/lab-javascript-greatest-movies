/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    let strDuration = movie.duration
    let duration // We need to 

    // When strDuration === "Xh XXmin"
    if (strDuration.length === "Xh XXmin".length)
      duration = strDuration[0]*60 + strDuration[3]*10 + strDuration[4]*1
    // When strDuration === "Xh Xmin"
    if (strDuration.length === "Xh Xmin".length)
      duration = strDuration[0]*60 + strDuration[3]*1
    // When strDuration === "XXmin"
    if (strDuration.length === "XXmin".length)
      duration = strDuration[0]*10 + strDuration[1]*1
    // When strDuration === "Xh"
    if (strDuration.length === "Xh".length)
      duration = strDuration[0]*60

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: duration,
      genre: movie.genre,
      rate: movie.rate
    }
  })
}

// Get the average of all rates with 2 decimals 

function ratesAverage (movies){
  let ratesArray = movies.map(movie => /*or Number*/parseFloat(movie.rate))
  let sum= ratesArray.reduce((x, y) => x+y, 0)
  let average= sum/ratesArray.length
  return Math.round(average*100)/100;
  // return Number(average.toFixed(2)); (DONT KNOW WHY ITS NOT WORKING)
  //different solution than Maxence
}


// Get the average of Drama Movies

// MISSING 2 TESTS 
function dramaMoviesRate(moviePar){
  let dramaMovies = moviePar.filter(movie=> movie.genre.includes ('Drama'))
  return ratesAverage (dramaMovies)
}

// Order by time duration, in growing order

function orderByDuration (){
  return []
} 

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  let movieString = "";
  let spielbergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  let total = movieString += spielbergMovies.length
  if (total === 0) return undefined
  return `Steven Spielberg directed ${total} drama movies!`
  }
  console.log(howManyMovies())


// Order by title and print the first 20 titles


// Best yearly rate average
