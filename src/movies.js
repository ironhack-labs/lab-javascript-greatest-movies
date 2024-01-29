// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => {
    return element.director;
  });
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

function howManyMovies(moviesArray) {
  return moviesArray.reduce((accumulator, currentValue) => {
    return accumulator +
    ((currentValue.director.includes("Steven Spielberg") &&
      currentValue.genre.includes("Drama"))
      ? 1
      : 0);
  }, 0);
}

const testArr2 = [
    {
      director: 'Steven Spielberg',
      genre: ['Action', 'Drama', 'Thriller']
    },
    {
      director: 'James McTeigue',
      genre: ['Action', 'Drama']
    },
    {
      director: 'Karl Moses',
      genre: ['Thriller', 'Drama']
    },
    {
      director: 'Steven Spielberg',
      genre: ['Drama', 'Thriller']
    }
  ]

  console.log(howManyMovies(testArr2));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
