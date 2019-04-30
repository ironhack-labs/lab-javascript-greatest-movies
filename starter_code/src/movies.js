/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

  return movies.map(movie => { 
    if (typeof movie.duration != "number"){
      return {
        ...movie,
        duration: convertToMins(movie.duration)
      }
    }
    else {
      return { ...movie }
    }

    
  })
}

function convertToMins(arg) {
    let duration = arg.split(" ")    
    let hoursInMins = parseInt(duration[0])
    let mins = parseInt(duration[1])
    if (duration.length === 1) {
      if (duration[0].includes("h")) { 
      hoursInMins *= 60
      return hoursInMins
      }
      if (duration[0].includes("min")) {       
      return hoursInMins
      }
    }
    else if (duration.length == 2) {
      return hoursInMins * 60 + mins
    } 
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

  const rates = []
  movies.forEach(movie => { rates.push(movie.rate) });
  const totalSum = rates.reduce((ac, currentValue) => {
     return ac + currentValue
  }, 0)
  average = totalSum/rates.length
  return parseFloat(average)

}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {

const dramaRates = []

movies.forEach(movie => {
  if (movie.genre.includes("Drama")) {     
    dramaRates.push(movie.rate)
  }  
});

const totalSum = dramaRates.reduce((ac, currentValue) => {
  return ac + currentValue
}, 0)

averageDrama = totalSum/dramaRates.length

if (dramaRates.length == 0) { return undefined }
else { return parseFloat(averageDrama.toFixed(2)) }

}

// Order by time duration, in growing order

function orderByDuration(movies) {
  console.log(movies)
  const moviesArray = turnHoursToMinutes(movies)  

  return moviesArray.sort((a, b) => {
    if (a.duration < b.duration) {
      return -1
    }
    else if (a.duration > b.duration) { 
      return 1
    } 
    else {
      return a.title.localeCompare(b.title)
    }
  })

  

}


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {

  const directorFilter = movies.filter(movie => movie.director == "Steven Spielberg")
  console.log(directorFilter)
  if (directorFilter.length == 0) { return "Steven Spielberg directed 0 drama movies!" }
  else { return `Steven Spielberg is the director of ${directorFilter.length} movies` }
  if (directorFilter.genre.includes("Drama")) { console.log(`Contiene peliculas drama`) }
  console.log(directorFilter.genre)

}


// Order by title and print the first 20 titles


// Best yearly rate average
