// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map((c) => c.director);
  let uniqueDirectors = [...new Set(allDirectors)];
  //the next line will fail as the test expect the same length array.
  //add extra empty element :
  //return uniqueDirectors;
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr
    .filter(
      (c) => c.director.toLowerCase() === 'Steven Spielberg'.toLowerCase()
    )
    .filter((c) => c.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) return 0;
  let totalScore = 0;
  arr.forEach((element) => {
    if (!isNaN(element.score)) {
      totalScore += element.score;
    }
  });

  return +(totalScore / arr.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let totalDramaStore = 0;
  let totalDramaMovies = 0;
  dramas = arr.filter((c) => c.genre.includes('Drama'));
  if (dramas.length === 0) return 0;
  dramas.forEach((element) => {
    totalDramaStore += element.score;
  });
  return +(totalDramaStore / dramas.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let copy = [...arr];
  copy.sort((a, b) => {
    let result = a.year - b.year;
    if (result !== 0) return result;
    //Same year, checking the title :
    return a.title
      .trim()
      .toLowerCase()
      .localeCompare(b.title.trim().toLowerCase());
  });
  return copy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i].title);
  }
  copy.sort((a, b) =>
    a.trim().toLowerCase().localeCompare(b.trim().toLowerCase())
  );
  if (copy.length > 20) {
    copy = copy.slice(0, 20);
  }

  return copy;
}
function getMinuts(movie) {
  let copy = { ...movie };
  let hours = 0;
  let minuts = 0;
  let time = copy.duration.split(' ');
  hours = parseInt(time[0]);
  if (time[1]) {
    minuts = parseInt(time[1]);
  } else minuts = 0;
  let result = hours * 60 + minuts;

  copy.duration = result;
  return copy;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let moviesInMinuts = arr.map((movie) => getMinuts(movie));
  return moviesInMinuts;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1)
    return `The best year was ${arr[0].year} with an average score of ${arr[0].score}`;
  let sortedYearly = orderByYear(arr);
  let yearly = getYearly(sortedYearly);
  let avarages = yearly.map((year) => {
    let avarge = scoresAverage(year);
    return { avarage: avarge, year: year[0].year };
  });
  avarages.sort((a, b) => {
    let result = b.avarage - a.avarage;
    if (result !== 0) {
      return result;
    }
    return b.year - a.year;
  });
  let len = avarages.length;
  console.log('avrages array', avarages);
  toPrint = `The best year was ${avarages[0].year} with an average score of ${avarages[0].avarage}`;
  return toPrint;
}
function getYearly(arr) {
  let yearlySorted = [...arr];
  let currentYear = [];
  let moviesPerYear = [];

  yearlySorted.forEach((element) => {
    if (currentYear.length === 0) {
      currentYear.push(element);
    } else if (currentYear[0].year === element.year) {
      currentYear.push(element);
    } else if (currentYear.year !== element.year) {
      moviesPerYear.push(currentYear);
      //Clean the current year
      currentYear = [];
      currentYear.push(element);
    }
  });
 
  return moviesPerYear;
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
