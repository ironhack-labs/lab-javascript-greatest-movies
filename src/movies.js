// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newArray = [...new Set(moviesArray)];
  return newArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  let averageScore = moviesArray.reduce((acc, movie) => {
    if (movie.score != null) {
      acc += movie.score;
    }
    return acc;
  }, 0);
  averageScore = Math.round((averageScore / moviesArray.length) * 100) / 100;
  return averageScore;
}

// console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // filter for only drama movies
  let onlyDramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  console.log(onlyDramaMovies);
  // Return 0 if no drama movies
  if (onlyDramaMovies.length == 0) {
    return 0;
  }
  // return total sum of all score for this new array of drama movies
  let dramaAverage = onlyDramaMovies.reduce((acc, movie) => {
    if (movie.score != null) {
      acc += movie.score;
    }
    return acc;
  }, 0);
  let averageScore =
    Math.round((dramaAverage / onlyDramaMovies.length) * 100) / 100;
  return averageScore;
}

// console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // copy original array
  let copy = [...moviesArray];
  // compare by year
  function compareByYearName(a, b) {
    let yearDiff = a.year - b.year;
    if (yearDiff == 0) {
      return a.title.localeCompare(b.title);
    }
    return yearDiff;
  }
  // sort by Year
  copy.sort(compareByYearName);
  return copy;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // only return titles
  let onlyTitles = moviesArray.map((movie) => movie.title);
  // sort titles alphabetically
  let sortTitles = onlyTitles.sort();
  return sortTitles.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // copy array
  let copy = structuredClone(moviesArray);
  // hours * 60 + mins: get amount of movie duration
  const result = copy.reduce((acc, movie) => {
    // acc = l'array avec les objects movies
    // IDENTIFY HOURS AND MINUTES
    // let convert = movie.duration.replace("h", "").replace("min", "");
    let hours;
    let minutes;
    if (movie.duration.includes("h")) {
      let convert = movie.duration.split("h");
      hours = Number(convert[0]);
      minutes = Number(convert[1].slice(0, -3));
    } else {
      hours = 0;
      minutes = Number(movie.duration.splice(0, -3));
    }

    movie.duration = hours * 60 + minutes;
    acc.push(movie);
    return acc;
  }, []);
  return result;
}

console.log(turnHoursToMinutes(movies));
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length == 0) {
    return null;
  }
  // print out all the years array
  let allYears = moviesArray.map((movie) => movie.year);

  // print out unique arrays of years
  let uniqueYears = [...new Set(allYears)];

  // create object with year, and score
  let obj = [];

  for (let year of uniqueYears) {
    const temp = {};
    temp.year = year;
    temp.score = getAveragePerYear(year);
    obj.push(temp);
  }

  // find the average score per year
  function getAveragePerYear(year) {
    let scorePerYear = moviesArray.filter((movie) => movie.year == year);

    let perYearAverage = scorePerYear.reduce((acc, movie) => {
      if (movie.score != null) {
        acc += movie.score;
      }
      return acc;
    }, 0);
    let averageScore =
      Math.round((perYearAverage / scorePerYear.length) * 100) / 100;
    return averageScore;
  }
  // find the maximum amount score
  let maxScore = -Infinity;
  let maxYear = 0;
  for (let element of obj) {
    if (element.score > maxScore) {
      maxScore = element.score;
      maxYear = element.year;
    }
    if (element.score === maxScore) {
      maxYear = Math.min(maxYear, element.year);
    }
  }

  return `The best year was ${maxYear} with an average score of ${maxScore}`;
}
