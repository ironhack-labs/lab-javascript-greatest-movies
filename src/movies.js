// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray) return 0;
  if (moviesArray.length === 0) return 0;
  const sum = moviesArray.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  return Math.round((sum / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  if (!dramaMovies) return 0;
  if (dramaMovies.length === 0) return 0;
  const sum = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  return Math.round((sum / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedArray = [...moviesArray];
  orderedArray.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  });
  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleArray = [];
  const orderedArray = [...moviesArray];
  orderedArray.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  for (let i = 0; i < 20; i++) {
    titleArray.push(orderedArray[i].title);
  }
  return titleArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArray = [...moviesArray];
  newArray.forEach((movie) => {
    const duration = movie.duration;
    console.log(duration);
    let hoursToMinutes = parseInt(duration[0]) * 60;
    // console.log(hoursToMinutes);
    let minutes = 0;
    if (duration.length > 2) {
      minutes = parseInt(duration.slice(3));
    }
    movie.duration = hoursToMinutes + minutes;
    console.log(movie.duration);
  });

  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
