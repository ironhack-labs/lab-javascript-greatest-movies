console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  const directors = array.map((element) => element.director);
  return directors;
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steve = movies.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );
  const numberOfDramas = steve.length;
  return numberOfDramas;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const arrayRatesSum = movies.reduce((acc, elm) => {
      return acc + elm.rate;
    }, 0);

    arrayRatesAverage = arrayRatesSum / movies.length;
    const roundedAverage = arrayRatesAverage;
    const roundedToTwo = Number(arrayRatesAverage.toFixed(2));
    return roundedToTwo;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  // filter out the drama movies
  const dramas = movies.filter(function (movie) {
    return movie.genre.indexOf("Drama") !== -1;
  });
  return ratesAverage(dramas); /*usou a função de cima*/
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.slice().sort(function (a, b) {
    if (a.year != b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}
//Ver resolução do profe******

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//ver do profe*******

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
