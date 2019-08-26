/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = movies => {
  let average = (movies.reduce((ac, movie) => ac + +movie.rate, 0)) / movies.length
  return +average.toFixed(2);
}
console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  let dramaM = movies.filter(movie => movie.genre.includes("Drama"))
  if (dramaM == 0) {
    return 0;
  }
  return ratesAverage(dramaM);
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
  let order = movies.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;


  })
  return order;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  let steven = movies.filter(movie => movie.director == 'Steven Spielberg' &&
    movie.genre.includes('Drama'));
  let totalMovies = steven.length;
  return totalMovies;
}
console.log(howManyMovies(movies));
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {
  let order = movies.sort((a, b) => {
    if (a.title.length !== b.title.length) return a.title - b.title;
    return a.title.localeCompare(b.title);
  });
  return order.map(movieTitle => movieTitle.title).slice(0, 20);
}

console.log(orderAlphabetically(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  let mins;
  return movies.map(movie => {
    mins = 0;
    if (movie.duration.indexOf('h') >= 0) {
      mins += +movie.duration.split('h')[0] * 60;

      if (movie.duration.indexOf(' ') >= 0) {
        mins += +movie.duration.split(' ')[1].slice(0, -3);
      }
    } else {
      mins += +movie.duration.slice(0, -3);
    }
    return { ...movie, duration: mins };
  });
}
console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {

}

