// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => {
    return movie.director;
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const totalScore = moviesArray.reduce((acc, movie) => {
      if (movie.score) {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0);
    const avarageScore =
      Math.round((totalScore / moviesArray.length) * 100) / 100;
    return avarageScore;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = [...moviesArray];
  newMoviesArray.sort((el1, el2) => {
    if (el1.year !== el2.year) {
      return el1.year - el2.year;
    } else {
      const title1 = el1.title;
      const title2 = el2.title;
      return title1.localeCompare(title2);
    }
  });
  return newMoviesArray;
}

// const arr = [4, 7, 1, 3];

// function orderNum(array) {
//   return array.sort((a, b) => {
//     return b - a;
//   });
// }

// console.log(orderNum(arr));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitles = moviesArray.map((movie) => {
    return movie.title;
  });
  movieTitles.sort((current, next) => {
    return current.localeCompare(next);
  });
  console.log(movieTitles);
  // if (movieTitles.length > 20) {
  //   console.log(movieTitles.slice(0, 20));
  return movieTitles.slice(0, 20);
  // } else {
  //   return movieTitles;
  // }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
