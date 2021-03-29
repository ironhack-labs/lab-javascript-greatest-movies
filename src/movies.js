// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies => movies.map(m => m.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const removeDuplicates = directors => [...new Set(directors)];

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies => movies.filter(m => m.director === 'Steven Spielberg' && m.genre.includes('Drama')).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
  if (movies.length === 0) return 0;
  const withRate = movies.filter(m => m.rate !== '' && 'rate' in m);
  const avg = withRate.reduce((a, v) => a + v.rate, 0) / movies.length;
  return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => ratesAverage(movies.filter(m => m.genre.includes('Drama')));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
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
const orderAlphabetically = movies => movies.map(m => m.title).sort((a, b) => a > b ? 1 : a < b ? -1 : 0).slice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  return movies.map(movie => {
    const duration = movie.duration;
    let durationInMinutes = 0;

    if (duration.indexOf('h') > -1) {
      durationInMinutes += 60 * parseInt(duration.match(/\d+h/)[0].replace('h', ''));
    }

    if (duration.indexOf('min') > -1) {
      durationInMinutes += parseInt(duration.match(/\d+min/)[0].replace('min', ''));
    }

    return { ...movie, duration: durationInMinutes };
  });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {
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
