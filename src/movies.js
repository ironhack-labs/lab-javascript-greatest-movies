const movies = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getDirectorForMovie(movie) {
  // Takes movie object and returns director
  // {
  //   title: 'The Shawshank Redemption',
  //   year: 1994,
  //   director: 'Frank Darabont',
  //   duration: '2h 22min',
  //   genre: ['Crime', 'Drama'],
  //   score: 9.3
  // },
  // ->
  // 'Frank Darabont'
  return movie.director;
}
function getAllDirectors(movies) {
  let directors = movies.map(getDirectorForMovie);
  let result = [];
  for (let index = 0; index < directors.length; index++) {
    const director = directors[index];
    if (result.indexOf(director) === -1) {
      result.push(director);
    }
  }
  // beep bop boop
  return result;
}
// console.log(`We found ${movies.length} movies!`)
// console.log(getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function isDrama(movie) {
  return movie.genre.indexOf('Drama') !== -1;
}
function directedBySteven(movie) {
  return movie.director === 'Steven Spielberg';
}
function howManyMovies(movies) {
  return movies.filter(isDrama).filter(directedBySteven).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const avg =
    movies.reduce(function (accum, movie) {
      if (movie.score !== undefined) {
        accum += movie.score;
      }
      return accum;
    }, 0) / movies.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return scoresAverage(movies.filter(isDrama));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return movies.slice().sort((x, y) => {
    if (x.year < y.year) {
      return -1;
    } else if (x.year > y.year) {
      return 1;
    } else {
      if (x.title < y.title) {
        return -1;
      } else if (x.title > y.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .slice()
    .sort((x, y) => {
      if (x.title < y.title) {
        return -1;
      } else if (x.title > y.title) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, 20)
    .map(function (movie) {
      return movie.title;
    });
}

const parseDur = new RegExp('(?<hour>[0-9]+)?(?:h)? ?(?<min>[0-9]+)?(?:min)?');

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.slice().map(function (movie) {
    movie = JSON.parse(JSON.stringify(movie))
    const duration = movie.duration;
    if (duration === undefined) {
      return movie;
    }
    let h = 0
    let m = 0
    if (String(duration).split(' ').length === 2) {
      [h, m] = duration.split(' ')
    } else {
      h = duration
    }
    if (h) {
      h = parseInt(String(h).replace('h', ''), 10)
    }
    if (m) {
      m = parseInt(String(m).replace('min', ''), 10)
    }
    movie.duration = (h * 60) + m
    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  const moviesByYear = movies.reduce(function (acc, movie) {
    if (acc[movie.year] === undefined) {
      acc[movie.year] = [];
    }
    acc[movie.year].push(movie);
    return acc;
  }, {});
  const avgByYear = Object.values(moviesByYear).map(function (movies) {
    return { year: movies[0].year, score: scoresAverage(movies) };
  });
  const bestYear = avgByYear
    .slice()
    .sort((x, y) => {
      if (x.score > y.score) {
        return -1;
      } else if (x.score < y.score) {
        return 1;
      } else {
        if (x.year < y.year) {
          return -1;
        } else if (x.year > y.year) {
          return 1;
        } else {
          return 0;
        }
      }
    })
    .slice(0, 1)[0];
  return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
}

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
