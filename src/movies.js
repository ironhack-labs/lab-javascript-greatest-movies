// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map((movie) => {
    return movie.director;
  });
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function howManyMovies(array) {
  let spielbergMovie = array.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") != -1
    );
  });
  return spielbergMovie.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length !== 0) {
    let total = array.reduce((acc, movie) => {
      if (movie.rate != "" && movie.rate != undefined) {
        return acc + movie.rate;
      } else {
        return acc;
      }
    }, 0);
    total = total / array.length;
    return Number(total.toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaMovies = array.filter((movie) => {
    return (
      movie.rate != "" &&
      movie.rate != undefined &&
      movie.genre.indexOf("Drama") != -1
    );
  });

  if (dramaMovies.length !== 0) {
    let total = dramaMovies.reduce((acc, movie) => {
      if (dramaMovies.length > 0) {
        return acc + movie.rate;
      } else {
        return acc;
      }
    }, 0);
    total = total / dramaMovies.length;
    return Number(total.toFixed(2));
  } else {
    return 0;
  }
}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let newMovies = JSON.parse(JSON.stringify(arr));

  newMovies.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return newMovies;
}

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let newMovies = JSON.parse(JSON.stringify(arr));

  let movieTitles = newMovies
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((movie) => {
      return movie.title;
    });

  if (movieTitles.length > 21) {
    movieTitles = movieTitles.splice(0, 20);
    return movieTitles;
  } else {
    return movieTitles;
  }
}

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let newMovies = array.map((movie) => {
    if (
      movie.duration.indexOf("h") !== -1 &&
      movie.duration.indexOf("min") === -1
    ) {
      let hour = Number(movie.duration[0] * 60);
      movie.duration = hour;
      return movie;
    } else if (
      movie.duration.indexOf("h") !== -1 &&
      movie.duration.indexOf("min") !== -1
    ) {
      let hour = Number(movie.duration[0] * 60);
      let toArr = movie.duration.split(" ");
      let toMin = toArr[1].split("min");
      let min = Number(toMin[0]);

      movie.duration = hour + min;
      return movie;
    } else if (
      movie.duration.indexOf("h") === -1 &&
      movie.duration.indexOf("min") !== -1
    ) {
      let toMin = movie.duration.split("min");
      let min = Number(toMin[0]);

      movie.duration = min;
      return movie;
    }
  });
  return newMovies;
}

// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
