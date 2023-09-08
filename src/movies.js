// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => [
  ...new Set(moviesArray.map((movies) => movies.director)),
];
//const getAllDirectors = (moviesArray) => moviesArray.map(movies=> movies.director)
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) =>
  moviesArray.filter(
    (drama) =>
      drama.director === "Steven Spielberg" && drama.genre.includes("Drama")
  ).length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return !moviesArray.length
    ? 0
    : +(
        moviesArray.reduce((acc, curr) => acc + (curr.score || 0), 0) /
        moviesArray.length
      ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.genre === 0) {
    return 0;
  }
  let dramaScore = +(
    dramaMovies.reduce((acc, curr) => acc + curr.score, 0) / dramaMovies.length
  ).toFixed(2);
  if (!dramaScore) {
    return 0;
  }
  return dramaScore;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = [...moviesArray];
  newArr.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
    }
    return a.title.localeCompare(b.title);
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleArr = [...moviesArray];
  titleArr.sort((a, b) => {
    if (a.title !== b.title) {
      return a.title.localeCompare(b.title);
    }
  });
  newarr = [];
  for (let i = 0; i < 20 && i < titleArr.length; i++) {
    newarr.push(titleArr[i].title);
  }
  return newarr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

const srtYear = {};
movies.map((element) => {
  const year = element.year;
  const score = element.score || 0;
  if (!srtYear[year]) {
    srtYear[year] = { tScore: 0, yearcount: 0 };
    srtYear[year].tScore = score;
    srtYear[year].yearcount++;
  }
});

console.log(srtYear);
}
