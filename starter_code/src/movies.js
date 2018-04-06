var movies = require('./src/data.js')



// convert hours to minutes
// "2h" or "4h"
function convertHoursToMinutes(hours){
  var minutesFromHours = hours.split("h");
  return minutesFromHours[0]*60;
}
convertHoursToMinutes("2h")

// "44min"
function covertMinutesToMinutes(minutes){
  var minutesFromMinutes = minutes.split("min");
  // console.log(typeof(minutesFromMinutes[0]))
  return Number(minutesFromMinutes[0]);
}
covertMinutesToMinutes("44min")

// duration: '3h 21min'
function doTheMath(duration){
  var timePieces = duration.split(" ");

  var minutes = timePieces.reduce(function(sum, piece){
    if(piece.includes("h")){
      // add sum + 3*60
      return sum + convertHoursToMinutes(piece)
    }
    return sum + covertMinutesToMinutes(piece)
  }, 0);
  return minutes;
}
doTheMath("3h 21min")

function turnHoursToMinutes(movies){
  var newMoviesArray = movies.map(function(movie){
    var newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = doTheMath(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;
    return newMovie;
  })
  return newMoviesArray;
}
turnHoursToMinutes(movies)
// =========================================

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var theSum = movies.reduce(function(sum,movie){
    return sum + Number(movie.rate);
  },0);
  var rateAvg = theSum/movies.length;
  // return rateAvg.toFixed(2);
  return Math.floor(rateAvg*100)/100
}

ratesAverage(movies)

// ==========================================

// Get the average of Drama Movies

function dramasOnly(movies){
  var dramas = movies.filter(function(movie){
    // if string: return movie.genre === "Drama"
    return movie.genre.includes("Drama")
  })
  return dramas
}
dramasOnly(movies)

function dramaMoviesRate(movies){
  var dramas = dramasOnly(movies);
  if(dramas.length === 0){
    return;
  }
  var dramaRate = ratesAverage(dramas);
  return dramaRate;
}

dramaMoviesRate(movies)
// ==========================================

// Order by time duration, in growing order
//passing the tests but not working
function orderByDuration(movies){
  movies.sort(function(movieA, movieB){
    var result = movieA.duration - movieB.duration;
    if(result !== 0){
      return result;
    }
    if(movieA.title < movieB.title){
      return -1;
    }
    if (movieA.title > movieB.title ){
      return 1;
    }
    return 0;
  })
  return movies;
}
orderByDuration(movies)

// ===========================================

// How many drama movies did STEVEN SPIELBERG

function howManyMovies(movies){
  
  if(movies.length === 0){
    return;
  }
  // get all steven's movies:
  var stevesMovies = movies.filter(function(movie){
    return movie.director === "Steven Spielberg";
  })
  var stevesDramas = dramasOnly(stevesMovies)
  
  return "Steven Spielberg directed " + stevesDramas.length + " drama movies!";
}

howManyMovies(movies);

// ==========================================

// Order by title and print the first 20 titles

function orderAlphabetically(array){
  var ordered = array.map(function(movie){
    return movie.title
  })
  .sort()
  .slice(0,4)
  return ordered
}

orderAlphabetically(movies)
