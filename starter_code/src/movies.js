/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let arr = movies.map(element => {
    // decustruct object, ease of use mainly
    let { title, year, director, duration, genre, rate } = element;

    let durationConvertion = 0; // use later to built duration-convertion to minutes
    let durationSplit = [];
    let hours = 0;
    let minutes = 0;
    //string from time object property then split duration into array for later use
    durationSplit = duration
      .replace(' ', '')
      .replace('min', '')
      .split('h');

    // decustruct array and set hour, and minute values
    if (duration.includes('h') && duration.includes('min')) {
      [hours, minutes] = durationSplit;
    } else if (duration.includes('h')) {
      [hours] = durationSplit;
      minutes = 0;
    } else {
      [minutes] = durationSplit;
      hours = 0;
    }

    // convert hour-minute and calucation duration to minutes
    if (hours) {
      if (hours => 2) {
        durationConvertion += parseInt(hours, 10) * 60;
      } else if (hours => 1) {
        durationConvertion += 60;
      } else {
        durationConvertion += parseInt(hours, 10);
      }
    }

    // add minutes to duration convertion
    if (minutes) {
      durationConvertion += parseInt(minutes, 10);
    }

    // overide duration value with converted value
    duration = durationConvertion;

    // return object to map function..
    return { title, year, director, duration, genre, rate };
  });

  // returns new array object from function..
  return arr;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let avg = 0;
  let sum = movies.reduce((base, movie) => {
    if (movie.rate > 0) {
      return base + parseInt(movie.rate, 10);
    } else {
      return base + 0;
    }
  }, 0);
  avg = +(sum / movies.length).toFixed(2);
  return avg;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let filteredDramaMovieList = movies.filter(movie => movie.genre.includes('Drama') || movie.genre.includes('drama'));
  return ratesAverage(filteredDramaMovieList) || undefined;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  let movieSortAsc = movies.sort((b, a) => {
    if (a.duration > b.duration) {
      return -1;
    } else if (a.duration < b.duration) {
      return 1;
    } else if (a.duration === b.duration) {
      return a.title < b.title ? 1 : -1;
    }
  });
  return movieSortAsc;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  let movieList = movies
    .filter(movie => movie.director === 'Steven Spielberg')
    .filter(movie => movie.genre.includes('Drama'))

  if(movies.length > 0){
    return `Steven Spielberg directed ${movieList.length} drama movies!` 
  } else {
    return undefined;
  }
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  
  let movieSortAsc = movies.sort((b, a) => {
    if(a.title < b.title){
      return 1
    } else if(a.title > b.title){
      return -1
    } else {
      return 0
    }
  }).map(element => element.title)
  return movieSortAsc.slice(0,20)
}

// Best yearly rate average
