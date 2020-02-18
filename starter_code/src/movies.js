/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
let moviesCopy = JSON.parse(JSON.stringify(movies));

const orderByYear = arr => {
  return JSON.parse(
    JSON.stringify(
      arr.sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title - b.title;
        }
      })
    )
  );
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = arr =>
  arr.filter(
    x => x.director === "Steven Spielberg" && x.genre.includes("Drama")
  ).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr =>
  arr
    .map(x => x.title)
    .sort()
    .slice(0, 20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  if (arr.length > 0) {
    let newArr = arr.filter(x => x.rate);
    return +(newArr.reduce((a, b) => a + b.rate, 0) / arr.length).toFixed(2);
  } else {
    return 0;
  }
};

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
  if (arr.length > 0) {
    let newArr = arr.filter(x => x.rate).filter(x => x.genre.includes("Drama"));
    return +(newArr.reduce((a, b) => a + b.rate, 0) / arr.length).toFixed(2);
  } else {
    return 0;
  }
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
  const newArr = arr.map(x => {
    const timeArr = x.duration.split(" ");
    if (timeArr.length > 1) {
      x.duration =
        +timeArr[0].match(/\d+/g).map(Number) * 60 +
        +timeArr[1].match(/\d+/g).map(Number);
      return x;
    } else if (timeArr[0].includes("min")) {
      x.duration = +timeArr[0].match(/\d+/g).map(Number);
      return x;
    } else {
      x.duration = +timeArr[0].match(/\d+/g).map(Number) * 60;
      return x;
    }
  });
  return newArr;
};

console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
