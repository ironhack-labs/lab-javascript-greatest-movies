// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArray = moviesArray.map((element) => {
    return element.director;
  });
  return directorArray;
}

const testArr = [
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    score: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    score: 8.4,
  },
];

console.log(getAllDirectors(testArr));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let sum = 0;

  sum = moviesArray.reduce((accumulator, currentValue) => {
    if (
      currentValue.director === "Steven Spielberg" &&
      currentValue.genre.includes("Drama")
    ) {
      accumulator += 1;
    } else {
      accumulator += 0;
    }
    accumulator = accumulator;
    return accumulator;
  }, 0);
  return sum;
}

const testArr2 = [
  {
    director: "Steven Spielberg",
    genre: ["Action", "Drama", "Thriller"],
  },
  {
    director: "James McTeigue",
    genre: ["Action", "Drama"],
  },
  {
    director: "Karl Moses",
    genre: ["Thriller", "Drama"],
  },
  {
    director: "Steven Spielberg",
    genre: ["Drama", "Thriller"],
  },
];

console.log(howManyMovies(testArr2));
console.log("hello everyone");

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scores = 0;
  if (!moviesArray.length) {
    return 0;
  } else {
    scores = moviesArray.reduce((accumulator, currentValue) => {
      if (currentValue.score == "" || Object.keys(currentValue).length == 0) {
        accumulator += 0;
      } else {
        accumulator += currentValue.score;
      }
      return accumulator;
    }, 0);
  }
  let average = scores / moviesArray.length;
  return parseFloat(average.toFixed(2));
}
const scoresArray = [{ score: 8 }, { score: 9 }, { score: 9 }];
console.log(scoresAverage(scoresArray));
console.log(scoresAverage([{ score: 6 }, { score: "" }, {}]));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movies) => movies.genre.includes("Drama"));
  if (!drama.length) {
    return 0;
  }
  let count = drama.reduce((acc, cur) => {
    acc += cur.score;
    return acc;
  }, 0);

  return +(count / drama.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyArray = [...moviesArray];
  const sortedMovies = copyArray.toSorted((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyArray = [...moviesArray];
  const sortedMovies = copyArray.toSorted((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const mappedMovies = sortedMovies.map((element) => element.title);

  return mappedMovies.slice(0, 20);
}

const alphaArray = [
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
  { title: "aab" },
  { title: "bab" },
  { title: "acb" },
];

console.log(orderAlphabetically(alphaArray));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
