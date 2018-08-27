/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
  var newMovies = movies.map(function(item) {
    var hourDuration = item.duration[0]*60;
    var timeArray = item.duration.split('');
    var minutDuration = timeArray.slice(2,timeArray.length-3);
    var minuts = minutDuration.join('')*1;
    duration = hourDuration+minuts;
    return duration;
  });
  return newMovies;
};

// Get the average of all rates with 2 decimals 

function decimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  };
  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  };
  
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};

Math.round10 = function(value, exp) {
  return decimalAdjust('round', value, exp);
};

function ratesAverage (moviesArray) {
  var sum = moviesArray.reduce (function (acu, item){
    return acu + item.rate;
  }, 0);
  return Math.round10(sum/moviesArray.length, -2);
};

// Get the average of Drama Movies

function dramaMoviesRate (moviesArray) {
  var dramaMovies = moviesArray.filter(function (item) {
    if (item.genre.indexOf('Drama') !== -1) {
      return item;
    } else{
      return undefined;
    };
    // return item.genre === ['Drama'];
  });
  var ratesDrama = ratesAverage(dramaMovies);
  return ratesDrama;
};

// Order by time duration, in growing order

function orderByDuration(movies){
  var duration = [];
  duration = movies.map(function (item){
    return item;
  });
  var order = duration.sort(function (a, b){
    if (a.duration < b.duration) {
      return -1;
    }else if (a.duration > b.duration) {
      return 1;
    }else {
      return duration.sort(function (a, b) {
        if (a.title < b.title)
          return -1;
        if (a.title> b.title)
          return 1;
        return 0;
      });
    };
  });
  return order;
};

function howManyMovies(movies){
  if (movies === undefined){
    return 'undefined'
  };

};

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
