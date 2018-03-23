/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  return movies.map(function(e){
    var hours = 0;
    var minutes = 0;
    if(e.duration.indexOf('h') !== -1){
      hours = parseInt(e.duration[0], 10) * 60;
    }

    if(e.duration.indexOf('min') !== -1){
      minutes = parseInt(e.duration.substring(e.duration.length - 5, e.duration.length - 3), 10);
    }
    return Object.assign({}, e, { duration: hours + minutes });
  });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var numberOfFilms = 0;
  var sum = movies.reduce(function(acum, e){
    numberOfFilms++;
    return acum + parseFloat(e.rate);
  }, 0);
  return parseFloat(sum/numberOfFilms);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  var dramaMovies = movies.filter(function(e){
    if(e.genre.indexOf("Drama") !== -1) {return e; }
  });
      
  var numberOfFilms = 0;

  if(dramaMovies.length > 0){
    var sum = dramaMovies.reduce(function(acum, e){
    numberOfFilms++;
    return acum + (e.rate === "" ? 0 : parseFloat(e.rate));
    }, 0);
    return parseFloat((sum / numberOfFilms).toFixed(2));
  }
}

// Order by time duration, in growing order
function orderByDuration(movies){
  movies.sort(function (a, b) {
    if (a.duration === b.duration) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
    return a.duration - b.duration;
  });
  return movies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){

  if(movies.length === 0) { return undefined };

  var spielbergDramaMovies = movies.filter(function (e) {
    return e.director === 'Steven Spielberg' && e.genre.indexOf('Drama') !== -1;
  });

  return 'Steven Spielberg directed ' + spielbergDramaMovies.length + ' drama movies!';
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var moviesName = movies.map(function(e){
    return e.title;
  });

  var theFirstMovies;

  if(moviesName.length < 20){
    theFirstMovies = moviesName.sort().splice(0, moviesName.length);
  } else {
    theFirstMovies = moviesName.sort().splice(0, 20);
  }

  return theFirstMovies;
}

// Best yearly rate average
function bestYearAvg(movies){

  if(movies.length === 0) { return undefined }

  var disctintYears = [];

  var aux = movies.map(function(e){
    if(disctintYears.indexOf(e.year) == -1){
      disctintYears.push({ year: e.year, rate: 0, films: 0});
    }
  })
  
  aux = [];
  
  for(var i=0; i<disctintYears.length; i++){
    movies.forEach(function(e){
      if(e.year === disctintYears[i].year){
        if(e.rate === ''){
          disctintYears[i].rate += 0;
          disctintYears[i].films += 1;
        } else {
          disctintYears[i].rate += parseInt(e.rate);
          disctintYears[i].films += 1;
        }
      }
    });
    disctintYears[i].rate /= disctintYears[i].films;
  }
  
  disctintYears.sort(function(a,b) { 
    if (a.rate === b.rate) {
      if (a.year < b.year) {
        return -1;
      } else {
        return 1;
      }
    }
    return a.rate - b.rate;} );

  return "The best year was " + disctintYears[0].year + " with an average rate of " + disctintYears[0].rate;

}
