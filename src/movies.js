/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies =>
  [...movies].sort((firstEl, secondEl) => {
    if (firstEl.year > secondEl.year) return 1;
    else if (firstEl.year < secondEl.year) return -1;
    else if (firstEl.year === secondEl.year)
      return firstEl.title.localeCompare(secondEl.title);
    else return 0;
  });

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = movies =>
  movies.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies =>
  [...movies]
    .map(movie => movie.title)
    .sort((firstEl, secondEl) => firstEl.localeCompare(secondEl))
    .slice(0, 20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  if (movies.length === 0) return 0;
  const rateSum = movies.reduce((accumulator, currentValue) => {
    return currentValue.rate ? currentValue.rate + accumulator : accumulator;
  }, 0);
  const avgRate = rateSum / movies.length;
  return Math.round(avgRate * 100) / 100;
  // Or return +avg.toFixed(2);
};

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies =>
  ratesAverage(movies.filter(movie => movie.genre.includes("Drama")));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const durationConversion = durationString => {
  const duration = durationString.trim();
  const hour = duration.includes("h")
    ? duration.slice(0, duration.indexOf("h"))
    : 0;
  const min =
    duration.slice(duration.indexOf("h") + 1, duration.indexOf("m")) || 0;
  return parseInt(hour) * 60 + parseInt(min);
};

let turnHoursToMinutes = movies =>
  movies.map(movie => {
    const movieCopy = { ...movie };
    return movieCopy.duration
      ? ((movieCopy.duration = durationConversion(movieCopy.duration)),
        movieCopy)
      : movieCopy;
  });
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }

  const AvgRateByYear = movies
    //Select all the years
    .map(x => x.year)
    //Filter the distanct years values
    .filter((element, index, array) => array.indexOf(element) === index)
    //create a list of avg per year
    .map(element => ({
      //Store th year
      year: element,
      //Determin the movies list of that year then Calculate its average rate
      avgrate: ratesAverage(movies.filter(x => x.year === element))
    }));

  //Sort by highest average rate
  AvgRateByYear.sort(function(a, b) {
    if (a.avgrate === b.avgrate) {
      return a.year - b.year;
    }
    return b.avgrate - a.avgrate;
  });
  //return the first value that has highest average rate
  return (
    "The best year was " +
    AvgRateByYear[0].year +
    " with an average rate of " +
    AvgRateByYear[0].avgrate
  );
}
