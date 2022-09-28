// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((movie) => {
    return movie.director;
  });

  // BONUS - remove duplicates
  // indexOf != index means that the director already appeared in the array,
  // so this is a duplicate instance
  return directorsArr.filter((director, index) => {
    return directorsArr.indexOf(director) === index;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // version A with .filter

  const filteredArr = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return filteredArr.length;

  // version B with .reduce

  //   const total = moviesArray.reduce((accum, movie) => {
  //     if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  //       accum++;
  //     return accum;
  //   }, 0);
  //   return total;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const sum = moviesArray.reduce((accum, movie) => {
    if (!movie.score) return accum;
    return accum + movie.score;
  }, 0);

  // parecería más lógico calcular promedio SÓLO respecto a pelis con score
  // en vez de respecto a TODAS las pelis, no? ¯\_(ツ)_/¯

  return Number.parseFloat((sum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArr = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(filteredArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortArr = [...moviesArray];
  sortArr.sort((after, before) => {
    if (after.year > before.year) return 1;
    else if (after.year < before.year) return -1;
    else if (after.title > before.title) return 1;
    else if (after.title < before.title) return -1;
    else return 0;
  });
  return sortArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitlesArr = moviesArray.map((movie) => {
    return movie.title;
  });
  movieTitlesArr.sort();
  return movieTitlesArr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArr = moviesArray.map((movie) => {
    const durationArr = movie.duration.split(" ");
    const hours = durationArr[0].substring(0, durationArr[0].indexOf("h"));

    // comprobar si la peli tiene minutos
    const minutes = durationArr[1]
      ? durationArr[1].substring(0, durationArr[1].indexOf("m"))
      : 0;

    const movieInMinutes = {
      ...movie,
      duration: hours * 60 + parseInt(minutes),
    };
    return movieInMinutes;
  });
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  let currYear = 0;
  let singleYearArray;
  const arrayOfArrays = [];
  const orderedByYearArr = orderByYear(moviesArray);

  for (movie of orderedByYearArr) {
    // create a new array & push the previous one when changing years
    if (movie.year !== currYear) {
      // don't push anything when starting up & currYear is still 0!
      if (currYear) arrayOfArrays.push(singleYearArray);
      currYear = movie.year;
      singleYearArray = [];
    }
    singleYearArray.push(movie);
  }

  // movies of the last year weren't pushed within the loop
  arrayOfArrays.push(singleYearArray);

  scoresArr = arrayOfArrays.map((yearArr) => {
    return {
      year: yearArr[0].year,
      score: scoresAverage(yearArr),
    };
  });

  scoresArr.sort((a, b) => {
    if (a.score > b.score) return -1;
    else if (a.score < b.score) return 1;
    else if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else return 0;
  });

  return `The best year was ${scoresArr[0].year} with an average score of ${scoresArr[0].score}`;
}
