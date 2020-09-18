/*  Iteration 1: All directors? - Get the array of all directors.  */
/*  Bonus: It seems some of the directors had directed multiple movies,
    so they will pop up multiple minutess in the array of directors.
    How could you "clean" a bit this array and make it unified (without duplicates)? */
const getAllDirectors = (movies) => {
  return movies.map((movie) => movie.director);
};

/*  Iteration 2: How many drama movies did Steven Spielberg direct?  */
const howManyMovies = (movies) => {
  return movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
};

/*  Iteration 3: All rates average - Get the average of all rates with 2 decimals.  */
const ratesAverage = (movies) => {
  const avgRating = movies.reduce((acc, movie, _, src) => {
    return acc + (movie.rate || 0) / src.length;
  }, 0);
  return Math.round(100 * avgRating) / 100;
};

/*  Iteration 4: Drama movies - Get the average of Drama Movies.  */
const dramaMoviesRate = (movies) => {
  const avgDramaRating = movies
    .filter((movie) => {
      return movie.genre.includes("Drama");
    })
    .reduce((acc, movie, idx, src) => {
      return acc + movie.rate / src.length;
    }, 0);
  return Math.round(100 * avgDramaRating) / 100;
};

/*  Iteration 5: Order by year, ascending  */
const orderByYear = (movies) => {
  const orderedMovies = JSON.parse(JSON.stringify(movies));

  orderedMovies.sort((movie_a, movie_b) => {
    if (movie_a.year > movie_b.year) {
      return 1;
    } else if (movie_a.year < movie_b.year) {
      return -1;
    } else {
      if (movie_a.title > movie_b.title) {
        return 1;
      } else if (movie_a.title < movie_b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return orderedMovies;
};

/*  Iteration 6: Alphabetic Order - Order by title and print the first 20 titles.  */
const orderAlphabetically = (movies) => {
  const newMovies = JSON.parse(JSON.stringify(movies));

  const orderedTitles = newMovies
    .map((movies) => {
      return movies.title;
    })
    .sort();

  if (orderedTitles.length > 21) {
    return orderedTitles.splice(0, 20);
  } else {
    return orderedTitles;
  }
};

/*  BONUS - Iteration 7: Turn duration of the movies from hours to minutes.  */
const turnHoursToMinutes = (movies) => {
  const minutedMovies = JSON.parse(JSON.stringify(movies));

  minutedMovies.forEach((movie) => {
    if (!movie.duration.includes("min")) {
      movie.duration = Number(movie.duration.split("h")[0]) * 60;

    } else if (!movie.duration.includes("h")) {
      movie.duration = Number(movie.duration.split("min")[0]);

    } else {
      const minutes = movie.duration.split(" ");
      minutes[0] = Number(minutes[0].split("h")[0]) * 60;
      minutes[1] = Number(minutes[1].split("min")[0]);
      movie.duration = minutes[0] + minutes[1];
    }
  });
  return minutedMovies;
};

/*  BONUS - Iteration 8: Best yearly rate average.  */
const bestYearAvg = (movies) => {
  if (!movies.length) {
    return null;
  }

  const yearAndRating = movies
    .map((movie) => {
      return { year: movie.year, rate: movie.rate, yearTotal: 1 };
    })
    .sort((movie_a, movie_b) => {
      if (movie_a.year > movie_b.year) {
        return 1;
      } else if (movie_a.year < movie_b.year) {
        return -1;
      } else {
        return 0;
      }
    });
};
