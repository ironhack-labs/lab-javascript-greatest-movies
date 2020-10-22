// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  const allDirectors = array.map(function (movie) {
    const dir = movie.director;
    return dir;
  });
  const filteredDirectors = allDirectors.filter(
    (movie, i, array) => array.indexOf(movie) === i
  );
  console.log(filteredDirectors);
  return filteredDirectors;
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  const Spielbergmovies = array.filter(function (movie) {
    const dramamovies =
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    return dramamovies;
  });
  console.log(Spielbergmovies);
  return Spielbergmovies.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  const averatings = array.reduce(function (total, movie) {
    if (movie.rate) {
      return total + movie.rate / array.length;
    } else {
      return total;
    }
  }, 0);

  return parseFloat(averatings.toFixed(2));
}
ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  if (movie.genre.includes("Drama")) {
    const averatings = array.reduce(function (total, movie) {
      if (movie.rate) {
        return total + movie.rate / array.length;
      } else {
        return total;
      }
    }, 0);

    return parseFloat(averatings.toFixed(2));
  }
}
dramaMoviesRate(movies);

function dramaMoviesRate(array) {
  const dramaratesav = array.filter(function (movie) {
    const dramaave = movie.genre.includes("Drama");
    return dramaave;
  });
  return ratesAverage(dramaratesav);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = function (array) {
  const orderedyears = array.sort(function (a, b) {
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

  return orderedyears;
};

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function (array) {
  const titles = array.map(function (movie) {
    return movie.title;
  });

  const sortedArray = titles.sort();

  sortedArray.splice(20, array.length);

  return sortedArray;
};

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
