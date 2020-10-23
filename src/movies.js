// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  const result = arr.map((item) => item.director);
  return result;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const result = array.filter(
    (item) =>
      item.director == "Steven Spielberg" && item.genre.includes("Drama")
  );
  console.log(result);
  return result.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  const result = array.reduce(function (total, element) {
    let averageRate = total + element.rate;
    return averageRate;
  }, 0);
  const floatingAverage = result / array.length;
  if (array.length == 0) {
    return 0;
  } else {
    return Number(floatingAverage.toFixed(2));
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const filteredMovies = array.filter((item) => item.genre.includes("Drama"));
  if (filteredMovies.length > 0) {
    return ratesAverage(filteredMovies);
  } else return 0;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const myMovies = array.map((item) => item.year + item.title);
  myMovies.sort();
  let moviesyear = myMovies.map((item) => item.slice(0, 4));
  let moviesname = myMovies.map((item) => item.slice(4));
  return moviesyear.map((item, i) => {
    return { title: moviesname[i], year: item };
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const firstTwentyMovies = [];

function orderAlphabetically(array) {
  const movietitles = array.map((item) => item.title);
  movietitles.sort();
  if (array.length < 20) {
    const sortedMovieTitles = movietitles.map((item) => {
      return { title: item.title };
    });
    return sortedMovieTitles;
  } else {
    for (i = 0; i < 20; i++) {
      firstTwentyMovies.push(movietitles[i].title);
    }
  }
  finalresult = firstTwentyMovies.map((item) => {
    return { title: item.title };
  });
  return finalresult;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
