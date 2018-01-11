/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 




// Get the average of all rates with 2 decimals 




function ratesAverage(film) {
    var average = film.reduce(function (sum, item) {
      return sum + parseFloat(item.rate);
    }, 0) / film.length;

    return Math.round(average*100)/100
  }
  
  ratesAverage(movies);
  console.log(ratesAverage(movies));
  
// Get the average of Drama Movies


//var drama = movies.filter(function(movies) {
  //  return movies.genre.includes("Drama");
//});



function dramaMoviesRate(movie) {
    var drama = movie.filter(function(movie) {
        return movie.genre.includes("Drama");
    }); 

    if (drama.length === 0) {
        return;
    }

    var total = drama.reduce(function (sum, item) {
        item.rate = item.rate || 0;
        return sum + parseFloat(item.rate);
    }, 0);
    
    var average = total / drama.length;

    return Math.round(average*100)/1007
}
  
  dramaMoviesRate(movies);
  console.log(dramaMoviesRate(movies));



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
