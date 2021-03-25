// Iteration 1: All directors? - Get the array of all directors.//done
function getAllDirectors(movies) {
  let directorsArray = movies.map((movie) => {
    return movie.director;
  });
  return directorsArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?//done
function howManyMovies(movies) {
  let dramaMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return dramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals//done

function ratesAverage(movies) {
  const getSumRate = (movie) => {
    return movie.rate;
  };
  let finalRateAvg = movies.reduce((acc, el) => {
    acc += getSumRate(el) / movies.length;
    return acc;
  }, 0);
  return Number(finalRateAvg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
