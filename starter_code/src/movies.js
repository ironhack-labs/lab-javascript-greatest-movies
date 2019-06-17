/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnStringToNum(movieDuration) {
  if (movieDuration.indexOf("h") > -1 && movieDuration.indexOf("min") > -1) {
    let splitDuration = movieDuration.split(" ");
    // parseInt(splitDuration[0]);
    splitDuration[0] = parseInt(splitDuration[0]);
    splitDuration[1] = parseInt(splitDuration[1]);
    movieDuration = splitDuration[0] * 60 + splitDuration[1];
    return movieDuration;
  } else if (movieDuration.indexOf("h") > -1) {
    movieDuration = parseInt(movieDuration) * 60;
    return movieDuration;
  } else {
    movieDuration = parseInt(movieDuration);
    return movieDuration;
  }
}

function turnHoursToMinutes(movieArray) {
  let newMovieArray = movieArray.map(movieObj => {
    let newMovieObj = { ...movieObj };
    let newDuration = turnStringToNum(newMovieObj.duration);
    newMovieObj.duration = newDuration;
    return newMovieObj;
  });

  return newMovieArray;
}
// Get the average of all rates with 2 decimals
function ratesAverage(movieArray) {
  // console.log(movieArray)
  let avgRates = movieArray.reduce((avg, movieTwo) => {
    return avg + Number(movieTwo.rate);
  }, 0);
  return parseFloat((avgRates / movieArray.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movieArray) {
  let dramaArr = [];
  let finalResult;
  movieArray.forEach(movieObj => {
    if (movieObj.genre.indexOf("Drama") > -1) {
      dramaArr.push(movieObj);
    }
  });

  if (dramaArr.length == 0) {
    return undefined;
  } else {
    finalResult = ratesAverage(dramaArr);
    console.log(finalResult);
    return finalResult;
  }
}

// Order by time duration, in growing order
function orderByDuration(movieArray) {
  let final = movieArray.sort((a, b) => {
    if (a.duration > b.duration) return 1;
    else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration && a.title > b.title) {
      return 1;
    } else if (a.duration == b.duration && a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  return final;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArray) {
  let count = 0;
  if (movieArray.length == 0) {
    return undefined;
  }
  movieArray.filter(drama => {
    if (
      drama.genre.indexOf("Drama") > -1 &&
      drama.director == "Steven Spielberg"
    ) {
      count++;
      return drama;
    }
  });
  return `Steven Spielberg directed ${count} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  console.log(movieArray);
  let newArr = [];
  movieArray.forEach(movie => {
    newArr.push(movie.title);
  });
  let finalArray = newArr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  });
  return finalArray.splice(0, 20);
}
// Best yearly rate average
