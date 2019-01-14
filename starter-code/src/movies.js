/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

let newArray = [];
let hourToMin;
function turnHoursToMinutes (array) {
  let hour, min, hourMin;
  array.map(function(movie) {
    hourMin = parseInt(movie.duration.split(' ').join('').split('h').join('').split('min').join(''));
    hour = Math.floor(hourMin / 100);
    min = hourMin - (hour * 100);
    hourToMin = parseInt((hour * 60) + min);
    newArray.push(Object.assign({}, movie, {duration: parseInt(hourToMin) }));
  });

  console.log(newArray)
  return newArray;
}
// Get the average of all rates with 2 decimals 

function ratesAverage (arr) {
  let sum = arr.reduce(function(acc, cur){
    return acc + parseFloat(cur.rate)
    }, 0);
  average = sum / arr.length;
  return parseFloat(average.toFixed(2));
}
  

// Get the average of Drama Movies
function dramaMoviesRate (arr) {
  let dramaMovies = arr.filter(function(movie){
    return movie.genre.includes('Drama');
  });

  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

function orderByDuration (arr) {
  return arr.sort(function(a, b) {
    if (a.duration === b.duration) {
      if (a.title.toUppercase() > b.title.toUppercase()) {
        return 1;
      } if (a.title.toUppercase() < b.title.toUppercase()) {
        return -1;
      } else {
        return 0;
      }
    }
    return a.duration - b.duration;
  })
}


// How many movies did STEVEN SPIELBERG

function howManyMovies (arr) {
  let movies = arr.filtr((movie) => {
    if (movie.genre.includes('Drama') ) {
      return movie.genre.includes('Steven Spielberg');
    }
  });

  return 'Steven Spielberg directed ' + movies.length + 'drama movies!';
}


// Order by title and print the first 20 titles


// Best yearly rate average
