/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') != -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray){
  var suma = moviesArray.reduce(function(acumulador, current){
    return acumulador + parseInt(current.rate);
  }, 0);
  return Math.round((suma/moviesArray.length) * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){
  var generoBusqueda = moviesArray.filter(function(e){
    if(e.genre.indexOf("Drama") == -1){
      return undefined
    }else{    
       return e.genre.indexOf("Drama") !== -1
    }
  });
  return ratesAverage(generoBusqueda);
};



//dramaMoviesRate Should return undefined if there is no Drama movie!

// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  moviesArray.sort(function (a, b) {
    if (a.duration === b.duration) {
      if (a.title > b.title) {
        return 1;
      }
    }
    return a.duration - b.duration;
  });
  return moviesArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies (moviesArray){
  if (moviesArray.length == 0) {
    return undefined;
  }
  var busqueda = moviesArray.filter(function(e){
    var newArr = [];
    var a = e.genre.indexOf("Drama");
    var b = e.director.indexOf("Steven Spielberg");
    
    if(a !== -1 && b !== -1){
     return newArr.push(e)
    }

  });
  return 'Steven Spielberg directed ' + busqueda.length + ' drama movies!';
}



// Order by title and print the first 20 titles

function orderAlphabetically (moviesArray){

}

// Best yearly rate average

function bestYearAvg (moviesArray){
  if(moviesArray.length == 0){
    return undefined;
  }
  return moviesArray;
}