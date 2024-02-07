// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const extracDirectors = moviesArray.map((movie) => movie.director);
  const duplicatedDirectors = extracDirectors.filter(
    (director, index, newDirectorsArray) => {
      return newDirectorsArray.indexOf(director) === index;
    }
  );
  return duplicatedDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const uniqueDirector = moviesArray.filter((movie) => {
    return (movie.director =
      'Steven Spielberg' && movie.genre.includes('Drama'));
  });
  return uniqueDirector;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const extractedScores = moviesArray.map((movie) => movie.score);
  const sumOfScores = extractedScores.reduce((accumulator, currentScore) => {
    return accumulator + currentScore;
  }, 0);
  const averageScore = sumOfScores / extractedScores.lenght;
  const roundedScore = Math.round(averageScore * 100) / 100;
  return roundedScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );
  const dramaMovieScore = dramaMovies.reduce((accumulator, currentScore) => {
    return accumulator + currentScore;
  }, 0);
  const dramaMoviesAverage = dramaMovieScore / dramaMovies.length;
  return dramaMoviesAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const ascendingMovieYear = moviesArray
    .slice()
    .sort((first, second) => first.year - second.year);
  return ascendingMovieYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedAlphabeticMovies = moviesArray
    .slice()
    .sort((first, second) => first.title.localCompare(second.title));
  const movieTitles = sortedAlphabeticMovies.map((movie) => movie.title);
  const firstTwentyTitles = movieTitles.slice(0, 20);
  return firstTwentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map((movie) => {
    const [hours, minutes] = movie.duration
      .split('h')
      .map((part) => parseInt(part));
    const totalMinutes = hours * 60 + (minutes || 0);
    return {
      ...movie,
      duration: totalMinutes,
    };
  });

  return updatedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearlyScoreAverage(moviesArray) {
  // Create an object to store the total scores and counts for each year
  const yearlyScores = {};

  // Iterate through each movie
  moviesArray.forEach((movie) => {
    const year = movie.year;
    const score = movie.score;

    // Add the score to the total score for the year
    if (!yearlyScores[year]) {
      yearlyScores[year] = { totalScore: 0, count: 0 };
    }
    yearlyScores[year].totalScore += score;
    yearlyScores[year].count++;
  });

  // Calculate the average score for each year
  const yearlyAverages = {};
  for (const year in yearlyScores) {
    yearlyAverages[year] =
      yearlyScores[year].totalScore / yearlyScores[year].count;
  }

  // Find the year with the highest average score
  let bestYear = null;
  let highestAverage = -Infinity;
  for (const year in yearlyAverages) {
    if (yearlyAverages[year] > highestAverage) {
      bestYear = year;
      highestAverage = yearlyAverages[year];
    }
  }

  return { year: bestYear, averageScore: highestAverage };
}

// Example usage:
const bestYearAndScore = bestYearlyScoreAverage(movies);
console.log(bestYearAndScore);
