/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
  return array.map(function(element){
    var movie = Object.assign({}, element);
    var duration = movie.duration.split(' ').reduce(function(acc, curr){
      if (curr.indexOf('h') !== -1) {
        return Number(curr.replace('h', '')) * 60 + acc;
      } else{
        return Number(curr.replace('min', '')) + acc;
      }
    }, 0);
    movie.duration = duration;    
    return movie;
  }); 

} 
console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals


function ratesMovies(prev,act) {
  return (Number(prev)+Number(act.rate));
}

function ratesAverage(array) {
  return parseFloat((array.reduce(ratesMovies,0) / array.length));
}

console.log(ratesAverage(movies));


// Get the average of Drama Movies

function dramaMoviesRate (array) {
  var arrayDrama = array.filter(function(dramaRate){
    return dramaRate.genre.indexOf('Drama') !== -1;
  });
  if (arrayDrama !== -1) {
    return ratesAverage(arrayDrama) || undefined;
  }
}
console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order

function orderByDuration (movies) {
  return movies.sort(function(x,y){
    if (x.duration > y.duration) {
      return 1;
    }
    if (x.duration < y.duration) {
      return -1;
    }
    if (x.title > y.title) {
      return 1;
    }
    if (x.title < y.title) {
      return -1;
    }
    return 0;
  });
}
console.log(orderByDuration(turnHoursToMinutes(movies)));

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
