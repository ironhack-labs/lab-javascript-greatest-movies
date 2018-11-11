/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function calcMinutes (duration){
  duration = duration.split(" ");

  for (i=0, l=movies.length; i<l; i++){
    var toMinutes = parseInt(duration[0],10); //parseInt coge de un string los numeros. 2do arg es en que base 10 ->decimal)
    var minutes = parseInt(duration[1], 10);
    var time = toMinutes*60 + minutes;
  }
  return time;
}

function turnHoursToMinutes(movies) {
  return movies.map(function(films) {
    films = Object.assign({}, films);
    films.duration = calcMinutes (films.duration);
  return films;
  });
} 


// Get the average of all rates with 2 decimals 

function ratesAverage(films) {
  var average = films.reduce(function(acc, films) {
      return acc += Number(films.rate); //saca el numero, no el string
  }, 0);
  average/= films.length;
  return average
}

// Get the average of Drama Movies

function dramaMoviesRate (films){

  var dramaFilms= films.filter(function(films){
    return films.genre.indexOf("Drama") !== -1;;
  });
  var dramaRate = ratesAverage(dramaFilms); 
  dramaRate = Number(dramaRate.toFixed(2)); 

  if (dramaFilms == 0){
    return undefined;
    } else{
    return dramaRate; 
  }

}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
