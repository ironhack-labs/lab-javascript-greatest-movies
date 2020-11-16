// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let newArray = [...movies];
    let otherArray = newArray.map((el) => el.director);
      return otherArray
} 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function howManyMovies(array) {
    let totalMovies = array.filter((drama) => {
      if (drama.director === "Steven Spielberg" && drama.genre.includes("Drama"))
        return drama;
    });
    return totalMovies.length;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const sumOfRates = arr.reduce((accum, currentRate) => {
    if (currentRate.rate) {
      accum += currentRate.rate;
    }
    return accum;
  }, 0);
  const avgOfRates = sumOfRates / arr.length;
  if (arr.length === 0) {
    return 0;
  }
  return parseFloat(avgOfRates.toFixed(2)); //
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    const dramaFilms = arr.filter((film) => {
      return film.genre == "Drama";
    });
    if (dramaFilms.length == 0) {
      return 0;
    } else {
      const ratedDramas = dramaFilms.filter((film) => {
        return film.rate > 0;
      });
      const totalDramaScores = ratedDramas.reduce((total, movie) => {
        return total + movie.rate;
      }, 0);
      return parseFloat((totalDramaScores / dramaFilms.length).toFixed(2));
    }
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const sortedByYear = arr.slice().sort((a, b) => {
    if (a.year == b.year) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    } else {
      return a.year - b.year;
    }
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let newArray = [...movies];
    let orderArray = newArray.sort((a, b) => (a.title > b.title) ? 1 : -1 );
    if (orderArray.length <= 20) {
    return orderArray
  } else if (orderArray.length > 20) {
    return orderArray.slice(0, 20)
  }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function orderAlphabetically(arr) {
  const onlyTitles = arr.map((film) => {
    return film.title;
  });
  const sortedAlphabetically = onlyTitles.slice().sort();
  if (sortedAlphabetically.length > 20) {
    const firstTwentyFilms = sortedAlphabetically.slice(0, 20);
    return firstTwentyFilms;
  } else {
    return sortedAlphabetically;
  }
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
