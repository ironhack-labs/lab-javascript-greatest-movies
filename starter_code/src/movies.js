/* eslint no-restricted-globals: 'off' */

// Iteration 1

function orderByYear(arr) {
  let orderedByYear = arr.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return orderedByYear;
}

// Iteration 2

function howManyMovies(arr) {
  let spielbergMovies = arr.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return spielbergMovies.length;
}

// ;

// Iteration 3

function orderAlphabetically(arr) {
  let sortByTitle = arr
    .slice()
    .sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })
    .slice(0, 20)
    .map(function(movie) {
      return movie.title;
    });

  return sortByTitle;
}

// Iteration 4:

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let averageRating = arr.map(function(movie) {
    if (!movie.rate) {
      return 0;
    } else {
      return movie.rate;
    }
  });

  let sum = averageRating.reduce(function(accumulator, rating) {
    return accumulator + rating;
  }, 0);
  let overallAverage = sum / arr.length;

  return parseFloat(overallAverage.toFixed(2));
}

// Iteration 5:

function dramaMoviesRate(arr) {
  let dramaMoviesRated = arr.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });
  return ratesAverage(dramaMoviesRated);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  function minutes(string) {
    let minutesTemplate = string.split(" ");

    let time = 0;

    minutesTemplate.forEach(function(el) {
      console.log(el);
      if (el.includes("h")) {
        time += parseInt(el) * 60;
      }
      if (el.includes("m")) {
        time += parseInt(el);
      }
    });
    // console.log({ time });

    let durationMinutes = string.split(" ");
    let durationMinutesArr = [];

    for (let i = 0; i < durationMinutes.length; i++) {
      //   durationMinutes[i] = parseInt(durationMinutes[i]);
      durationMinutesArr.push(parseInt(durationMinutes[i]));
    }
    // // console.log(durationMinutes);
    // console.log(durationMinutesArr);
    //
    let newTime = durationMinutes[0] * 60 + durationMinutes[1];
    // let timeTest = durationMinutes

    return time;
  }

  let movieInMinutes = arr.map(function(movie) {
    return {
      ...movie,
      duration: minutes(movie.duration)
    };
  });
  return movieInMinutes;
}

//str.split""

// BONUS Iteration: Best yearly rate average - Best yearly rate average
