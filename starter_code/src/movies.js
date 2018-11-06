/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (timeString){
    let timeItems = timeString.split(' ');
    // console.log(timeItems)//["2h", "22min"]
    const minutes = Number.parseInt(timeItems[1]);
    const hours = Number.parseInt(timeItems[0])*60;
    return minutes + hours;
  }
  movies.map(movie =>{
    const lengthMinutes = turnHoursToMinutes(movie.duration);
    return {...movies, duration: lengthMinutes}
  })

  
  // Get the average of all rates with 2 decimals 
function ratesAverage (array) {
    let sumRates = array.map(function(el){
      return Number(el.rate);
    }).reduce (function(base,el){
      return base + el
    })
    return sumRates;
  }
console.log(ratesAverage(movies).toFixed(2));
  
  
  // Get the average of Drama Movies
function dramaMoviesRate (theMovies) {
    let dramaMovies = movies.filter(function(elem){
    return elem.genre.includes('Drama');
  });
    return (dramaMovies.length/movies.length).toFixed(2);
  };

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration (arr){
    let order = movies.sort(function(a,b){
      return a.duration - b.duration;
    });
    return order;
  }
  console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies (array){
    spielbergMovies = array.filter(function(elem){
      return elem.genre.includes('Drama') && elem.director.includes('Steven Spielberg')
    });
    return spielbergMovies.length;
  }
console.log(howManyMovies(movies));

// Order by title and print the first 20 titles


// Best yearly rate average
