/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {
  var durations = movies.map(function(e) {
     var newMovies = Object.assign({}, e);
     splittime = e.duration.split(" ");
    if (splittime[0].indexOf("h") !== -1) {
      var hour = splittime[0].slice(0,1);
     if  (splittime.length==2) {
      var min = parseInt(splittime[1].split("min")[0], 10);
     newMovies.duration = hour * 60 + min;
    } else {
      newMovies.duration = hour * 60;
    }
    } else {
      newMovies.duration = parseInt(newMovies.duration.split("min")[0]);
    } 
    return newMovies;
  });
  return durations;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  movies.forEach(function(movie){
    if (movie.rate === ""){
      movie.rate = 0;
    }
  })
  var total = movies.reduce(function(acc, e) {
    return acc + parseFloat(e.rate);
  }, 0);
  return  total / movies.length;
  }

// Get the average of Drama Movies
function dramaMoviesRate (movies){
  var dramaMovies = movies.filter(function(movie){
    return (movie.genre.includes("Drama"))
    } 
  ); 
  if (dramaMovies.length===0){
    return undefined;
  } else {
    var total = ratesAverage(dramaMovies);
  
    return Math.round(total * 100) /100;
  } 
}

// Order by time duration, in growing order
function orderByDuration(movies){
  if (movies.length ==1) {
    return movies
  }
  movies.sort(function(a, b) {
    if (a.duration - b.duration > 0){
      return 1;
    } else if (a.duration - b.duration < 0){
      return -1
    } else if (a.duration - b.duration == 0){
      return a["title"].localeCompare(b.title)
    }
})
return movies;
};



// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
