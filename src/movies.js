// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const AllDirectors = moviesArray.map((elem) => elem.director);
  return AllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movies = moviesArray.filter(
    (elem) =>
      elem.director === "Steven Spielberg" && elem.genre.includes("Drama")
  );
  return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const rates = moviesArray.filter((elem) => typeof elem.score === "number");
  const sumRates = rates.reduce((acc, elem) => acc + elem.score, 0);
  let ratesAvg;
  if (moviesArray.length === 0) ratesAvg = 0;
  else ratesAvg = sumRates / moviesArray.length;
  const avgFixed = Number(ratesAvg.toFixed(2));
  return avgFixed;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter((elem) => elem.genre.includes("Drama"));
  const dramaAverage = scoresAverage(dramaArray);
  return dramaAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray));

  movies.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else 0;
    } else {
      return a.year - b.year;
    }
  });
  return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray));
  movies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    else 0;
  });
  if (movies.length > 20) movies.splice(20);
  const moviesTitle = movies.map((elem) => elem.title);
  return moviesTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const movies = JSON.parse(JSON.stringify(moviesArray));
  movies.map((elem) => {
    if (elem.duration.includes("h") && elem.duration.includes("min")) {
      const duration =
        Number(elem.duration.substring(0, 1)) * 60 +
        Number(elem.duration.substring(3, 5));
      elem.duration = duration;
    } else if (elem.duration.includes("h")) {
      const duration = Number(elem.duration.substring(0, 1)) * 60;
      elem.duration = duration;
    } else {
      const duration = Number(
        elem.duration.substring(0, elem.duration.length - 1)
      );
      elem.duration = duration;
    }
  });
  return movies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const movies = JSON.parse(JSON.stringify(moviesArray));
  const moviesFiltered = [{}];
  movies.forEach((element) => {
    if (element.year in moviesFiltered[0]) {
      moviesFiltered[0][element.year].push(element.score);
    } else {
      moviesFiltered[0][element.year] = [element.score];
    }
  });

  const moviesYears = Object.keys(moviesFiltered[0]);

  moviesYears.forEach((elem) => {
    const yearLength = moviesFiltered[0][elem].length;
    moviesFiltered[0][elem] = moviesFiltered[0][elem].reduce(
      (acc, elem) => acc + elem
    );
    const average = moviesFiltered[0][elem] / yearLength;
    moviesFiltered[0][elem] = Number(average.toFixed(2));
  });
  const yearsWithAverage = Object.entries(moviesFiltered[0]);
  let bestAverage = 0;
  let bestYear = 0;
  yearsWithAverage.forEach((elem) => {
    if (bestAverage < elem[1]) {
      bestAverage = elem[1];
      bestYear = elem[0];
    }
  });
  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
