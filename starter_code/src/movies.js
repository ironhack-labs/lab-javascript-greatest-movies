/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies =>
  parseFloat(
    movies
      .map(movie => parseFloat(movie.rate))
      .reduce((ac, currentMovieRate) => ac + +currentMovieRate) / movies.length
  );

// console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  let moviesWithDramaGenre = movies.filter(currentMovie =>
    currentMovie.genre.includes("Drama")
  );

  if (moviesWithDramaGenre.length === 0) return 0;

  let moviesWithDramaGenreRate =
    moviesWithDramaGenre
      .map(currentMovie =>
        isNaN(currentMovie.rate) || currentMovie.rate === ""
          ? 0
          : parseFloat(currentMovie.rate)
      )
      .reduce((ac, currentMovie) => ac + currentMovie) /
    moviesWithDramaGenre.length;

  return +moviesWithDramaGenreRate.toFixed(2);
};

// console.log(dramaMoviesRate(movies));

const formatDurationToMinutes = duration => {
  let durationArray = duration.split(" ");

  // ["54min"] => "54min"

  // ["2h"] => "2h"

  // ["2h", "34min"] => "2h 34min"

  if (durationArray[0].indexOf("m") > -1)
    return +durationArray[0].substring(0, durationArray[0].indexOf("m"));

  let hours = +durationArray[0].substring(0, durationArray[0].indexOf("h"));
  let minutes =
    durationArray.length == 1
      ? 0
      : +durationArray[1].substring(0, durationArray[1].indexOf("m"));
  return hours * 60 + minutes;
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
  let moviesDuration = movies
    .map(currentMovie =>
      typeof currentMovie.duration === "string"
        ? {
            ...currentMovie,
            duration: formatDurationToMinutes(currentMovie.duration)
          }
        : { ...currentMovie }
    )
    .sort((prevMovie, currentMovie) =>
      prevMovie.duration < currentMovie.duration
        ? -1
        : prevMovie.duration > currentMovie.duration
        ? 1
        : prevMovie.title.localeCompare(currentMovie.title)
    );

  return moviesDuration;
};

// console.log(orderByDuration(movies));

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  if (movies.length === 0) return 0;

  let stevenSpielbergDramaMovies = movies.filter(
    currentMovie =>
      currentMovie.director === "Steven Spielberg" &&
      currentMovie.genre.includes("Drama")
  );

  if (stevenSpielbergDramaMovies.length === 0) return 0;

  return stevenSpielbergDramaMovies.length;
};

howManyMovies(movies);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  let moviesShortedAlphabetically = movies
    .sort((prevMovie, currentMovie) => {
      return prevMovie.title.localeCompare(currentMovie.title);
    })
    .map(movie => movie.title);

  if (moviesShortedAlphabetically.length < 20)
    return moviesShortedAlphabetically;
  else if (moviesShortedAlphabetically.length >= 20)
    return moviesShortedAlphabetically.splice(0, 20);

  return moviesShortedAlphabetically;
};

orderAlphabetically(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  let moviesWithDurationFormated = movies.map(movie => {
    return { ...movie, duration: formatDurationToMinutes(movie.duration) };
  });

  return moviesWithDurationFormated;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {
  if (movies.length === 0) return null;

  if (movies.length === 1)
    return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;

  // Set all the years and the rates as numbers
  movies = movies.map(movie => {
    return { ...movie, year: +movie.year, rate: +movie.rate };
  });

  // Get all the years of the movies (no repeated)
  let moviesYear = [...new Set(movies.map(movie => movie.year))];

  // Get all the movies to each year
  let moviesGroupedByYear = moviesYear.map(movieYear =>
    movies.filter(movie => movie.year === movieYear)
  );

  let moviesGrouped = [];

  // Save the data of each year
  moviesGroupedByYear.forEach(movieGroup => {
    let movieGroupInfo = {
      year: movieGroup[0].year,
      movies: movieGroup.length,
      rates: movieGroup
        .map(currentMovie => currentMovie.rate)
        .reduce((ac, currentMovieRate) => ac + currentMovieRate),
      average: function() {
        return this.rates / this.movies;
      }
    };

    // Add the year information
    moviesGrouped.push(movieGroupInfo);
  });

  // Get the best's average year
  let bestYearAverage = moviesGrouped.reduce((ac, cu) =>
    ac.average() > cu.average() ? ac : cu
  );

  return `The best year was ${
    bestYearAverage.year
  } with an average rate of ${bestYearAverage.average()}`;
};

bestYearAvg(movies);
