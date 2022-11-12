// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(moviesArray) {
//     const allDirectors = moviesArray.map(function (element) {
//         return element.director;
//     })
//     return allDirectors;
// }

// another approach with arrow function
const getAllDirectors = (moviesArray) => {
  const allDirectors = moviesArray.map((element) => element.director);
  return allDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(moviesArray) {
//     const spielbergDrama = moviesArray.filter(function (element) {
//         return element.director === 'Steven Spielberg' && element.genre.includes('Drama')
//     })
//     return spielbergDrama.length;
// }

// another approach with arrow function
const howManyMovies = (moviesArray) => {
  const spielbergDrama = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );
  return spielbergDrama.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const scoresAverage = (moviesArray) => {
  if (!moviesArray.length) return 0;
  else {
    const scoresArray = moviesArray.filter((element) => element.score); // returns an array with objects where score exists
    const scoresSum = scoresArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue.score,
      0
    );
    return Number((scoresSum / moviesArray.length).toFixed(2));
    // return Math.round((scoresSum / moviesArray.length) * 100) / 100; // another approach
  }
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
  if (!moviesArray.length) return 0;
  else {
    const scoresArray = moviesArray.filter((element) =>
      element.genre.includes("Drama")
    );
    if (!scoresArray.length) return 0;
    const scoresSum = scoresArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue.score,
      0
    );
    return Number((scoresSum / scoresArray.length).toFixed(2));
  }
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArray) => {
  const copyMoviesArray = [...moviesArray];
  // another approach, but how to write here a arrow function??
  //   const copyMoviesArray = moviesArray.map(function (movies) {
  //     return movies;
  //   });
  const sortedArray = copyMoviesArray.sort((a, b) => {
    if (a.year === b.year) {
      // another approach with localCampare --> doesn't work with all tests, why??
      //   return a.title.localCompare(b.title);
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    } else {
      return a.year - b.year;
    }
  });
  return sortedArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
orderAlphabetically = (moviesArray) => {
  const copyMoviesArray = [...moviesArray];
  const first20Movies = copyMoviesArray.slice(0, 21);
  const sortedFirst20Movies = first20Movies.sort((a, b) => {
    return a.title - b.title;
  });
  return sortedFirst20Movies;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
