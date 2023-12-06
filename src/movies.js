let testArr = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 5.3,
  },
  {
    title: "A Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: 'Xchindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
];

let testArr20 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "1",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "1",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "1",
];
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map(function (element) {
    return element.director;
  });
  return allDirectors;
}
//console.log (getAllDirectors(testArr));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let moviesOfDirector = moviesArray.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return moviesOfDirector.length;
}
//console.log (howManyMovies(testArr));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let averageScore = moviesArray.reduce(function (sum, currVal) {
    if (typeof currVal.score === "number") {
      return sum + currVal.score;
    } else {
      return sum + 0;
    }
  }, 0);
  if (moviesArray.length === 0) {
    return 0;
  } else {
    return Math.round((averageScore / moviesArray.length) * 100) / 100;
  }
}
//console.log (scoresAverage(testArr));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // 1. filter for drama
  let dramaOnly = moviesArray.filter(function (element) {
    return element.genre.includes("Drama");
  });
  // 2. get average score
  return scoresAverage(dramaOnly);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // ascending order by release year
  // same year: alphabetical order by title
  // make a copy, dont change the original
  // https://www.w3schools.com/js/js_array_sort.asp
  // 1. make a copy
  let sortedByYear = moviesArray.map(function (element) {
    return element;
  });
  // 2. sort by year
  sortedByYear.sort(function (a, b) {
    let yearA = a.year;
    let yearB = b.year;
    if (yearA > yearB) return 1;
    if (yearB > yearA) return -1;
    // sort by title with localeCompare
    if (yearA === yearB) {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedByYear;
}
//console.log(orderByYear(testArr));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // 1. make copy
  let sortedByTitle = moviesArray.map(function (element) {
    return element.title;
  });
  // 2. sort by title
  sortedByTitle.sort();
  // 3. only return 20 or less elements
  if (sortedByTitle.length > 20) {
    return sortedByTitle.slice(0, 20);
  } else {
    return sortedByTitle;
  }
}
//console.log(orderAlphabetically(testArr));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // 1. clone array safely
  // https://stackoverflow.com/questions/9885821/copying-of-an-array-of-objects-to-another-array-without-object-reference-in-java
  let durationToMinutes = JSON.parse(JSON.stringify(moviesArray));
  // trnaslate the duration into a minutes number
  for (let i = 0; i < durationToMinutes.length; i++){
    durationToMinutes[i].duration = toNumMins(durationToMinutes[i].duration);
  }
  return durationToMinutes;
}
// console.log(turnHoursToMinutes(testArr));
// console.log(testArr);

function toNumMins(hoursAndMinutesStr) {
  let strToNumMins = hoursAndMinutesStr.split(" ");
  for (let i = 0; i < strToNumMins.length; i++) {
    if (strToNumMins[i].includes("h")) strToNumMins[i] = strToNumMins[i].replace("h", "");
    if (strToNumMins[i].includes("min")) strToNumMins[i] = strToNumMins[i].replace("min", "");
    strToNumMins[i] = parseInt(strToNumMins[i]);
    if (i === 0) strToNumMins[i] *= 60;
  }
  let totalMins = strToNumMins.reduce(function (sum, currVal) {
    return sum + currVal;
  });
  return totalMins;
}
// let testObj = { duration: "2h 22min" };
// console.log(hoursMins(testObj));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// https://github.com/ironhack-labs/lab-javascript-greatest-movies/pull/3669
