// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = [];
  for (let i = 0; i < moviesArray.length; i++) {
    let director = moviesArray[i].director;
    if (!allDirectors.includes(director)) {
      allDirectors.push(director);
    }
  }
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stevenSpielbergMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevenSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scores = [];
  let sumOfScores = 0;
  if (moviesArray.length === 0) return 0;
  for (let i = 0; i < moviesArray.length; i++) {
    scores.push(moviesArray[i].score);
  }
  scores.forEach((score) => {
    if (!score) return;
    sumOfScores += score;
  });
  return Number((sumOfScores / scores.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = [];
  let dramaScores = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].genre.includes("Drama")) {
      dramaMovies.push(moviesArray[i]);
    }
  }
  if (dramaMovies.length === 0) return 0;
  dramaMovies.forEach((movie) => {
    dramaScores += movie.score;
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = [...moviesArray];

  return newMoviesArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyMoviesArray = [...moviesArray];

  // Sorting mutates the original array and sorts the elements
  copyMoviesArray.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  const firstTwenty = copyMoviesArray.slice(0, 20);

  const titlesOfFirst20 = [];
  firstTwenty.forEach(function (movie) {
    titlesOfFirst20.push(movie.title);
  });

  return titlesOfFirst20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  function durationToMinutes(movie) {
    if (typeof movie.duration === "number") {
      return movie;
    }

    movieDuration = movie.duration;

    const timeString = movieDuration.split(" ");

    const minutesDuration = timeString.reduce(function (total, string) {
      if (string.includes("h")) {
        const numOfHours = parseInt(string);
        return total + numOfHours * 60;
      } else {
        const numOfMinutes = parseInt(string);
        return total + numOfMinutes;
      }
    }, 0);

    movie.duration = minutesDuration;
    return movie;
  }
  const newArr = moviesArray.map(function (movie) {
    return durationToMinutes(movie);
  });

  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
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
