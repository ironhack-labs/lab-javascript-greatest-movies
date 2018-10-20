/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movieArray) {
    var newMovieArray = movieArray.map(function(elem) {
      var arr = elem.duration.toString().split('h');    
      if (arr.length < 2) {
          arr.unshift("0");        
      }    
      var hours = Number(arr[0]);
      var minutes = Number(arr[1].toString().split("min")[0]);
      elem.duration=hours*60+minutes;
      return elem;
  })
return newMovieArray.reverse();
}
// console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 

function ratesAverage(movieArray) {
  return Math.round(movieArray.reduce(function(sum,elem){
    return sum+Number(elem.rate);
  },0)/movieArray.length*100)/100;
}

// console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate (movieArray) {
  var dramaMovies=movieArray.filter(function(elem){
    //if (elem.genre.indexOf("Drama")>=0) console.log(elem.genre);
    return elem.genre.indexOf("Drama")>=0;
  });
  console.log(dramaMovies.length);
  if (dramaMovies.length===0) return undefined;
  return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
