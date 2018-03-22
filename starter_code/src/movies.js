/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function convertHours (hourString) {
  // ["2", ""]
  var calculateHour = hourString.split("h");
  return calculateHour[0] * 60;
  // "2" * 60
  // 120
}

// "33min"
function convertMinutes (minuteString) {
  // ["33", ""]
  var calculateMinutes = minuteString.split("min");
  return Number(calculateMinutes[0]);
  // 33
}

function convertDuration (duration) {
  var timePieces = duration.split(" ");
  // ["2h", "33min"]
  // ["2h"]
  // ["33min"]

  var minutes =
    timePieces.reduce(function (sum, onePiece) {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

  return minutes;
}

function turnHoursToMinutes (movies) {
  var newCentArray =
    movies.map(function (oneMovie) {
      var newMovie = {};
      newMovie.title = oneMovie.title;
      newMovie.year = oneMovie.year;
      newMovie.director = oneMovie.director;
      newMovie.duration = convertDuration(oneMovie.duration);
      newMovie.genre = oneMovie.genre;
      newMovie.rate = oneMovie.rate;

      return newMovie;
    });

  return newCentArray;
}
// Get the average of all rates with 2 decimals 

function ratesAverage (moviesArray) {
  var totalAverage = moviesArray.reduce (function(sum, number){
    return Number(sum) + Number(number.rate)
  }, 0
)
var averageRate = (totalAverage / moviesArray.length).toFixed(2);
return Number(averageRate);
}
ratesAverage(movies);

// Get the average of Drama Movies


function dramaMoviesRate(arr){
  var dramaOnly = arr.filter(function(elem){
    return elem.genre.indexOf("Drama")> -1;
  }
  )
  if (dramaOnly.length === 0) {
    return undefined; }
return ratesAverage(dramaOnly)}


// Order by time duration, in growing order

function orderByDuration (){
  var newMovieArray = turnHoursToMinutes (movies);
  var moviesDuration = newMovieArray.sort (function(a,b){
   return  a.duration - b.duration; 
  })
  return moviesDuration;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  var dramaOnly = arr.filter(function(elem){
    return elem.genre.indexOf("Drama")> -1;
  })
  var spielbergOnly = dramaOnly.filter (function (name){
  return name.director.indexOf ("Spielberg")> -1;
})
if (arr.length === 0){
  return undefined 
} else if (spielbergOnly.length ===0 ) {
  return "Steven Spielberg directed 0 drama movies!";
}
return "Steven Spielberg directed " + spielbergOnly.length.toString() + " drama movies!";
}
// Order by title and print the first 20 titles

 function orderAlphabetically (arr){
   var sorted = arr.sort (function (a, b){
     return a.title - b.title;
   })
   var twenty = sorted.slice (0,20);
   var answer = []
   twenty.forEach(function(elem){
  answer.push(elem.title)})
  return answer
}

// Best yearly rate average