const movies = require('../src/data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirectors = arr.map((movie) => movie.director);
  const uniqueDirector = allDirectors.filter(
    (director, index) => allDirectors.indexOf(director) === index
  );

  return uniqueDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const directorAndGenre = arr.map((movie) => {
    return (newArr = {
      director: movie.director,
      genre: movie.genre
    });
  });

  const selectedDirectorAndGenre = directorAndGenre.filter(
    (item) =>
      item.director === 'Steven Spielberg' &&
      item.genre.includes('Drama') === true
  );
  return selectedDirectorAndGenre.length;
}

// This to me is a better solution (passing director and genre as arguments) but it does not pass the tests :(
function howManyMoviesMine(arr, chosenDirector, chosenGenre) {
  const directorAndGenre = arr.map((movie) => {
    return (newArr = {
      director: movie.director,
      genre: movie.genre
    });
  });
  const selectedDirectorAndGenre = directorAndGenre.filter(
    (item) =>
      item.director === chosenDirector &&
      item.genre.includes(chosenGenre) === true
  );
  return selectedDirectorAndGenre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length > 0) {
    const hasScore = arr.filter((movie) => typeof movie.score == 'number');
    const allScores = hasScore.map((movie) => movie.score);
    const sumScores = allScores.reduce((sum, score) => sum + score);
    return parseFloat((sumScores / arr.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length > 0) {
    const isDrama = arr.filter((movie) => movie.genre.includes('Drama'));
    if (isDrama.length === 0) {
      return 0;
    } else {
      const hasScore = isDrama.filter(
        (movie) => typeof movie.score == 'number'
      );
      const allScores = hasScore.map((movie) => movie.score);
      const sumScores = allScores.reduce((sum, score) => sum + score, 0);
      return parseFloat((sumScores / isDrama.length).toFixed(2));
    }
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const orderMovies = arr.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      return 0;
    }
  });

  const alphabetical = orderMovies.sort((movie1Sorted, movie2Sorted) => {
    if (movie1Sorted.year === movie2Sorted.year) {
      if (movie1Sorted.title.localeCompare(movie2Sorted.title) > 0) {
        return 1;
      } else if (movie1Sorted.title.localeCompare(movie2Sorted.title) < 0) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return alphabetical.map((theYear) => theYear);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const movieTitles = arr.map((movie) => movie.title);
  const alphabetical = movieTitles.sort((movie1, movie2) => {
    if (movie1.localeCompare(movie2) > 0) {
      return 1;
    } else if (movie1.localeCompare(movie2) < 0) {
      return -1;
    } else {
      return 0;
    }
  });

  return alphabetical.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const movieDuration = arr.map((movie) => {
    return (newArr = {
      title: movie.title,
      duration:
        movie.duration.substring(0, 1) * 60 +
        (movie.duration.length > 3
          ? parseInt(movie.duration.substring(3, 5))
          : 0)
    });
  });

  return movieDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length == 0) {
    return null;
  } else {
  }
}

console.log(bestYearAvg(movies));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
