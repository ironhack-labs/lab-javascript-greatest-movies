/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// SKIPPED
function turnHoursToMinutes(){}

// Get the average of all rates with 2 decimals 
function ratesAverage (movies){
  var transRate = [];
  movies.forEach(function(e){
    transRate.push(parseFloat(e.rate));
  });
  console.log(transRate);
  var res = transRate.reduce(function(res,e){
    return res + e;
  },0);
  return note = res / movies.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  var dramaOnly = [];
  var transRate = [];
  movies.filter(function (e){
    if (e.genre.indexOf("Drama") != -1){
      dramaOnly.push(e);
    }
  })
  if(dramaOnly.length === 0){
    return undefined;
  } else{
    dramaOnly.forEach(function(e){
      transRate.push(parseFloat(e.rate));
    });
    var res = transRate.reduce(function(res,e){
      return res + e;
    },0);
    return note = (res / dramaOnly.length);
  }
}

// Order by time duration, in growing order
function orderByDuration(){
  var res = movies.sort(function(a,b){
    return a.year > b.year;
  });
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(){

}


// Order by title and print the first 20 titles
function orderAlphabetically(){

}

// Best yearly rate average
