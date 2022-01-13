// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArray) {
  let directorArray = movieArray.map((movie) => {
    return movie.director;
  });
  return directorArray;
}
// ^^ can turn array to set and back to array to remove duplicates
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArray) {
  let spielbergArray = movieArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArray) {
  if (movieArray.length) {
    let totalScores = movieArray.reduce((prevValue, movie) => {
      if (movie.hasOwnProperty('score') && movie.score) {
        return movie.score + prevValue;
      } else {
        return prevValue;
      }
    }, 0);
    return Number((totalScores / movieArray.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArray) {
  let dramaArray = movieArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  return scoresAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArray) {
  let sortedArray = [...movieArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  let titleArray = [];
  for (movie of movieArray) {
    titleArray.push(movie.title);
  }

  titleArray.sort();
  let twentyArray =
    titleArray.length <= 20 ? titleArray : titleArray.splice(0, 20);
  return twentyArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArray) {
  let copyArray = JSON.parse(JSON.stringify(movieArray));
  copyArray.forEach((movie, index) => {
    let results = String(movie.duration).match(/\d+/g);

    if (results.length === 1) {
      copyArray[index].duration = Number(results[0]) * 60;
    } else {
      copyArray[index].duration = Number(results[0]) * 60 + Number(results[1]);
    }
  });

  return copyArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movieArray) {
  if (movieArray.length > 0) {
    let yearScoreObj = {};
    movieArray.forEach((movie) => {
      if (!yearScoreObj.hasOwnProperty(movie.year)) {
        yearScoreObj[movie.year] = [];
        yearScoreObj[movie.year].push(movie.score);
      } else {
        yearScoreObj[movie.year].push(movie.score);
      }
    });
    let highestAvg = 0;
    let yearOfHighestAvg = 0;
    for (key in yearScoreObj) {
      let yearAvg =
        yearScoreObj[key].reduce((a, b) => a + b) / yearScoreObj[key].length;
      if (yearAvg > highestAvg) {
        highestAvg = yearAvg;
        yearOfHighestAvg = key;
      }
    }
    return `The best year was ${yearOfHighestAvg} with an average score of ${highestAvg}`;
  } else {
    return null;
  }
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
