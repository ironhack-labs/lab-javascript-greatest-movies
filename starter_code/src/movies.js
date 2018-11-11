/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (timeString){
  const timeItems = timeString.split(' ');
  const minutes = Number.parseInt(timeItems[1]);
  const hours = Number.parseInt(timeItems[0]);
  return minutes + hours * 60;
}

movies.map(function(movie){
const timeLength = turnHoursToMinutes(movie.duration)
return{...movie, duration: timeLength}
});


// Get the average of all rates with 2 decimals 

const ratesAverage = movies.reduce(function(acc, movie){
  return acc + +movie.rate / movies.length
},0);
ratesAverage.toFixed(2);

// Get the average of Drama Movies

const dramaMovies = movies
.filter(movie => movie.genre.includes('Drama'))
dramaMovies;

const dramaMoviesAvg = dramaMovies.reduce((acc, movie) => 
acc + +movie.rate / dramaMovies.length,0);

dramaMoviesAvg.toFixed(2);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

const howManyMoviesTotal = movies.filter(movie => movie.director.includes('Steven Spielberg'))
howManyMoviesTotal;
const howManyMovies = howManyMoviesTotal.filter(movie => movie.genre.includes('Drama'))
howManyMovies.length;

// Order by title and print the first 20 titles


// Best yearly rate average
