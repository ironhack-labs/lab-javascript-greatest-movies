/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  var times=movies.map(function(movie){
    return movie.duration;
  }).split(" ")
  time.array.forEach(function(time) {
    return time.Number(parseInt(time));
  });

}

// Get the average of all rates with 2 decimals 
/*function ratesAverage(movies){
  var aux =0;
  movies.forEach(function(movie){
    aux+=movie.rate;
  });
  return parseFloat(aux/movies.length);
}*/

function ratesAverage(movies){
  var rates=movies.map(function(movie){
    return movie.rate;
  }).reduce(function(total, rateVal) {
    return total+rateVal;
  });
  
  return parseFloat(rates/movies.length);
}


// Get the average of Drama Movies

/*function dramaMoviesRate(movies){
  var aux =0;
  var count=0;
  
  movies.forEach(function(movie){
    if (movie.genre.includes('Drama')){
      aux+=movie.rate;
      count++;
    }    
  });
  if (count==0)
  return undefined;

  return parseFloat(aux/count);
}*/
function dramaMoviesRate(movies){
  var count=0;
  var rates=movies.map(function(movie){
    if (movie.genre=='Drama'){
    count++;
    return movie.rate;}
    return 0;
  }).reduce(function(total, rateVal) {
    return total+rateVal;
  });
  
  if (rates.length==0)
  return undefined;
  
  return parseFloat(rates/count);
}
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  var aux= movies.filter(function(movie){
      return (movie.director=='Steven Spielberg' && movie.genre.includes('Drama')); 
  });

if (movies.length==0)
return undefined
return `Steven Spielberg directed ${aux.length} drama movies!`
}


// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var titles=movies.map(function(movie){
    return movie.title;
  }).sort();
  while (titles.length>20) titles.pop();
  return titles;
}

// Best yearly rate average
