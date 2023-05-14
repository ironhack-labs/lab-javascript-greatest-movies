// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((nameDirector) => nameDirector.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovie = moviesArray.filter((drama) =>
    drama.genre.includes("Drama")
  );
  const spielbergMovie = dramaMovie.filter(
    (movie) => movie.director === "Steven Spielberg"
  );

  return spielbergMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let result;
  const avarage = moviesArray.reduce((acc, currentItem) => {
    if (currentItem.score) {
      return acc + currentItem.score;
    } else {
      return acc;
    }
  }, 0);
  result = avarage / moviesArray.length;
  const decimals = Math.round(result * 100) / 100;
  return decimals;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const movies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  let result;
  const dramaScore = movies.reduce((acc, currentItem) => {
    return acc + currentItem.score;
  }, 0);
  result = dramaScore / movies.length;
  const decimals = Math.round(result * 100) / 100;

  if (decimals) {
    return decimals;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArry = [];
  moviesArray.forEach((movie) => newArry.push(movie));

  const sortArrYear = newArry.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    return a.title.localeCompare(b.title);
  });

  return sortArrYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = moviesArray.map((nameTitle) => nameTitle.title);
    const titleSorted = movies.sort((a,b)=> a.localeCompare(b))
    if(titleSorted.length > 20){
        return titleSorted.splice(0, 20)
    }
  return titleSorted;
  

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
