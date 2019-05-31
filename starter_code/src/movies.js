/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
// function ratesAverage(movies) {
//   console.log("hey");
//   var count = 0;
//   var avg = 0;
//   movies.forEach(movie => {
//     count = Number(movie.rate) + count;
//   });
//   console.log(count);
//   console.log(avg);
//   return (avg = count / movie.length);
// }
function ratesAverage(movies) {
  console.log("hey");
  var count = 0;
  movies.forEach(movie => {
    count = Number(movie.rate) + count;
  });
  console.log(count);
  var avg = count / movies.length;
  console.log(avg);
  return avg;
}

const average = (movies.reduce = (acc, movie) => {
  acc + movie.rate;
  return acc;
});

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
