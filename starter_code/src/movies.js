/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

function ratesAverage(bestMoviesArr) {
  // console.log(movies);
  const totalRate = bestMoviesArr.reduce(
    (acc, cur) => acc + Number(cur.rate),
    0
  );
  var result = totalRate / bestMoviesArr.length;
  return Number(result.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(bestMoviesArr) {
  const dramaSort = bestMoviesArr.filter(movie => {
    return movie.genre.includes("Drama");
  });
  if (dramaSort.length == 0) {
    return undefined;
  }
  return ratesAverage(dramaSort);
}

// Order by time duration, in growing order

function orderByDuration(bestMoviesArr) {
  const duration = bestMoviesArr.sort((a, b) => {
    if (a.duration === b.duration) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else return 0;
    }
    return a.duration - b.duration;
  });
  return duration;
}

// How many movies did STEVEN SPIELBERG

// function dramaMoviesRate2(bestMovies) {
//   const dramaSort = bestMovies.filter(x => {
//     return x.genre.includes("Drama");
//   });

//   return dramaSort;
// }

function howManyMovies(bestMoviesArr) {
  if (bestMoviesArr.length == 0) {
    return undefined;
  }
  const spielbergSort = bestMoviesArr.filter(movie => {
    return movie.director.includes("Steven Spielberg");
  });

  const dramaSpielberg = spielbergSort.filter(movie => {
    return movie.genre.includes("Drama");
  });

  return (
    "Steven Spielberg directed " + dramaSpielberg.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles

function orderAlphabetically(bestMoviesArr) {
  const onlyTitle = bestMoviesArr.map(function(movie) {
    return movie.title;
  });
  if (onlyTitle.length < 20) {
    return onlyTitle.sort();
  }
  return onlyTitle.sort().slice(0, 20);
}

// Best yearly rate average

// function bestYearAvg(bestMoviesArr) {
//   if (bestYearAvg.length == 0) {
//     return undefined;
//   }
//   const singleMovieRate = bestMoviesArr.map(movie => {
//     return movie.rate;
//   });
//   console.log(singleMovieRate);
//   return "The best year was" + singleMovieRate.year + "with an average rate of";
// }

function bestYearAvg(bestMoviesArr) {
  if (bestYearAvg.length == 0) {
    return undefined;
  }
  const sortByrate = bestMoviesArr.sort((a, b) => {
    return b.rate - a.rate;
  });
  console.log(sortByrate[0]);
  // const sortByYear = bestMoviesArr.sort((a, b) => {
  //   return a.year - b.year;
  // });
}

// let currentLargestRate = sortByrate[0];

// for (i = 0; i < sortByrate.length; i++) {
//   if (sortByrate[i] > currentLargestRate) {
//     currentLargestRate = sortByrate[i];
//   }
// }
//   return (
//     "The best year was" +
//     sortByrate[0].year +
//     "with an average rate of" +
//     sortByrate[0].rate
//   );
// }

// function dramaMoviesRate(bestMovies) {
//   const dramaSort = bestMovies.filter(x => {
//     if (bestMovies.indexOf("Drama") != -1) {
//       bestMovies.push("Drama");
//     }
//     // return x.genre === "Drama";
//   });
//   // console.log(bestMovies);
//   return ratesAverage(dramaSort);
//   if (bestMovies.length == 1) {
//     console.log(bestMovies.rate);
//   }
// }
