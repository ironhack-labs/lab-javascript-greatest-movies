// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieArray) {
  let dir = movieArray.map((item) => item.director);
  return dir;

  // Bonus 1.1 Clean the array of directors

  let dirUnique = [];
  dir.forEach((item) => {
    if (!dirUnique.includes(item)) {
      dirUnique.push(item);
    }
  });
  return dirUnique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  let movieAmount = movieArray.filter(
    (item) =>
      item.director == "Steven Spielberg" && item.genre.includes("Drama")
  );
  return movieAmount.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }
  let onlyRatedMovies = movieArray.filter((item) => item.rate);
  let allRates = onlyRatedMovies.map((item) => item.rate);
  let total = allRates.reduce((sum, item) => sum + item);
  return Math.round((total / movieArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray) {
  let onlyDramaMovies = movieArray.filter((item) =>
    item.genre.includes("Drama")
  );
  return ratesAverage(onlyDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray) {
  if (movieArray.length == 0) {
    return 0;
  }

  movieArray.sort((a, b) =>
    a.title < b.title ? -1 : a.title > b.title ? 1 : 0
  );
  movieArray.sort((a, b) => a.year - b.year);

  // Não está retornando ordem alfabética

  return movieArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray) {
  if (movieArray.length == 0) {
    return [];
  }
  let movieTitles = movieArray.map((item) => item.title);
  movieTitles.sort().splice(20);
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function hoursToMinutesString(hourString) {
  let timeArray;
  let totalMinutes;
  if (hourString.includes("h ")) {
    timeArray = hourString.split("min").join("").split("h ");
    totalMinutes = Number(timeArray[0] * 60 + Number(timeArray[1]));
  } else if (hourString.includes("h")) {
    totalMinutes = Number(hourString.split("h").join("") * 60);
  } else {
    totalMinutes = Number(hourString.split("min").join(""));
  }
  return totalMinutes;
}

function turnHoursToMinutes(movieArray) {
  const newMovieArray = JSON.parse(JSON.stringify(movieArray));

  newMovieArray.forEach((item) => {
    if (item.duration) {
      item.duration = hoursToMinutesString(item.duration);
    }
  });
  return newMovieArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movieArray) {
  if (movieArray.length == 0) {
    return null;
  }
  let yearAll = movieArray.map((item) => item.year);

  //console.log("yearAll:", yearAll);

  let yearList = [];
  yearAll.forEach((item) => {
    if (!yearList.includes(item)) {
      yearList.push(item);
    }
  });

  //console.log("yearList:", yearList);

  let yearRates = {};
  for (let i = 0; i < yearList.length; i++) {
    yearRates[yearList[i]] = [];
  }

  //console.log("yearRates:", yearRates);

  for (let keyYear in yearRates) {
    movieArray.forEach((item) => {
      if (item.year == keyYear) {
        yearRates[keyYear].push(item.rate);
      }
    });
  }

  //console.log("yearRates:", yearRates);

  let total;
  for (let keyYear in yearRates) {
    total = 0;
    for (let i = 0; i < yearRates[keyYear].length; i++) {
      total += yearRates[keyYear][i];
    }
    yearRates[keyYear] = parseFloat(
      (total / yearRates[keyYear].length).toFixed(2)
    );
  }

  //console.log("yearRates:", yearRates);

  let highest = 0;
  let bestYear;
  for (let keyYear in yearRates) {
    if (yearRates[keyYear] > highest) {
      bestYear = keyYear;
      highest = yearRates[keyYear];
    }
  }

  //console.log(highest, bestYear);
  return `The best year was ${bestYear} with an average rate of ${highest}`;
}
