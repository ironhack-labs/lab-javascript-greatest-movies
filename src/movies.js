// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);

  let uniqueDirectors = directors.filter(function (director, index, allArr) {
    return allArr.indexOf(director) === index;
  });

  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaOfSteven = moviesArray.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });

  return dramaOfSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let sumOfScore = moviesArray.reduce(function (acumulator, elem) {
    if ("score" in elem && elem.score !== "") {
      return acumulator + elem.score;
    } else return acumulator + 0;
  }, 0);
  if (sumOfScore === 0) {
    return 0;
  }
  return Math.round((sumOfScore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(function (element) {
    return element.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let averScoreOfDrama = dramaMovies.reduce(function (sum, element) {
    return sum + element.score;
  }, 0);

  return Math.round((averScoreOfDrama / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyOfArr = JSON.parse(JSON.stringify(moviesArray));

  let orderAscending = copyOfArr.sort((elem1, elem2) => {
    if (elem1.year < elem2.year) return -1;
    if (elem1.year > elem2.year) return 1;
    if (elem1.title > elem2.title) return 1;
    if (elem1.title < elem2.title) return -1;
    return 0;
  });

  return orderAscending;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesOfMovie = moviesArray.map((elem1) => elem1.title);

  return titlesOfMovie.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  let hours = JSON.parse(JSON.stringify(moviesArray));

  hours.forEach((element) => {
    let durationV2 = element.duration.split(" ");
    let hoursToMinutes = parseInt(durationV2[0]) * 60;
    if (durationV2.length === 2) hoursToMinutes += parseInt(durationV2[1]);

    element.duration = hoursToMinutes;
  });

  return hours;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  let years = moviesArray.map((element) => element.year);
  let unifiedYears = years.filter(
    (element, index, array) => array.indexOf(element) === index
  );

  let maxAvg = 0;
  let yearOfMaxAvg;

  unifiedYears.forEach((year) => {
    let moviesOfYear = moviesArray.filter((element) => element.year === year);

    let scores = moviesOfYear.reduce((sum, element) => sum + element.score, 0);
    const avgScore = scores / moviesOfYear.length;

    if (maxAvg < avgScore || (maxAvg === avgScore && yearOfMaxAvg > year)) {
      maxAvg = avgScore;
      yearOfMaxAvg = year;
    }
  });
  return `The best year was ${yearOfMaxAvg} with an average score of ${maxAvg}`;
}
