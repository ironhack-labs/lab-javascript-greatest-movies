/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  //   insertar variables
  let movies2 = movies.map(movie => {
    let movieDuration = movie.duration;

    let movieDurationSplitted = movieDuration.split(" ");

    if (movieDurationSplitted.length == 2) {
      let hoursExtracted = parseInt(movieDurationSplitted[0]);
      let minutesExtracted = parseInt(movieDurationSplitted[1]);
      totalMinutes = hoursExtracted * 60 + minutesExtracted;
    } else if (movieDurationSplitted[0].includes("h")) {
      let hoursExtracted = parseInt(movieDurationSplitted[0]);
      totalMinutes = hoursExtracted * 60;
    } else {
      let minutesExtracted = parseInt(movieDurationSplitted[0]);
      totalMinutes = minutesExtracted;
    }
    return { ...movie, duration: totalMinutes };
  });
  return movies2;
}
// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let avg = movies.reduce((prev, current) => {
    return prev + current.rate / movies.length;
  }, 0);
  return parseFloat(avg.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let moviesFiltered2 = movies.filter(movie => movie.genre.includes(`Drama`));
  if (moviesFiltered2==0){
      return undefined;
  }
  console.log(moviesFiltered2);
  return ratesAverage(moviesFiltered2);
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  let orderedMovies = movies.sort((a, b) => b - a);

  return orderedMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  let spielbergDramaMovies = movies.filter(
    movie =>
      movie.genre.includes("Drama") &&
      movie.director.includes("Steven Spielberg")
  );
  if (movies.length === 0) {
    return undefined;
  }
  return `Steven Spielberg directed ${
    spielbergDramaMovies.length
  } drama movies!`;
}
// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let orderedAlphMovies = movies.sort((a, b) => a - b);
if (orderedAlphMovies.length < 20){
    return orderedAlphMovies;}
   else{
do {orderedAlphMovies.pop() } while (orderedAlphMovies.length > 20);
return orderedAlphMovies;
   }
}
// Best yearly rate average
