/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (movie) {
    var hours = 0;
    var minutes = 0;
    if (movie.duration.indexOf('h') !== -1) {
      hours = parseInt(movie.duration[0], 10) * 60;
    }
    if (movie.duration.indexOf('min') !== -1) {
      minutes = parseInt(movie.duration.substring(movie.duration.length - 5, movie.duration.length - 3), 10);
    }
    return Object.assign({}, movie, {
      duration: hours + minutes
    });
  });
}
turnHoursToMinutes(moviesArray);

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {
  var sum = moviesArray.reduce(function (acc, value) {
    return acc + Number(value.rate);
  }, 0);
  return sum / moviesArray.length;
}

// Get the average of Drama Movies  +++++++++++ It should return the average of the array, float!
function dramaMoviesRate(moviesArray){
  var drama=[];
  drama= moviesArray.filter(function(movie){
    return movie.genre.includes("Drama")==true
  });
  if (drama[0]==undefined){
    return undefined
  }
  else{
    return ratesAverage(drama)
  }
}

// Order by time duration, in growing order
function orderByDuration(moviesArray){
  moviesArray.sort(function(a,b){
    if ( a.duration == b.duration ){
      if ( a.title > b.title ){
        return 1
      }
    }
    else {
      return a.duration - b.duration
    }});
  return moviesArray
}

// How many movies did STEVEN SPIELBERG
//todo

// Order by title and print the first 20 titles


// Best yearly rate average