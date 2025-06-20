// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray === 0) return 0;
  const filteredMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*
----------APUNTES----------
- Empieza sumando desde 0.
- Por cada película, si tiene score, súmalo al total (sum).
- Si no pones ese 0, reduce usará el primer elemento del array como valor inicial, 
y eso puede causar errores, sobre todo si:
- El array está vacío → dará error.
- El primer elemento no tiene score.
*/
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const totalScore = moviesArray.reduce((sum, movie) => {
    return movie.score ? sum + movie.score : sum;
  }, 0);
  const average = totalScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) return 0;
  const totalScore = dramaMovies.reduce((sum, movie) => {
    return movie.score ? sum + movie.score : sum;
  }, 0);
  const average = totalScore / dramaMovies.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {
//   if (moviesArray.length === 0) return [];
//   const moviesCopy = [...moviesArray];
//   //   const moviesCopy = moviesArray.map((movie) => ({ ...movie }));
//   //   const moviesCopy = moviesArray.slice()
//   moviesCopy.sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
//   return moviesCopy;
// }
// function orderByYear(moviesArray) {
//   return [...moviesArray].sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else {
//       return a.title.localeCompare(b.title);
//     }
//   });
// }
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) return a.title.localeCompare(b.title);
    return a.year - b.year;
  });

  //   a.year === b.year ? a.title.localeCompare(b.title) :( a.year - b.year)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrCopy = [...moviesArray];
  const titles = arrCopy.map((movie) => movie.title);
  titles.sort((a, b) => a.localeCompare(b));
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const movieCopy = { ...movie };
    const duration = movie.duration;
    let totalMinutes = 0;
    const hoursMatch = duration.match(/(\d+)h/);
    const minutesMatch = duration.match(/(\d+)min/);

    if (hoursMatch) {
      totalMinutes += parseInt(hoursMatch[1]) * 60;
    }

    if (minutesMatch) {
      totalMinutes += parseInt(minutesMatch[1]);
    }

    movieCopy.duration = totalMinutes;
    return movieCopy;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
