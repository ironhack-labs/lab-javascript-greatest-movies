/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  if (movies.length > 0) {
    const movieDurations = movies.map(movie => {
      const newMovie = {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: movie.duration,
        genre: movie.genre,
        rate: movie.rate
        // or : ...movie
      };
      let modifiedDuration = newMovie.duration.replace(/min/gi, "");
      let splitDuration = modifiedDuration.split("h");
      if (splitDuration.length === 1) {
        splitDuration = ["0", splitDuration[0]];
      }
      newMovie.duration =
        Number(splitDuration[0]) * 60 + Number(splitDuration[1]);
      // console.log(splitDuration);
      return newMovie;
    });
    return movieDurations;
  }
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const ratings = movies.map(movie => {
    if (movie.rate === "") {
      return 0;
    } else {
      return parseFloat(movie.rate);
    }
  });
  const sumRatings = ratings.reduce((acc, curValue) => acc + curValue, 0);
  const averageRatings = sumRatings / ratings.length;
  return Math.round(averageRatings * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(
    movie => movie.genre.indexOf("Drama") !== -1
  );
  if (dramaMovies.length > 0) {
    const averageRatings = ratesAverage(dramaMovies);
    return averageRatings;
  }
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  if (movies.length > 0) {
    const growingOrder = movies.sort((a, b) => a.duration - b.duration);
    const alphaOrder = growingOrder.sort((a, b) => {
      if (a.duration === b.duration) {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        }
        return 0;
      }
    });
    console.log(alphaOrder);
    return alphaOrder;
  }
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length > 0) {
    const directorSpielberg = movies.filter(
      movie => movie.director === "Steven Spielberg"
    );
    const dramaSpielberg = directorSpielberg.filter(
      movie => movie.genre.indexOf("Drama") !== -1
    );
    if (dramaSpielberg.length === 0) {
      return "Steven Spielberg directed 0 drama movies!";
    } else {
      return `Steven Spielberg directed ${dramaSpielberg.length} drama movies!`;
    }
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  if (movies.length > 0) {
    const listOfTitle = movies.map(movie => movie.title);
    const alphabeticOrder = listOfTitle.sort(); //renvoie -1, 1 ou 0 à sort
    const bestMovies = alphabeticOrder.filter((movie, i) => i < 20);
    return bestMovies;
  }
  return movies;
}
//}
//}

// Best yearly rate average
