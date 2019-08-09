/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movie) {
    let  sum = 0;
    for (let i = 0; i < movie.length; i++) {
        sum += movie[i].rate;
    }
    let avg = sum / movie.length;
    return  Number(parseFloat(avg).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function(movie) {
      return movie.genre.includes("Drama");
  });
  if (dramaMovies.length > 0) {
      return ratesAverage(dramaMovies);
    } 
    else {
        return 0;
    } 
  }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
    let order = movies.sort(function(firstMovie, secondMovie) {
        
        if (firstMovie.duration === secondMovie.duration) {
            return firstMovie.title.localeCompare(secondMovie.title);
        }
        return firstMovie.duration - secondMovie.duration;
    });
    return order;
}

  
      

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (number) {
    if (number.length == 0) {
        return 0;
    }
    else {
        let spielberMovies = number.filter(function(movie) {
            return movie.genre.includes("Drama");
        });
       return spielberMovies.filter(function(movies) {
           return movies.director.includes("Steven Spielberg");
       }).length; 
    }
}
  
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


 function orderAlphabetically(movies) {
    let sortTitles = movies.map(function(firstMovie) {
     return firstMovie.title;
    });
    sortTitles.sort(function(firstMovie, secondMovie) {
  if (firstMovie < secondMovie)
    return -1;
  if (firstMovie > secondMovie)
    return 1;
  return 0;
});
return sortTitles.slice(0, 20);
} 
         

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertHoursToMinutes (hours) {
    let hoursToMinutes = hours.split("h");
    return hoursToMinutes [0] * 60;
}


function covertMinutesToMinutes(minutes){
    let minutesToMinutes = minutes.split("min");
    return Number(minutesToMinutes[0]);
  }


function doTheMath(duration){
    let timePieces = duration.split(" ");
    
    let minutes = timePieces.reduce(function(sum, piece){
        if(piece.includes("h")){
        return sum + convertHoursToMinutes(piece)
      }
      return sum + covertMinutesToMinutes(piece)
    }, 0);
    return minutes;
  }
  

  function turnHoursToMinutes(movies){
    var newMovies = movies.map(function(movie){
      var newArray = {};
      newArray.title = movie.title;
      newArray.year = movie.year;
      newArray.director = movie.director;
      newArray.duration = doTheMath(movie.duration);
      newArray.genre = movie.genre;
      newArray.rate = movie.rate;
      return newArray;
    });
    return newMovies;
  }
  
  
// BONUS Iteration: Best yearly rate average - Best yearly rate average
