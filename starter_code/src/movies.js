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
      movie.duration = movie.duration.toString();
      return movie

    } else {

      let tempDuration = movie.duration;
      let minutes = parseInt(tempDuration, 10);
      movie.duration = minutes;
      movie.duration = movie.duration.toString();
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
    return 0;
  })
  return resultArray;
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
