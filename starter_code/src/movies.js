/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies.map(movie => {
  const hour = movie.duration.slice(0, 1);
  const movieHour = hour * 60;
  const minutes = movie.duration.slice(3, 5);
  const movieDuration = Number(movieHour) + Number(minutes);
  return movieDuration;
});

/*function turnHoursToMinutes(movies) {
  movies.map(movie => {
    console.log(movie.duration);
  });
}
*/
// Get the average of all rates with 2 decimals

const ratesAverage = movies.reduce((ac, movie) => {
  const allMovies = movies.length;
  return (Number(ac) + Number(movie.rate)) / allMovies;
}, 0);

console.log(ratesAverage.toFixed(2));

// Get the average of Drama Movies

const dramaMoviesRate = movies.reduce((ac, movie) => {});

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
