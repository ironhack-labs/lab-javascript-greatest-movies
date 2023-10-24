// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}
getAllDirectors(allDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const numOfMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return numOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scores = moviesArray
    .map((el) => el.score || 0)
    .reduce((acc, el, i, arr) => acc + el / arr.length, 0)
    .toFixed(2);
  return Number(scores);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (filteredMovies.length === 0) return 0;

  const totalScore = filteredMovies.reduce(
    (accumulator, movie) => accumulator + movie.score,
    0
  );
  const averageScore = totalScore / filteredMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = moviesArray
    .map((el) => el.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    if (!moviesArray.length) {
      return null;
    }

    const dictionary = {};

    moviesArray.forEach(function (movie) {
      if (!dictionary[movie.year]) {
        dictionary[movie.year] = [];
        dictionary[movie.year].push(movie);
      } else {
        dictionary[movie.year].push(movie);
      }
    });

    let highest = 0;
    let bestYear;

    for (const year in dictionary) {
      const currentYearAverage = scoresAverage(dictionary[year]);

      if (currentYearAverage > highest) {
        highest = currentYearAverage;
        bestYear = year;
      } else if (currentYearAverage === highest) {
        // Check which year is the lowest and save it to the `oldestYear`
        const oldestYear = year < bestYear ? year : bestYear;
        bestYear = oldestYear;
      }
    }

    return `The best year was ${bestYear} with an average score of ${highest}`;
  }
}
