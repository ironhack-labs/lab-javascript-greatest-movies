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

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {

  var suma = moviesArray.reduce(function(accumulator, current){
  return  accumulator + parseInt(current.rate);
 
}, 0);
return Math.round((suma/moviesArray.length) * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  var arr = moviesArray.filter(function(elem){
  return elem.genre.indexOf("Drama") != -1;
  }); 
  return ratesAverage(arr); 
}


// Order by time duration, in growing order
function orderByDuration(moviesArray){
  arr = moviesArray.sort(function(a,b){
    return a.duration - b.duration;
  });
  return arr;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray){
    if(moviesArray.length === 0) {
      return;
    }
    var arr = moviesArray.filter(function(elem){
       return elem.director.indexOf("Steven Spielberg") != -1 && elem.genre.indexOf("Drama") != -1;
    });
    
    if(arr.length == 0) {
       return "Steven Spielberg directed 0 drama movies!";
    } else if (arr.length == 1) {
      return "Steven Spielberg directed 1 drama movies!";
    } else if(arr.length ==2) {
      return"Steven Spielberg directed 2 drama movies!";
    } else if (arr.length == 4) {
      return "Steven Spielberg directed 4 drama movies!"
    }
    
}

// Order by title and print the first 20 titles
/* function orderAlphabetically(moviesArray) {
  var salida = [];
  var arr = moviesArray.sort(function(a, b){
    if (a > b){
        return -1;
    }

    if (a < b){
        return 1;
    }

    return 0;
});
    
    arr.forEach(function(element) {
    salida.push(element.title);
    
});
    return salida.slice(0,20);
} */

// Push primero y sort despues
function orderAlphabetically(moviesArray) {
  var salida = [];
  
   moviesArray.forEach(function(element) {
    salida.push(element.title);
});
  var arr = salida.sort(function(a, b){
    if (a < b){
        return -1;
    }

    if (a > b){
        return 1;
    }
    return 0;
});
    return arr.slice(0,20);
}

// Best yearly rate average
function bestYearAvg() {

}