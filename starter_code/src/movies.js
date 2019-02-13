'use strict'
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = movies.map((movie => {
  //convertimos los minutos
  
  let min = (movie.duration).split('min', 1);
  let h = min[0].split('h');
  let a = parseInt(h[0]*60);
  let b = parseInt(h[1]);

  return {duration: b};
}));

// Get the average of all rates with 2 decimals 

const ratesAverage = movies.reduce((acum, currVal)=> {
    return acum + parseFloat(currVal.rate);
    },0)/movies.length;

let av = parseFloat(ratesAverage.toFixed(2));
console.log(av);


// Get the average of Drama Movies
let dramaMovie = movies.filter(drama => drama.genre.includes('Drama'));
let dramaMoviesRate = dramaMovie.reduce((acum, curVal)=>{
  
});

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
