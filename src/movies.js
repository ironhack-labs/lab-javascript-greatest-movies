// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  return moviesArray
    .map((el) => el.director)
    .filter((el, idx, arr) => arr.indexOf(el) == idx);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (el) => el.director === "Steven Spielberg" && el.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  return Number(
    (
      moviesArray.reduce(
        (acc, curr) => acc + (curr.score ? Number(curr.score) : 0),
        0
      ) / moviesArray.length
    ).toFixed(2)
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMov = moviesArray.filter(function (el) {
    return el.genre == "Drama";
  });

  return dramaMov.reduce(function (acc, val) {
    return +(acc + val.score / dramaMov.length).toFixed(2);
  }, 0);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .slice()
    .sort(function (a, b) {
      return a.title.localeCompare(b.title);
    })
    .map((el) => el.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArr = [];
  moviesArray.forEach((element) => {
    const hoursStr = element.duration.split(" ")[0];
    const minStr = element.duration.split(" ")[1];
    const hours = hoursStr ? Number(hoursStr.split("h")[0]) : 0;
    const mins = minStr ? Number(minStr.split("min")[0]) : 0;
    newArr.push({
      title: element.title,
      year: element.year,
      director: element.director,
      genre: element.genre,
      score: element.score,
      duration: hours * 60 + mins,
    });
  });
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
