// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  if (moviesArray.length === 0) {
    return;
  }

  const directors = moviesArray.map((movie) => {
    return movie.director;
  });

  let uniqueDirectos = [];
  directors.forEach((director) => {
    if (!uniqueDirectos.includes(director)) {
      uniqueDirectos.push(director);
    }
  });
 
  return uniqueDirectos;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const stevenDramaMovies = stevenMovies.filter((movie) =>
    movie.genre.includes("Drama")
  );

  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (!moviesArray[i].score || moviesArray[i].score == 0) {
      continue;
    } else {
      totalScore += moviesArray[i].score;
    }
  }

  let averageScore = totalScore / moviesArray.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = [...moviesArray];
  function compareYears(a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  newMoviesArray.sort(compareYears);

  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArray = [];
  moviesArray.forEach((movie) => {
    newMoviesArray.push(movie.title);
  });
  newMoviesArray.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });

  return newMoviesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newMoviesArray = moviesArray.map((movie) => {
    return { ...movie, duration: movieMinutes(movie) };
  });

  function movieMinutes(movie) {
    let totalminutes = 0;
    let splitTime = movie.duration.split(" ");
    if (!splitTime[1]) {
      totalminutes += parseInt(splitTime[0]) * 60;
    } else {
      totalminutes += parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]);
    }
    return totalminutes;
  }

  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  /* const years = moviesArray.map((movie) => {
    return movie.year;
  });

  let uniqueYears = [];
  years.forEach((year) => {
    if (!uniqueYears.includes(year)) {
      uniqueYears.push(year);
    }
  }); */
  //Can also use code below to replace commented code above. They both do the exact same thing.
  let uniqueYears = [...new Set(moviesArray.map((movie) => movie.year))];

  let yearsAverage = [];
  uniqueYears.forEach((year) => {
    const yearArray = moviesArray.filter((movie) => year === movie.year);
    const yearAverage = scoresAverage(yearArray);
    yearsAverage.push({ year, yearAverage });
  });

  let highScore = 0;
  let highestYear = 0;
  yearsAverage.forEach((year) => {
    if (year.yearAverage > highScore) {
      highScore = year.yearAverage;
      highestYear = year;
    }
    if (year.yearAverage === highScore) {
      highestYear = year.year < highestYear.year ? year : highestYear;
    }
  });

  return `The best year was ${highestYear.year} with an average score of ${highestYear.yearAverage}`;
}
