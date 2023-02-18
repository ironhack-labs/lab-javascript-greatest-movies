// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => movie.director);
  /* To delete duplicates, the condition for filtering will be
  the following. If there is a duplicate the index won't be equal*/
  const filteredDirectors = directorsArray.filter((director, idx) => {
    return directorsArray.indexOf(director) === idx;
  });
  return filteredDirectors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return (
      // Simply filter the array and get the ones that fulfill the condition
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  // Get the sum of all scores iterating with reduce
  const sum = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  // Calculate the average and round it to 2 decimals
  return Math.round((sum / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // We get a new array which only contains Drama movies, using filter
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  // We can re use the last implemented function to calculate the average
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // We use slice so we dont modify the original array
  // Ascending order (sorting with a-b)
  return moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      // in case years are equal, localeCompare does the same with strings
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return (
    moviesArray
      .map((movie) => movie.title)
      // sorts alphabetically by default
      .sort()
      // First 20 elements, from 1 to 20
      .slice(0, 20)
  );
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // map through the array and split duration property
  return moviesArray.map((movie) => {
    const duration = movie.duration.split(" ");
    let minutes = 0;
    let hours = 0;
    // If there are 2 elements it means the format includes hours and minutes
    if (duration.length === 2) {
      hours = parseInt(duration[0]);
      minutes = parseInt(duration[1]);
      // If there are not, we need to see if the only element is "hours" or "minutes"
    } else if (duration[0].indexOf("h") !== -1) {
      // parseInt allows us to avoid letters of a string and convert it to number
      hours = parseInt(duration[0]);
    } else {
      minutes = parseInt(duration[0]);
    }
    //Calculate total minutes
    const totalMinutes = hours * 60 + minutes;
    // Not changing the original array!
    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  // Handle case when array length is only one, because reduce would fail in this case.
  if (moviesArray.length === 1) {
    return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
  }
  //First we reduce the function to get an object with key year that has another object inside
  const scoreByYear = moviesArray.reduce((acc, movie) => {
    // While iterating, if year already exists just sum the scores and increase by 1 the count
    if (movie.year in acc) {
      acc[movie.year].totalScore += movie.score;
      acc[movie.year].count++;
      // If year does not exist, add it
    } else {
      acc[movie.year] = { totalScore: movie.score, count: 1 };
    }
    return acc;
  }, {});

  let bestYear = 0;
  let bestScore = 0;
  // Once we have the object, we iterate over all keys (years)
  // In each iteration we compare the scores and determine which year is the best
  for (let year in scoreByYear) {
    let average = scoreByYear[year].totalScore / scoreByYear[year].count;
    if (average > bestScore) {
      bestScore = average;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestScore.toFixed(1)}`;
}
