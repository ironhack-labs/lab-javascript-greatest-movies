/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const totalRates = movies.reduce((acc, movie, i) => {
    acc += parseFloat(movie.rate);
    return acc;
  }, 0);
  return totalRates / movies.length;
}

// drama movies rate
function dramaMoviesRate(movies) {
  var onlyDrama = movies.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  var sum = onlyDrama.reduce(function (acc, movie) {
    return Number(acc + movie.rate);
  }, 0);
  if (onlyDrama.length == 0) {
    return undefined;
  }
  sum = sum / onlyDrama.length;
  return Number(sum.toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  var longestMovies = movies.sort(function (a, b) {
    if (a.duration === b.duration) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    return a.duration - b.duration;
  });
  return longestMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(sumMovies) {
  if (sumMovies.length == 0) {
    return undefined;
  }

  var onlySteven = sumMovies.filter(function (movie) {
    return movie.director.includes("Steven Spielberg");
  });
  const onlyDramaSteven = onlySteven.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  return (
    "Steven Spielberg directed " + onlyDramaSteven.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var onlyTitles = movies.map(a => {
    return a.title;
  });

  var orderedOnlyTitles = onlyTitles.sort();
  return orderedOnlyTitles.slice(0, 20);
}



// Best yearly rate average

function bestYearAvg(movies) {
  var orderedYears = movies.sort(function (a, b) {
    return a.year - b.year;
  });
  return orderedYears;

}
// didn't finish this one :(, will try again tomorrow ! 