// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((el) => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].genre.includes("Drama") &&
      moviesArray[i].director === "Steven Spielberg"
    ) {
      count++;
    }
  }

  return count;
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
function orderByYear(moviesArray) {
  const newArr = moviesArray
    .slice()
    .map((el) => el)
    .sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = moviesArray
    .map((el) => el.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((item) => {
    const durationString = item.duration;
    const [hours, minutes] = durationString.split("h ");

    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);

    return {
      ...item,
      duration: totalMinutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
