// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsList = movies.map((movie) => movie.director);
  const directorsCleanList = directorsList.filter(
    (director, index) => directorsList.indexOf(director) === index
  );
  return directorsCleanList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const stevenMovies = movies.filter(
    (elm) => elm.director === "Steven Spielberg" && elm.genre.includes("Drama")
  );
  numberOfMovies = stevenMovies.length;
  return numberOfMovies;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const rateList = movies.filter((elm) => elm.rate);
  const reduceRateList = rateList.reduce((acc, elm) => acc + elm.rate, 0);
  if (movies.length === 0) {
    return 0;
  }
  const sumResult = (reduceRateList / movies.length).toFixed(2);
  const finalResult = parseFloat(sumResult);
  return finalResult;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovieList = movies.filter((elm) => elm.genre.includes("Drama"));
  const reduceDramaList = dramaMovieList.reduce(
    (acc, drama) => acc + drama.rate,
    0
  );
  if (dramaMovieList.length === 0) {
    return 0;
  }
  const sumResult = (reduceDramaList / dramaMovieList.length).toFixed(2);
  const finalResult = parseFloat(sumResult);
  return finalResult;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const ordererByYear = JSON.parse(JSON.stringify(movies)).sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return ordererByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const ordereredByInitial = JSON.parse(JSON.stringify(movies)).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const first20Movies = ordereredByInitial.slice(0, 20);

  const first20MovieTitles = first20Movies.map((elm) => elm.title);
  return first20MovieTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
