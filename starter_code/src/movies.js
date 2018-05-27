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

    // one line to avoid the above lines -> thanks for the suggestion
    var newMovie = Object.assign({}, movie);
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
function doesYearExist(arr, obj) {
  for (var i = 0; i < arr.length;i++) {
    if (arr[i].year == obj.year) { return arr[i] }
  }
}

function bestYearAvg(list) {
  if (list.length == 0) {
    return undefined;
  } else {
    var yearsList = [];
    list.map( function( movie ) {
      var yearItem = doesYearExist( yearsList, movie );
      if ( yearItem ) {
        yearItem.rate += parseFloat( movie.rate );
        yearItem.moviesCount += 1;
      } else {
        yearsList.push( {
          year: movie.year,
          rate: parseFloat( movie.rate ),
          moviesCount: 1
        });
      }
    });
    var yearsAvg = yearsList.map( function(obj) {
      return { year: obj.year, average: parseFloat(obj.rate / obj.moviesCount).toFixed(2) };
    });
    var bestYear = yearsAvg.sort(function(a,b) {
      if ( b.average > a.average || ( b.average === a.average && b.year < a.year) ) {
        return 1;
      } else {
        return -1;
      }
    } )[0];
    return 'The best year was ' + bestYear.year + ' with an average rate of ' + Math.round(bestYear.average * 100) / 100;
  }
}