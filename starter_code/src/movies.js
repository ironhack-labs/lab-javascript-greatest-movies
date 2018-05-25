/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function getMinutes(movie){
  var hours =  0;
  var minutes = 0;
  if ( movie.duration.includes("h") ) {
    hours = movie['duration'].match(/\d+(?=h)/)[0];
  }
  if (movie.duration.includes("min")) {
    minutes = movie['duration'].match(/\d+(?=min)/)[0];
  }
  return parseInt(hours) * 60 + parseInt(minutes);
}

var turnHoursToMinutes = function(list) {
  var result = [];
  list.map( function( movie, index) {
    // var newMovie = {
    //   title: movie.title,
    //   year: movie.year,
    //   director: movie.director,
    //   duration: movie.duration,
    //   genre: movie.genre,
    //   rate: movie.rate,
    // };
    // you can avoid the above lines
    // using Object.assign()
    var newMovie = Object.assign({}, movie); // one line for the above lines
    result.push( newMovie );
    result[index].duration = getMinutes(movie);
  });
  return result;
};

// Get the average of all rates with 2 decimals 
function ratesAverage(list) {
  if (!list || list.length === 0) {
    return undefined;
  } else {
    return list.reduce( function(acc, movie) {
      return acc += parseFloat(movie.rate) ? parseFloat(movie.rate) : 0;
    }, 0) / list.length;
  }
}

// Get the average of Drama Movies
function dramaMoviesRate(list) {
  var dramaMovies = list.filter( movie => movie.genre.includes('Drama') );
  if (dramaMovies.length === 0) {
    return undefined;
  } else {
    var dramaAvrg = ratesAverage( dramaMovies );
  }
  return Math.round(dramaAvrg * 100) / 100;
 }

// Order by time duration, in growing order
function orderByDuration(list) {
  return list.sort( function (a,b) {
    if (a.duration > b.duration || a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(list) {
  if (list.length === 0) {
    return undefined;
  } else {
    var spielbergMovies = list.filter( movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).length; 
    return "Steven Spielberg directed " + spielbergMovies + " drama movies!";
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(list) {
  return list.map( movie => movie.title).sort( function(a,b) {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  }).splice(0,20);
}

// Best yearly rate average
function bestYearAvg(list) {
  var years = [];
  var qty = [];
  var totalRate = [];
  list.map( function(movie) {
    if (!years.includes(movie.year)) {
      years.push(movie.year);
      qty.push(1);
      totalRate.push(movie.rate);
    } else {
      var index = years.indexOf(movie.year);
      qty[index] += 1;
      totalRate[index] += movie.rate;
    }
  });
  console.log(years);
  console.log(qty);
  console.log(totalRate);
  var averages = [];
  totalRate.map( function(total, index) {
    averages.push( total / qty[index] );
  } )
  console.log("averages", averages);
  //return "The best year was " + year + " with a average of " + average;
}