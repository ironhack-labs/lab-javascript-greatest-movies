// Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
  return arr.map(movie => {
    let totalDuration = 0;
    let totalMin = 0;
    let totalHr = 0;
    if (typeof movie.duration === "string") {
      movie.duration.split(" ").forEach(time => {
        if (time.includes("h")) totalHr = parseInt(time.substr(0, time.indexOf("h"))) * 60;
        if (time.includes("min")) totalMin = parseInt(time.replace("min", ""));
      });
      totalDuration = totalHr + totalMin;
    } else totalDuration = movie.duration;
    return { ...movie, duration: totalDuration };
  });
};

// Get the average of all rates with 2 decimals
const ratesAverage = arr =>
  arr.length ? arr.reduce((acc, x) => acc + (parseFloat(x.rate) || 0), 0) / arr.length : undefined;

// Get the average of Drama Movies
const dramaMoviesRate = arr => {
  let avgDramaRate = ratesAverage(arr.length ? arr.filter(movies => movies.genre.includes("Drama")) : undefined);
  if (typeof avgDramaRate === "number") avgDramaRate = Number(avgDramaRate.toFixed(2));
  return avgDramaRate;
};

//Order by time duration, in growing order
const orderByDuration = arr => turnHoursToMinutes(arr.sort((x, y) => (x.duration > y.duration ? 1 : -1)));

// How many movies did STEVEN SPIELBERG
const howManyMovies = arr => {
  if (!arr.length) return;
  const numOfMovies = arr.filter(
    movies => movies.genre.includes("Drama") && movies.director.includes("Steven Spielberg")
  );
  console.log(numOfMovies);
  return `Steven Spielberg directed ${numOfMovies.length} drama movies!`;
};

// Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const sortedMovies = arr.sort((a, b) => (a.title > b.title ? 1 : -1));
  return sortedMovies.map(movie => movie.title).slice(0, 20);
};

// Best yearly rate average
const bestYearAvg = arr => {
  if (!arr.length) return;
  const averages = {};
  arr.forEach(movie => {
    if (averages[movie.year]) averages[movie.year].push(movie);
    else {
      averages[movie.year] = [];
      averages[movie.year].push(movie);
    }
  });
  const bestAverage = Object.keys(averages).reduce(
    (acc, year) => {
      const yearAverage = ratesAverage(averages[year]);
      if (acc.average < yearAverage) acc = { year, average: yearAverage };
      return acc;
    },
    { year: Number(), average: Number() }
  );
  return `The best year was ${bestAverage.year} with an average rate of ${bestAverage.average}`;
};
bestYearAvg(movies);
