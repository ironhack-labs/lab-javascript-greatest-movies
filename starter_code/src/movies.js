/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
/*function turnHoursToMinutes (array) {
  return array.map(function(movie){
    var movieTime = movie.duration;
    var totalMinutes = hoursMinutes + minutes;
    var hoursMinutes = 0
    var minutes = 0
    for (var i = 0; i<movieTime.length; i++){
      if(movieTime[i]==="h"){
        hoursMinutes=movieTime[i-1]*60:
      }
    }

    
    
  })
}
Nuestro intento para hacer este trucoso!*/
function  turnHoursToMinutes(array){
  array.forEach(function(element) {
    var hour = parseInt(element.duration.substring(0,1));
    var minutes = parseInt(element.duration.split("min")[0].substring(2));
    element.duration = hour *60 + minutes;

  });
  return array
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  var rateSum = array.reduce(function(sum, item){
    return sum+= item.rate;
  },0);
  return rateSum/array.length;
}
console.log(ratesAverage(movies));


// Get the average of Drama Movies
//Que faltamos aqui? Estoy perdido en como no funciona esta function y devuelva un NaN
function dramaMoviesRate(array){
  var drama = array.filter(function(item){
    return item.genre.forEach(function(genreType){
      return genreType === "Drama";
    });
  });
  return ratesAverage(drama);
}
console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
