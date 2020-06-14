// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => arr.map((film) => film.director);

/* DEUXIEME METHODE
function getAllDirectors(arr) {
  return arr.map(element => element.director);
}
*/

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function deleteDoubles(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (arr) =>
  arr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;

/* DEUXIEME METHODE
function howManyMovies(arr) {
  return arr.filter(movie => 
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
}
 */

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.filter((movie) => typeof movie.rate === "number");
  let sumFiltered = sum.reduce(
    (accumulator, movie) => (accumulator += movie.rate),
    0
  );
  var average = Math.round((sumFiltered / arr.length) * 100) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaTypeArr = arr.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(dramaTypeArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  if (arr.length === 0) return [];

  // first, sort by name
  let newArray = arr.sort(function alphaSorting(a, b) {
    if (a.title > b.title) {
      //pourquoi toUpperCase() ne fonctionne pas sur la propriété title ???
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  // then sort by years :
  newArray.sort((a, b) => a.year - b.year);

  console.log(newArray);
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/* Create an orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them. */

function orderAlphabetically(arr) {
  if (arr.length === 0) return [];

  let orderedArr = Object.assign([], arr);

  orderedArr.sort(function alphaSorting(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  let shortOrderedArr = [];
  if (orderedArr.length < 20) {
    for (let i = 0; i < orderedArr.length; i++) {
      shortOrderedArr.push(orderedArr[i].title);
    }
  } else {
    for (let i = 0; i < 20; i++) {
      shortOrderedArr.push(orderedArr[i].title);
    }
  }
  return shortOrderedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//Keep in mind, you have to return a new array with all the info about movies, meaning, you shouldn't modify the original array.

function turnHoursToMinutes(arr) {
  if (arr.length === 0) return [];

  // let newArr = [...arr]; // in this case : duration is a NUMBER.
  let newArr = JSON.parse(JSON.stringify(arr)); // in this case : duration is a STRING, not a NUMBER, and Jasmine is Ok, which is weird

  newArr.forEach(function toMinutes(movie) {
    let durationStr = movie.duration;
    if (!movie.duration.includes("h")) {
      let minutes = movie.duration.split("m");
      movie.duration = Number(minutes[0]);
    } else if (!movie.duration.includes("min")) {
      let hours = movie.duration.split("h");
      movie.duration = Number(hours[0] * 60);
    } else {
      let hoursAndMin = movie.duration.split("h ");
      let minutes = hoursAndMin[1].split("m");
      movie.duration = Number(hoursAndMin[0] * 60) + Number(minutes[0]);
    }
  });
  console.log(newArr);
  return newArr;
}
/* 
let movieTest = [
  { duration: "3h" },
  { duration: "219min" },
  { duration: "0h 30min" },
];
console.log(
  "type of movieTest.duration BEFORE applying the function : " +
    typeof movieTest[0].duration
);
turnHoursToMinutes(movieTest);
console.log(
  "type of movieTest.duration AFTER applying the function : " +
    typeof movieTest[0].duration
); 
*/

// BONUS - Iteration 8: Best yearly rate average

function bestYearAvg(arr) {
  if (arr.length === 0) return null;

  let copiedArr = JSON.parse(JSON.stringify(arr));

  let bestYearRateAvg = 0;
  let bestYear = Math.max(...copiedArr.map((movie) => movie.year));
  //console.log("temp best year : " + bestYear + "-------------------")

  for (let i = 0; i < copiedArr.length; i++) {
    let sameYearMovies = copiedArr.filter(
      (movie) => movie.year === copiedArr[i].year
    );
    //console.log(sameYearMovies)
    let newAvg = ratesAverage(sameYearMovies);
    //console.log(newAvg)
    if (
      (newAvg >= bestYearRateAvg && copiedArr[i].year < bestYear) ||
      (newAvg > bestYearRateAvg && copiedArr[i].year >= bestYear)
    ) {
      bestYearRateAvg = newAvg;
      bestYear = copiedArr[i].year;
    }
    // console.log("new best rate is : "+ bestYearRateAvg)
    // console.log("new best year is : "+ bestYear)
  }
  return `The best year was ${bestYear} with an average rate of ${bestYearRateAvg}`;
}

const newMoviesArr = [
  { year: 2000, rate: 9 },
  { year: 2000, rate: 8 },
  { year: 1978, rate: 10 },
  { year: 1978, rate: 7 },
  { year: 2019, rate: 8.45 },
];
console.log(bestYearAvg(newMoviesArr));

const singleMovie = [{ year: 2007, rate: 2.56 }];
console.log(bestYearAvg(singleMovie));
console.log(ratesAverage(singleMovie));
