// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((element) => element.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaOnly = moviesArray.filter((element) => {
    if (
      element.genre.includes("Drama") &&
      element.director === "Steven Spielberg"
    ) {
      return element;
    }
  });
  return dramaOnly.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length) {
    let result = moviesArray.reduce((sum, currentValue) => {
      if (!currentValue.score) {
        return sum;
      }
      return sum + currentValue.score;
    }, 0);
    result = result / moviesArray.length;
    console.log(result);
    return Math.round(result * 100) / 100;
  }
  return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length) {
    const dramaMovies = moviesArray.filter((element) => {
      if (element.genre.includes("Drama")) {
        return element;
      }
    });
    return scoresAverage(dramaMovies);
  }
  return 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedMovies = moviesArray.map((element) => element);
  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let alphabetical = moviesArray.map((element) => element);
  alphabetical.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  let topTwenty = [];
  alphabetical.forEach((element, index) => {
    if (index < 20) {
      topTwenty.push(element.title);
    }
  });
  return topTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let movieMinutes = JSON.parse(JSON.stringify(moviesArray));
  let hours = 0;
  let minutes = 0;
  movieMinutes.filter((element) => {
    // find out if there is an "h" in duration
    // store the number before it in hours
    if (element.duration.includes("h")) {
      let indexH = element.duration.indexOf("h");
      hours = parseFloat(element.duration.slice(0, indexH));
    }
    // find out if there is a second element in the duration value
    // if it includes "min" store the value before it in minutes as a number
    if (element.duration.includes("min")) {
      let indexMin = element.duration.indexOf("min");
      minutes = parseFloat(element.duration.slice(indexMin - 2, indexMin));
    }
    minutes = hours * 60 + minutes;
    return (element.duration = minutes);
  });
  return movieMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }
  // create a deep copy of the array
  let clonedMovies = JSON.parse(JSON.stringify(moviesArray));

  // sort the array by year
  clonedMovies.sort((a, b) => {
    return a.year - b.year;
  });
  // Make an array with the uniquified years
  let uniquifiedYears = [];
  for (let i = 0; i < clonedMovies.length; i++) {
    if (!uniquifiedYears.includes(clonedMovies[i].year)) {
      uniquifiedYears.push(clonedMovies[i].year);
    }
  }
  // make an array with the years where the rest of the necessary data can be added
  let allScores = uniquifiedYears.map((year) => {
    return { year: year, score: 0, count: 0 };
  });
  
  // fill the array with the score data and a count of movies per year
  let j = 0;
  clonedMovies.forEach((movie) => {
    if (movie.year === uniquifiedYears[j]) {
      allScores[j].score += movie.score;
      allScores[j].count += 1;
    }
    if (movie.year !== uniquifiedYears[j]) {
      j++;
      allScores[j].score += movie.score;
      allScores[j].count += 1;
    }
  });

  // make an array that holds the year and the calculated average for each year
  let scoresAverage = [];
  allScores.forEach((element) => {
    scoresAverage.push({
      year: element.year,
      average: element.score / element.count,
    });
  });

  // sort the array by average score or if there is a tie, by the older year
  scoresAverage.sort((a, b) => {
    if (a.average === b.average) {
      return a.year - b.year;
    }
    return b.average - a.average;
  });

  // return the top of the array in the answer
  const bestYear = scoresAverage[0].year;
  const yearScore = scoresAverage[0].average;
  return `The best year was ${bestYear} with an average score of ${yearScore}`;
}