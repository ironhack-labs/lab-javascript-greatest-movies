/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
    
  var finalArr = [];
  var newArr = arr.map(function(movie){
    var timeString = movie.duration;
    var timeStringArray = timeString.split(" ");
    var hours;
    var minutes;
    if(timeStringArray.length === 1) {
      if(timeStringArray[0].indexOf('h') > 0) {
        minutes = 0;
        hours = parseInt(timeStringArray[0][0]);
      } else {
        hours = 0;
        minutes = parseInt(timeStringArray[0].split("m")[0]);
      }
    } else {
      hours = parseInt(timeStringArray[0][0]);
      minutes = parseInt(timeStringArray[1].split("m")[0]);
    }     
    var newDuration = hours * 60 + minutes;
    return newDuration;
  });  
  
  arr.forEach(function(element, index) {
    var newElement = Object.assign({}, element); 
    newElement.duration = newArr[index];
    finalArr.push(newElement);
  });;

  return finalArr;
}

console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
  var ratesArray = [];
  arr.forEach(function(movie) {
    ratesArray.push(Number(movie.rate));
  });

  var accumulatedMovies = ratesArray.reduce(function(accumulator, number) {
    return accumulator + number;
  });

  return accumulatedMovies / (ratesArray.length);
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
  var dramaRatesArray = [];
  arr.forEach(function(movie) {
    if (movie.genre.indexOf('Drama') > 0) {
      dramaRatesArray.push(Number(movie.rate));
    }
  });

  if (dramaRatesArray.length > 1) {
    var dramaAccumulatedMovies = dramaRatesArray.reduce(function(accumulator, number) {
      return accumulator + number;
    });
    return (dramaAccumulatedMovies / (dramaRatesArray.length));
  } else {
    return arr[0].rate;
  }


}

// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
  var spielbergMovies = [];
  
}

// Order by title and print the first 20 titles


// Best yearly rate average
