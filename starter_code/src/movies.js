/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  var sumRatings = movies.reduce(function(acc, item){
    return acc + item.rate;
  }, 0);
  
  return sumRatings / movies.length;
};

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(item){
    // if (item.genre === ['Drama']) {
    //   return item;
    //   }; 
    return item.genre.indexOf('Drama') !== -1;
  });

  var sumDramaRatings = dramaMovies.reduce(function(acc, item){
    return acc + item.rate;
  }, 0);
  
  return sumDramaRatings / dramaMovies.length;

};


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
