/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 




// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var sum = array.reduce(function(acc, currentValue){
    return acc+currentValue.rate;
  },0);
  return sum/array.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
  var dramaMovies = array.filter(function(movie){
    return movie.genre.find(function(singleGenre){
      return singleGenre === 'Drama';
    });
  });
  if(!dramaMovies.length){
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  var dramaMovies = array.filter(function(movie){
    return movie.genre.find(function(singleGenre){
      return singleGenre === 'Drama';
    });
  });
  var isSteveDirector = dramaMovies.filter(function(movie){
    return movie.director.find(function(singleDirector){
      return singleDirector === "Steven Spielberg";
    });
  });
  if(!array.length){
    return undefined;
  }
  if(!isSteveDirector.length){
    return "Steven Spielberg directed 0 drama movies!"
  }
  return isSteveDirector;
}

// Order by title and print the first 20 titles

function orderAlphabetically(array){
  var veintePrimeras = []
  for(var i=0; i<=20; i++){
    veintePrimeras.push(array[i].title)
  }
  var order = veintePrimeras.sort()

  return order.title
}

// Best yearly rate average
