/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArr) {
    var movieMinutesHours = moviesArr.map(function(movie){

      var tiempoMinHours = movie.duration.split(" ");
      if (tiempoMinHours.length==2) {
        var horas = parseInt(tiempoMinHours[0]);
        var minutos = parseInt(tiempoMinHours[1]);
        var tiempoSuma = (horas * 60) + minutos;
      }else{
        if (tiempoMinHours[0].endsWith("h")) {
          var tiempoSuma = parseInt(tiempoMinHours[0]) * 60 ;
        } else {
          var tiempoSuma = parseInt(tiempoMinHours[0]);
        }
      }
console.log(tiempoSuma);
console.log(movie);
      return Objetc.assign({}, movie, {duration: tiempoSuma});

    });

    console.log(movieMinutesHours);

    return  movieMinutesHours
  }

  

// Get the average of all rates with 2 decimals 
function ratesAverage (filmArr) {
  if (filmArr.length === 0) return;
  var totalRate = filmArr.reduce(function(acumulator, currentMovie) {
    return acumulator + currentMovie.rate;
  },0);
  return Math.round(totalRate/filmArr.length * 100) / 100;
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(stevenMovies) {
  stevenMovies.filter(function(movie){
    return stevenMovies.director == 'Steven Spielberg';
  })
}

// Order by title and print the first 20 titles


// Best yearly rate average
