// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) =>
  moviesArray.map((movie) => movie.director);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
  let dramaMovies = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return movie;
    }
  });
  return dramaMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const scoresAverage = (moviesArray) => {
  if (moviesArray.length <= 0) {
    return 0;
  }
  return Number(
    (
      moviesArray
        .filter((a) => a.score)
        .map((a) => a.score)
        .reduce((a, c) => (a += c)) / moviesArray.length
    ).toFixed(2)
  );
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length <= 0) {
    return 0;
  }

  let dramaMovies = moviesArray.filter(
    (a) => a.score && a.genre.includes("Drama")
  );

  if (dramaMovies.length <= 0) {
    return 0;
  }

  return Number(
    (
      dramaMovies.map((a) => a.score).reduce((a, c) => (a += c)) /
      dramaMovies.length
    ).toFixed(2)
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray
    .map((a) => a)
    .sort((a, b) => {
      let value = a.year - b.year;
      if (value === 0) {
        value = a.title.localeCompare(b.title);
      }
      return value;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let first20 = moviesArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
  });
  return first20.slice(0, 20).map((a) => a.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArr = moviesArray.map((a) => {
    return { ...a };
  });
  newArr.forEach((e) => {
    let strDuration = e.duration.split(" ");
    let changeToNum = strDuration.map((a) => Number(a.replace(/[^0-9]/g, "")));
    if (changeToNum.length >= 2) {
      e.duration = changeToNum[0] * 60 + changeToNum[1];
    } else {
      e.duration = changeToNum[0] * 60;
    }
  });
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length <= 0) {
    return null;
  }
  let total = 0;
  let bestYear = 0;

  moviesArray.forEach((e) => {
    let year = e.year;
    let filteredArray = moviesArray.filter((e) => {
      return e.year === year;
    });
    let averageNumber = Number(
      (
        filteredArray.map((a) => a.score).reduce((a, c) => (a += c)) /
        filteredArray.length
      ).toFixed(2)
    );
    if (averageNumber >= total && year < bestYear) {
      total = averageNumber;
      bestYear = year;
    } else if (averageNumber > total) {
      total = averageNumber;
      bestYear = year;
    }
    console.log(averageNumber);
  });
  console.log(total, bestYear);
  return `The best year was ${bestYear} with an average score of ${total}`;
}
