// const { sort } = require("./data");
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  const newArray = arr.map((x) => {
    return x["director"];
  });
  return newArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    const filteredArray = arr.filter(
      (x) =>
        x["director"] === "Steven Spielberg" && x["genre"].includes("Drama")
    );
    return filteredArray.length;
  }
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length == 0) {
    return 0;
  }
  const arrayOfRatings = arr.map((x) => x["rate"]);
  const filteredLackOfRatings = arrayOfRatings.filter(
    (x) => typeof x === "number"
  );
  const arrayRatingAverage = filteredLackOfRatings.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return Number((arrayRatingAverage / arr.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const moviesIncludingDrama = arr.filter((x) => {
    return x["genre"].includes("Drama");
  });
  if (moviesIncludingDrama.length === 0) {
    return 0;
  }
  const arrayOfDramaRatings = moviesIncludingDrama.map((x) => x["rate"]);
  const arrayDramaRatingSum = arrayOfDramaRatings.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(arrayDramaRatingSum);
  return Number((arrayDramaRatingSum / moviesIncludingDrama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const sortedByYear = [...arr].sort((a, b) => {
    if (a["year"] !== b["year"]) {
      return a["year"] - b["year"];
    }
    if (a["title"] < b["title"]) {
      return -1;
    }
    if (a["title"] > b["title"]) {
      return 1;
    }
    return 0;
  });

  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const titles = arr.map((x) => x["title"]);
  const sortedAlphabetically = titles.sort();
  if (sortedAlphabetically.length > 20) {
    return sortedAlphabetically.slice(0, 20);
  } else {
    return sortedAlphabetically;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
