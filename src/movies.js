// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((e) => e.director);
  const uniqueDirectors = directors.filter((e, index) => {
    return directors.indexOf(e) === index;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramas = moviesArray.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });
  return dramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const allScore = moviesArray.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);
  const average = allScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  const allDramaScore = dramas.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);

  if (dramas.length === 0) return 0;
  const average = allDramaScore / dramas.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyArr = [...moviesArray];
  copyArr.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return copyArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyArr = [...moviesArray];
  copyArr.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const titlesArray = copyArr.map((movie) => movie.title);
  return titlesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => {
    const copyArr = { ...movie };
    let totalDuration = 0;
    const durationArr = copyArr.duration.split(" ");
    durationArr.forEach((e) => {
      if (e.includes("h")) {
        totalDuration = totalDuration + parseInt(e) * 60;
      } else if (e.includes("min")) {
        totalDuration = totalDuration + parseInt(e);
      }
    });
    copyArr.duration = totalDuration;
    return copyArr;
  });
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const store = {};
  if(moviesArray.length === 0 ) return null;
  moviesArray.forEach((movie) => {
    if (!store[movie.year]) {
      store[movie.year] = [];
    }
    store[movie.year].push(movie.score);
  });
  let bestYear = 0;
  let bestAvg = 0;
  for (let year in store) {
    let sum = 0;
    const scores = store[year];
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    let currentAvg = sum / scores.length;
    if (currentAvg > bestAvg) {
      bestAvg = currentAvg;
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
