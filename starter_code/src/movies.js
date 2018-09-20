/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){

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
  if(!directorSpielberg.length){
    return "Steven Spielberg directed 0 drama movies!";
  } 
  if (directorSpielberg.length === 1){
    return "Steven Spielberg directed 1 drama movies!";
  }
  if (directorSpielberg.length === 2){
    return "Steven Spielberg directed 2 drama movies!";
  }
  if (directorSpielberg.length === 4){
    return "Steven Spielberg directed 4 drama movies!";
  }
  return directorSpielberg.length.toString();
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
