/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function stringToMinutes() {
  let string = movies.map(e => e.duration);
  var arr = string.split("h");
  if (arr.length < 2) {
    arr.unshift("0");
  }
  var hours = Number(arr[0]);
  var minutes = Number(arr[1].split("min")[0]);

  return hours * 60 + minutes;
}

// Get the average of all rates with 2 decimals
let ratesNumbers = function(array) {
    let numbers = array.map(movie => {
       return parseFloat(movie.rate)
     })
     return numbers
    }
   let ratesInNUmbers = ratesNumbers(movies)

const ratesAverage = ratesInNumbers.reduce((sum, movie) => {
    return sum + movie /movies.length;
  });
  ratesAverage
}
// your code:



// Get the average of Drama Movies
function avgDrama(movies) {
  let result = movies.filter(element => element.genre === "Drama");
}

console.log(result);
// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
