// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArr) => {
  const directors = moviesArr.map((el) => {
    return el.director;
  });
  return directors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = function (array) {
  const dramaMovies = array.filter((el) => {
    if (el.director === "Steven Spielberg" && el.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return dramaMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function (array) {
  if (array.length === 0) {
    return 0;
  }
  const sumRate = array.reduce((total, el) => {
    if (!el.rate) {
      total += 0;
    } else {
      total += el.rate;
    }
    return total;
  }, 0);
  const averageRating = sumRate / array.length;
  //return (averageRating.toFixed(2));
  return averageRating;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = function (array) {
  const sumRate = array.reduce((total, el) => {
    if (el.genre.includes("Drama")) {
      total += el.rate;
    }
    return total;
  }, 0);
  const averageRating = parseFloat(sumRate / array.length);
  return averageRating;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = function (array) {
  const years = array.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return years;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = function (array) {
  const titles = array.map((el) => el.title);
    titles.sort();
    titles.splice(20, array.length);
  return titles;
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array)=> {
    const fixedArray = array.map ((el)=> {
    if (!el.duration.includes("h")){
        el.duration = parseInt(el.duration.substring(el.duration.indexOf(" "),el.duration.indexOf("m")));
    } else if (!el.duration.includes("m")){
        el.duration = el.duration = parseInt(el.duration.substring(0,el.duration.indexOf("h")))*60;
    } else {
        el.duration = parseInt(el.duration.substring(0,el.duration.indexOf("h")))*60 + parseInt(el.duration.substring(el.duration.indexOf(" "),el.duration.indexOf("m")));
    }
    el.duration = parseInt(el.duration);
    return el;
    });
    return fixedArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
//
//
