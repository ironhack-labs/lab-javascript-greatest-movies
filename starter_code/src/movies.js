/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(a) {
  var out = a.map(function(e) {
    var newElement = Object.assign({}, e)

    if (e.duration.length < 3) {
      newElement.duration = parseInt(e.duration[0] * 60);
    } else if (e.duration.length < 6) {
      newElement.duration = parseInt(e.duration.split("min")[0]);
    } else {
      newElement.duration = e.duration[0] * 60 + parseInt(e.duration.split(" ")[1].split("min")[0]);
    }
    return newElement;
  });
  console.log(out)
  return out;
}

// Get the average of all rates with 2 decimals
function ratesAverage(a) {
  return a.reduce(function(acc, e, i) {
    var media = e.rate / a.length + acc;
    return Number(media.toFixed(2));
  }, 0);
}

// Get the average of Drama Movies
function dramaMoviesRate(a) {
  var dramaFilter = a.filter(function(e) {
    return e.genre.includes("Drama");
  });
  var averageDrama = ratesAverage(dramaFilter);
  if (averageDrama == 0) {
    return undefined;
  } else {
    return averageDrama;
  }
}

// Order by time duration, in growing order
function orderByDuration(a) {
  a.sort(function(b, c) {
    if (b.duration - c.duration) {
      return b.duration - c.duration;
    }
    if  (b.title > c.title) {
        return 1;
      }
      if (b.title < c.title){
        return -1;
      }
      return 0;  });
  return a;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayIn) {
    if (arrayIn.length===0){
        return undefined;
    }
    var dramaFilter = arrayIn.filter(function(movie) {
        return movie.genre.includes("Drama");
      });
    var spielbergDramaFilter = dramaFilter.filter(function(movie) {
        return movie.director.includes("Spielberg");
    });
    return ('Steven Spielberg directed '+spielbergDramaFilter.length+' drama movies!');
}

// Order by title and print the first 20 titles
function orderAlphabetically (arrayIn){
    var arrayOut=[];
    arrayIn.sort(function(b, c) {
        if  (b.title > c.title) {
          return 1;
        }
        if (b.title < c.title){
          return -1;
        }
        return 0;
      });
    arrayIn.map(function(e){
        var title = e.title;
        arrayOut.push(title);
    }) 
    return arrayOut.slice(0,20);
}

// Best yearly rate average
function bestYearAvg(arrayIn) {

    var añosMedia = arrayIn.map(function(elem){
        var pelicula;
        pelicula.year = arrayIn.year;
        pelicula.rate = arrayIn.rate;
        return pelicula;
    });
    // return (The best year was YEAR with an average rate of RATE);
}