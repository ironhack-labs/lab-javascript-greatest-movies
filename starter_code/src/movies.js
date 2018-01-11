/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 

/*var total = movies.reduce(sum, item), {
    return sum + item.rate;
};*/


function ratesAverage(film) {
    var average = film.reduce(function (sum, item) {
      return sum + parseFloat(item.rate);
    }, 0) / film.length;

    return Math.round(average*100)/100
  }
  
  ratesAverage(movies);
  console.log(ratesAverage(movies));
  
// Get the average of Drama Movies

//let drama = movies.filter(movies = movies.genre = "Drama");
//console.log(drama);



/*function dramaMovieRate(drama) {
    var average = drama.reduce(function (sum, item) {
      return sum + parseFloat(item.rate);
    }, 0) / drama.length;

    return Math.round(average*100)/100
  }
  
  ratesAverage(movies);
  console.log(ratesAverage(movies));
*/


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
