// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((element) => {
    return element.director;
  });

  directorsArray.forEach((element) => {
    if (
      directorsArray.indexOf(element) != directorsArray.lastIndexOf(element) &&
      directorsArray.lastIndexOf(element) != -1
    ) {
      directorsArray.splice(element, 1);
    }
  });

  return directorsArray;

  // orrrrrr only add the director to array if includes() is false
  // delete multiple instances of duplicate directors... for each and... firstIndex + lastIndex while last index is not -1 then, remove with splice(lastIndex, 1element to remove)
}

const testArr = [
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    score: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    score: 8.4,
  },
  {
    title: "Paths of Glory 2 - Glororama",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    score: 6.2,
  },
];

console.log(getAllDirectors(testArr));

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

console.log(howManyMovies(testArr2));

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

/*it('should return 0 if an empty array is passed', () => {
    expect(scoresAverage([])).toBe(0);
  });

  it('should return average even if one of the movies does not have score', () => {
    expect(scoresAverage([{ score: 6 }, { score: '' }, {}])).toBe(2);
  });*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
