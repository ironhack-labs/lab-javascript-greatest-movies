/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movieList) {
  let movies = JSON.parse(JSON.stringify(movieList));
    movies = movies.map((movie) => {
    let durationOriginal = movie.duration;
    let durationNew = 0;
    let minutes = 0;
    let hours = 0;
    if (!durationOriginal.includes('h'))
      durationNew = parseInt(durationOriginal);
    if (durationOriginal.includes('h')) {
      let duration = durationOriginal.split('h');
      hours = parseInt(duration[0] * 60);
      minutes = parseInt(duration[1]);
      if (isNaN(minutes))
        minutes = 0;
      durationNew = hours + minutes;
    }
    movie.duration = durationNew;
    return movie;
  });
  return movies;
}

// Get the average of all rates with 2 decimals 
const ratesAverage = (movies) => {
  let avg = movies.reduce((total, movie) => {
    return total + parseFloat(movie.rate);
  }, 0);
  return parseFloat(avg / movies.length);
}

// Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0)
    return;
  let avg = dramaMovies.reduce((total, movie) => {
    if (movie.rate == '')
      return total;
    return total + parseFloat(movie.rate);
  }, 0);
  return parseFloat((avg / dramaMovies.length).toFixed(2));
};

// Order by time duration, in growing order
const orderByDuration = (movieList) => {
  let movies = JSON.parse(JSON.stringify(movieList));
  let sorted = [];
  sorted = movies.sort((a, b) => {
    if (a.duration === b.duration) {
      return a.title.toUpperCase().localeCompare(b.title.toUpperCase());
    } else if (a.duration > b.duration) {
      return 1;
    }
    return -1;
  })
  return sorted;
};
// console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
const howManyMovies = (movieList) => {
  if (movieList.length === 0) {
    return;
  }
  let movies = movieList.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return `Steven Spielberg directed ${movies.length} drama movies!`;
}

// Order by title and print the first 20 titles
const orderAlphabetically = (movieList) => {
  let orderedMovies = movieList.map((movie) => movie.title);
  orderedMovies = orderedMovies.sort((a,b) => a.localeCompare(b));
  return orderedMovies.slice(0, 20);
};

// Best yearly rate average
const bestYearAvg = (movieList) => {
  if (movieList.length === 0) {
    return;
  }

  let yearList = [];
  movieList.forEach((movie) => {
    if (!yearList.includes(movie.year))
      yearList.push(movie.year);
  });

  let yearAvgs = yearList.map((year) => {
    return {'year': year, 'yearAvg': 0};
  });

  yearAvgs.forEach((year) => {
    let moviesThisYear = movieList.filter((movie) => movie.year === year.year);
    let movieCounter = 0;
    let avgThisYear = moviesThisYear.reduce((avg, yearAvg) => {
      movieCounter += 1;
      let rateTotal = parseFloat(avg) + parseFloat(yearAvg.rate);
      return rateTotal;
    }, 0);
    year.yearAvg = parseFloat(avgThisYear) / parseInt(movieCounter);
  })

  let sortedList = yearAvgs.sort((a, b) => {
    if (a.yearAvg === b.yearAvg)
      return a.year + b.year;
    else
      return a.yearAvg - b.yearAvg;
  })
  return `The best year was ${sortedList[sortedList.length-1].year} with an average rate of ${sortedList[sortedList.length-1].yearAvg}`;
};
