// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return [...new Set(moviesArray.map((movie) => movie.director))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    return moviesArray.filter(
      (movie) =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    ).length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  else {
    return (
      ((
        moviesArray.reduce(function (acc, movie) {
          if (movie.score == undefined || movie.score == '') return acc;
          else return acc + movie.score;
        }, 0) / moviesArray.length
      ).toFixed(2) *
        100) /
      100
    );
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );

  if (moviesArray.length === 0 || dramaMovies.length === 0) return 0;
  else {
    return (
      ((
        dramaMovies.reduce(function (acc, movie) {
          if (movie.score == undefined || movie.score == '') return acc;
          else return acc + movie.score;
        }, 0) / dramaMovies.length
      ).toFixed(2) *
        100) /
      100
    );
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => (a.year > b.year ? 1 : -1));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .slice(0, 20)
    .map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (movie) {
    if (
      typeof movie.duration == 'string' &&
      movie.duration.split(' ').length > 1
    ) {
      const arrayTime = movie.duration.split(' ');
      const numberHours = arrayTime[0].slice(0, -1);
      const numberMinutes = arrayTime[1].slice(0, -3);
      movie.duration = parseInt(numberHours) * 60 + parseInt(numberMinutes);
    } else if (
      typeof movie.duration == 'string' &&
      movie.duration.split(' ').length < 2
    ) {
      const numberHours = movie.duration.slice(0, -1);
      movie.duration = parseInt(numberHours) * 60;
    }

    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // IN PROGRESS
}
