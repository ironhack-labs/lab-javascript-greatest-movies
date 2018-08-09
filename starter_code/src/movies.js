/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
    var myAverage = 
        movies.reduce(function (acc, oneRate) {
        return acc + parseFloat(oneRate.rate);
}, 0);
return(myAverage / movies.length);
}

ratesAverage (movies);


// Get the average of Drama Movies

// new array with only dramas
function  dramaMoviesThing (myArray) {
    var dramaMovies = 
      myArray.filter(function (oneMovie) {
      return oneMovie.genre.includes('Drama');
    });
    return dramaMovies;
  }

  // get the average
  function dramaMoviesRate (myArray) {
  var myDramaArray =  dramaMoviesThing(myArray);
  var myDramaAverage = 
    myDramaArray.reduce(function(acc, oneRate){
      return acc + parseFloat(oneRate.rate);
    }, 0);
    return (myDramaAverage / myDramaArray.length);
  }
  
  dramaMoviesRate (movies);


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
