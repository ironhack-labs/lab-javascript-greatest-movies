// const data = require("./data.js");

let moviesBis = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Steven Spielberg",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: "",
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 8,
  },
  {},
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (val) {
    return val.director;
  });
}
console.log(getAllDirectors(moviesBis));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergFilter = moviesArray.filter(
    (val) => val.director === "Steven Spielberg" && val.genre.includes("Drama")
  );
  console.log(spielbergFilter);
  return spielbergFilter.length;
}
console.log(howManyMovies(moviesBis));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  let getTheScores = moviesArray.map(function (val) {
    return val.score;
  });
  console.log(getTheScores);
  if (getTheScores.length === 0) return 0;
  const average =
    getTheScores.reduce((a, b) => {
      if (!b) {
        return a;
      }
      return a + b;
    }, 0) / moviesArray.length;
  console.log(average);
  let roundedScore = Math.round(average * 100) / 100;
  console.log(roundedScore);
  return roundedScore;
}

console.log(scoresAverage(moviesBis));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaFilter = moviesArray.filter((val) => val.genre.includes("Drama"));
  let getTheScoresDrama = dramaFilter.map(function (val) {
    return val.score;
  });
  if (getTheScoresDrama.length === 0) return 0;
  const average =
    getTheScoresDrama.reduce((a, b) => a + b, 0) / getTheScoresDrama.length;
  console.log(average);
  let roundedScore = Math.round(average * 100) / 100;
  console.log(roundedScore);
  return roundedScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let shadowMoviesArr = [...moviesArray];
  shadowMoviesArr.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
    return a.year - b.year;
  });
  return shadowMoviesArr;
}
console.log(orderByYear(moviesBis));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let shadowMoviesArr = [...moviesArray];
  let titlesMoviesArr = shadowMoviesArr.map(function (val) {
    return val.title;
  });
  console.log(titlesMoviesArr);
  titlesMoviesArr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
    return a - b;
  });
  return titlesMoviesArr.slice(0, 20);
}
console.log(orderAlphabetically(moviesBis));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesBis) {
  shadowMovieBis = [...moviesBis];
  let splitMinutesAndHours = shadowMovieBis.duration.split(" ");
  console.log(splitMinutesAndHours);
  let parsed = parseInt;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
