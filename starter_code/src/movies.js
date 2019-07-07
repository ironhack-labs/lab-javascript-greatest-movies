//const movies = require('./data.js');
// Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  let copyMovies = JSON.parse(JSON.stringify(movies));

  return copyMovies.map(movie => {
    const splitDuration = movie.duration.split(" ");
    if (splitDuration.length == 2) {
      let hourForMin = splitDuration[0].replace("h", "") * 60;
      let min = parseInt(splitDuration[1].replace("min", ""));
      movie.duration = hourForMin + min;
    } else if (splitDuration[0].endsWith("h")) {
      movie.duration = splitDuration[0].replace("h", "") * 60;
    } else if (splitDuration[0].endsWith("min")) {
      movie.duration = parseInt(splitDuration[0].replace("min", ""));
    }
    return movie;
  });
};

// Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  const average = movies.reduce((accumulator, movie) => accumulator + parseFloat(movie.rate), 0) / movies.length;
  let averageRounded = parseFloat(average.toFixed(2));
  return averageRounded;
};

// Get the average of Drama Movies
const dramaMoviesRate = movies => {
  const dramaFilter = movies.filter(movie => movie.genre.includes('Drama'));
  if (dramaFilter.length === 0) {
    return undefined
  };
  let averageDramaMovies = dramaFilter.reduce((accumulator, movie) => {
    if (movie.rate == '') {
      return accumulator;
    } else {
      return accumulator + parseFloat(movie.rate);
    }
  }, 0);
  return parseFloat((averageDramaMovies / dramaFilter.length).toFixed(2));
};

// Order by time duration, in growing order
const orderByDuration = movies => {
  let orderDuration = JSON.parse(JSON.stringify(movies));

  orderDuration = orderDuration.sort((a, b) => {
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    } else {
      return a.duration - b.duration;
    }
  });
  return orderDuration;
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = movies => {
  if (movies == 0) {
    return undefined;
  }
  const filterMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return `Steven Spielberg directed ${filterMovies.length} drama movies!`
}

// Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  let listAlphabetically = JSON.parse(JSON.stringify(movies));

  listAlphabetically = listAlphabetically.sort((a, b) => {
    return a.title.localeCompare(b.title)
  });
  return listAlphabetically.slice(0, 20).map(movie => movie.title);
}

// Best yearly rate average

const bestYearAvg = (movies) => {
 console.log('ok')
}
