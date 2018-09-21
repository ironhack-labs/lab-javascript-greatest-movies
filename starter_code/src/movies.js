/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
  
  var duration = array.map(function(movie){

    var movieCopy = Object.assign({}, movie);

    if (!movieCopy.duration.length){
      return undefined;
    }
    if (movieCopy.duration.indexOf('min') === -1){  
      //si no hay minutos
      var durationArray = movieCopy.duration.split();
      var hoursToMinutes = durationArray[0].split("h")[0] * 60;
      var totalDuration = Number(hoursToMinutes);
      
      movieCopy.duration = totalDuration;
      return movieCopy;

    } else
      if (movieCopy.duration.indexOf('h') === -1){ 
        //si no hay horas
        var durationArray = movieCopy.duration.split(); 
        var minutes = durationArray[0].split("min")[0];
        var totalDuration = Number(minutes);
        movieCopy.duration = totalDuration;
        return movieCopy;
    }
    //si hay minutos y horas
    var durationArray = movieCopy.duration.split(" ");
    var hoursToMinutes = durationArray[0].split("h")[0] * 60;
    var minutes = durationArray[1].split("min")[0];
    var totalDuration = Number(hoursToMinutes) + Number(minutes);
    movieCopy.duration = totalDuration;
    return movieCopy;
  })
  return duration;
 }


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var sum = array.reduce(function(acc,currentValue){
    return acc += currentValue.rate; // return acc+currentValue.rate
  },0);
  return Math.round((sum/array.length)*100)/100; //parseFloat para indicar 2 decimales, ver no funcina
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
function orderByDuration (array){
  var moviePorMinutos = turnHoursToMinutes(array);
  moviePorMinutos.sort(function(a,b){
    if (a.duration === b.duration){
      if (a.title<b.title){
        return a.duration;
      }
      return b.duration;
    }
    return a.duration - b.duration;
  });
  return moviePorMinutos;
}

// How many movies did STEVEN SPIELBERG
function dramaMovies(array){
  
  var dramaMovies = array.filter(function(movie){
    return movie.genre.find(function(singleGenre){
      return singleGenre === 'Drama';
    });
  });
  if(!dramaMovies.length){
    return undefined;
  }
  return dramaMovies;
}

function howManyMovies(array){
  if (!array.length){
    return undefined;
  }
  var filmDrama = dramaMovies(array);
  var directorSpielberg = filmDrama.filter(function(movie){
    return movie.director === 'Steven Spielberg';
  });

  return  "Steven Spielberg directed " + directorSpielberg.length + " drama movies!"

}
// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var filmTitles = [];
  array.forEach(element => {
    filmTitles.push(element.title);
  });
  filmTitles.sort();
  return filmTitles.slice(0,20);
  
}



// Best yearly rate average
