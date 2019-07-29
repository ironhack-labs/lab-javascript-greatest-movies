/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

/* First, thought of doing a .map new array of only the averages and then .reduce them...

/* ES5 
var onlyRates = movies.map(function(movieRates){
  return movieRates.rate;
}) 
console.log(onlyRates);*/

/* ES6 
var onlyRates = movies.map(movieRates => movieRates.rate);

console.log("The original ", movies, "the new one ", onlyRates) */

/* Then found the parseInt method (not clear enough though) and did .reduce and parseInt at the same time */

/*const averageRate = movies.reduce((acc, movie) => acc += parseInt(movie.rate) / movies.length,0);

console.log(averageRate); */

/* THEN... saw that Jasmine was asking for parseFloat and headed back to first idea adding it */
function ratesAverage() {
  var onlyRates = movies.map(function(movieRates) {
    return parseFloat(movieRates.rate);
  });
  console.log(`This is the new array with numbers ${onlyRates}`);
}
ratesAverage();

/* Currently trying to do math x + y / .length */
/*function ratesAverage(movies) {
  var onlyRates = movies.map(function(movieRates) {
    return parseFloat(movieRates.rate);
  });
  var average = onlyRates.reduce((acc, curr) => acc + curr / onlyrates.length);
}
ratesAverage();*/

// Iteration 2: Drama movies - Get the average of Drama Movies

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
