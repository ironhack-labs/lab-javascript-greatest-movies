/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (arr) {
  var newArray = arr.map(function(arr) {
    let movie = arr.duration.split(" ");
    let totalMinutes = 0; 
      movie.forEach(function(x){  
          if(x.includes('h')){  
              totalMinutes+=Number(x.replace('h',''))*60 
          } 
          if(x.includes('min')){
              totalMinutes+=Number(x.replace('min','')) 
          }
      })
      return {...arr, duration: totalMinutes}

  });
  
  return(newArray);
}

// Get the average of all rates with 2 decimals

function ratesAverage (arr) {
  let totalRating = 0;
  arr.forEach(function(n) {
    totalRating += n.rate;
    
  });

return (totalRating / arr.length);
}

// Get the average of Drama Movies

function dramaMoviesRate (arr) {
  let totalDramaRates = 0;
  let totalDramaMovies = 0;
  arr.forEach(function(y) {
    if (y.genre.includes("Drama")){
      totalDramaMovies++;
      totalDramaRates += y.rate;
    }
  });

    if (totalDramaMovies === 0) {
      return undefined;
  }

  return parseFloat((totalDramaRates / totalDramaMovies).toFixed(2));

}

// Order by time duration, in growing order

function orderByDuration (arr) {
let newArray = turnHoursToMinutes(arr);

function compare (a,b) {
  return a.duration - b.duration;
} 
  return (newArray.sort(compare)); 

 

} 

  


// How many movies did STEVEN SPIELBERG
function howManyMovies (arr) {
  let directedMovies = 0;
  let newArray = arr.filter(function(dir) {
    return dir.director === "Steven Spielberg"
  });
  newArray.forEach(function(y) {
    if(y.genre.includes("Drama")) {
      directedMovies++;
    } 
  });
  if (arr[0] === undefined ) {
    return undefined;
}  else {

  return (`Steven Spielberg directed ${directedMovies} drama movies!`);
  }
}

  



// Order by title and print the first 20 titles
function orderAlphabetically (arr) {
for (i = 0; i < 20; i++) {
 arr.sort
}

// Best yearly rate average
function bestYearAvg () {

}