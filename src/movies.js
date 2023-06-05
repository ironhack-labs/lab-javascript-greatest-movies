// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const movieDirectors = moviesArray.map((movie) => movie.director);
  const directors = [...new Set(movieDirectors)];
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce(function (acc, val) {
    if (!val.score) return acc;
    return acc + val.score;
  }, 0);
  return totalScore / moviesArray.length, toFixed(2);
}*/

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const sum = movies.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  const average = sum / movies.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const sum = dramaMovies.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);

  const average = sum / dramaMovies.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  {
    const arrayCopy = [...moviesArray];
    return arrayCopy.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        const firstMovieTitle = a.title.toLowerCase();
        const secondMovieTitle = b.title.toLowerCase();
        if (firstMovieTitle > secondMovieTitle) {
          return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  {
    return moviesArray
      .map((movie) => movie.title)
      .sort((a, b) => {
        const firstMovieTitle = a.toLowerCase();
        const secondMovieTitle = b.toLowerCase();
        if (firstMovieTitle > secondMovieTitle) {
          return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
          return -1;
        } else {
          return 0;
        }
      })
      .slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map((movie) => {
    const duration = movie.duration.split(" ");

    let minutes = 0;

    for (let time of duration) {
      if (time.includes("h")) {
        minutes += parseInt(time) * 60;
      } else if (time.includes("min")) {
        minutes += parseInt(time);
      }
    }

    return {
      ...movie,
      duration: minutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }

  let years = {};

  movies.forEach((movie) => {
    if (years[movie.year]) {
      years[movie.year].sum += movie.score;
      years[movie.year].count += 1;
    } else {
      years[movie.year] = {
        sum: movie.score,
        count: 1,
      };
    }
  });

  let bestYear = null;
  let bestAverage = 0;

  for (let year in years) {
    const average = years[year].sum / years[year].count;

    if (average > bestAverage || (average === bestAverage && year < bestYear)) {
      bestYear = year;
      bestAverage = average;
    }
  }

  if (bestYear === null) {
    return null;
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(
    2
  )}`;
}
