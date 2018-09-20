/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var sum = array.reduce(function(acc, currentValue) {
    return (Math.round((acc + currentValue.rate)*100)/100);
  }, 0);
  return sum / array.length;
}
console.log("The average rate is: " + ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var dramaMovies = array.filter(function(movie) {
    return movie.genre.find(function(singleGenre) {
      return singleGenre === 'Drama';
    });
  });
  if (!dramaMovies.length) {
    return undefined;
  }
  return (Math.round((ratesAverage(dramaMovies))*100)/100);
}
console.log('The average rate of "Drama" movies is: ' + dramaMoviesRate(movies));

// Order by time duration, in growing order
/* function orderByDuration(array) {
  var durationMovies = array.filter(function(movie) {
    return movie.duration;
  });
  return durationMovies.sort();
} */
// How many movies did STEVEN SPIELBERG

// function howManyMovies (array) {
  function howManyMovies(array) {
    if (array.length === 0) {
      return undefined;
    }
    var spielbergDramaMovies = array.filter(function(movies) {
      return movies.director === "Steven Spielberg" && movies.genre.indexOf("Drama") !== -1;
    });
    return (
      "Steven Spielberg directed " + spielbergDramaMovies.length + " drama movies!"
    );
  }
  console.log(howManyMovies(movies));

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  array.sort(function(a, b) {
    return a.title - b.title;
  });
  var first20 = [];
  var limit = 20;
  if (array.length < 20) {
    limit = array.length;
  }
  for (var i = 0; i < limit; i++) {
    first20.push(array[i].title);
  }
  return first20;
}
 console.log(orderAlphabetically(movies));

// Best yearly rate average
