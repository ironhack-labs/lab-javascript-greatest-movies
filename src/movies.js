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
  console.log("Sorted Cloned Array: ", clonedMovies);
  let scoresAndYears = [];
  // set the initial value for the year to the first elements year
  let currentYear = scoresAndYears[0].year;
  let combinedScore = 0;
  // filter the elements with the same year
  scoresAndYears = clonedMovies.map((element, index) => {
    if (element.year === currentYear) {
      combinedScore += element.score;
    }
    // if the function arrives at an element with a different year
    // it will switch the currentYear value to that year and call the same function
    if (element.year !== currentYear) {
      currentYear = element.year;
      combinedScore += element.score;
    }
    return { year: currentYear, score: combinedScore };
  });

  // sort the array by average score and determine the best
  scoresAndYears.sort((a, b) => {
    a.score - b.score;
  });
  console.log("Scores and Years sorted: ", scoresAndYears);
  const bestYear = scoresAndYears[0].year;
  const yearScore = scoresAndYears[0].score;
  console.log(scoresAndYears);
  return `The best year was ${bestYear} with an average score of ${yearScore}`;
}

moviesTest = [
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.8,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.8,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    score: 8.8,
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.7,
  },
  {
    title: 'One Flew Over the Cuckoo"s Nest',
    year: 1975,
    director: "Milos Forman",
    duration: "2h 13min",
    genre: ["Drama"],
    score: 8.7,
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Crime", "Drama"],
    score: 8.7,
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    score: 8.7,
  },
];
