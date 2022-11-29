// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let howMany = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].genre.includes("Drama") === true &&
      moviesArray[i].director === "Steven Spielberg"
    ) {
      howMany++;
    }
  }
  return howMany;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let averageScore = 0;
  const combinedScore = moviesArray.reduce(function (totalScore, currentValue) {
    if (currentValue.hasOwnProperty("score")) {
      totalScore += currentValue.score;
      averageScore = totalScore / moviesArray.length;
    }
    return totalScore;
  }, 0);
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let averageScore = 0;
  let howMany = 0;
  const combinedScore = moviesArray.reduce(function (totalScore, currentValue) {
    if (
      currentValue.genre.includes("Drama") &&
      currentValue.hasOwnProperty("score")
    ) {
      totalScore += currentValue.score;
      howMany++;
      averageScore = totalScore / howMany;
    }
    return totalScore;
  }, 0);
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedByYear = JSON.parse(JSON.stringify(moviesArray));

  orderedByYear.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const dupArray = JSON.parse(JSON.stringify(moviesArray));
  const titles = [];
  const finalArray = [];
  for (let i = 0; i < moviesArray.length; i++) {
    titles.push(dupArray[i].title);
  }
  const titlesSorted = titles.sort(function (a, b) {
    return a.localeCompare(b);
  });

  if (titlesSorted.length > 20) {
    return titlesSorted.splice(0, 20);
  } else {
    return titlesSorted;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const orderedByYear = JSON.parse(JSON.stringify(moviesArray));
  for (let i = 0; i < orderedByYear.length; i++) {
    const durationString = orderedByYear[i].duration;
    const hour = Number(durationString.slice(0, 1)) * 60;
    const indexOfm = durationString.indexOf("m");
    let minutes = 0;
    if (indexOfm > 0) {
      minutes = Number(durationString.slice(indexOfm - 2, indexOfm));
    }
    const durationMinutes = hour + minutes;
    orderedByYear[i].duration = durationMinutes;
  }
  return orderedByYear;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
