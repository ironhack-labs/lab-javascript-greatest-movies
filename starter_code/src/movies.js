/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (arr) {
  
  const sumRates = arr.reduce((acc, current) => {
    if (current.rate == "") {
      current.rate = 0;
    }
    
  return acc + parseFloat(current.rate); }, 0);
    
  return Math.round((sumRates/arr.length)*100)/100;
  }

// Get the average of Drama Movies

function dramaMoviesRate (arr) {

  var dramaList = arr.filter(function (movie){
    for (var i=0; i < movie.genre.length; i++ ){
      return movie.genre[i] == "Drama";}
  } );
  if (dramaList.length == 0) {
    return;
  }  
  return ratesAverage(dramaList);
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
