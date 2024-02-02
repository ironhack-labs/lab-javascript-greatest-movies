// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => movie.director);

  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //First we filter ALL Spielberg Movies
  const spielbergMovies = moviesArray.filter(
    (movie) => movie.director == "Steven Spielberg"
  );

  //We filter those which include 'Drama' in the genre array
  const spielbergDramaMovies = spielbergMovies.filter((movie) =>
    movie.genre.includes("Drama")
  );

  //We calculate number of movies by finding the length of the array
  const numberOfSpielbergMovies = spielbergDramaMovies.length;

  //We return the filtered Spielberg Movies
  return numberOfSpielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }

  const sumOfScores = moviesArray.reduce((acum, currentValue) => {
    // Modified score to equal 0 in case score is not defined
    currentValue.score = currentValue.score || 0;
    return acum + currentValue.score;
  }, 0);

  const averageScore = sumOfScores / moviesArray.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  //First we filter Drama movies
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length == 0) return 0;
  //Calculate total score
  const sumOfScores = dramaMovies.reduce((acum, currentValue) => {
    return acum + currentValue.score;
  }, 0);

  //Calculate Average
  const averageScore = sumOfScores / dramaMovies.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by yea r, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = [...moviesArray];

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
  //First we copy the array
  const newArr = [...moviesArray];

  let titlesOnlyArray = [];

  //Then we push the only the titles into a new array
  for (let i = 0; i < newArr.length; i++) {
    titlesOnlyArray.push(newArr[i].title);
  }

  //We copied the 'filtered' array into a new one
  let newSortedArray = [...titlesOnlyArray];

  //And last, we sort it
  let sortedTitlesOnlyArray = newSortedArray.sort();

  return sortedTitlesOnlyArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
