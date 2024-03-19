// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return Array.from(new Set(moviesArray.map((movie) => movie.director)));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stephenSpielbergDramas = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return stephenSpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    const totalScore = moviesArray.reduce((acumulator, movie) => {
      if ("score" in movie && typeof movie.score === "number") {
        return acumulator + movie.score;
      } else {
        return acumulator;
      }
    }, 0);
    return Math.round((totalScore / moviesArray.length) * 100) / 100;
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length > 0) {
    const dramaMovies = moviesArray.filter((movie) =>
      movie.genre.includes("Drama")
    );
    let dramaTotalScore = 0;
    if (dramaMovies.length > 0) {
      dramaTotalScore = dramaMovies.reduce((acumulator, movie) => {
        return acumulator + movie.score;
      }, 0);
      return Math.round((dramaTotalScore / dramaMovies.length) * 100) / 100;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.toSorted((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const onlyTitles = moviesArray.map((movie) => movie.title);
  const twentyTitles = onlyTitles
    .toSorted((a, b) => {
      return a.localeCompare(b);
    })
    .slice(0, 20);
  return twentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArray = moviesArray.map((movie) => {
    const timeArray = movie.duration.split(" ");
    let hours = 0;
    let minutes = 0;
    if (timeArray.length === 2) {
      // If there are both hours and minutes
      hours = Number(timeArray[0].slice(0, timeArray[0].length - 1));
      minutes = Number(timeArray[1].slice(0, timeArray[1].length - 3));
    } else if (timeArray.length === 1) {
      // If there is only hours or minutes
      if (timeArray[0].includes("h")) {
        hours = Number(timeArray[0].slice(0, timeArray[0].length - 1));
      } else if (timeArray[0].includes("min")) {
        minutes = Number(timeArray[0].slice(0, timeArray[0].length - 3));
      }
    }
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: hours * 60 + minutes,
      genre: movie.genre,
      score: movie.score,
    };
  });
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length > 0) {
    // Group movies by year
    const moviesByYear = moviesArray.reduce((acc, movie) => {
      if (movie.year in acc) {
        acc[movie.year].push(movie);
      } else {
        acc[movie.year] = [movie];
      }
      return acc;
    }, {});

    console.log(moviesByYear);

    // Calculate average score for each year
    const averageScoresByYear = Object.keys(moviesByYear).map((year) => ({
      year: year,
      averageScore: scoresAverage(moviesByYear[year]), // Assuming scoresAverage function is available
    }));

    // Sort years by average score in descending order to find the highest first
    averageScoresByYear.sort(
      (a, b) => b.averageScore - a.averageScore || a.year - b.year
    );

    // Considering the first element has the highest average score
    const bestYear = averageScoresByYear[0];

    return `The best year was ${bestYear.year} with an average score of ${bestYear.averageScore}`;
  } else {
    return null;
  }
}
/*
{
    title: 'Paper Moon',
    year: 1973,
    director: 'Peter Bogdanovich',
    duration: '1h 42min',
    genre: ['Comedy', 'Crime', 'Drama'],
    score: 8.2
  },

  */
