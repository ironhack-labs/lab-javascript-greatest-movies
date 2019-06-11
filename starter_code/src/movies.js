/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArr) {
  let newMovies = moviesArr.map(movie => {
    const num = movie.duration.split(" ");
    var result;
    if(num.length === 1) {
      if(num[0].includes('h')) {
        result = parseInt(num) * 60;
      } else {
        result = parseInt(num);
      }
    } else {
      result = parseInt(num[0].replace("h", "")) * 60 + parseInt(num[1].replace("min", ""));
    }
    return {...movie, duration: result}
  });
  return newMovies;
}

// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
  let ratesAverage = movies.reduce((prev, current) => {
        return prev + current.rate
     }, 0) / movies.length
     return parseFloat(ratesAverage.toFixed(2));
}
ratesAverage(movies);
// Get the average of Drama Movies
function dramaMoviesRate (movies) {
  let findDrama = movies.filter(movie => movie.genre.includes("Drama"))

  if (findDrama.length === 0) {
    return undefined;
  }
  return ratesAverage(findDrama)
}

// Order by time duration, in growing order

function orderByDuration (moviesArray) {

  let order = moviesArray.sort(function(a, b) {
    if(a.duration == b.duration) {
      if (a.title > b.title) return 1;
      if (a.title == b.title) return 0;
      if (a.title < b.title) return -1;
    }
    return a.duration-b.duration})
    return order
}


// How many movies did STEVEN SPIELBERG

function howManyMovies (moviesArray) {
 if(moviesArray.length == 0) return undefined
 let drama = moviesArray.filter(function(movie){
   return movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")
 });
 return `Steven Spielberg directed ${drama.length} drama movies!`
}
// Order by title and print the first 20 titles

function orderAlphabetically (moviesArray) {

  let order = moviesArray.map(movie => movie.title).sort().splice(0,20)
  return order
}

// Best yearly rate average
