/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (x) {
  var newMovies = x.map(function(item)  {
    var duracion = item.duration
    if (duracion.includes('h')) {
      var arrayDuration = duracion.split(' ');
      if (arrayDuration.length == 1) {
        var minutes = parseInt(arrayDuration[0])*60;
      } else {
        var minutes = parseInt(arrayDuration[0])*60 + parseInt(arrayDuration[1]);
      };
    } else {
      var minutes = parseInt(duracion)
    };
      return Object.assign({},item,{duration : minutes}); 
  })
return newMovies;
}



// Get the average of all rates with 2 decimals 

function ratesAverage(x) {
  var arrayRate = x.map(function(item) {
    return parseFloat(item.rate);
  });
   var avgRate = arrayRate.reduce(function(a, b){ return a + b; }) / arrayRate.length;
   return parseFloat(avgRate.toFixed(2));
 }


// Get the average of Drama Movies

function dramaMoviesRate(x) {
  var arrayDramaRate = x.map(function(item) {
   if (item.genre.includes('Drama')) {
     if (!item.rate) {
      return 0;
     } else {
      return parseFloat(item.rate);
    }}
  });  
  var dramaRate = arrayDramaRate.reduce(function(a,b){ return a + b;}) / arrayDramaRate.length;
  return parseFloat(dramaRate.toFixed(2));
}



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
