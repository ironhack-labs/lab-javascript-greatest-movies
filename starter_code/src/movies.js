/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);
console.log(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {
      var sum = moviesArray.reduce(function(acc, value){
        return acc + Number(value.rate);
      },0);
      return sum/moviesArray.length;
  }


// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){
  var dramaFilter = moviesArray.filter(function(movie) {
    return (movie.genre.indexOf("Drama") !== -1); // or movie.genre.includes('Drama')
    });
    if (isNaN(ratesAverage(dramaFilter))) {
      return undefined;
    }
    average = ratesAverage(dramaFilter).toFixed(2)
    return Number(average);
  };


// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  sorted = moviesArray.sort(function (a, b) {
    if (a.duration === b.duration){
      if (a.title > b.title) {
        return 1;
    }
  }
    return a.duration-b.duration;
  });
  return sorted;
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArray){
  if (movieArray == 0){
    return undefined;
  }
  var nameFilter = movieArray.filter(function(movie) {
    return movie.director.includes('Steven Spielberg') && movie.genre.indexOf('Drama') !== -1;
  });
  return "Steven Spielberg directed " + String(nameFilter.length) + " drama movies!";
}


// Order by title and print the first 20 titles
function orderAlphabetically(movieArray){
  movieArray.sort(function(a,b){
    if (a.title>b.title){
      return 1;
    }
    return-1;
  });
  var topTwenty =[];
  var limit = 20;
  if (movieArray.length < 20){
    limit = movieArray.length;
  }
  for (var i=0; i<limit;i++){
    topTwenty.push(movieArray[i].title);
  }
  return topTwenty;
}


// Best yearly rate average

// function bestYearAvg(movieArray){
//   moviesYear ={}
//   moviesRate = {}

// }