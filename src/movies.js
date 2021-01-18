// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  let AllDirectors = movies.map(function (movie) {
    return movie.director;
  })
  return AllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let sumMovies = 0;
  let findingMovies = movies.filter(function (movie) {
    if (movie.director == 'Steven Spielberg' && movie.genre == 'Drama') {
      sumMovies.push(findingMovies)
    }
  }
  )
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  const avgRate = movies.reduce(function (sum, movie) {
    return sum + (movie.rate || 0)
  }, 0) / movies.length;
  return Number(avgRate.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  // filter out the drama movies
  const dramas = movies.filter(function (movie) {
    return movie.genre.indexOf('Drama') !== - 1
  })
  return ratesAverage(dramas);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.slice().sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const ordered = movies.map(function (movie) {
    return movie.title
  }).sort(function (a, b) {
    return a.localeCompare(b);
  }).slice(0, 20);

  return ordered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
