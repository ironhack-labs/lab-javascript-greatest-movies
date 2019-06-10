/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
  //   insertar variables
  let newMovieDuration = movies.map(movie => {
    let movieDuration = movie.duration;

    let movieDurationSplitted = movieDuration.split(" ");

    if (movieDurationSplitted.length == 2) {
      let hoursExtracted = parseInt(movieDurationSplitted[0]);
      let minutesExtracted = parseInt(movieDurationSplitted[1]);
      totalMinutes = (hoursExtracted * 60) + (minutesExtracted);
    }
    else if (movieDurationSplitted[0].includes("h")) {
      let hoursExtracted = parseInt(movieDurationSplitted[0]);
      totalMinutes = (hoursExtracted * 60);
    }
    else {
      let minutesExtracted = parseInt(movieDurationSplitted[0]);
      totalMinutes = (minutesExtracted);
    }
    return { ...movie, duration: totalMinutes }


  });
  return newMovieDuration
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
  let avg = array.reduce((prev, current) => {
    return prev + current.rate / array.length
  }, 0)
  return parseFloat(avg.toFixed(2))
}



//Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
  if (dramaMovies.length === 0) {
    return undefined;
  }
  return ratesAverage(dramaMovies)
}


// Order by time duration, in growing order

function orderByDuration(movies) {
  let durationOrdered = movies.sort((a, b) => {
    if (a.duration === b.duration) {
      if (a.title > b.title) return 1;
      if (a.title == b.title) return 0;
      if (a.title < b.title) return -1;
    }
    return a.duration - b.duration;
  })
  return durationOrdered
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  let spielbergDramaMovies = movies.filter(movie => movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"))
  if (movies.length === 0) {
    return undefined;
  }
  return `Steven Spielberg directed ${spielbergDramaMovies.length} drama movies!`;
}


// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let alphabeticallyOrdered = movies.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title == b.title) return 0;
    if (a.title < b.title) return -1;
  });
  let maped = alphabeticallyOrdered.map(element => element.title);
  return maped.splice(0, 20);
}


// Best yearly rate average
