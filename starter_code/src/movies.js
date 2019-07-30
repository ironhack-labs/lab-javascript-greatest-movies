/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

// Iteration 2: Drama movies - Get the average of Drama Movies

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function ratesAverage(arr) {
  /*
  let avg = 0;
  arr.forEach(mov => {
    avg += mov.rate;
  });

  return avg / arr.length;
  */
  let sum = arr.reduce((a, v) => a + parseFloat(v.rate), 0);
  return parseFloat((sum / arr.length).toFixed(2));
}
function dramaMoviesRate(arr) {
  let dramamvs = arr.filter(mov => mov.genre.indexOf("Drama") > -1);
  if (dramamvs.length === 0) return 0;

  return ratesAverage(dramamvs);
}

function orderByDuration(arr) {
  /*return arr.sort(
    (movie1, movie2) => 
);*/
}

function turnHoursToMinutes(arr) {
  return arr.map(function(movie) {
    let dur = movie.duration;
    console.log(dur.search("min"));
    let hmin=dur.match('\[0,9]+\g')
    if(hmin.length==1)
      if(hmin[0].match())

  });
}

function htm(pel) {
  let min=0;
  let dur = pel.duration;
  let hmin=dur.match(/[0-9]+/g)
  if(!(dur.match(/h/)===null))

}
