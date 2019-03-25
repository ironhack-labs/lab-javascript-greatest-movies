/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var ratesAverage = movies.reduce(function(accumulator, film) {
    return accumulator + Number(film.rate);
  }, 0);
  return (ratesAverage / movies.length).toFixed(2);
}

console.log(ratesAverage(movies));

//console.log((ratesAverage / movies.length).toFixed(2));
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var trackScore = 0;
  var compterElementDrama = 0;
  movies.forEach(function(element) {
    if (element.genre.includes("Drama") == true) {
      trackScore = trackScore + Number(element.rate); //calcule de la m
      compterElementDrama = compterElementDrama + 1;
    }
  });

  return trackScore / compterElementDrama;
}
// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort(function(oneMovie, twoMovie) {
    if (oneMovie.duration < twoMovie.duration) {
      console.log("fffffffffffff");
      return -1;
    } else if (oneMovie.duration > twoMovie.duration) {
      return 1;
    } else {
      return oneMovie.title.localeCompare(twoMovie.title);
    }
  });
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  const newArray = movies.filter(function(newMovies) {
    return (
      newMovies.director === "Steven Spielberg" &&
      newMovies.genre.includes("Drama")
    );
  });

  if (newArray.length == 0) {
    return `Steven Spielberg directed ${newArray.length} drama movies!`;
  } else return `Steven Spielberg directed ${newArray.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
 const newTitle = movies.filter(element=>movies.length<=20);
  console.log(newTitle);
  
  return movies.sort(function(titleOne,titleTwo){
    if(titleOne.title < titleTwo.title){
      return -1;
    } else if (titleOne.title > titleTwo.title){
      return 1;
    } else {
      return titleOne.title.localeCompare(titleTwo.title);
    }    
  
  }); 
  
}

// Best yearly rate average
function bestYearAvg(movies){
  if (!movies.length) {}
}