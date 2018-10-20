/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

  function stringToMinutes(string) {
    var arr = string.split('h')
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])
    return hours*60+minutes
};

function turnHoursToMinutes(movies){
  return movies.map(function(movie){
    movie.duration=stringToMinutes(movie.duration);
  } 
  )};


// Get the average of all rates with 2 decimals 

function sumRates(movies){
  return movies.reduce(function(sum,rating){
    sum=sum+parseFloat(movies.rate);
  }
)};

function ratesAverage(movies){
  return movies.reduce(function(sum,rating){
    avg=sumRates/movies.length;
  }
)};




// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
