// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  //   const scoresArray = moviesArray.map((movie) => movie.score);
  //   const validScores = scoresArray.filter((movie) => movie != undefined);
  //   const totalScore = validScores.reduce((total, score) => total + score, 0);
  let totalScore = moviesArray
    .map((movie) => movie.score) //create new array containing scores only
    .filter((movie) => movie != undefined) //filter out empty objects
    .reduce((total, score) => total + score, 0); //get total score of valid objects
  let average = totalScore / moviesArray.length;
  let roundedAverage = Math.round(average * 100) / 100;
  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  for (let movie of moviesArray) {
    if (movie.genre.includes("Drama")) {
      let dramaMovies = moviesArray.filter((movie) =>
        movie.genre.includes("Drama")
      );
      let dramaScores = dramaMovies.map((movie) => movie.score);
      let totalDramaScore = dramaScores.reduce(
        (total, score) => total + score,
        0
      );
      let average = totalDramaScore / dramaScores.length;
      let roundedAverage = Math.round(average * 100) / 100;
      return roundedAverage;
    } else {
      return 0;
    }
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let byYear = moviesArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return [...new Set(byYear)];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesOnly = moviesArray
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    })
    .map((movie) => movie.title);
  if (titlesOnly.length > 20) {
    return titlesOnly.slice(0, 20);
  } else {
    return titlesOnly;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const duration = moviesArray.map((movie) => movie.duration);
  const times = duration
    .join()
    .replaceAll("h", "")
    .replaceAll("min", "")
    .split(",")
    .join(" ")
    .split(" ");
  const timesNum = times.map((time) => parseInt(time));
  const hours = timesNum.map((hour) => hour);
  let arr = [];
  for (let i = 0; i < hours.length; i += 2) {
    arr.push(hours[i] * 60 + hours[i + 1]);
  }
  for (let i = 0; i < moviesArray.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (moviesArray[i].duration === "2h") {
        //not dynamic :)
        moviesArray[i].duration = 120;
      } else {
        moviesArray[i].duration = arr[i];
      }
    }
  }
  return [...new Set(moviesArray)];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
