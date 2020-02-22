/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const sortedArray = [...array].sort((a, b) => {
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
  });
  return sortedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  const filteredArray = [...array].filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return filteredArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const sortedMovies = [...array].sort((a, b) => (a.title > b.title ? 1 : -1));

  let movieTitles = [];
  for (let i in [...sortedMovies]) {
    movieTitles.push(sortedMovies[i].title);
  }
  return movieTitles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (!array.length) {
    return 0;
  }

  const sumRates = [...array]
    .map(rates => {
      if (typeof rates.rate !== "number") {
        rates.rate = 0;
        return rates.rate;
      } else {
        return rates.rate;
      }
    })

    .reduce((accumulator, value) => {
      return accumulator + value;
    });

  const average = sumRates / array.length;

  if (average === 0) {
    return 0;
  } else {
    return Math.round(average * 100) / 100;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  if (!array.length) {
    return 0;
  } else {
    const dramaMovies = array.filter(movie => movie.genre.includes("Drama"));

    const sumArray = dramaMovies.reduce((accumulator, value) => {
      return accumulator + value.rate;
    }, 0);

    const average = sumArray / dramaMovies.length;
    if (dramaMovies.length) {
      return Math.round(average * 100) / 100;
    } else {
      return 0;
    }
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  const mappedArray = [...array].map(movie => {
    if (typeof movie.duration === "string") {
      if (movie.duration.includes("h") && !movie.duration.includes("m")) {
        movie.duration =
          parseInt(movie.duration.slice(0, movie.duration.indexOf("h"))) * 60;
        return movie;
      } else if (
        movie.duration.includes("m") &&
        !movie.duration.includes("h")
      ) {
        movie.duration = parseInt(
          movie.duration.slice(0, movie.duration.indexOf("m"))
        );
        return movie;
      } else if (movie.duration.includes("m") && movie.duration.includes("h")) {
        movie.duration =
          parseInt(movie.duration.slice(0, movie.duration.indexOf("h"))) * 60 +
          parseInt(
            movie.duration.slice(
              movie.duration.indexOf(" "),
              movie.duration.indexOf("m")
            )
          );
        return movie;
      }
    }
  });

  return mappedArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {

}