// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
  return movies.map(m => m.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const removeDuplicates = (directors) => {
  return Array.from(new Set(directors));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
  return movies.filter(m => m.director === 'Steven Spielberg' && m.genre.includes('Drama')).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
  if (movies.length === 0) return 0;
  const withRate = movies.filter(m => m.rate !== '' && 'rate' in m);
  const avg = withRate.reduce((a, v) => a + v.rate, 0) / movies.length;
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
  return ratesAverage(movies.filter(m => m.genre.includes('Drama')));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  return movies.slice().sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    return a.title > b.title ? 1 : -1;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  return movies.map(m => m.title).sort((a, b) => a > b ? 1 : a < b ? -1 : 0).slice(0, 20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
  return movies.map(movie => {
    movieCopy = { ...movie };
    const duration = movieCopy.duration;

    let hours = duration.match(/\dh/);
    hours === null ? hours = 0 : hours = parseInt(hours[0].replace('h', ''));

    let mins = duration.match(/\d+min/);
    mins === null ? mins = 0 : mins = parseInt(mins[0].replace('min', ''));

    movieCopy.duration = hours * 60 + mins;

    return movieCopy;
  });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = (movies) => {
  if (movies.length === 0) return null;

  const years = movies.map(m => m.year);
  const uniqueYears = Array.from(new Set(years));

  let currentBestYear = 0;
  let currentBestAvg = 0;

  for (year of uniqueYears) {
    const average = ratesAverage(movies.filter(m => m.year === year));

    if (average > currentBestAvg || (average === currentBestAvg && year < currentBestYear)) {
      currentBestAvg = average;
      currentBestYear = year;
    }
  }

  return `The best year was ${currentBestYear} with an average rate of ${currentBestAvg}`;
}
