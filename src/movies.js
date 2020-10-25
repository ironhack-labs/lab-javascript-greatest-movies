// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  const result = arr.map((item) => item.director);
  return result;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const result = array.filter(
    (item) =>
      item.director == "Steven Spielberg" && item.genre.includes("Drama")
  );
  return result.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  array.forEach((item) => {
    if (typeof item.rate !== "number") {
      item.rate = 0;
    }
  });
  const result = array.reduce(function (total, element) {
    let averageRate = total + element.rate;
    return averageRate;
  }, 0);
  const floatingAverage = result / array.length;
  if (array.length == 0) {
    return 0;
  } else {
    return Number(floatingAverage.toFixed(2));
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const filteredMovies = array.filter((item) => item.genre.includes("Drama"));
  if (filteredMovies.length > 0) {
    return ratesAverage(filteredMovies);
  } else return 0;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const moviesArray = [...array];

  moviesArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (b.year < a.year) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    }
  });

  return moviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const myArray = [...arr];

  myArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
  });

  if (myArray.length < 20) {
    const myList = myArray.map((item) => item.title);
    return myList;
  }

  const myList = [];
  for (let i = 0; i < 20; i++) {
    myList.push(myArray[i].title);
  }
  return myList;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const movieArray = array.map((item) => {
    if (item.duration[0] === "0") {
      const movieCopy = { ...item };
      movieCopy.duration = Number(item.duration.slice(-5, -3));
      return movieCopy;
    } else if (item.duration.length === 2) {
      const movieCopy = { ...item };
      movieCopy.duration = Number(item.duration[0] * 60);
      return movieCopy;
    } else if (item.duration.length === 5) {
      const movieCopy = { ...item };
      movieCopy.duration = Number(item.duration.slice(0, 2));
      return movieCopy;
    } else {
      const movieCopy = { ...item };
      movieCopy.duration =
        Number(item.duration.slice(0, 1)) * 60 +
        Number(item.duration.slice(-5, -3));
      return movieCopy;
    }
  });

  return movieArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  if (array.length == 0) {
    return null;
  }

  const yearsAndRating = array.map((item) => {
    return { year: item.year, rate: item.rate };
  });

  const yearsAccumulated = [];

  yearsAndRating.forEach((item) => {
    let year = item.year;
    let total = 0;
    let count = 0;
    yearsAndRating.forEach((item) => {
      if (item.year === year) {
        total += item.rate;
        count += 1;
      }
    });
    yearsAccumulated.push({ year: year, rate: total, count: count });
  });

  const yearsAndAverage = [];

  yearsAccumulated.forEach((item) => {
    yearsAndAverage.push({
      year: item.year,
      average: Math.round((item.rate / item.count) * 10) / 10,
    });
  });

  yearsAndAverage.sort((a, b) => {
    if (a.average < b.average) {
      return -1;
    } else if (b.average < a.average) {
      return 1;
    } else if (a.year < b.year) {
      return 1;
    }
  });

  return `The best year was ${
    yearsAndAverage[yearsAndAverage.length - 1].year
  } with an average rate of ${
    yearsAndAverage[yearsAndAverage.length - 1].average
  }`;
}
