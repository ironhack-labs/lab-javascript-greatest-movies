/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesCopy = movies.map(movie => {
    // const movieCopy = { ...movie };
    // console.log(movie.duration);
    // if (typeof movie.duration === "number") {
    //   return { ...movie };
    // }
    let durationArray = movie.duration.split(" ");
    //console.log(durationArray);

    durationArray = durationArray.reduce((ac, position) => {
      //   console.log(position);
      let min = 0;
      if (position.indexOf("h") == -1) {
        min = parseInt(position);
        // console.log(min);
      } else if (position.indexOf("min") == -1) {
        min = parseInt(position) * 60;
        // console.log(min);
      }
      return ac + min;
    }, 0);
    // console.log(durationArray);
    // movie.duration = durationArray;
    return { ...movie, duration: durationArray };
  });

  return moviesCopy;
}

// Get the average of all rates with 2 decimals
function ratesAverage(moviesCopy) {
  const totalReviews = moviesCopy.reduce((acc, movie) => {
    return acc + parseFloat(movie.rate);
  }, 0);
  return parseFloat((totalReviews / moviesCopy.length).toFixed(2));
}

ratesAverage(movies);
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const totalDramaMovies = movies.filter(movies => {
    if (movies.genre.includes(`Drama`)) {
      return true;
    }
  });
  //console.log(totalDramaMovies);
  const averageDramaMovies = totalDramaMovies.reduce((acc, movie) => {
    if (movie.rate == "") {
      movie.rate = 0;
    } else if (movie.length == 0) {
      return undefined;
    }
    return acc + parseFloat(movie.rate);
  }, 0);
  //console.log(averageDramaMovies);
  return parseFloat((averageDramaMovies / totalDramaMovies.length).toFixed(2));
}
// Order by time duration, in growing order

function orderByDuration(movies) {
  const moviesOrderedByDuration = movies.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });
  return moviesOrderedByDuration;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length == 0) {
    return undefined;
  }
  const stevenSpielbergMovies = movies.filter(movie => {
    return (
      movie.director.includes("Steven Spielberg") &&
      movie.genre.includes("Drama")
    );
  });

  return `Steven Spielberg directed ${
    stevenSpielbergMovies.length
  } drama movies!`;
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  //   const movieTitle = movies.map(movie => {
  //     return movie.title;
  //   });

  const alphabetOrder = movies.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return alphabetOrder;
}
console.log(orderAlphabetically(movies));
// Best yearly rate average
