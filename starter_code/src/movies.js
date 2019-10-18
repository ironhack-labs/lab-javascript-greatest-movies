
'use strict';

// const movies = require("./data.js")

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
  const sum = movies.reduce((rates, movie) => {
    return +(movie.rate + rates);
  }, 0);
  return sum / movies.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovieCounts = 0;
  let sum = movies.reduce((rates, movie) => {
    if (movie.genre.includes('Drama')) {
      dramaMovieCounts += 1;
      return +(movie.rate) + rates;
    }
    return rates;
  }, 0)
  if (!dramaMovieCounts) {
    return 0;
  }
  return +(sum / dramaMovieCounts).toFixed(2);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
  movies.sort((a, b) => {
    if (+a.year !== +b.year) {
      return +a.year - +b.year;
    }
    return ((a.title).localeCompare(b.title));
  })
  return movies;
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  return movies.filter((movie) => {
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  }).length;
}

console.log(howManyMovies(movies))

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies.map(movie => movie.title)
  .sort((a, b) => a.localeCompare(b))
  .slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

  return JSON.parse(JSON.stringify(movies)).map((movie) => {
    const hours = movie.duration.match(/\d+(?=h)/g);
    const minutes = movie.duration.match(/\d+(?=min)/g);
    if (hours) {
      movie.duration = (Number(hours) * 60 + Number(minutes));
      return movie;
    }
    movie.duration = Number(minutes);
    return movie;
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (!movies.length) {
    return null;
  }
  const averageByYear = movies.reduce((yearAvgs, movie) => {
    if (!yearAvgs[movie.year]) {
      yearAvgs[movie.year] = Number(movie.rate);
      return yearAvgs;
    }
    yearAvgs[movie.year] += Number(movie.rate);
    yearAvgs[movie.year] /= 2;
    return yearAvgs;
  }, {});
  const sortedByYear = Object.entries(averageByYear).sort((a, b) => {
    return b[1] - a[1];
  });
  const topRating = sortedByYear[0][1];
  const topYears = sortedByYear.filter((movie) => {
    return movie[1] === topRating;
  });
  topYears.sort((a, b) => b[0][1] - a[0][1]);
  return `The best year was ${topYears[0][0]} with an average rate of ${topYears[0][1]}`;
}