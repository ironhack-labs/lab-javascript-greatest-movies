function getAllDirectors(movies) {
  const directors = movies.map(function (movie) {
    return movie.director;
  });
  return directors;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesList) {
  const dramaMovies = moviesList.filter(function (movie) {
    if (movie.genre.includes("Drama") === true &&
      movie.director === "Steven Spielberg") {
      // console.log(movie);
      return true;
    }
  });
  return dramaMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesRate) {
  if (moviesRate.length === 0) {
    return 0;
  };

  const rates = moviesRate.map(function (movie) {
    return movie.rate;
  });
  const sum = rates.reduce(function (acc, currentRate) {
    return (acc += currentRate);
  });
  if (moviesRate.rate == undefined || moviesRate.rate == Number) {
    const average = sum / rates.length;
    let res = average.toFixed(2);
    let res2 = parseFloat(res);
    console.log(res2);
    return res2; // On n'est pas sûr de comprendre ce que Jasmine demande: "Return average even if one of the movies does not have rate!"
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesDrama) {
  const dramaMovies = moviesDrama.filter(function (movies) {
    if (movies.genre.includes("Drama") === true) {
      return true;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  };
  const rates = dramaMovies.map(function (movies) {
    return movies.rate;
  });
  const sum = rates.reduce(function (acc, currentRate) {
    return (acc += currentRate);
  });
  const average = sum / rates.length;
  let res = average.toFixed(2);
  let res2 = parseFloat(res);
  return res2;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesYear) {
  const cloneMoviesYear = [...moviesYear];
  const cloneMap = cloneMoviesYear.map(function (movie) {
    return movie;
  });
  const sortedCloneMap = cloneMap.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      if (a.title < b.title) {
        return -1;
      }
    }
  });
  return sortedCloneMap;
};


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average