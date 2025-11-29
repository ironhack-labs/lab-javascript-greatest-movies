// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //const newArr =  [...new Set(allDirectors)]
  const allDirectors = moviesArray.map((oneDirector) => {
    return oneDirector.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  moviesArray.filter((movie) => {
    if (
      movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
    ) {
      count++;
    } else {
      return 0;
    }
  });
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let withScore = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  );

  let sum = withScore.reduce(
    (acc, currentvalue) => acc + currentvalue.score,
    0
  );

  let average = sum / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  let sum = dramaMovies.reduce(
    (acc, currentvalue) => acc + currentvalue.score,
    0
  );
  let average = sum / dramaMovies.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = JSON.parse(JSON.stringify(moviesArray));

  newArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  const newOrder = titles.sort((a, b) => {
    return a.localeCompare(b);
  });
  if (newOrder.length > 20) {
    return newOrder.slice(0, 20);
  }
  return newOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //I was unable to do it =(
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
 //I was unable to do it =(
}
