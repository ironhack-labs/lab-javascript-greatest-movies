/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
  var total = movies.reduce(function (acc, item) {
    return acc + Number(item.rate);
  }, 0);
  var average = total / movies.length ;
  return Number(average.toFixed(2));
};

// Get the average of Drama Movies


function dramaMoviesRate(movies){
  
  var dramas = movies.filter(function(item) {
    if (item.genre.indexOf('Drama') !== -1){
      return true;
    };
  });
  if (dramas.length === 0) {
    return;
  }
  return ratesAverage(dramas);
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  var amount = movies.filter(function(item) {
    if (item.director.indexOf('Steven Spielberg') !== -1){
      return true;
    };
  });
  if (amount.length === 0) {
    return;
  }
  return (''+amount.length);
  }

// Order by title and print the first 20 titles


// Best yearly rate average
