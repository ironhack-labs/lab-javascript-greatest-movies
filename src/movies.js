const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayFilms) {
  return arrayFilms.map((film) => film.director);
}

//Iteration 1.1 - Clean the array of multiple directors
function cleanMultipleDirectors(arrayFilms) {
  let directors = [];
  for (let i in arrayFilms) {
    directors.includes(arrayFilms[i].director)
      ? null
      : directors.push(arrayFilms[i].director);
  }
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayFilms) {
  return arrayFilms.filter(
    (film) =>
      film.genre.some((e) => /[D,d]rama/.test(e)) &&
      /[S,s]teven *[S,s]pielberg/.test(film.director)
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayFilms) {
  return arrayFilms.length === 0
    ? 0
    : +(
        arrayFilms.reduce(
          (totalScore, film) => (totalScore += !film.score ? 0 : film.score),
          0
        ) / arrayFilms.length
      ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayFilms) {
  let dramaMovies =
    arrayFilms.filter((film) =>
      film.genre.some((genre) => /[D,d]rama/.test(genre))
    ) || [];
  if (dramaMovies.length === 0) {
    return 0;
  }
  return +(
    dramaMovies.reduce(
      (totalScore, film) => (totalScore += film.score ? film.score : 0),
      0
    ) / dramaMovies.length
  ).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayFilms) {
  let newArrayFilms = JSON.parse(JSON.stringify(arrayFilms));
  newArrayFilms.sort((firstFilm, secondFilm) => {
    if (firstFilm.year === secondFilm.year) {
      if (firstFilm.title > secondFilm.title) {
        return 1;
      } else if (firstFilm.title < secondFilm.title) {
        return -1;
      }
      return 0;
    }
    return firstFilm.year - secondFilm.year;
  });
  return newArrayFilms;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayFilms) {
  let newArrayFilms = JSON.parse(JSON.stringify(arrayFilms));
  newArrayFilms.sort((firstFilm, secondFilm) => {
    if (firstFilm.title > secondFilm.title) {
      return 1;
    } else if (firstFilm.title < secondFilm.title) {
      return -1;
    }
    return 0;
  });
  let titlesAlphabetically = [];
  for (let i in newArrayFilms) {
    if (i < 20) {
      titlesAlphabetically.push(newArrayFilms[i].title);
    }
  }
  return titlesAlphabetically;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayFilms) {
  return arrayFilms.map((film) => {
    let hours = +film.duration.split(/[H,h]/)[0] || 0;
    let minutes = +film.duration.slice(-5, -3);
    let newDuration = hours * 60 + minutes;
    return { ...film, duration: newDuration };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrayFilms) {
  if (arrayFilms.length === 0) {
    return null;
  }
  let yearOrdered = orderByYear(arrayFilms);
  let yearScore = yearOrdered[0].score;
  let highScore = yearOrdered.length === 1 ? yearScore : 0;
  let yearLength = 1;
  let highScoreYear = yearOrdered[0].year;
  for (let i = 1; i < yearOrdered.length; i++) {
    if (yearOrdered[i].year !== yearOrdered[i - 1].year) {
      yearScore /= yearLength;
      if (yearScore > highScore) {
        highScore = yearScore;
        highScoreYear = yearOrdered[i - 1].year;
      }
      yearScore = 0;
      yearLength = 0;
    }
    yearScore += yearOrdered[i].score ? yearOrdered[i].score : 0;
    yearLength++;
  }
  return `The best year was ${highScoreYear} with an average score of ${highScore}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    cleanMultipleDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
