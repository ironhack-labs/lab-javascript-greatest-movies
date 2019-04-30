/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let moviesCopy = movies.map(movie => {
    let copied = { ...movie };

    let hours = 0;
    if (movie.duration.indexOf("h") == -1) {
      const minString = movie.duration.charAt(0) + movie.duration.charAt(1);
      const minsNumber = +minString;
      hours = minsNumber;
    } else if (movie.duration.indexOf("h") > 0 && movie.duration.length == 2) {
      const hoursString = movie.duration.charAt(0);
      const minsNumber = +hoursString * 60;
      hours = minsNumber;
    } else if (
      movie.duration.indexOf("h") > 0 &&
      movie.duration.indexOf("min") > 0 &&
      movie.duration.length == 8
    ) {
      const hoursString = movie.duration.charAt(0);
      const minString = movie.duration.charAt(3) + movie.duration.charAt(4);
      const hoursInteger = +hoursString;
      const minInteger = +minString;
      const total = hoursInteger * 60 + minInteger;
      hours = total;
    } else if (
      movie.duration.indexOf("h") > 0 &&
      movie.duration.indexOf("min") > 0 &&
      movie.duration.length == 7
    ) {
      const hoursString = movie.duration.charAt(0);
      const hoursInteger = +hoursString;
      const minString = movie.duration.charAt(3);
      const minInteger = +minString;
      hours = +hoursInteger * 60 + minInteger;
    }

    copied.duration = hours;
    return copied;
  });

  return moviesCopy;
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let moviesRates = movies.map(movie => movie.rate);
  moviesRates = moviesRates.map(rate => parseFloat(rate));

  const totalSum = moviesRates.reduce((ac, currentValue) => {
    return ac + currentValue;
  });

  const average = (totalSum / moviesRates.length).toFixed(2);

  console.log(average);
  return parseFloat(average);
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  let dramaMoviesCleansed = dramaMovies.filter(movie => movie.rate != "");
  let dramaMoviesFloated = dramaMoviesCleansed.map(cleansed => cleansed.rate);

  let dramaRates = dramaMoviesFloated.map(movie => parseFloat(movie));

  if (dramaMovies.length != 0) {
    const totalSum = dramaRates.reduce((ac, currentValue) => {
      return ac + currentValue;
    });

    const average = (totalSum / dramaMovies.length).toFixed(2);

    console.log(average);
    return parseFloat(average);
  } else {
    return undefined;
  }
}

// Order by time duration, in growing order

function orderByDuration(orderingMovie) {
  const sorted = orderingMovie.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration) {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
    }
  });
  return sorted;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length == 0) {return undefined}
  let moviesBy = movies.filter(movie => movie.director == "Steven Spielberg");
  console.log(moviesBy);
  let dramasBy = moviesBy.filter(movie => movie.genre.includes("Drama"))
  console.log(dramasBy)

  if (dramasBy.length == 0) {
    return `Steven Spielberg directed 0 drama movies!`
  } else {
    return `Steven Spielberg directed ${dramasBy.length} drama movies!`
  }
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let moviesSorted = movies.sort((a,b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    } 
  })
  let top20 = moviesSorted.splice(0, 20)
  console.log(top20)
  let top20Str = top20.map(movie => movie.title)
  console.log(top20Str)
  return top20Str
}

// Best yearly rate average

function bestYearAvg(movies) {
  let yearsRates = movies.map( movie => {
    return [parseInt(movie.year), parseFloat(movie.rate)]})
  console.log(yearsRates)
  let sorted = yearsRates.sort((a,b) => a[0] - b[0])
  console.log(sorted)
  
  const groupBy = (movie, key) => sorted.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }), 
    {},
  );

  })
  
}