// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((element) => {
    return element.director;
  });

  // If director shows up multiple times in array, splice the first instance
  directorsArray.forEach((element) => {
    if (
      directorsArray.indexOf(element) != directorsArray.lastIndexOf(element) &&
      directorsArray.lastIndexOf(element) != -1
    ) {
      directorsArray.splice(element, 1);
    }
  });

  return directorsArray;
}

function howManyMovies(moviesArray) {
  return moviesArray.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (currentValue.director.includes("Steven Spielberg") &&
      currentValue.genre.includes("Drama")
        ? 1
        : 0)
    );
  }, 0);
}

const testArr2 = [
  {
    director: "Steven Spielberg",
    genre: ["Action", "Drama", "Thriller"],
  },
  {
    director: "James McTeigue",
    genre: ["Action", "Drama"],
  },
  {
    director: "Karl Moses",
    genre: ["Thriller", "Drama"],
  },
  {
    director: "Steven Spielberg",
    genre: ["Drama", "Thriller"],
  },
];

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    average = moviesArray.reduce((accumulator, currentValue) => {
      if (currentValue.score != "" && Object.keys(currentValue).length != 0) {
        return (accumulator += currentValue.score);
      } else {
        return (accumulator = accumulator);
      }
    }, 0);
    average /= moviesArray.length;
    return parseFloat(average.toFixed(2));
  }
  return 0;
}

console.log(
  `Should be 3.8 = ${scoresAverage(
    testArr
  )} and its of type ${typeof scoresAverage(testArr)}`
);
console.log(`Should be 0 if empty - ${scoresAverage([])}`);
console.log(
  `Should be 2 if one empty - ${scoresAverage([
    { score: 6 },
    { score: "" },
    {},
  ])}`
);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArray = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );
  return scoresAverage(filteredArray);
}

console.log(dramaMoviesScore(testArr));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray = moviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  let newArray = [];
  moviesArray.forEach((element) => {
    newArray.push(element);
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
  let titles = moviesArray.map((element) => {
    return element.title;
  });

  if (titles.length > 20) {
    titles = titles.slice(0, 20);
  }

  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
