/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arr => {
  const sorted = [...arr].sort((a, b) => (a.year > b.year ? 1 : -1));
  return sorted;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = arr => {
  return arr.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  const sorted = [...arr].map(movie => movie.title);
  sorted.sort();
  return sorted.splice(0, 20);
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  if (arr.length === 0) return 0;
  const average =
    arr
      .filter(movie => movie.rate)
      .reduce((acc, curval) => acc + curval.rate, 0) / arr.length;
  return parseFloat(average.toFixed(2));
};
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
  const newArr = arr.filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(newArr);
};
// }
// ratesAverage(arr)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const handleTime = string => {
  if (!string.includes("h")) {
    return parseInt(string.replace(/\D/g, ""));
  } else if (!string.includes("min")) {
    return parseInt(string.replace(/\D/g, "")) * 60;
  } else {
    let arrayOfTime = string
      .replace(/\D/g, " ")
      .trim()
      .split("  ");
    const hour = arrayOfTime[0] * 60;
    const min = parseInt(arrayOfTime[1]);
    let time = hour + min;
    return time;
  }
};

const turnHoursToMinutes = arr => {
  let result = arr.map(movie => ({
    ...movie,
    duration: handleTime(movie.duration)
  }));
  return result;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = arr => {
  if (arr.length === 0) return null;

  // making an array of unique years
  const arrOfYears = arr.map(movie => movie.year);
  const uniqueYears = arrOfYears.reduce((acc, curval) => {
    if (!acc.includes(curval)) {
      return [...acc, curval];
    } else return acc;
  }, []);

  // dealing with the case if the 'Should return the oldest year when there is a tie'
  const sortedUniqueYears = uniqueYears.sort((a, b) => a - b);

  // making separate arrays of movies with the same year
  let groupedByYear = [];
  for (let specificYear of sortedUniqueYears) {
    const moviesWithTheSameYear = arr.filter(
      movie => movie.year === specificYear
    );
    groupedByYear.push(moviesWithTheSameYear);
  }

  // making arrays with only year and average rate
  const averages = [];
  const yearAveragePairs = [];
  for (let i = 0; i < groupedByYear.length; i++) {
    averages.push(ratesAverage(groupedByYear[i]));
    const result = groupedByYear[i].reduce((acc, curval) => {
      return { ...acc, average: averages[i], year: curval.year };
    }, {});
    yearAveragePairs.push(result);
  }

  const theBestYear = yearAveragePairs.sort((a, b) => b.average - a.average)[0];
  return `The best year was ${theBestYear.year} with an average rate of ${theBestYear.average}`;
};
