// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = [];
  moviesArray.forEach((element) => {
    allDirectors.push(element.director);
  });
  return allDirectors;
  // FALTA HACER EL BONUS ITERATION 1.1
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  moviesArray.forEach((element) => {
    if (
      element.director === "Steven Spielberg" &&
      element.genre.includes("Drama")
    ) {
      count++;
    }
  });
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    let count = 0;
    moviesArray.forEach((element) => {
      if (!element.hasOwnProperty("score") || element.score === "") {
        count += 0;
      } else {
        count += element.score;
      }
    });
    const result = count / moviesArray.length;
    return Number(result.toFixed(2));
    //return Math.round(result*100)/100
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let count = 0;
  let timesLoop = 0;
  moviesArray.forEach((element) => {
    if (element.genre.includes("Drama")) {
      count += element.score;
      timesLoop++;
    }
  });
  const result = count / timesLoop;
  if (timesLoop === 0) {
    return 0;
  } else {
    return Number(result.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesOrdered = moviesArray.map((element) => element);
  moviesOrdered.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.toLowerCase().localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabeticArray = moviesArray
    .map((element) => element)
    .sort((a, b) => {
      if (typeof a.title === "string" && typeof b.title === "string") {
        return a.title.toLowerCase().localeCompare(b.title);
      }
    })
    .map((element) => element.title)
    .splice(0, 20);
  return alphabeticArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  const arrayMinutes = moviesArray.map((element) => {
    const arrayMinutesDuration = { ...element };
    arrayMinutesDuration.duration = element.duration
      .split(" ")
      .reduce((acc, value) => {
        let number = parseInt(value);
        if (value.includes("h")) {
          number *= 60;
        }
        return acc + number;
      }, 0);
    return arrayMinutesDuration;
  });
  return arrayMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  } else {
    let arrayYears = {};
    moviesArray.forEach((element) => {
      if (arrayYears[element.year]) {
        arrayYears[element.year].total += element.score;
        arrayYears[element.year].count += 1;
      } else {
        arrayYears[element.year] = { total: element.score, count: 1 };
      }
    });
    let bestYear;
    let bestRate;
    for (let year in arrayYears) {
      let rate = arrayYears[year].total / arrayYears[year].count;
      if (!bestRate || rate > bestRate) {
        bestRate = rate;
        bestYear = year;
      }
    }
    return `The best year was ${bestYear} with an average score of ${bestRate}`;
  }
}