// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const newArr = [...movies];
  const otherArr = newArr.map((el) => el.director);
  return otherArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/* function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
} */

/* function howManyMovies(movies) {
  let total = movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return total.length;
} */

const howManyMovies = (arr) =>
  arr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
  if (arr.length === 0) return 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rate) {
      newArr.push({ rate: Number(arr[i].rate) });
    } else {
      newArr.push({ rate: 0 });
    }
  }
  let total =
    newArr.reduce((acc, curr) => (acc += curr.rate), 0) / newArr.length;
  return Number(total.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  if (arr.length === 0) return 0;
  const filteredArr = arr.filter((el) => el.genre.includes("Drama"));
  if (filteredArr.length === 0) return 0;
  const getAvg =
    filteredArr.reduce((acc, curr) => (acc += curr.rate), 0) /
    filteredArr.length;

  return Number(getAvg.toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
  const sorted = [...arr];
  sorted.sort((a, b) => {
    return a.year - b.year;
  });

  return sorted;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
  const tempArr = [...arr];
  const newArr = [];

  for (let i = 0; i < tempArr.length; i++) {
    newArr.push(tempArr[i].title);
  }

  newArr.sort((a, b) => a.localeCompare(b));

  return newArr.slice(0, 20); //sorted.slice(0,5);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {
  return;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
