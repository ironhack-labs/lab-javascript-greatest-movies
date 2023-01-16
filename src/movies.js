// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let allDramas = [];
  moviesArray.forEach((movie) => {
    if (movie.genre.includes("Drama")) {
      allDramas.push(movie);
    }
  });

  const ofSpielberg = allDramas.filter(function (movie) {
    if (movie.director === "Steven Spielberg") {
      console.log(movie.title);
      return true;
    } else {
      return false;
    }
  });
  if (ofSpielberg.length === 2) {
    return 2;
  }
  return ofSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const average = moviesArray.reduce(function (acc, curr) {
    if (isNaN(curr.score)) {
      curr.score = 0;
    }
    return acc + curr.score / moviesArray.length;
  }, 0);
  const rounded = Math.round(average * 100 + Number.EPSILON) / 100;
  return rounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let allDramas = [];
  moviesArray.forEach((movie) => {
    if (movie.genre.includes("Drama")) {
      allDramas.push(movie);
    }
  });
  const averDramas = allDramas.reduce(function (acc, curr) {
    return acc + curr.score / allDramas.length;
  }, 0);
  const rounded = Math.round(averDramas * 100 + Number.EPSILON) / 100;
  return rounded;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // make a deep copy
  const orderedByYear = JSON.parse(JSON.stringify(moviesArray));
  orderedByYear.sort(function (firstMovie, secondMovie) {
    return (
      firstMovie.year - secondMovie.year ||
      firstMovie.title.localeCompare(secondMovie.title)
    );
  });
  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // make a deep copy
  const orderedAlphabet = JSON.parse(JSON.stringify(moviesArray));
  orderedAlphabet.sort(function (firstMovie, secondMovie) {
    return firstMovie.title.localeCompare(secondMovie.title);
  });
  const titlesAlphabet = [];
    orderedAlphabet.forEach(function (movie) {
      titlesAlphabet.push(movie.title);
    });
    return titlesAlphabet.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // make a deep copy
  const inMinutes = JSON.parse(JSON.stringify(moviesArray));
  inMinutes.forEach(function (movie) {
    // get duration as string and convert into a number
    let hours = Number(movie.duration.charAt(0));
    let minutes = Number(movie.duration.slice(3, 5).replace('m', ''));
    let durationInMinutes = hours * 60 + minutes;
    movie.duration = durationInMinutes;
  });
  return inMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
