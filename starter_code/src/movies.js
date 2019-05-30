/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var total = movies.reduce((acc, currentMovie) => {
    return (acc += Number(currentMovie.rate));
  }, 0);
  console.log(total);
  return total / movies.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(movie => {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

//function orderByDuration(movies){
//  return movies.duration.sort();

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    var spielbergMovies = movies.filter((movie) => {
        return movie.director.includes("Steven Spielberg");
      }
      

      if (spielbergMovies.length == 0){ 
          return "Steven Spielberg directed 0 drama movies!";
    } else if (spielbergMovies.length == 1){
        return "Steven Spielberg directed 1 drama movies!";
    }
    else (spielbergMovies.length == 4){
        return "Steven Spielberg directed 4 drama movies!";
    }
    });
    //return String(spielbergMovies.length);


      
        
      


// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    movies.title.sort();
    return movies;
}

// Best yearly rate average


