/*  Iteration 1: All directors? - Get the array of all directors.  */
/*  Bonus: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
    How could you "clean" a bit this array and make it unified (without duplicates)? */
const getAllDirectors = (movies) => {
  const directors = movies.map((movie) => {
    return movie.director;
  });
  return directors;
};

/*  Iteration 2: How many drama movies did Steven Spielberg direct?  */
const howManyMovies = (movies) => {
  const totalMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return totalMovies.length;
};

/*  Iteration 3: All rates average - Get the average of all rates with 2 decimals.  */
const ratesAverage = (movies) => {
  const avgRating = movies.reduce((acc, movie, idx, src) => {
    return acc + movie.rate / src.length;
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
  orderedMovies.sort((a, b) => {
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
  return orderedMovies;
};

/*  Iteration 6: Alphabetic Order - Order by title and print the first 20 titles.  */
const orderAlphabetically = (movies) => {
  const orderedMovies = JSON.parse(JSON.stringify(movies));
  const orderedTitles = orderedMovies
    .map((movies) => {
      return movies.title;
    })
    .sort();

  if (orderedTitles.length > 21) {
    return orderedTitles.splice(0, 20)
  } else {
    return orderedTitles;
  }
};

/*  BONUS - Iteration 7: Turn duration of the movies from hours to minutes.  */



/*  BONUS - Iteration 8: Best yearly rate average.  */
