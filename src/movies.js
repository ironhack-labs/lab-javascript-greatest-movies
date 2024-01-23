// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  // console.log(moviesArray)
  const director = moviesArray.map((movie) => {
    // console.log("DIrector:", movie.director);
    return movie.director;
  });
  //   console.log(director);
  return director;
}

// getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let total = 0;
  moviesArray.filter((movieObj) => {
    const genre = movieObj.genre;
    // console.log(genre.includes("Drama"));

    if (movieObj.director === "Steven Spielberg" && genre.includes("Drama")) {
      //   console.log("Conditions apply");
      //   console.log(total)
      total++;
      //   console.log("Tottt",total)
      return total;
    }
  });

  return total;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  //   console.log("####################################");
  if (moviesArray.length === 0) {
    return 0;
  }

  const scores = moviesArray.map((movie) =>
    typeof movie.score === "number" ? movie.score : 0
  );
  //   console.log(scores);

  const sumOfAll = scores.reduce((acc, curVal) => {
    // console.log("return", acc + curVal.score);
    return acc + curVal;
  }, 0);

  //   console.log("Sum:", sumOfAll);
  //   console.log("Calc:", (sumOfAll / moviesArray.length).toFixed(2));
  const avarage = (sumOfAll / moviesArray.length).toFixed(2);
  //   console.log("Avarage:", Number(avarage));

  return Number(avarage);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  console.log(dramaMovies);
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// should order movies with the same year by their title, alphabetically
function orderByYear(moviesArray) {
  console.log("####################################");
  if (moviesArray.length === 0) {
    return 0;
  }
  const newArray = moviesArray;
  newArray.sort((a, b) => a.year - b.year);
  console.log(newArray);
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
