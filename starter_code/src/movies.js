var movies = require("./data.js");

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  var newArray = array.map(function(movie){
  var newTime;
  if (movie.duration.includes("h")) {
  newTime = (movie.duration.replace("h","").replace("min","")).split(" "); }
  else {newTime = [0, movie.duration.replace("min","")]}
  if (newTime[0] === 0){
    var newTimeInt =parseInt(newTime[1])
  } else if(newTime[1] === undefined) {
    newTimeInt = parseInt(newTime[0] * 60)
  } else{
    newTimeInt = parseInt(newTime[0] * 60) + parseInt(newTime[1]); }
  return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: newTimeInt,
    genre: movie.genre,
    rate: movie.rate } 
});
return newArray;
}


// Get the average of all rates with 2 decimals 

// function ratesAverage(array){
//   var rateFloat = parseFloat(array.rate)
//   var accumulatedRates = rateFloat.reduce(function(accumulator, current){
//     return accumulator / array.length;}, 0);
// }

function ratesAverage(movies){
  var theSum = movies.reduce(function(sum, movie){
    return sum + Number(movie.rate);
  }, 0)
  var rateAvg = theSum / movies.length;
  // return rateAvg.toFixed(2);
  return Math.round(rateAvg*100)/100; 
}


// Get the average of Drama Movies

// function dramaMoviesRate(array){
//   var dramaRateFloat;
//   var dramaMoviesCounter = 0;
//   if (array.genre === "Drama"){
//     dramaMoviesCounter++;
//     dramaRateFloat = parseFloat(array.rate);
//     var accumulatedDramaRates = dramaRateFloat.reduce(function(accumulator, current){
//       return accumulatedDramaRates / dramaMoviesCounter;}, 0)  
//     } else {
//       return undefinded; }
//     }
function dramasOnly(movies){
  var dramas = movies.filter(function(movie){
    return movie.genre.includes("Drama")
  })
  return dramas;
}

function dramaMoviesRate(movies){
  var dramas = dramasOnly(movies);
  if(dramas.length === 0){
    return;
  }
  var dramaRate = ratesAverage(dramas);
  return dramaRate; 
}

// Order by time duration, in growing order
function orderByDuration(movies){
 movies.sort(function(movieA,movieB){
   var result = movieA.duration - movieB.duration;
   if (result !== 0){
     return result;
   }
   if(movieA.title < movieB.title){
     return -1;
   }
   if (movieA.title > movieB.title){
     return 1;
   }
   else{
     return 0;
   }
  })
  return movies;
} 

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  var stevesMovies = movies.filter(function(movie){
    return movie.director === "Steven Spielberg";
  })
  var stevesDramas = dramasOnly(stevesMovies);
  if (stevesDramas.length === 0){
    return "Steven Spielberg directed " + stevesDramas.length + " drama movies!";
  } else{
  return "Steven Spielberg directed " + stevesDramas.length + " drama movies!";
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var ordered = array.map(function(movie){
    return movie.title.sort();
  })
  return ordered.slice(0,20);
}