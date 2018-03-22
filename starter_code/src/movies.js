/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var sumOfRatings=array.reduce(function(acc, item){
    var rateNumber=item.rate*1;    
    return acc+rateNumber;
  },0)

  return parseFloat((sumOfRatings/array.length).toFixed(2));
}
console.log(ratesAverage(movies));


// Get the average of Drama Movies
function dramaMovieRate(array) {
  var dramaMovie=array.filter(function(item){
    return (item.genre.indexOf('Drama')===1);
  });

  return ratesAverage(dramaMovie);
}
console.log('Drama movie average rating is: '+ dramaMovieRate(movies))
console.log(typeof (dramaMovieRate));

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
