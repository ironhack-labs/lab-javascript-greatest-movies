// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let mappedDirectors = movies.map((singleMovie) => {
    return singleMovie.director;
  });
  return mappedDirectors;
};

function getUnifiedDirectors(directors) {
  let unifiedDirectors = [];
  let unifiedList = directors.forEach((singleDirector) => {
    if (!unifiedDirectors.includes(singleDirector)) {
      unifiedDirectors.push(singleDirector);
    }
  });
  return unifiedDirectors;
};
// let unifiedDirectors = getUnifiedDirectors(getAllDirectors(movies))
// console.log(unifiedDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let stevenMovies = movies.filter((singleMovie) => {
    return singleMovie.director === 'Steven Spielberg' && singleMovie.genre.includes('Drama');
  });
  return stevenMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  } else {
    let totalScore = movies.reduce((sum, singleMovie) => {
      if (singleMovie.score) {
        return sum += singleMovie.score;
      } else {
        return sum;
      }
    }, 0);
    return Math.round((totalScore / movies.length) * 100) / 100;
  }
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((singleMovie) => {
    return singleMovie.genre.includes('Drama');
  });
  
  let averageScore = scoresAverage(dramaMovies);
  return averageScore;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clonedMovies = JSON.parse(JSON.stringify(movies));
  let orderedByDate = clonedMovies.sort((first, second) => {
    if (first.year > second.year) {
      return 1;
    } else if (first.year < second.year) {
      return -1;
    } else {
      if(first.title < second.title) {
        return -1;
      } else if (first.title > second.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return orderedByDate;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let clonedMovies = JSON.parse(JSON.stringify(movies));
  let orderedByName = clonedMovies.sort((first, second) => {
    if (first.title > second.title) {
      return 1;
    } else if (first.title < second.title) {
      return -1;
    } else {
      return 0;
    }
  });
  
  let namesOfOrdered = orderedByName.map((singleMovie) => {
    return singleMovie.title;
  });

  let firstTwentyOfNames = namesOfOrdered.splice(0, 20);

  return firstTwentyOfNames;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let clonedMovies = JSON.parse(JSON.stringify(movies));
  let newList = [];
  let splitDuration = clonedMovies.forEach((singleMovie) => {
    singleMovie.duration = singleMovie.duration.split(' ');
    singleMovie.duration[0] = singleMovie.duration[0] ? parseInt(singleMovie.duration[0]) * 60 : 0;
    singleMovie.duration[1] = singleMovie.duration[1] ? parseInt(singleMovie.duration[1]) : 0;
    singleMovie.duration = singleMovie.duration[0] + singleMovie.duration[1];
    newList.push(singleMovie);
  });
  return newList;
};

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  let total = 0;
  let avg = 0;
  let sameYear = [];
  if (!movies.length) {
    return null;
  } else {
    
  }
};



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
