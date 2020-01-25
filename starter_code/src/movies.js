/* eslint no-restricted-globals: 'off' */
/*{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": [
    "Crime",
    "Drama"
  ],
  "rate": 9.3
},
*/
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  const newMovies = [...movies];
  const moviesOrdered = newMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return moviesOrdered;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = array => {
  return array
    .filter(movie => movie.director.includes('Steven Spielberg'))
    .filter(aSpielbergMovie => aSpielbergMovie.genre.includes('Drama')).length;
};
/*
const howManyMovies = array => {
  return array.filter(movie => {
    const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
    const isDramaMovie = movie.genre.includes('Drama');
    return isDirectedByStevenSpielberg && isDramaMovie;
  }).length;
};
*/
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
  return (nameOfMovie = array
    .map(nameOfMovie => nameOfMovie.title)
    .sort()
    .slice(0, 20));
};

/*
const orderAlphabetically = array => {
  const sortedMovies = [...array];
  sortedMovies.sort((firstMovie, secondMovie) => {
  return firstMovie.title.localeCompare(SecondMovie.title);
  });
  const movieTitles = sortedMovies.map(movie => movie.title);
  return movieTitles.slice(0, 20);
};
*/
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const roundNumbers = (numbers, digits) => Math.round(number * 10 ** digits) / 10 ** digits;
const ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  }
  const rates = array.map(movie => movie.rate);
  const sumOfAllRates = rates.reduce((accumulator, rate) => {
    if (typeof rate === 'number') {
      return accumulator + rate;
    } else {
      return accumulator;
    }
  }, 0);
  const averageRate = sumOfAllRates / rates.length;
  return Number(averageRate.toFixed(2));
};
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {
  const dramaMovies = array.filter(movie => movie.genre.includes('Drama'));
  const averageDramaMovieRate = ratesAverage(dramaMovies);
  return averageDramaMovieRate;
};
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = array => {
  return array.map(movie => {
    const durationAsString = movie.duration;

    let duration = 0;

    for (let value of durationAsString.split(' ')) {
      const number = parseInt(value);
      if (value.includes('h')) {
        duration += number * 60;
      } else if (value.includes('min')) {
        duration += number;
      }
    }

    return {
      ...movie,
      duration
    };
  });
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = array => {
  if (array.length === 0) {
    return null;
  }

  const movieAverageRateByYear = array.reduce((accumulator, movie) => {
    const yearOfMovie = movie.year;
    const rateOfMovie = movie.rate;

    if (typeof accumulator[yearOfMovie] === 'undefined') {
      accumulator[yearOfMovie] = [rateOfMovie];
    } else {
      accumulator[yearOfMovie].push(rateOfMovie);
    }

    return accumulator;
  }, {});

  for (let year in movieAverageRateByYear) {
    const averageRateOfYear = movieAverageRateByYear[year].reduce(
      (accumulator, rate, index, originalArray) => accumulator + rate / originalArray.length,
      0
    );
    movieAverageRateByYear[year] = averageRateOfYear;
  }
  const auxiliaryArray = Object.entries(movieAverageRateByYear);

  auxiliaryArray.sort((a, b) => {
    const rateOfYearA = a[1];
    const rateOfYearB = b[1];
    if (rateOfYearA > rateOfYearB) {
      return -1;
    } else {
      return 1;
    }
  });

  const year = auxiliaryArray[0][0];
  const rate = auxiliaryArray[0][1];

  return `The best year was ${year} with an average rate of ${rate}`;
};
