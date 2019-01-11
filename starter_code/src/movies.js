/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
  var moviesCopy = movies.map(function(movie) {
    var time = movie.duration.split(' ');
    var minutes = 0;

    time.forEach(function(date) {
      if (date.indexOf('h') !== -1) {
        minutes += parseInt(date) * 60
      } else {
        minutes += parseInt(date)
      }
    })

    return Object.assign({}, movie, {duration: minutes})
  })

  return moviesCopy;
}

// Get the average of all rates with 2 decimals 
function ratesAverage (movies){
  var moviesaverage = movies.map(function (movie){
     return movie
  })

  var averageReduce = moviesaverage.reduce(function(valorAnterior, valorActual){
    return valorAnterior + valorActual
  },0)
  console.log(averageReduce)
}

ratesAverage (movies)

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
