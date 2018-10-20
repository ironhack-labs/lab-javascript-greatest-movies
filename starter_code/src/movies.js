/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// function stringToMinutes(string) {
//     var minutes = 0;

//     if (string.length == 2) {
//       minutes += (Number((string[0])))*60;
//     }
//     else if (string.length == 5) {
//       minutes += Number(string[0] + string[1]);
//     }
//     else {
//       minutes += (Number((string[0])))*60;
//       minutes += Number(string[3] + string[4]);
//       }

//       return minutes;

// function turnHoursToMinutes(moviesArr) {
//     var resultArr = moviesArr.map(function(movie) {
//         var obj = {
//             title: el.title,
//             year: el.year,
//             director: el.directork
//             duration: stringToMinutes(el.duration),
//             genre
//         }
//             return obj
//     }

// }

// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var sum = arr.reduce(function(acc, movie) {
    return acc + Number(movie.rate);
  }, 0);
  var averageRating = sum / arr.length;
  return Math.round(averageRating * 100) / 100;
}
console.log(ratesAverage(movies));

// Get the average of Drama Movies
//go into each object on the string and check if the key genre contains drama (filter)
//if  then apply ratesAverage function

function dramaMoviesRate(arr) {
  var newArr = arr.filter(function(elem) {
    return elem.genre.includes("Drama");
  });
  if (newArr.length === 0) {
    return undefined;
  }
  return ratesAverage(newArr);
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
