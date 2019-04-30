/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 




function turnHoursToMinutes(movies) { }
/* const x = movies.map(function mov (movie) {
  const movieLength = movie.duration.split(" ").length
  if (movieLength == 2) {
    const hour1 = parseInt(movie.duration.split(" ")[0].replace("h", ""))
    const hourInMins1 = hour1 * 60;
    const minutes = parseInt(movie.duration.split(" ")[1].replace("min", ""))
    return hourInMins1 + minutes

  }
  else {
    const lastCharac = movie.duration.slice(-1);

    if (lastCharac == 'h') {
      const hour2 = parseInt(movie.duration.replace("h", ""));
      const hourInMins2 = hour2 * 60;
      return (hourInMins);
    }
    else {
      const minutes = parseInt(movie.duration.replace("min", ""));
      return (minutes);
    } */
//}

//return x;
//  });

//console.log(turnHoursToMinutes(movies));



// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  const y = movies.reduce((z, average) => {
    return z + average.rate;
  }, 0);
  return +(parseInt(y) / movies.length).toFixed(2);

}



// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovie = movies.filter(mov => mov.genre.indexOf("Drama") === 0);

  if dramaMovie.length !== 0) {
    return ratesAverage(dramaMovie)
  }

}



// Order by time duration, in growing order

function orderByDuration(movies) {

  if

}



// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const alpha = movies.map(mov => mov.title)
  const sortMov = alpha.sort()

  if (sortMov.length > 20) sortMov.splice(20, sortMov.length - 20)

  return sortMov

}
orderAlphabetically(movies)

/* Best yearly rate average */