/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray){
  var rates = [];
  for (i = 0; i < moviesArray.length; i++){
    rates.push(parseFloat(moviesArray[i].rate));
  }
  var average = rates.reduce(function(accumulator, current){
    return accumulator + current;
  });
  return parseFloat(((average/rates.length).toFixed(2)));
}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray){
  var dramaRates = [];
  for (i = 0; i < moviesArray.length; i++){
    if (isNaN(moviesArray[i].rate)){
      return NaN;
    } else {
      for (j = 0; j < moviesArray[i].genre.length; j++){
        if(moviesArray[i].genre[j] === 'Drama'){
          dramaRates.push(parseFloat(moviesArray[i].rate))
        } 
      }
    }
  }
  if (dramaRates.length === 0){
    return undefined;
  } else {
    var average = dramaRates.reduce(function(accumulator, current){
      return accumulator + current;
    });
    return parseFloat(((average/dramaRates.length).toFixed(2)));
  }
}

console.log(dramaMoviesRate(movies))

// Order by time duration, in growing order

function orderByDuration(moviesArray){
  
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
