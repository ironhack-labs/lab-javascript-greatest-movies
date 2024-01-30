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
      directorsArray.splice(directorsArray.indexOf(element), 1);
    }
  });

  return directorsArray;
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
    title: "Django 2",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h",
    genre: ["Drama", "Western"],
    score: 8.4,
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

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArray = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );
  return scoresAverage(filteredArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray = moviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  // Map a new array and return it
  let newArray = moviesArray.map((element) => element);
  return newArray;
}

const testArrayyyy = [
  { title: 'abc', year: 2002 },
  { title: 'bac', year: 1982 },
  { title: 'aab', year: 1982 }
];

console.log(orderByYear(testArrayyyy));

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
function turnHoursToMinutes(moviesArray) {
  // Regex to capture all digits before "h" and all digits before "m"
  let regexHours = /\d+h/;
  let regexMin = /\d+m/;

  // Extract duration in hours and minutes. Parse from string to integer and convert hours to minutes
  let newArray = moviesArray.map((element) => {
    let hours = element.duration.match(regexHours);
    let minutes = element.duration.match(regexMin);
    if (minutes == null) minutes = 0;
    let newDuration = parseInt(hours) * 60 + parseInt(minutes);
    return {
      title: element.title,
      year: element.year,
      director: element.director,
      duration: newDuration,
      genre: element.genre,
      score: element.score,
    };
  });

  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // Control for empty array and single element array
  if (moviesArray.length == 0) {
    return null;
  } else if (moviesArray.length == 1) {
    return (
      "The best year was " +
      moviesArray[0].year +
      " with an average score of " +
      moviesArray[0].score
    );
  } else {
    // Map a new array with only years
    let orderedYearsArray = moviesArray.map((element) => {
      return { year: element.year, score: element.score };
    });

    // In ascending order
    orderedYearsArray.sort((a, b) => a.year - b.year);

    // For each year, find the average but only save the highest average score
    let topAvg = 0;
    let topYear = 0;
    let currentAvg = 0;
    let j = 0;

    // Iterate through, adding scores (checking for multiple yearly entries) and recording highest year and average
    for (let i = 0; i < orderedYearsArray.length; i++) {
      numFilms = 1;
      yearScore = orderedYearsArray[i].score;
      if (
        orderedYearsArray[i + 1].year == orderedYearsArray[i].year &&
        i + 1 < orderedYearsArray.length
      ) {
        j = i;
        while (
          j + 1 < orderedYearsArray.length &&
          orderedYearsArray[j + 1].year == orderedYearsArray[j].year
        ) {
          yearScore += orderedYearsArray[j + 1].score;
          numFilms++;
          j++;
        }
        i = j;
      }
      currentAvg = yearScore / numFilms;

      if (currentAvg > topAvg) {
        topAvg = currentAvg;
        topYear = orderedYearsArray[i].year;
      }
      yearScore = 0;
    }
    return (
      "The best year was " + topYear + " with an average score of " + topAvg
    );
  }
}
