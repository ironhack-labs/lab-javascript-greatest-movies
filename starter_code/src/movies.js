/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movie) {
  var finalMovies = movie.map(function(elementDuration) {
    var soloHoras = elementDuration.duration.split("h");

    if (soloHoras == elementDuration.duration) {
      soloHoras = [0, elementDuration.duration];
    }
    var soloMinutos = soloHoras[1].split("min");
    if (soloMinutos[0] == "") {
      soloMinutos[0] = 0;
    }

    var newMovies = Object.assign({}, movies, {
      duration: parseInt(soloHoras[0]) * 60 + parseInt(soloMinutos[0])
    });
    console.log(newMovies);

    return newMovies;
  });
  console.log("string");
  return finalMovies;
}
// Get the average of all rates with 2 decimals
function ratesAverage(arrayMovies) {

  var aver = arrayMovies.reduce(function(average, movie) 
  {
    console.log(average + "  " + movie.rate);
    return average+=movie.rate
    
  }, 0);
  return parseFloat(aver/arrayMovies.length);
}

// Get the average of Drama Movies

function dramaMoviesRate (allmovies)
{
    var arrayDramaMovies = allmovies.filter(allmovie => allmovie.genre.indexOf("Drama")>=0);
    console.log(arrayDramaMovies)
     
      

    var averDrama= arrayDramaMovies.reduce(function(average, movie) 
    {
     // console.log(average + "  " + movie.rate);
      return parseFloat(average+=movie.rate)
      
    }, 0);
    console.log("---------------->"+averDrama) 
    if (arrayDramaMovies.length==0){return undefined}
    return (Math.trunc((averDrama/arrayDramaMovies.length)*100))/100;
}
console.log(dramaMoviesRate (movies));

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
