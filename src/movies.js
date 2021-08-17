// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const arrDirectors = movies.map(eachDirector => {
    const onlyDirectors = (eachDirector.director)
    return onlyDirectors;
  })

  return arrDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  const isSpielberg = movies.filter(eachSpielberg => eachSpielberg.director == 'Steven Spielberg' && eachSpielberg.genre.includes('Drama'))

  return isSpielberg.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

  if (movies.length <= 0) return 0;

  const sumAverage = movies.reduce((acc, eachAverage) => {
    if (eachAverage.score)
      return acc = acc + eachAverage.score
    else return acc
  }, 0) // el 0 da un primer valor al acc para que no devuelva un NaN

  let totalAverage = sumAverage / movies.length;

  totalAverage = totalAverage.toFixed(2);

  return Number(totalAverage);  // transforma un string en number

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const selectDrama = movies.filter(eachselecDrama => eachselecDrama.genre.includes('Drama'))

  if (selectDrama.length === 0) return 0;

  const sumdramaMovies = selectDrama.reduce((acc, eachDramaMovies) => {
    if (eachDramaMovies.score)
      return acc = acc + eachDramaMovies.score
    else return acc
  }, 0)

  let totaldramaMovies = sumdramaMovies / selectDrama.length;

  totaldramaMovies = totaldramaMovies.toFixed(2);

  return Number(totaldramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderYear = movies.slice(0);

  const orderedYear = orderYear.sort(function (a, b) {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return orderedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const newAlphaArr = movies.slice(0);
  const orderedAlphaArr = newAlphaArr.sort((a, b) => {
    const orderTitle = a.title.localeCompare(b.title);
    return orderTitle;
  });

  const firstTwenty = orderedAlphaArr.slice(0, 20);
  const bestFilms = firstTwenty.map((eachAlpha) => {
    return eachAlpha.title;
  });

  return bestFilms;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
