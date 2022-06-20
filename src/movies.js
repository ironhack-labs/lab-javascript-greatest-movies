// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
}
function getAllUniqueDirectors(directorArray) {
  directorArray.filter(
    (element, index) => directorArray.indexOf(element) === index
  );
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (element) =>
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let totalScore = moviesArray.reduce(
    ([accScore, accTotal], element) => {
      if (element.score === undefined) {
        return [accScore, accTotal + 1];
      } else {
        return [accScore + element.score, accTotal + 1];
      }
    },
    [0, 0]
  );
  return Number(((totalScore[0] * 1.0) / totalScore[1]).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let dramaMovies = moviesArray.filter((element) =>
    element.genre.includes('Drama')
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  let dramaScore = dramaMovies.reduce((acc, elem) => acc + elem.score, 0);
  return Number(((dramaScore * 1.0) / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = [...moviesArray];
  return moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesCopy = [...moviesArray];
  let sortedArray = moviesCopy.map((elem) => elem.title).sort();
  return sortedArray.filter((element, index) => index <= 19);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newarr = [...moviesArray];
  return newarr.map((elem) => {
    if (typeof elem.duration === 'string') {
      let hours = elem['duration'].slice(0, 1);
      let min = elem['duration'].slice(3, 5);
      elem.duration = Number(hours) * 60 + Number(min);
    }
    return elem;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  let yearList = moviesArray.map((elem) => elem.year);
  let uniqueYearlist = yearList.filter(
    (elem, index) => yearList.indexOf(elem) === index
  );
  let result = {};
  for (let elem of uniqueYearlist) {
    result[elem] = [];
  }
  console.log(result);
  moviesArray.forEach((elem) => {
    let year = elem.year;
    result[year].push(elem);
  });
  let averageResult = [];
  for (let key of Object.keys(result)) {
    averageResult.push([scoresAverage(result[key]), key]);
  }
  averageResult.sort((a, b) => {
    if (a[0] != b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  return `The best year was ${averageResult[0][1]} with an average score of ${averageResult[0][0]}`;
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
