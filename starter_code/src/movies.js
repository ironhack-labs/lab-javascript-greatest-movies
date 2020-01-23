/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const arr = [...movies];
  return arr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      const movieOne = a.title;
      const movieTwo = b.title;
      if (movieOne > movieTwo) {
        return 1;
      } else if (movieOne < movieTwo) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  return movies.filter(film => {
    return film.director.includes('Steven Spielberg') && film.genre.includes('Drama');
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let result = [],
    newArray = [...movies];
  newArray
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    })
    .slice(0, 20)
    .map(value => result.push(value.title));
  return result;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  let newMovies = movies.filter(value => value.rate !== undefined);
  let average = newMovies.reduce((accumulator, value) => accumulator + value.rate, 0);
  return Math.round((average / movies.length) * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let inDrama = movies.filter(value => value.genre.includes('Drama')),
    average = inDrama.reduce((accumulator, value) => accumulator + value.rate, 0),
    lengthDrama = inDrama.length;
  if (lengthDrama === 0) return 0;
  return Math.round((average / lengthDrama) * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(' ');
    let mins = 0;
    for (let time of duration) {
      if (time.includes('h')) {
        mins += parseInt(time) * 60;
      } else {
        mins += parseInt(time);
      }
    }
    return {
      ...movie,
      duration: mins
    };
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
