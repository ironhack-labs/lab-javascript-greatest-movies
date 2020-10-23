// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  return arr.map((elem) => elem.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  const director = arr.filter(
    (elem) =>
      elem.director === "Steven Spielberg" &&
      elem.genre.includes("Drama") === true
  );
  return director.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rate,
    0
  );
  let mean = (sum / arr.length).toFixed(2);
  return parseFloat(mean);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let filtered = arr.filter((elem) => elem.genre == "Drama");
  console.log(filtered);
  let sum = filtered.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rate,
    0
  );
  let mean = (sum / filtered.length).toFixed(2);
  return parseFloat(mean);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let listYears = arr.map((elem) => elem.year);
  let sortList = listYears.sort((a, b) => a - b);
  return sortList;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let listTitles = arr
    .map((elem) => elem.title)
    .slice(0, 20)
    .sort();
  return listTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
