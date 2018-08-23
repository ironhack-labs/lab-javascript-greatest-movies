/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//console.log(movies)

  function changeHoursToMinutes(duration){

    duration = duration.split(' ')
    var time = 0

    for (let i = 0; i < duration.length; i++) {

      if (duration[i].indexOf('h') != -1) {
        //console(Number(duration[i].replace('h', '')))
          time += Number(duration[i].replace('h', '')) * 60
      }else if (duration[i].indexOf('min') !== -1) {
          time += Number(duration[i].replace('min', ''))
      }

    }
    return time

  }

  function turnHoursToMinutes(movies){
    return movies.map((movie)=>{
      movie = Object.assign({}, movie)
      movie.duration = changeHoursToMinutes(movie.duration)
      return movie
    })
  }

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var rate = movies.reduce((accumulator, movie)=>{
    return accumulator = accumulator + Number(movie.rate) 
  }, 0)
  return Number((rate / movies.length))
}

// Get the average of Drama Movies

function dramaMoviesRate(movies){
  var dramamovies = movies.filter((movie)=>{
    return movie.genre.indexOf('Drama') != -1
  })
    
  if (dramamovies.length != 0 ){
    return Number(ratesAverage(dramamovies))
  }else{
    return undefined
  }

}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if(!movies | movies.length === 0 ){
    return undefined;
  }

  var steven = movies.filter((movie)=>{
    return movie.director === "Steven Spielberg" && movie.indexOf("Drama") !== -1
  });

  return steven.length
  
}


// Order by title and print the first 20 titles


// Best yearly rate average
