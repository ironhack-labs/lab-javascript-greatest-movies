/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
// inici
function orderByYear(movies) {
  const sortedMovies = [...movies];
  sortedMovies.sort((movieA, movieB) => {
      if (movieA.year < movieB.year) {
          return -1;
      }
      if (movieA.year > movieB.year) {
          return 1;
      }
      if (movieA.title < movieB.title) {
          return -1;
      }
      if (movieA.title > movieB.title) {
          return 1;
      }
      return 0;
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  return movies.filter(movie => {
    return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies
    .map(movie => movie.title)
    .sort((a, b) => {
      const firstMovie = a.toLowerCase();
      const secondMovie = b.toLowerCase();
      if (firstMovie > secondMovie) {
        return 1;
      } else if (firstMovie < secondMovie) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
      return 0;
  }
  let soma = 0;
  for (let m of movies) {
      if (m.rate !== null && m.rate !== undefined)
          soma = soma + m.rate;
      
  }
  let avg = soma / movies.length;
  return parseFloat(avg.toFixed(2));
}
// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
  const filteredDramaArr = arr.filter(movie => movie.genre.includes('Drama'));
  if (filteredDramaArr.length === 0) {
    return 0;
  }
  return parseFloat((filteredDramaArr.reduce((totalRate, movie) => totalRate + movie.rate, 0) / filteredDramaArr.length).toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.map(movie => {
    const hDurationSplit = movie.duration.split('h')[0];
    let hours;
    let mins;
    if (isNaN(hDurationSplit)) {
      hours = 0;
      mins = parseInt(hDurationSplit.split('min')[0]);
    } else {
      hours = parseInt(hDurationSplit * 60);
      if (movie.duration.split('h')[1] !== '') {
        mins = parseInt(movie.duration.split('h')[1].split('min')[0]);
      } else {
        mins = 0;
      }
    }
    movie.duration = hours + mins;
  })
  return newArr;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average

