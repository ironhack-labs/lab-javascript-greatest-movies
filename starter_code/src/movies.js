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
function ratesAverage(arr){
  let ratesArr = arr.map((eachMovie)=>{
    let rate = Number(eachMovie.rate);
  })
    let newArr = arr.rate;
    console.log(arr.rate);
  // let sum = Number(arr.rates).reduce((accum,curVal) => {
  //   return accum + curVal
  // })
  // let ave = sum()/arr.length;
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
