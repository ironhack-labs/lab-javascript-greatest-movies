let sample = [
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 8,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = moviesArray
    .filter((movie) => {
      return movie.score;
    })
    .map((movie) => {
      return movie.score;
    })
    .reduce((accumulator, current) => {
      return accumulator + current;
    });

  return Number((totalScore / moviesArray.length).toFixed(2));
}

console.log(scoresAverage(sample));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let totalScore = dramaMovies
    .filter((movie) => {
      return movie.score;
    })
    .map((movie) => {
      return movie.score;
    })
    .reduce((accumulator, current) => {
      return accumulator + current;
    });

  return Number((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [];
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return [];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  let years = {};

  moviesArray.forEach((movie) => {
    if (!years.hasOwnProperty(movie.year)) {
      years[movie.year] = [];
    }

    if (!movie.score || movie.score === "") {
      years[movie.year].push(0);
    } else {
      years[movie.year].push(movie.score);
    }
  });

  let topYear = "";

  let topAverage = 0;

  for (score in years) {
    let numberOfMovies = years[score].length;
    let averageYearScore = Number(
      (
        years[score].reduce((acc, curr) => {
          return acc + curr;
        }) / numberOfMovies
      ).toFixed(2)
    );

    if (averageYearScore > topAverage) {
      topYear = Number(score);
      topAverage = averageYearScore;
    }

    years[score] = averageYearScore;
  }

  return `The best year was ${topYear} with an average score of ${topAverage}`;
}
