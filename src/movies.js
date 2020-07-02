// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors = array.map(function (element) {
    return element.director;
  });
  return allDirectors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  let dramaSteven = array.filter(function (person) {
    return (
      person.director === "Steven Spielberg" && person.genre.includes("Drama")
    );
  });
  return dramaSteven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array <= 0) {
    return 0;
  }
  let totalRate = array.reduce(function (acc, currentValue) {
    if (currentValue.rate === undefined) {
      return acc;
    }
    return acc + currentValue.rate;
  }, 0);
  return Number((totalRate / array.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let genreFilter = array.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(genreFilter);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let sortedYear = [...array];
  sortedYear.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    }
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (a.year == b.year) {
      if (titleA > titleB) {
        return 1;
      } else if (titleA < titleB) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return sortedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let sortedTitle = [...array];
  sortedTitle.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  let titles = sortedTitle.map(function (elem) {
    return elem.title;
  });

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
