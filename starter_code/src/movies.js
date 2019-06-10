/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {
  let time = "";
  let result = movies.map(movie => {
    time = movie.duration.split(" ");
    if (time.length === 2) {
      hour = parseInt(time[0]) * 60;
      timeMinuteCorrected = parseInt(time[1]);
      minutes = hour + timeMinuteCorrected;
    } else if (time[0].includes("h")) {
      minutes = parseInt(time[0]) * 60;
    } else {
      minutes = parseInt(time[0]);
    }
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: minutes,
      genre: movie.genre,
      rate: movie.rate
    };
  });
  return result;
};

// Get the average of all rates with 2 decimals

const ratesAverage = movies => {
  let total = movies.reduce((sum, elem) => {
    if (elem.rate == "") elem.rate = 0;
    return sum + Number(elem.rate);
  }, 0);

  let avg = total / movies.length;
  return Number(avg.toFixed(2)); // toFixed() transforma en string! X-X
};

// Get the average of Drama Movies

const dramaMoviesRate = movies => {
  let drama = movies.filter(movie => movie.genre.includes("Drama"));

  if (drama.length == 0) return undefined;

  let dramavg = ratesAverage(drama);
  return dramavg;
};

// Order by time duration, in growing order

const orderByDuration = movies => {
  var time = movies.sort((a, b) => {
    if (a.duration === b.duration) {
      if (a.title < b.title) return -1;

      if (a.title > b.title) return 1;
    }
    return a.duration - b.duration;
  });
  return time;
};

// How many movies did STEVEN SPIELBERG

const howManyMovies = movies => {
  if (movies.length == 0) return undefined;

  let drama = movies.filter(
    movie =>
      movie.genre.includes("Drama") &&
      movie.director.includes("Steven Spielberg")
  );

  let steven = drama.length;
  return `Steven Spielberg directed ${steven} drama movies!`;
};

// Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  let title = movies
    .map(movie => movie.title)
    .sort()
    .splice(0, 20);
  return title;
};

// Best yearly rate average
