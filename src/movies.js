// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const allDirectors = movies.map((elm) => elm.director);

  //Este es el 1.1 del Bonus
  const onlyOne = new Array();

  allDirectors.forEach((element) => {
    if (!onlyOne.includes(element)) {
      onlyOne.push(element);
    }
  });
 
  return onlyOne;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenDrama = movies.filter(
    (elm2) =>
      elm2.director === "Steven Spielberg" && elm2.genre.includes("Drama")
  );

  return stevenDrama.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const totalMovies = movies.length;

  let sum = movies.reduce((acc, elm) => {
    if (!elm.rate) {
      return acc;
    } else {
      return elm.rate + acc;
    }
  }, 0);

  if (!totalMovies) {
    return 0;
  }

  return Math.round((sum / totalMovies) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  dramaMovies = movies.filter((elm) => elm.genre.includes("Drama"));

  let sum = dramaMovies.reduce((acc, elm) => {
    if (!elm.rate) {
      return acc;
    } else {
      return elm.rate + acc;
    }
  }, 0);

  if (!dramaMovies.length) {
    return 0;
  } else {
    return Math.round((sum / dramaMovies.length) * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const order = [...movies].sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });

  return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderAlpha = [...movies].sort((a, b) => a.title.localeCompare(b.title));
  const twenty = orderAlpha.slice(0, 20).map((movie) => movie.title);

  return twenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
   





}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
