// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return moviesArray.length ? Math.round((moviesArray.reduce((accumulator, currentMovie) => accumulator + (currentMovie.score ? currentMovie.score : 0), 0) / moviesArray.length) * 100) / 100 : 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovieArr = moviesArray.filter(movie => movie.genre.includes("Drama"));
  return dramaMovieArr.length ? Math.round(dramaMovieArr.reduce((accumulator, currentMovie) => accumulator + currentMovie.score, 0) / dramaMovieArr.length * 100) / 100 : 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.toSorted((firstMovie, secondMovie) => {
    if (firstMovie.year < secondMovie.year)
      return -1;
    else if (firstMovie.year > secondMovie.year)
      return 1;
    else {
      if (firstMovie.title < secondMovie.title)
        return -1;
      else if (firstMovie.title > secondMovie.title)
        return 1;
      else
        return 0
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabeticallyOrderdArr = moviesArray.toSorted((firstMovie, secondMovie) => {
    if (firstMovie.title < secondMovie.title)
      return -1
    else if (firstMovie.title > secondMovie.title)
      return 1
    else 0
  });
  return alphabeticallyOrderdArr.map(movie => movie.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movieArrayCopy = JSON.parse(JSON.stringify(moviesArray));
  return movieArrayCopy.map(movie => {
    const durationArray = movie.duration.split(" ");
    movie.duration = Number(durationArray[0].slice(0, durationArray[0].length - 1)) * 60 + (durationArray[1] ? Number(durationArray[1].slice(0, durationArray[1].length - 3)) : 0);
    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;
  console.log(moviesArray)
  const yearData = moviesArray.reduce((data, currentMovie) => {
    data[currentMovie.year] = data[currentMovie.year] || { totalScore: 0, yearCount: 0 };
    data[currentMovie.year].totalScore += currentMovie.score;
    data[currentMovie.year].yearCount += 1;
    return data;
  }, {});

  const bestYearData = Object.keys(yearData).reduce((bestData, currentYear) => {
    const avgScore = yearData[currentYear].totalScore / yearData[currentYear].yearCount;
    if (avgScore > bestData.bestScore) {
      bestData.bestScore = avgScore;
      bestData.bestYear = currentYear;
    } else if (avgScore === bestData.bestScore && currentYear < bestData.bestYear) {
      bestData.bestYear = currentYear;
    }
    return bestData;
  }, { bestYear: null, bestScore: Number.MIN_SAFE_INTEGER });
  return `The best year was ${bestYearData.bestYear} with an average score of ${bestYearData.bestScore}`;
}
