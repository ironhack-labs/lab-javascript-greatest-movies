/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = array => {
  if (array.length === 0) {
    return [];
  }
  /*const newArray = [...array]*/
  let sortedYear = array.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return sortedYear;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
/*const howManyMovies = array => {
  if (array.length === 0 || array.director != 'Steven Spielberg') {
    return 0;
  }

  let findDramaSteven = array.filter(dramaSteven => {
    if (dramaSteven.director.includes('Steven Spielberg') && dramaSteven.genre.includes('Drama')) {
      return true;
    }
  });

  return findDramaSteven.length;
};*/

const howManyMovies = array => {
  return array
    .filter(movie => movie.director.includes('Steven Spielberg'))
    .filter(spielbergMovie => spielbergMovie.genre.includes('Drama')).length;
};
/*
const howMAnyMovies = array => {
  //First get an array with stevens movies
  const stevenSpielMovies = array.filter(movie => movie.director.includes('Steven Spielberg'));
  const stevenDrama = stevenSpielMovies.filter(movie => movie.genre.includes('Drama'));
  return stevenDrama.length;
};*/

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
/*const orderAlphabetically = array => {
  let sortedTitle = array.sort(function(a, b) {
    if (a.Title > b.Title) {
      return 1;
    } else if (a.Title < b.Title) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedTitle;

};*/

const orderAlphabetically = array => {
  return (movies = array
    .map(movies => movies.title)
    .sort()
    .slice(0, 20));
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
/*
const ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  }
  //return average !== 'undefined';
  let average = array.reduce(function(accumulator, value) {
    return accumulator + value.array;
  });
  return Math.round(((ratesAverage / array.length) * 100) / 100); //.toFixed(2);
};
*/

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;
const ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  }
  const rates = array
    .map(movie => movie.rate) /*.filter(rate => typeof rate === 'number');*/
    .map(rate => {
      if (typeof rate === 'number') {
        return rate;
      } else {
        return 0;
      }
    });
  /*const averageRate = rates.reduce((accumulator, rate) => accumulator + rate / rates.length, 0);*/
  const sumOfAllRates = rates.reduce((accumulator, rate) => {
    if (typeof rate /*!== 'undefined'*/ === 'number') {
      return accumulator + rate;
    } else {
      return accumulator;
    }
  }, 0);
  const averageRate = sumOfAllRates / rates.length;
  return averageRate;
  return roundNumber(averageRate, 2);
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
    const movieAverageRateByYear = movieAverageRateByYear[year].reduce(
      (accumulator, rate, index, originalArray => accumulator + rate / originalArray.length, 0)
    );
    movieAverageRateByYear[year] = movieAverageRateByYear;
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
