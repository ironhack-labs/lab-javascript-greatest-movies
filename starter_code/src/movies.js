/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const turnedMin = movies.map(time => {
    const newTime = { ...time };

    if (time.duration.indexOf("min") == -1) {
      const hour = parseInt(time.duration.charAt(0)) * 60;
      newTime.duration = hour;
    } else if (time.duration.indexOf("h") == -1) {
      const min = parseInt(time.duration);
      newTime.duration = min;
    } else {
      const hour = parseInt(time.duration.charAt(0)) * 60;
      const min = parseInt(time.duration.substring(2, 5));
      newTime.duration = hour + min;
    }
    return newTime;
  });
  return turnedMin;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const avgRating = movies.reduce((ac, rating) => {
    if (rating.rate == "") {
      rating.rate = 0;
    }
    return ac + parseFloat(rating.rate);
  }, 0);
  const avg = parseFloat((avgRating / movies.length).toFixed(2));
  return avg;
}
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  if (dramaMovies.length == 0) {
    return undefined;
  }

  const dramaAvg = ratesAverage(dramaMovies);

  return dramaAvg;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  //   const order = movies.sort((a, b) =>
  //     a.duration - b.duration );

  const order = movies.sort((a, b) => {
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

  return order;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(
    movie =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );
  const title = spielbergMovies.map(steven => {
    if (steven.title == []) {
      return undefined;
    }
    return steven.title;
  });
  console.log(title);
  return title.toString();
}

// Order by title and print the first 20 titles

// Best yearly rate average
