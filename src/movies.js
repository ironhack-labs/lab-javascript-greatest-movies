//iteration 0
import { data } from "./data";
console.log(data[0].title);


/*function getPopularMovies(moviesArray, minScore) {
    const popularMovies = moviesArray.filter(function (movie) {
        return movie.score >= minScore;
    });
    return popularMovies;
}

const popularMovies = getPopularMovies(data, 9);
console.log(popularMovies);

*/

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];

  moviesArray.forEach(function(data) {
    if (!directors.includes(data.director)) {
      directors.push(data.director);
    }
  });

  return directors;
}

const directors = getAllDirectors(data);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, directorName) {
    const genreDrama = moviesArray.filter(function (data) {
      return (
        movie.director.toLowerCase() === directorName.toLowerCase() && 
        movie.genre.includes("Drama")
      );
    });
    return genreDrama;
  }
  
  const stevenSpielbergDramaMovies = howManyMovies(data, "Steven Spielberg");
  console.log(stevenSpielbergDramaMovies.length);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const sum = movie.reduce((accumulator, currentMovie) => {
  return accumulator + currentMovie.score;
}, 0);

const average = sum / movie.length;

console.log(average);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(data => {
    return movie.genre.includes('Drama');
  });

  const sum = dramaMovies.reduce((accumulator, currentMovie) => {
    return accumulator + currentMovie.score;
  }, 0);

  const average = sum / dramaMovies.length;
  return average;
}

console.log(dramaMoviesScore(data));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.sort((movieA, movieB) => {
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

console.log(orderByYear(data));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) { 
  const sortedMovies = moviesArray.sort((movieA, movieB) => {
    if (movieA.title < movieB.title) {
      return -1;
    }
    if (movieA.title > movieB.title) {
      return 1;
    }
      return 0;
  });
  const top20Movies = sortedMovies.slice(0, 20);
  const top20Titles = top20Movies.map((movie) => movie.title);
  return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { 
  const minutesArray = moviesArray.map((movie) => {
    const duration = movie.duration;
    const hoursToMinutes = duration.includes("h") ? parseInt(duration.split("h")[0]) * 60: 0;
    const minutes = duration.includes("min") ? parseInt(duration.split("min")[0]) : 0;
    const totalDuration = hoursToMinutes + minutes;
    return {
      ...movie,
      duration: totalDuration,
    };
  });
  return minutesArray;
}

console.log(turnHoursToMinutes(data));


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { 
  const yearStats = moviesArray.reduce((stats, movie) => {
    const year = movie.year;
    if (!stats[year]) {
      stats[year] = { sum: 0, count: 0};
    }
    stats[year].sum += movie.score;
    stats[year].count++;
    return stats;
  }, {});
    
    let bestYearAvg = "";
    let bestAvg = 0;

    for (let year in yearStats) {
      const avg = yearStats[year].sum / yearStats[year].count;
      if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
        bestAvg = avg;
        bestYear = year;
      }
    }

    if (bestYear) {
      return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
    } else {
      return "";
    }
}
