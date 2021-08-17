// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(movie => movie.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergDramaMovies = arr.filter(movie => {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      return true;
    }
    return false;
  });
  return spielbergDramaMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const scoresSum = arr.reduce((sum, film) => {
    if (typeof film.score === 'number') {
      return sum + film.score;
    }
    return sum;
  }, 0);
  let scoresAverage = scoresSum / arr.length;
  let scoresAverageTwoDecimals = parseFloat(scoresAverage.toFixed(2));
  return scoresAverageTwoDecimals;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const dramaMovies = arr.filter(movie => {
    if (movie.genre.includes('Drama')) {
      return true;
    }
    return false;
  });
  return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByTitle(film1, film2) {
  if (film1.title > film2.title) return 1;
  if (film1.title < film2.title) return -1;
  return 0;
}

function orderByYear(movies) {
  const films = movies.slice(0);
  const orderedMovies = films.sort((film1, film2) => {
    const year = film1.year - film2.year;
    if (year === 0) {
      return orderByTitle(film1, film2);
    }
    return year;
  });
  return orderedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const films = movies.slice(0);
  const filmsSorted = films.sort((film1, film2) => {
    return orderByTitle(film1, film2);
  });
  const twentyOrderedFilms = filmsSorted.slice(0, 20);
  const twentyOrderedTitles = twentyOrderedFilms.map(film => film.title);
  return twentyOrderedTitles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function hoursToMinutes(str) {
  return parseInt(str) * 60;
}

function turnHoursToMinutes(movies) {
  const moviesDurationMinutes = movies.map(movie => {

    let time = movie.duration.split(' ');
    let totalMinutes;
    let hours;
    let minutes;

    // If hours and minutes are specified
    if (time.length === 2) {
      hours = time[0].slice(0, time[0].length - 1);
      let hoursInMinutes = hoursToMinutes(hours);
      minutes = time[1].slice(0, time[1].length - 3);
      totalMinutes = hoursInMinutes + parseInt(minutes);

      // If only hours are specified
    } else if (time[0].indexOf('h') !== -1) {
      hours = time[0].slice(0, time[0].length - 1);
      totalMinutes = hoursToMinutes(hours);

      // If only minutes are specified
    } else {
      minutes = time[0].slice(0, time[0].length - 3);
      totalMinutes = parseInt(minutes);
    }

    movie.duration = totalMinutes;
    return movie;
  });
  return moviesDurationMinutes;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg {}



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
    bestYearAvg,
  };
}
