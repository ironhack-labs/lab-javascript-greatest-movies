/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  
  var newMoviesArray = movies.map(function(movie){
    if (typeof(movie.duration) !== "number") {

      var arr = movie.duration.split(" ");
      //[Xh, Xmin]
      var hour = arr.filter(function(el) {
        return el.indexOf("h") !== -1;
      })
      //console.log(hour);
      if (hour.length > 0) {
        hour = hour[0].slice(0, hour[0].length-1);
      }
      else {
        hour = 0;
      }
      var minutes = arr.filter(function(el) {
        return el.indexOf("m") !== -1;
      })
      //console.log(minutes);
      if (minutes.length > 0) {
        minutes = minutes[0].slice(0, minutes[0].length-3);
      }
      else {
        minutes = 0;
      }
      result = parseInt(hour*60) + parseInt(minutes);
    }
    else {
      result = movie.duration;  
    }
    var nuevo = Object.assign({}, movie);
    nuevo.duration = result;
    return nuevo;
  })
  //console.log(newMoviesArray)
  return newMoviesArray
}


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var suma = movies.reduce(function(ac, cv) {
    if (cv.rate === '') {
      return ac;
    }
    else {
      return ac += parseFloat(cv.rate);
    }
  }, 0)
  return parseFloat((suma/movies.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(movie => movie.genre.indexOf("Drama") !== -1);
  // console.log(dramaMovies);
  if (dramaMovies.length > 0) {
    return ratesAverage(dramaMovies);
  }
  else {
    return undefined;
  }
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  var newMovies = turnHoursToMinutes(movies);
  //Sort by alphabetical
  newMovies.sort((a,b) => {
    if (a.title > b.title) {
      return 1;
    }
    
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
  //Sort by duration
  newMovies.sort((a,b) => {
    return a.duration - b.duration;
  })
  return newMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }
  else {
    var spielbergMovies = movies.filter(movie => {
      return movie.director === "Steven Spielberg";
    })
    var secFilt = spielbergMovies.filter(movie => {
      return movie.genre.indexOf("Drama") !== -1;
    })
    var result = secFilt.length;
  }
  return "Steven Spielberg directed " + result + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  movies.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
  if (movies.length >= 20) {
    movies.splice(20);
  }
  //¿Cómo saco sólo los títulos de un arreglo de objetos?
  var titles = movies.map(movie => movie.title);
  return titles;
}

// Best yearly rate average
function bestYearAvg(movies) {
  //Lo saqué de https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  //Es para tener sólo años únicos
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  if (movies.length === 0) {
    return undefined;
  }
  else {
    //Saca todos los años
    var years = movies.map(movie => movie.year);
    //Ordena todos los años
    years.sort((a, b) => a - b);
    //Quédate sólo con los años únicos
    years = years.filter(onlyUnique);
    /*  Retorna objetos que relacionan cada
    año con su promedio, mediante mapeo */
    var yearAvgs = years.map(year => {
      return {
        //yr: Año
        //avg: Promedio de sólo las películas que se hicieron en el año único
        yr : year,
        avg : ratesAverage(movies.filter(movie => movie.year === year))
        //En algunos casos me da NaN
        //Corregido, era que no había aplicado parseFloat a algunos rates en años con 
        //más de 1 película.
      }
    })
    //Ya están ordenados de primer a último año
    //Sólo hay que ordenar de mayor a menor avg
    yearAvgs.sort((a,b) => b.avg - a.avg)
    //Retorna el año del mejor avg, y el más viejo de ellos
    var bestYear = yearAvgs[0].yr;
    var avgrate = yearAvgs[0].avg;
    }
  return "The best year was " + bestYear + " with an average rate of " + avgrate;
}