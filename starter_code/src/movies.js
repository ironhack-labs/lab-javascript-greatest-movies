/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
  function turnHoursToMinutes(arr){
    arr.map(function(val){
      let split = val.duration.split('');
      let filterArr = split.filter(function(val){
        let parse = parseInt(val);
        return typeof parse === "number"
      });
      let min = filterArr[0] * 60;
      let finalMin = min.join('')
      
      return val.duration = finalMin;
    })
  }

// Get the average of all rates with 2 decimals 

function ratesAverage(arr){
  var sum = arr.map(function(val){
    return val.rate;
  }).reduce(function(acc, val){
    return acc + val;
  });

  return sum / arr.length;
}
// Get the average of Drama Movies
function dramaMoviesRate(arr){
  var sum = arr.filter(function(val, i){
    return val.genre.includes("Drama")
  }).map(function(val){
    return val.rate;
  }).reduce(function(acc, val){
    return acc + val;
  });

  return sum / arr.length;
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
