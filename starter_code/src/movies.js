/* eslint no-restricted-globals: 'off' */
// const movies = require('./data.js');

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    let hours   = 0;
    let minutes = 0;
    let newMovies = JSON.parse(JSON.stringify(movies));
    return newMovies.map((movie) => {
      hours   = 0;
      minutes = 0;
      if(movie.duration.indexOf('h') !== -1){
        hours   = parseInt(movie.duration.slice(0, movie.duration.indexOf('h')));
      }
      if((movie.duration.indexOf('m') !== -1) && (movie.duration.indexOf('h') !== -1)) {
        minutes = parseInt(movie.duration.slice((movie.duration.indexOf('h') + 1), movie.duration.indexOf('m')));
      } else if((movie.duration.indexOf('m') !== -1)){
        minutes = parseInt(movie.duration.slice(0, movie.duration.indexOf('m')));      
      }

      movie.duration = (hours * 60) + minutes;
      return movie;
    })
};

//-----------------------------------------------------------------------------------------------------------------------------------

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  return (movies.reduce((acc, value) => acc + parseFloat(value.rate), 0 ).toFixed(2)) / (movies.length);
}
// console.log(ratesAverage(movies));

//-----------------------------------------------------------------------------------------------------------------------------------
// Get the average of Drama Movies
function dramaMoviesRate(movies){
    let sumDrama = movies.reduce((acc, value) => value.genre.includes('Drama') ? value.rate !== '' ? acc + parseFloat(value.rate) : acc : acc, 0 );
    let quantity = movies.reduce((acc, value) => value.genre.includes('Drama') ? acc + 1 : acc, 0 );
    if(sumDrama > 0){
      return parseFloat((sumDrama / quantity).toFixed(2));
    }
}
// console.log(dramaMoviesRate(movies));

//-----------------------------------------------------------------------------------------------------------------------------------

// Order by time duration, in growing order
function orderByDuration(movies){
  let sortMovies = turnHoursToMinutes(movies);
  sortMovies.sort((a, b) => a.duration - b.duration);

  for(let i = 0; i < sortMovies.length; i += 1){
    if((i + 1) < sortMovies.length){
      if(sortMovies[i].duration === sortMovies[i + 1].duration){
        if(sortMovies[i].title.localeCompare(sortMovies[i + 1].title) === 1){
          sortMovies.splice(i, 2, sortMovies[i + 1], sortMovies[i])
        }
      }
    }    
   };
   return sortMovies;
};
// console.log(orderByDuration(movies));

//-----------------------------------------------------------------------------------------------------------------------------------
// How many movies did STEVEN SPIELBERG
function filterBySteven(obj) {
  if (obj.director === 'Steven Spielberg' && obj.genre.includes('Drama')) {
    return true;
  } else {
    return false;
  }
}
function howManyMovies(movies){
  return movies.filter(filterBySteven);
}
// console.log(howManyMovies(movies));

//-----------------------------------------------------------------------------------------------------------------------------------

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  let sortMovies = JSON.parse(JSON.stringify(movies));
  sortMovies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return sortMovies.filter((value, index) => index < 20);
}
// console.log(orderAlphabetically(movies));

//-----------------------------------------------------------------------------------------------------------------------------------

// Best yearly rate average
function bestYearlyRateAverage(movies){
  let sortMovies  = JSON.parse(JSON.stringify(movies));
  let yearMovie   = '';
  let sumYear     = 0;
  let quantity    = 0;
  let averageYear = [];

  sortMovies.sort((a, b) => a.year.localeCompare(b.year));
  for(let i = 0; i < sortMovies.length; i += 1){
    if(yearMovie !== sortMovies[i].year){
      yearMovie = sortMovies[i].year;
      sumYear   = movies.reduce((acc, value) => value.year.includes(yearMovie) ? acc + parseFloat(value.rate) : acc, 0 ).toFixed(2);
      quantity  = movies.reduce((acc, value) => value.year.includes(yearMovie) ? acc + 1 : acc, 0 );
      averageYear.push({year: yearMovie, average: (sumYear / quantity).toFixed(2)});
    }
  }
  averageYear.sort((a, b) => b.average.localeCompare(a.average));
  return averageYear[0];
}
// console.log(bestYearlyRateAverage(movies));