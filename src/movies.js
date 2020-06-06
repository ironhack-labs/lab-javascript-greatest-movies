// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(function (movie) {
    return movie.director;
  });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let count = 0;
  if (movies.length === 0) return 0;
  for (let movie of movies) {
    if (movie.director.includes("Spielberg") && movie.genre.includes("Drama"))
      count++;
  }
  return count;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  return parseFloat(
    (
      movies.reduce(function (acc, val) {
        return acc + (val.rate || 0);
      }, 0) / movies.length
    ).toFixed(2)
  );
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let noDrama = true;
  let count = 0;
  let rateSum = 0;
  movies.reduce(function (acc, val) {
    if (val.genre.includes("Drama")) {
      rateSum += val.rate;
      count++;
      noDrama = false;
    }
  }, 0);
  if (noDrama) return 0;
  return parseFloat((rateSum / count).toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clone = movies.slice();
  clone.sort((a, b) => (a.year > b.year ? 1 : -1));
  return clone;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let clone = movies.slice();
  let sorted = clone.sort((a, b) => (a.title > b.title ? 1 : -1)).slice(0, 20);
  return sorted.map(function (movie) {
    return movie.title;
  });
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
    let data = movie.duration.split(" ");
    let hours = 0;
    let minutes = 0;
    let duration;
    for (let subString of data) {
      if (subString.includes("h")) {
        hours = parseInt(subString.replace("h", ""));
      } else if (subString.includes("m")) {
        minutes = parseInt(subString.replace("min", ""));
      }
      duration = hours * 60 + minutes;
    }
    return { movie, duration };
  });
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;
  let years = [];
  movies.forEach(function (movie) {
    years.push(movie.year);
  });
  function yearlyAvg(year) {
    let years = movies.filter(function (movie) {
      return movie.year === year;
    });
    let rateSum = years.reduce((acc, year) => {
      return acc + year.rate;
    }, 0);
    return parseFloat((rateSum / years.length).toFixed(1));
  }
  let bestYear = 0;
  let bestAvg = 0;
  years.forEach((year) => {
    if (yearlyAvg(year) > bestAvg) {
      bestAvg = yearlyAvg(year);
      bestYear = year;
    }
    if (yearlyAvg(year) === bestAvg) {
      if (year < bestYear) {
        bestYear = year;
      }
    }
  });
  return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}
