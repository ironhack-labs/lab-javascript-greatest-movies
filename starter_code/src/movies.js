/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
        movie = Object.assign({}, movie);
        var duration = movie.duration.split(' ').reduce(function(acc, time) {
          if (time.indexOf('h') !== -1) {
              return Number(time.replace('h', '')) * 60 + acc;
          } else {
              return Number(time.replace('min', '')) + acc;
          }
        }, 0);
        movie.duration = duration;
        return movie;
    });
 }

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
    var rates = arr.map(function(movies){
      // Mira aquí!
      return Number(movies.rate);
    });
    var numbers = rates.map(function(rate){
      return parseFloat(rate);
    });
    var sum = numbers.reduce(function(acc, curr){
      return acc + curr;
    }, 0);
    return sum / numbers.length;
}


// Get the average of Drama Movies

function dramaMoviesRate(films){
  var justDramas = films.filter(function(movie){
    if(movie.genre.indexOf('Drama') !== -1) {
      var dramaRate = movie.rate;
      if(movie.rate === ''){
        movie.rate = 0;
        return movie;
      }
      else {
        return dramaRate;
      }
    }
    else {
      return 0;
    }
  });
  console.log(justDramas);
  if(justDramas.length === 0){
    return undefined;
  }else{
    return parseFloat(ratesAverage(justDramas).toFixed(2));
  }
}


// Order by time duration, in growing order

function orderByDuration(films) { 
   
  var sortedFilms = films.map(function(films) {
    return films;
   }).sort(function(first, second){
     if(first.duration === second.duration) {
      if(first.title > second.title){ //Repasar esto: se puede mejorar
        return 1;
      }
      else if(first.title < second.title){
        return -1;
      }
      else {
        return 0;
      }
     }
     else {
       return first.duration - second.duration;
     }
  });
  return sortedFilms;
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(films) {
  console.log(films)
  var spielbergMovies = films.filter(function(film){
    return film.director === 'Steven Spielberg';
  });

  var spielbergDramas = spielbergMovies.filter(function(film){
    return film.genre.indexOf('Drama') !== -1;
  });

  return films.length === 0 ?  undefined : 'Steven Spielberg directed ' +  spielbergDramas.length + ' drama movies!';
}


// Order by title and print the first 20 titles

function orderAlphabetically(films) {
  var filmsTitles = films.map(function(film){
    var title = film.title;
    return title
  })

  var sortedTitles = filmsTitles.sort(function(film1, film2){
    return film1.localeCompare(film2);
  });

  if (films.length <= 20){
    return sortedTitles;
  }
  else {
    return sortedTitles.slice(0, 20);
  }
}


// Best yearly rate average

function bestYearAvg() {
  // sort by year 
  // separate the same year films

}
