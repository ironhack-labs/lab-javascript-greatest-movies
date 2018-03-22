/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

var totalRate = 0;

function ratesAverage (movies) {

var totalRate =  movies.reduce(function(accumulator, movie){
      return accumulator + movie.rate;
  }, 0); return  totalRate / movies.length; 
}

// Get the average of Drama Movies

var dramaRate = movies.filter(function(movie){
  if (movie.genre == 'Drama'){
    return movie;
  }
});

function dramaMoviesRate (dramaRate) {

var totalRate =  dramaRate.reduce(function(accumulator, movie){
      return accumulator + movie.rate;
  }, 0); return  Math.floor((totalRate / dramaRate.length)*100)/100; 
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

var SPIELBERG = movies.filter(function(movie){
  if (movie.director == 'Steven Spielberg' && movie.genre == 'Drama'){
    return movie;
  } else {  
  } 
});

if (SPIELBERG.length === 0){
  array = undefined;
};

function howManyMovies(array){
  if (array.length > 0){
    return 'Steven Spielberg directed '+ array.length +' drama movies!';
  } else if (array == undefined){
    return 'Steven Spielberg directed 0 drama movies!';
  }
}

// Order by title and print the first 20 titles

function orderAlphabetically (array) {
  array.sort(function(a, b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  var oAShort =  array.splice(0, 20);
  var oAShortTitle = oAShort.map(function(a){
    return a.title;
  }); 
  return oAShortTitle;
}

// Best yearly rate average
