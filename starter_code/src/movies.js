/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes


function timeToMinutes(str){
  if(str.charAt(1) === "h" && str.charAt(5) === "m"){ 
    console.log(Number(str.slice( 0, 1)*60) + Number(str.slice( 3, 5)))
    return Number(str.slice( 0, 1)*60) + Number(str.slice( 3, 5));
  }
  else if(str.charAt(1) === "h"){
    console.log(Number(str.slice( 0, 1)*60));
    return Number(str.slice( 0, 1)*60)
  }
  else if(str.charAt(4) === "m"){
   console.log(Number(str.slice( 0, 3)));
   return Number(str.slice( 0, 3));
  }
  else{
   console.log(Number(str.slice( 0, 2)));
   return Number(str.slice( 0, 2));
 }
}
timeToMinutes("2h 30min");
timeToMinutes("2h");
timeToMinutes("54 minutes");
timeToMinutes("341 minutes");


// let turnHoursToMinutes = movies.map((eachMovie)=>{
//   let newMovie = {};
//   newMovie.title = eachMovie.title;
//   newMovie.year = eachMovie.year;
//   newMovie.director = eachMovie.director;
//   // newMovie.duration = eachMovie.duration;
//   newMovie.duration = timeToMinutes(eachMovie.duration).toString();
//   newMovie.genre = eachMovie.genre;
//   newMovie.rate = eachMovie.rate;
//   console.log(newMovie);
//   return newMovie;
// })

function turnHoursToMinutes(arrMovies){
let turnHoursToMinutes = arrMovies.map((eachMovie)=>{
  let newMovie = {};
  newMovie.title = eachMovie.title;
  newMovie.year = eachMovie.year;
  newMovie.director = eachMovie.director;
  // newMovie.duration = eachMovie.duration;
  newMovie.duration = timeToMinutes(eachMovie.duration);
  newMovie.genre = eachMovie.genre;
  newMovie.rate = eachMovie.rate;
  console.log(newMovie);
  return newMovie;
});
return turnHoursToMinutes;
}

 turnHoursToMinutes(movies);  

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

