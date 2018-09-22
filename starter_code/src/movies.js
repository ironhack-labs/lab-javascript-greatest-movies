/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movieDataBase){
  var rateReducer = (acumulator,currentValue) => acumulator + currentValue.rate;
  var sumRate = movieDataBase.reduce(rateReducer, 0);
  console.log(parseFloat((sumRate/movieDataBase.length).toFixed(2))); 
  return parseFloat((sumRate/movieDataBase.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movieDataBase) {
  var dramaMovies = movieDataBase.filter(function(movie) { 
    var passTest = false;
    var isDrama = movie.genre.find(item => item === 'Drama');
    if (isDrama !== undefined){
       passTest = true;
    }
    return passTest;
  })
  if (!dramaMovies.length){
    return undefined
  }
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(movieDataBase){
    var sortedList =  movieDataBase.sort(function(a,b){
      if (a.duration === b.duration){
        if (a.title > b.title){
          return 1
        }
      }
      else {
        return a.duration - b.duration;
      }})
    return sortedList;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movieDataBase) {
    var spilbergMovies = movieDataBase.filter(name => name.director === 'Steven Spielberg');
    if (((movieDataBase.find(name => name.director === 'Steven Spielberg')) === undefined) & (movieDataBase.length)) {
      return 'Steven Spielberg directed 0 drama movies!';
    } 
    else if (!spilbergMovies.length)  {
       return undefined;
    }
    var spilbergDramaMovies = spilbergMovies.filter(function(movie) {
      var passTest = false;
      var isDrama = movie.genre.find(item => item === 'Drama');
      if (isDrama !== undefined){
        passTest = true;
      }
      return passTest;
    })
return "Steven Spielberg directed " + spilbergDramaMovies.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically (movieDataBase) {
  var top20Movies;
  movieDataBase.sort(function(a,b){
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleB < titleA) {
      return 1;
    }
    return 0;
  })
  top20Movies = movieDataBase.map(function(movie){
    return movie.title;
  })
  if (movieDataBase.length > 20){
    top20Movies = top20Movies.filter(function(movie, index){
      while (index < 20){
        return true;    
      } 
    }) 
  }
  return top20Movies;
}

// Best yearly rate average
function bestYearAvg(movieDataBase) {
  var yearsMovies = {};
  var highestRates = 0;
  var highestYear = 0;
  if (!movieDataBase.length){
    return undefined;
  }
  movieDataBase.forEach(function(movie) {
    if (!yearsMovies[movie.year]) {
      yearsMovies[movie.year] = [];
    }
    yearsMovies[movie.year].push(movie);
  })
  for (years in yearsMovies) {
    yearsMovies[years] = ratesAverage(yearsMovies[years]);
  }
  for (years in yearsMovies) {
    if (yearsMovies[years] > highestRates){
      highestRates = yearsMovies[years];
      highestYear = years;
    }
  }
 return ('The best year was ' + highestYear + ' with an average rate of ' + highestRates); 
}
