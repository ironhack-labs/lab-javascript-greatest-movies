/* eslint no-restricted-globals: 'off' */

// 1. Turn duration of the movies from hours to minutes 
//['2h', '19min']
//timeUnits == [120, 19]
//

let changeDuration = movies.map(movie => {
  var timeUnits = movie.duration.split(" ");

  
  let parsedUnitsForMovie = timeUnits.map((unit, index) => {
    let parsedInteger = parseInt(unit,10);
    if (index == 0) {
      
      return parsedInteger*60;
      
    } else {
      
      return parsedInteger
    }

   })
   let totalDuratioOfMovieInMinutes = parsedUnitsForMovie.reduce((sum, curVal) => sum + curVal);
   
   movie.duration = totalDuratioOfMovieInMinutes;
   return movie
});


console.log("Hello", changeDuration);

let newMovies = changeDuration


//
// 2. Get the average of all rates with 2 decimals 
//parseFloat returns a number in a string  into just a number
// toFixed() - after coma


let ratesSum = newMovies.reduce((sum, curVal) => sum + parseFloat(curVal.rate), 0);
//console.log(ratesSum);

let ratesAverage = (ratesSum/newMovies.length);

console.log(ratesAverage.toFixed(2));

//
// 3. Get the average of Drama Movies 
//

  let dramaArray = newMovies.filter(movie => movie.genre.includes("Drama"));
  console.log(dramaArray);
  
  let dramaMoviesRateSum = dramaArray.reduce((sum, curVal) => sum + parseFloat(curVal.rate), 0);
  let dramaMoviesRateAvg = dramaMoviesRateSum/dramaArray.length;
  
  console.log("Drama movies average rate; ", dramaMoviesRateAvg.toFixed(2));


//
// 4. Order by time duration, in growing order
//
let orderByDuration = newMovies.sort((movieA, movieB) => {
  return movieA.duration < movieB.duration ? -1 : 1;
});

console.log("ORDERED", orderByDuration)


//
// 5. How many DRAMA movies did STEVEN SPIELBERG
//
 let howManyMovies = dramaArray.filter(movie => movie.director === 'Steven Spielberg');

 console.log("Spielberg Dramas: ", howManyMovies);


//
// 6. Order by title and print the first 20 titles
//

let orderAlphabetically = movies.sort((movieA, movieB) => {
  return movieA.title < movieB.title ? -1 : 1
});
console.log(orderAlphabetically)

// show firts 20

var firstTwenty = orderAlphabetically.slice(0, 20);
firstTwentyTitle = firstTwenty.filter(movie => movie.title);
console.log("log first 20 ", firstTwentyTitle)


//
// BONUS: Best yearly rate average
//* order array by year (let orderByYear)
//* new array let topRate with year and rate: let topRatedMovie = {year: 1900, avrRate; 22,22}
// * start looping a years , inside loop to get the avg rate
//* compare the avg rate - if bigger - change the topRate

// let theBestRatingYear = movies.map(movie => {

// // sort a-z by year
// let orderByYear = newMovies.sort((movieA, movieB) => {
//   return movieA.year < movieB.year ? -1 : 1;
// });

// console.log("YEARS", orderByYear)

// // new array for topRatedMovie
// let topRatedMovie = {year: "1900", rate: '2,0'}

// //
// let loopingThroug = orderByYear.map(movie =>{

// })