/* eslint no-restricted-globals: 'off' */
function test() {
  console.log(movies);
};
// Turn duration of the movies from hours to minutes 
/*
var newMovies = movies.map(function() {
  return newMovies;
});
*/
const newMovies = movies.map(movie => {
  let hours = movie.duration.substring(0, movie.duration.indexOf('h'));
  let minutes = movie.duration.substring(movie.duration.indexOf('h') + 2, movie.duration.indexOf('m'));
  //let totalMinutes = (parseInt(hours) * 60) + parseInt(minutes);
  return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: (parseInt(hours) * 60) + parseInt(minutes),
    genre: movie.genre,
    rate: movie.rate
  }
})
//console.log(newMovies);
console.log(newMovies)

// Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
  let totalAverage = arr.reduce((acc, movie) => acc + parseFloat(movie.rate),0);
  totalAverage = Math.round((totalAverage/arr.length) * 100) / 100;
  console.log(totalAverage);
  return totalAverage;
};
// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  let dramas = arr.filter(movie => movie.genre.includes('Drama'));
  console.log(ratesAverage(dramas));
  return ratesAverage(dramas);
};
 

// Order by time duration, in growing order
const orderByDuration = (arr) => {
  let durationArray = arr.sort((a,b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0));
  console.log(durationArray);
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
  let dramas = arr.filter(movie => movie.genre.includes('Drama'));
  let spielbergMovies = dramas.filter(movie => movie.director === 'Steven Spielberg');
  //return (`A total of ${spielbergMovies.length} drama movies on the array where made by Steven Spielberg`);
  return (`Steven Spielberg directed ${spielbergMovies.length} drama movies!`);
};

// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
  let sortedArray = arr.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  sortedArray = sortedArray.slice(0, 20);
  //console.log(sortedArray);
  return sortedArray;
};

// Best yearly rate average
/*
const bestYearlyRate = (arr) => {
  let bestArray = arr.sort((a,b) => (a.rate > b.rate) ? 1 : ((b.rate > a.rate) ? -1 : 0));
  console.log(bestArray.reverse());
};
*/
/*
const bestYearlyRate = (arr) => {
  let uniqueYears = [...new Set(arr.map(movie => movie.year).sort())];
  var yearRepo = [];
  for (var i = 0; i < uniqueYears.length; i++)
    yearRepo.push(arr.filter(movie => movie.year === uniqueYears[i]));
  console.log(yearRepo);

};
*/

//Pull all unique years
let uniqueYears = [...new Set(movies.map(movie => movie.year))];
//Sort all years
uniqueYears.sort((a,b) => {return a-b});
//Create year map
let yearMap = {};
//Create keys for yearMap for each unique year
uniqueYears.forEach(element => {
  yearMap[element] = [];
});
//Make a copy of the keys of yearMap to be used for mapping average ratings to years
let yearRatings = Object.assign({}, yearMap)
//Map each movie to the year key in which it was released
movies.forEach(element => {
  yearMap[element.year].push(element);
});

//Iterate through the yearMap and generate an average rating for each year. Send this average to the correct year key in yearRatings
for (var y in yearMap){
    yearRatings[y] = ratesAverage(yearMap[y]);
}
//Print yearly ratings
//console.log(yearRatings);

var result = Object.keys(yearRatings).map(function(key) {
  return [yearRatings[key], Number(key),];
});
let bestYear = result.sort().splice((result.length - 1), 1);
console.log(`The best year was ${bestYear[0][1]} with an average of ${bestYear[0][0]}`);