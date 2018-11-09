/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (array){
  var mov = array.map(function(elem){
    var newElem = Object.assign({},elem);

    var time = 0;
    var dur = newElem.duration.split(' '); 
    if (dur.length === 1){
        if (dur[0].indexOf('h') === -1){
          var min = parseInt(dur[0].slice(0,3));
          time += min;
      } else {
          var hours = parseInt(dur[0].slice(0,1));
          time += hours*60;      
      }
    }
    else {
      var hours = parseInt(dur[0].slice(0,1));
      var min = parseInt(dur[1].slice(0,3));
      time += hours * 60;
      time += min;
      } 
  newElem.duration = time;
  return newElem; 
  }); 
return mov;
};

// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  var rates = array.reduce(function(acc,film){
    acc += parseFloat(film.rate);
    return acc;
  },0);
  var average = rates / array.length;
  return Math.round(average * 100)/100;
};


// Get the average of Drama Movies

function dramaMoviesRate(array){
  var dramaMovies = 0;
  var dramaRates = array.reduce(function(acc,film){
    for (var i = 0; i < film.genre.length; i++){
        if (film.genre[i]==='Drama'){
        acc += parseFloat(film.rate);
        dramaMovies++;
        return acc;
      }
    }
  },0);

  if (dramaMovies === 0){return undefined;} 

  var dramaAverage = dramaRates / dramaMovies;
  return Math.round(dramaAverage * 100)/100;
  
};
// Order by time duration, in growing order
function orderByDuration(array){
  var sortedFilms = array.sort(function(a , b){
    if (a.duration > b.duration){
      return 1;
    }
    if (a.duration < b.duration){
      return -1;
    }
    else {
      if (a.title > b.title){
          return 1;
      }
      if (a.title < b.title){
        return -1;
      }
    }
  });
  return sortedFilms;
};

// How many movies did STEVEN SPIELBERG

function howManyMovies (array){
  if (array.length === 0) {return undefined;}
  var moviesOfSteven = array.filter(function(movie){
      return movie.director === 'Steven Spielberg';
  });
  var dramaMoviesOfSteven = moviesOfSteven.reduce(function(acc,movie){
    for (var i = 0; i < movie.genre.length; i++){
      if (movie.genre[i]==='Drama'){
      acc ++;
      }
    }
    return acc;  
  },0);
  return 'Steven Spielberg directed ' + dramaMoviesOfSteven + ' drama movies!';
};

// Order by title and print the first 20 titles

function orderAlphabetically (array){
  var sortedFilms = array.sort(function(a , b){
    if (a.title > b.title){
      return 1;
    }
    if (a.title < b.title){
      return -1;
    }
  });
  return sortedFilms.filter(function(movie, index){
    return index < 20;
  });
}

// Best yearly rate average
