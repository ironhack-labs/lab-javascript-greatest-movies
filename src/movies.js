// The `movies` array from the file `src/data.js`.

const movies = require('./data');

//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const mappedArr = movies.map((eachMovie) => {
    return eachMovie.director;
  });
  return mappedArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  //iterar y buscar todas las pelis de spilbertg
  const stevenMovies = movies.filter((eachMovie) => {
    return (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    );
  });
  return stevenMovies.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // sacar todos los scores

  if (movies.length === 0) {
    return 0;
  }

  const scoresArr = movies.reduce((acc, eachScore) => {
    return acc + eachScore.score;
  }, 0);

  // hacer la media

  const total = scoresArr / movies.length;

  return parseFloat(total.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMv = movies.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama');
  });

  return scoresAverage(dramaMv);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copy = JSON.parse(JSON.stringify(movies));

  let print = copy.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year) {

      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      0;
    }
    0;
  });
  //   .sort(function (a, b) {
  //   if (a.title > b.title) {
  //     return 1;
  //   }
  //   if (a.title < b.title) {
  //     return -1;
  //   }
  //   0;
  // });

  //console.log(print);
  return print;
}

//console.log (sortYears)

// return Arr

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabeticCopy = JSON.parse(JSON.stringify(movies));

  let alphabeticOrder = alphabeticCopy.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    0;
  });

  const titles = alphabeticOrder.map((eachMovie) => {
    return eachMovie.title;
  });

  return titles.slice(0, 20);

  console.log(titles);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const hoursArr = movies.map((eachMovie) => {
    return movies.duration;
  });

  hoursArr.forEach(hour => {

    const hourInt = hour.charAt(0)
    
    
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

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
