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


// Best yearly rate average
