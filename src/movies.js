// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(films) {
  const test = films.map(eachDirector => eachDirector.director);
  return test;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(films) {
  let num = 0;
  films.filter(eachFilm => num += (eachFilm.director === 'Steven Spielberg' && eachFilm.genre.includes('Drama')));
  return num;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(films) {
  if (films.length === 0) {
    return 0;
  }
  else {
    const avg = films.reduce((acc, eachFilm) => acc + (eachFilm.score || 0), 0);
    return Number((avg / films.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(films) {
  const drama = films.filter(eachFilm => eachFilm.genre.includes('Drama'));
  if (drama.length === 0) {
    return 0;
  }
  const avg = drama.reduce((acc, eachFilm) => acc + eachFilm.score, 0);
  return Number((avg / drama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films) {
  const copy = JSON.parse(JSON.stringify(films));

  copy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    return a.year - b.year;
  });

  return copy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {
  const copy = JSON.parse(JSON.stringify(films));
  copy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
  });
  const titlesOnly = copy.map(eachTitle => eachTitle.title);
  const onlyTwenty = titlesOnly.slice(0, 20);

  return onlyTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(films) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(films) { }



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
