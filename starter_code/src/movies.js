/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf("h") !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf("min") !== -1) {
      minutes = parseInt(
        elem.duration.substring(
          elem.duration.length - 5,
          elem.duration.length - 3
        ),
        10
      );
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var rate = 0;
  rate = array.reduce(function(accumulator, current) {
    console.log(accumulator, current.rate);
    return accumulator + Number(current.rate);
  }, 0);
  console.log(rate, array.length);
  rate /= array.length;
  return Number(rate.toFixed(2));
}
console.log(ratesAverage(movies));


// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var rate = 0;
  var dramas = 0;
  rate = array.reduce(function(accumulator, current) {
    console.log(accumulator, current.rate);
    if (current.genre.indexOf("Drama") > -1 && current.genre.length == 1) {
      if(current.hasOwnProperty('rate')){
        dramas++;
        return accumulator + Number(current.rate);
      }else{
        return 0;
      }
    }
  }, 0);
  console.log(rate, array.length);
  rate /= dramas;
  return Number(rate.toFixed(2));
}
console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order
function orderByDuration(array) {
  var durationOrdered = array.sort(function(a, b) {
    if (turnHoursToMinutes(a.duration) < turnHoursToMinutes(b.duration)) {
      return -1;
    }
    if (turnHoursToMinutes(a.duration) > turnHoursToMinutes(b.duration)) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
  });
  return durationOrdered;
}
// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  var moviesOrdered = [];
  array.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < 20 && i < array.length; i++) {
    moviesOrdered.push(array[i]);
  }
  return moviesOrdered;
}
console.log(orderAlphabetically(movies));

// Best yearly rate average
