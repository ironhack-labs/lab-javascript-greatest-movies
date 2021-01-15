// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (array) => {
  let movieDirectors = array.map(function (movieEl) {
    return movieEl.director;
  });
  return movieDirectors;
};

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  const stevenMovie = array.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return stevenMovie.length;
}
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  const totalRatings = array.reduce(function (total, movies) {
    if (movies.rate === undefined) {
      return total;
    }

    const result = total + movies.rate;
    return result;
  }, 0);
  console.log(totalRatings);
  return Number((totalRatings / array.length).toFixed(2));
}
ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const dramaMovies = array.filter(function (element) {
    return element.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
}
dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let sortedArr = [];
  sortedArr = array.slice().sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
    return 0;
  });

  console.log(sortedArr);
  return sortedArr;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
  const newArr = array.slice().sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  const finalArray = newArr.map(function (movie) {
    return movie.title;
  });

  return finalArray.slice(0, 20);
};

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
