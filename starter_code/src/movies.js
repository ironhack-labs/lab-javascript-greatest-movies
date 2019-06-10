/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes (movies){
  let moviesMin = movies.map(movie => {
      let duracion = movie.duration;
      let newDuration = duracion.split(" ")

      if (duracion.includes("h")  && duracion.includes("min") ){
          let horasToMin = parseInt(newDuration[0]) * 60 + parseInt(newDuration[1])
          duracion= horasToMin

      } else if (duracion.includes("h") ){
          let calculo = parseInt(newDuration[0]) * 60
          duracion = calculo;

      }else if(duracion.includes("min")){
          let minutes = parseInt(newDuration[0])
          duracion = minutes;
      }

      return {...movie, duration: parseInt(duracion)}

  })
  return moviesMin
}

// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
  
  let avg = movies.reduce((prev, current) => {
        return prev + current.rate
    }, 0) / movies.length
  // console.log(avg)

  return parseFloat(avg.toFixed(2))
  } 
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  

  let movieDrama = movies.filter (movie => movie.genre.includes("Drama"))
  if (movieDrama.length === 0 ) {
    return undefined;
  }
  // console.log(movieDrama)
  
//   let avgDrama = movieDrama.reduce((prev, current) => {
//     // if (movieDrama) {
//     //   return prev;
//     // }
//     return prev + parseInt(current.rate)
// }, 0) / movieDrama.length

// console.log(parseFloat(avgDrama.toFixed(2)))
// return parseFloat(avgDrama.toFixed(2))

return ratesAverage(movieDrama)
}





// Order by time duration, in growing order

function orderByDuration(movies) {
 let orderMovies = movies.sort(function(a,b) {
    if (a.duration > b.duration)  return 1
    if (a.duration === b.duration) {
      if (a.title > b.title) return 1 
      if (a.title < b.title) return -1 
    }
    if (a.duration < b.duration)  return -1

  }) 
    return orderMovies 
}
  

  
  








// How many movies did STEVEN SPIELBERG

function howManyMovies (movies) {
  
  let movieDrama = movies.filter (movie => movie.genre.includes("Drama"))
  let movieDramaSpielberg = movieDrama.filter (movie => movie.director.includes("Spiel"))
  if (movies.length === 0) {
    
    return undefined;

  }
  return (`Steven Spielberg directed ${movieDramaSpielberg.length} drama movies!`)
}



// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let orderMovies = movies.sort(function(a,b) {
    if (a.title > b.title)  return 1
    
    if (a.title < b.title)  return -1

  }) 
    let movieArrayByTitle = movies.map(movie => {
      return ( movie.title)

    } )

    return movieArrayByTitle.splice(0,20)

}


// Best yearly rate average
