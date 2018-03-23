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
    if(e.genre.indexOf("Drama") !== -1){
      return true
    }else{    
       return false
    }
  });
  if(generoBusqueda.length == 0){
    return undefined;
  }
  return ratesAverage(generoBusqueda);
};


// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  moviesArray.sort(function(a, b) {
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

function howManyMovies(moviesArray) {
  if (moviesArray.length == 0) {
    return undefined;
  }
  var busqueda = moviesArray.filter(function(e) {
    var newArr = [];
    var a = e.genre.indexOf("Drama");
    var b = e.director.indexOf("Steven Spielberg");

    if (a !== -1 && b !== -1) {
      return newArr.push(e);
    }
  });
  return "Steven Spielberg directed " + busqueda.length + " drama movies!";
}

/*------------Codigo Victor-------- */
/* 
function howManyMovies(moviesArr) {
  if (moviesArr.length === 0) {
      return undefined;
  }
  var directorMovies = moviesArr.filter(function (e) {
      return e.director === 'Steven Spielberg' && e.genre.indexOf('Drama') !== -1;
  });
  return 'Steven Spielberg directed ' + directorMovies.length + ' drama movies!';
} 
*/

// Order by title and print the first 20 titles

function orderAlphabetically (moviesArray){

  var titulo = moviesArray.map(function(e){
      return e.title;
  });

  return titulo.sort().slice(0, 20);
  }


// Best yearly rate average

function bestYearAvg (moviesArray){
  if(moviesArray.length == 0){
    return undefined;
  }
  return moviesArray;
}