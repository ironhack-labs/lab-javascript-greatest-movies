/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
////****juniors */
function turnHoursToMinutes(moviesArray) {
    var moviesWithCorrectTimeFormat = [];
    var eachMovieHours, eachMovieMinutes, totalMinutes, singleMovieWithCorrectTimeFormat;
    moviesArray.map(function(eachMovie) {
      eachMovieHours = 0;
      eachMovieMinutes = 0;
      totalMinutes = 0;
      if(eachMovie.duration.indexOf("h")!==-1){
             eachMovieHours = eachMovie.duration.slice(0, eachMovie.duration.indexOf("h"));
      }
    else{
        eachMovieHours=0;
    }
      eachMovieMinutes = eachMovie.duration.slice(eachMovie.duration.indexOf("h") + 1, eachMovie.duration.indexOf("m"));
      totalMinutes = (60 *eachMovieHours) + (1* eachMovieMinutes);
      singleMovieWithCorrectTimeFormat = Object.assign({},eachMovie);
      singleMovieWithCorrectTimeFormat.duration = totalMinutes;
      moviesWithCorrectTimeFormat.push(singleMovieWithCorrectTimeFormat);
    });
    return moviesWithCorrectTimeFormat;
   }
   ////mine
function ratesAverage(array){
var ratesArray = array.map(function(eachMovie){
    return eachMovie.rate;
})
var ratesArrayFloat = ratesArray.map(function(eachRate){
return parseFloat(eachRate);
})
var ratesSum = ratesArrayFloat.reduce(function(sum, eachRate){
    // console.log(divisor);
 return sum + eachRate;
    // console.log(totalRate);
},0);
var ratesAvg = ratesSum/ratesArrayFloat.length;
var ratesAvgRounded = Math.round(ratesAvg*100)/100;
console.log(ratesAvgRounded);
return ratesAvgRounded;
}
ratesAverage(movies)
function dramaMoviesRate(array){
 var dramaMovies =   array.filter(function(array){
return array.genre === 'Drama';
    })
    console.log(dramaMovies)
}
dramaMoviesRate(movies)
// ratesAverage = ratesArray.reduce(function(sum, eachFilm){
//     var divisor = ratesArray.length;
//     return  (sum + eachFilm)/divisor;
// })
// ratesAverage
// console.log(divisor)
// console.log(ratesAverage)
// ////mine
// var movieHoursMinutes = movies.map(function(eachMovie){
// return eachMovie.duration.split(" ");
// });
// console.log(movieHoursMinutes)
// var movieHoursMinutesNoUnits = movies.map(function(eachMovie){
//     return eachMovie[0]
// })
////gianni
// var movieTimes = movies.map(function(eachMovie){
//     console.log(eachMovie.duration.split(' '));
    
//     return movieTimes;
//   });
  
// function turnHoursToMinutes(array){
// }
// console.log(movieTimes)
// Get the average of all rates with 2 decimals 
// Get the average of Drama Movies
// Order by time duration, in growing order
// How many movies did STEVEN SPIELBERG
// Order by title and print the first 20 titles
// Best yearly rate average