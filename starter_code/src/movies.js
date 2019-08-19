/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const average =
    arr.reduce(function(accumulator, value) {
      if (value.rate) accumulator += parseFloat(value.rate);
      return accumulator;
    }, 0) / arr.length;
  return average;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  const averageDrama = arr.filter(function(movie) {
    /* if(movie.rate === Number){
      return movie.genre.includes("Drama"); */
    return movie.genre.includes("Drama");
  });
  if (averageDrama.length === 0) {
    return 0;
  } else {
    let average = ratesAverage(averageDrama).toFixed(2);
    return parseFloat(average);

    // arr.reduce(function(accumulator, value) {
    //   if (value.genre.includes("Drama") && value.rate ) {
    //     accumulator += parseFloat(value.rate);
    //   }
    //   return accumulator;
    // }, 0) / arr.length;
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
  return arr.sort(function(a, b) {
    return a.duration - b.duration || a.title.localeCompare(b.title);
  });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let movies = arr.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return movies.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const sortedArr = arr
    .sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })
    .map(function(name) {
      return name.title;
    });
  if (sortedArr.length >= 20) {
    return sortedArr.slice(0, 20);
  } else {
    return sortedArr.slice(0, sortedArr.length);
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  
  const newArr = movies.map(function(minutes) {
    minutes.duration = splice(minutes.duration);
    return minutes;
  });
  function splice(stri) {
    let time = 0;
    let arr = [];
    if (stri.includes(" ")) {
      arr = stri.split(" ");
    } else {
      arr.push(stri);
    }

    if (arr[0].includes("h")) {
      time += parseInt(arr[0][0]) * 60;
    }

    if (arr[0].includes("min") && arr[0].length === 4) {
      time += parseInt(arr[0][0]);
    }

    if (arr[0].includes("min") && arr[0].length > 4) {
      time += parseInt(arr[0][0] * 10) + parseInt(arr[0][1]);
    }

    if (arr[1] && arr[1].includes("h")) {
      time += parseInt(arr[1][0]) * 60;
    }

    if (arr[1] && arr[1].includes("min") && arr[1].length === 4) {
      time += parseInt(arr[1][0]);
    }

    if (arr[1] && arr[1].includes("min") && arr[1].length > 4) {
      time += parseInt(arr[1][0] * 10) + parseInt(arr[1][1]);
    }
    return time;
  }
  return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average