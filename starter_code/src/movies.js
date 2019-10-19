/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let sum = array.reduce((accumulator, value) => {
    return accumulator + value.rate;
  }, 0);
  let average = parseFloat(sum).toFixed(2) / array.length;
  return average;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaWord = 0;
  let sum = array.reduce((accumulator, value) => {
    if (value.genre.includes("Drama")) {
      dramaWord += 1;
      return accumulator + value.rate;
    } else {
      return accumulator;
    }
  }, 0);
  if (!dramaWord) {
    return 0;
  }

  let average = parseFloat((sum / dramaWord).toFixed(2));
  return average;
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(array) {
  const sortedArray = array.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedArray;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  const arrayCounter = array.filter(
    item => item.director === "Steven Spielberg" && item.genre.includes("Drama")
  );

  return arrayCounter.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let newArray = array
    .map(item => {
      return item.title;
    })
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);

  return newArray;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  const arrayCopy = array.map(item => {
    return {
      ...item,
      duration: turnTimeFunction(item.duration)
    };
  });

  return arrayCopy;
}

const turnTimeFunction = duration => {
  let arrayDuration = duration.split(" ");

  if (arrayDuration.length > 1) {
    return parseInt(arrayDuration[0]) * 60 + parseInt(arrayDuration[1]);
  } else {
    if (duration.indexOf("h") > 0) {
      return parseInt(duration) * 60;
    } else {
      return parseInt(duration);
    }
  }
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {
  if (!array.length) {
    return null;
  }
  let finalSum = 1,
    finalCounter = 1,
    finalYear,
    finalYearAverage;

  for (const movie of array) {
    let specYearAverage;
    let rateByYearArray = array.filter(item => {
      if (item.year === movie.year) {
        return true;
      }
    });

    let rateSum = rateByYearArray.reduce((accumulator, movie) => {
      return accumulator + Number(movie.rate);
    }, 0);

    specYearAverage = rateSum / rateByYearArray.length;
    finalYearAverage = finalSum / finalCounter;

    if (
      specYearAverage > finalYearAverage ||
      (specYearAverage === finalYearAverage &&
        Number(finalYear) > Number(movie.year))
    ) {
      finalSum = rateSum;
      finalCounter = rateByYearArray.length;
      finalYear = movie.year;
    }
  }

  finalYearAverage = finalSum / finalCounter;

  return `The best year was ${finalYear} with an average rate of ${finalYearAverage}`;
}
