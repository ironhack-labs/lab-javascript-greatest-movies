// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectorsArray = moviesArray.map((movie) => {
    return movie.director;
  });
  console.log(allDirectorsArray);
  return allDirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let allSpielbergDrama = moviesArray.filter((spielbergMovie) => {
    return (
      spielbergMovie.director === "Steven Spielberg" &&
      spielbergMovie.genre.includes("Drama")
    );
  });

  //console.log(allSpielbergDrama);
  return allSpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  //If the array is empty returns 0
  if (moviesArray.length === 0) {
    return 0;
  }
  //returns 0 if there aren't no valid scores
  const validMovies = moviesArray.filter((movie) => {
    const isValidScore = typeof movie.score === "number" && !isNaN(movie.score);
    return isValidScore || movie.score === undefined;
  });

  if (validMovies.length === 0) {
    return 0;
  }

  const sumScores = validMovies.reduce((total, movie) => {
    const movieScore = typeof movie.score === "number" ? movie.score : 0;
    return total + movieScore;
  }, 0);

  const averageScore = sumScores / validMovies.length;

  // Returns the average with 2 decimals
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }
  const totalScore = dramaMovies.reduce((accumulator, movie) => {
    if (typeof movie.score === "number" && !isNaN(movie.score)) {
      return accumulator + movie.score;
    }
    return accumulator;
  }, 0);

  const averageScore = totalScore / dramaMovies.length;

  if (isNaN(averageScore)) {
    return 0;
  }
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Cloning the array to avoid modifying the original
  const georgeClonedArray = moviesArray.slice();

  // Orders the array ascending by year and then by title
  georgeClonedArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return georgeClonedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const georgeClonedArray = moviesArray.slice();
  const titles = georgeClonedArray.map((movieName) => movieName.title);
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const georgeClonedArray = moviesArray.slice(); //I create a new array to contain the shallow copy created by the .slice() method
  function toMinutesToMidnight(time) {
    //I create an array which contains hours and minutes, with the method .split I cut the string at the space
    const hours = time.split(" ");
    let minutes = 0;
    //I turn hours in minutes and add everything to the variable minutes and then I turn strings into numbers
    hours.forEach((hour) => {
      if (hour.includes("h")) {
        minutes += parseInt(hour) * 60;
      } else if (hour.includes("min")) {
        minutes += parseInt(hour);
      }
    });
    return minutes;
  }
  //Calling of the function
  const minuteMaid = georgeClonedArray.map((movie) => {
    const andNowKiss = toMinutesToMidnight(movie.duration);
    return { title: movie.title, duration: andNowKiss };
  });
  return minuteMaid;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {
//   if (moviesArray.length === 0) return null;
//   //Empty object to store the store values
//   const moviesAvg = {};
//   moviesArray.forEach((movie) => {
//     const year = movie.year;
//     //Initializing the key "year"
//     if (!moviesAvg[year]) moviesAvg[year] = { score: 0, count: 0 };

//     //adding the scores to the corresponding year
//     moviesAvg[year].score += movie.score;
//     moviesAvg[year].count++;
//   });
//   //Getting the results
//   const bestYear = 0;
//   const bestAvg = 0;
//   bestYearAvg.forEach((yearValue, year) => {
//     const average = yearValue.score / yearValue.count;
//     if (average > bestAvg || (average === bestAvg && year < bestYear)) {
//       bestAvg = average;
//       bestYear = year;
//     }
//   });
//   return bestYear;
// }
// //It doesn't work, I can't understand why
