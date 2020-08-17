function getAllDirectors(arr) {
  return arr.map((movie) => {
    return movie.duration;
  });
}

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
  let newArray = moviesArr.slice();
  let result = newArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let result = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return result.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray) {
  let newArray = movieArray.slice();
  let findTitle = newArray.map(function (movie) {
    return movie.title;
  });

  return findTitle.sort().slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
  if (movieArray.length === 0) {
    return 0;
  }
  let sum = movieArray.reduce(function (acc, val) {
    if (val.rate) {
      return acc + val.rate;
    } else {
      return acc;
    }
  }, 0);

  let avarage = sum / movieArray.length;
  return Number(avarage.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let dramaFilter = moviesArray.filter(
    (e) => e.genre.includes("Drama") && e.rate !== 0
  );
  console.log("drara", dramaFilter);

  let result = dramaFilter.reduce((acc, val) => {
    return val.rate + acc;
  }, 0);

  let avg = result / dramaFilter.length;

  return Math.round(avg * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieArray) {
  let newArr = movieArray.slice();

  let movieDuration = newArr.filter((movie) => {
    return movie.duration;
  });
  return movieDuration;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
