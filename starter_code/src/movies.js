/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
  
  return arr.map(movie => {

    if (movie.duration.charAt(1) === "h") {

      let tempDuration = movie.duration;
      let hours = parseInt(tempDuration, 10) * 60;
      movie.duration = hours;     
      if (parseInt(tempDuration.substr(2), 10)) {

      let minutes = parseInt(tempDuration.substr(2), 10);
      movie.duration += minutes;
    }
      return movie
    } else {
      let tempDuration = movie.duration;
      let minutes = parseInt(tempDuration, 10);
      movie.duration = minutes;
      return movie
    }
  });

}

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {

  let average = arr.reduce((total, movie) => {
    return total + Number(movie.rate);
    }, 0)/arr.length

    return Number(average.toFixed(2));
};

// Get the average of Drama Movies

function dramaMoviesRate(arr) {

  let filteredArray = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (!filteredArray.length) {
    return undefined
  }

  return Number(ratesAverage(filteredArray).toFixed(2));

};

// Order by time duration, in growing order

function orderByDuration(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let resultArray = turnHoursToMinutes(arr);
  resultArray.sort((a, b) => {
    if (Number(a.duration) > Number(b.duration)) {
        return 1;
    }
    if (Number(a.duration) < Number(b.duration)) {
      return -1
    } 
    else if (Number(a.duration) = Number(b.duration)) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
    return 0;
  })
  return resultArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {

  let filteredArray = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  return filteredArray.filter(movie => {
    return movie.director.indexOf("Steven Spielberg") !== -1;
  }).length;
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let resultArray = arr.sort((a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    if (a.duration < b.duration) {
      return -1
    } 
   return 0;
   
})
  return resultArray.slice(0, 20);
}

// Best yearly rate average

function bestYear(arr) {
  arr.map()
}