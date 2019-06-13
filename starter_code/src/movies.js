/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function convertHoursToMinutes (string) {
  if (string.charAt(1) !== "h") {
    return Number(string.slice(0,2));
  } else {
  return Number(string.slice(0,1) * 60) + Number(string.slice(3,5))
  }
}

function turnHoursToMinutes(movieArray) {
  let hoursToMinutes = movieArray.map((eachMovie)=>{
    let newMovie = {
      title: eachMovie.title,
      year: eachMovie.year,
      director: eachMovie.director,
      duration: convertHoursToMinutes(eachMovie.duration),
      genre: eachMovie.genre,
      rate: eachMovie.rate
    }
    return newMovie;
  });
  return hoursToMinutes;
};


// Get the average of all rates with 2 decimals 
function ratesAverage(movieArray) {
  let movieAverage = movieArray.reduce((a,b)=>{
    return Number(a) + Number(b.rate);
  },0);
  return movieAverage/movieArray.length;
}


// Get the average of Drama Movies
function dramaMoviesRate(movieArray) {
  // let counter = 0;
  let dramaArray = movieArray.filter((eachMovie)=>{
      return eachMovie.genre.indexOf("Drama") !== -1;
  },0);
  if(dramaArray.length === 0) {return undefined}
  return Math.round(ratesAverage(dramaArray)*100) / 100;
}


// Order by time duration, in growing order
function orderByDuration(movieArray) {
  movieArray.sort((a,b)=>{
    if(a.duration < b.duration) {
      return -1;
    }
    if(a.duration > b.duration) {
      return 1;
    }
    if(a.title < b.title){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    return 0;
  });
  return movieArray;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArray){
  if(movieArray.length === 0) {return undefined}
  let dramaArray = movieArray.filter((eachMovie)=>{
    return eachMovie.genre.indexOf("Drama") !== -1;
},0);
  let stevenArray = dramaArray.filter((eachMovie)=>{
    return eachMovie.director === 'Steven Spielberg';
},0);
  return `Steven Spielberg directed ${stevenArray.length} drama movies!`;
}


// Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  let alphaOrder = movieArray;
  let alphaList = alphaOrder.map((eachMovie)=>{
    return eachMovie.title;
  });
  alphaList.sort((a,b)=>{
    if(a < b) {
      return -1;
    }
      if(a > b) {
      return 1;
    }
    return 0;
  });
  return alphaList.slice(0,20);
}
// Best yearly rate average
