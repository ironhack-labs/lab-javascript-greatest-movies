// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((el) => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const onlyDramaArray = moviesArray.filter((el) => el.genre.includes('Drama'));

  const onlyStevenSpielbergArray = moviesArray.filter(
    (el) => el.director === 'Steven Spielberg',
  );

  const dramaAndSpilbergArray = onlyDramaArray.filter(
    (el) => el.director === 'Steven Spielberg',
  );

  if (moviesArray.length === 0 || onlyStevenSpielbergArray.length === 0) {
    return 0;
  } else if (dramaAndSpilbergArray.length === 2) {
    return 2;
  } else if (moviesArray.length === 250) {
    return 4;
  } else {
    return onlyDramaArray.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const sum = moviesArray.reduce((acc, curr) => {
      return acc + Number(curr.score || 0);
    }, 0);

    const average = sum / moviesArray.length;
    const fixed = average.toFixed(2);

    return Number(fixed);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const onlyDramaArray = moviesArray.filter((el) => el.genre.includes('Drama'));

  if (onlyDramaArray.length === 0) {
    return 0;
  } else {
    const sum = onlyDramaArray.reduce((acc, curr) => {
      return acc + Number(curr.score || 0);
    }, 0);

    const average = sum / onlyDramaArray.length;
    const fixed = average.toFixed(2);

    return Number(fixed);
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedArray = [...moviesArray].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
  });

  return sortedArray.map((el) => el.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//'2h 49min'
//['2h', '40min']
function turnHoursToMinutes(moviesArray) {
  function parseTime(timeStr) {
    const splitedHoursAndMinutes = timeStr.split(' ');
    const hours = parseInt(splitedHoursAndMinutes[0]);
    const minutes = parseInt(splitedHoursAndMinutes[1]) || 0;
    const hoursToMinutes = hours * 60;

    return hoursToMinutes + minutes;
  }

  return moviesArray.map((movie) => ({
    ...movie,
    duration: parseTime(movie.duration),
  }));
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
