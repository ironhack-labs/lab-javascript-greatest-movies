////////////////////

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
  const director = array.map((item) => item.director);
  console.log(director);
  return director;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  const director = array.filter(
    (item) =>
      item.director === "Steven Spielberg" && item.genre.includes("Drama")
  );
  director;
  console.log(director.length);
  return director.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let avg = array
    .filter((array) => array.rate)
    .reduce(function (a, b) {
      return a + b.rate / array.length;
    }, 0);
  return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const drameRates = array.filter((item) => item.genre.includes("Drama"));
  const drameRatesAvg = ratesAverage(drameRates);
  console.log(drameRatesAvg);
  return drameRatesAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const copy = [...array];
  const order = copy.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
  });
  return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titles = array.map((array) => array.title);
  //titles = titles.map((titles) => titles.toUpperCase());
  let sortedTitles = titles.sort();
  if (sortedTitles <= 20) {
    return sortedTitles;
  } else {
    console.log(sortedTitles);
    return sortedTitles.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
