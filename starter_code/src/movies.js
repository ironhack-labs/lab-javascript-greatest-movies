/* eslint no-restricted-globals: 'off' */

// Iteration 1 : Turn duration of the movies from hours to minutes

// Test (not working=>doesn't return anything)
// function turnHoursToMinutes(movies) {
//   var newMovies = movies.map(function(movie) {
//     movies.duration = movie.duration.replace("min", "").split("h");
//     movies.duration = Number(
//       movies.duration[0] * 60 + Number(movies.duration[1])
//     );
//     console.log(newMovies);
//   });
//   return newMovies;
// }

for (i = 0; i < movies.length; i++) {
  movies[i].duration = movies[i].duration.replace("min", "").split("h");
  movies[i].duration = Number(
    movies[i].duration[0] * 60 + Number(movies[i].duration[1])
  );
}

// Iteration 2 : Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var somme = 0;
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].rate) {
      somme += parseFloat(movies[i].rate);
    }
  }
  return Math.round((somme / movies.length) * 100) / 100;
}
console.log("Average rate of all movies: ");
console.log(ratesAverage(movies));

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(drama, i) {
    return movies[i].genre.includes("Drama");
  });

  if (!dramaMovies.length) return;

  return ratesAverage(dramaMovies);
}
console.log("Average rate of all drama movies: ");
console.log(dramaMoviesRate(movies));

//2 films avec rate = 8
// var movies8 = movies.filter(function(mov, i) {
//   return Number(movies[i].rate) === 8;
// });
// console.log(movies8);

// var rates8 = [];
// var i = 0;
// do {
//   i++;
//   movies8.push(rates8[i]);
// } while (rates8.length <= 2);
// console.log(rates8);

// Iteration 3 : Get the average of Drama Movies
// var dramaMovies = movies.filter(function(drama, i) {
//   return movies[i].genre.includes("Drama");
// });
// console.log(dramaMovies);

// var dramaRates = [];
// for (var i = 0; i < dramaMovies.length; i++) {
//   dramaRates.push(dramaMovies[i].rate);
// }

// Iteration 4 : Order by time duration, in growing order

function orderByDuration(movies) {
  var moviesSortedByDuration = movies.sort(function compare(a, b) {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration === b.duration) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
  return moviesSortedByDuration;
}
console.log("Movies sorted by duration:");
console.log(orderByDuration(movies));

// Iteration 5 : How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  var SpielbergDrama = movies.filter(function(mov, i) {
    return (
      movies[i].genre.includes("Drama") &&
      movies[i].director === "Steven Spielberg"
    );
  });
  if (!movies.length) return;
  if (!SpielbergDrama.length)
    return "Steven Spielberg directed 0 drama movies!";
  if (SpielbergDrama.length >= 1)
    return (
      "Steven Spielberg directed " + SpielbergDrama.length + " drama movies!"
    );
}
console.log(howManyMovies(movies));

// Iteration 6 : Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var moviesSorted = movies.sort(function compare(a, b) {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });

  if (moviesSorted.length >= 20) {
    return moviesSorted.slice(0, 20).map(function(item) {
      return item.title;
    });
  } else {
    return moviesSorted.map(function(item) {
      return item.title;
    });
  }
}
console.log("20 first movies sorted alphabetically:");
console.log(orderAlphabetically(movies));

// BONUS : Best yearly rate average

// Movies sorted by year:

// function orderByYear(movies) {
//   var moviesSortedByYear = movies.sort(function compare(a, b) {
//     if (a.year > b.year) {
//       return 1;
//     } else if (a.year === b.year) {
//       if (a.title > b.title) {
//         return 1;
//       } else {
//         return -1;
//       }
//     } else {
//       return -1;
//     }
//   });
//   return moviesSortedByYear.map(function(item) {
//     return [Number(item.year), Number(item.rate)];
//   });
// }
// console.log("Movies sorted by year:");
// console.log(orderByYear(movies));

if (movies.length > 0) {
  var minYear = movies[0].year;
  for (i = 0; i < movies.length; i++) {
    if (movies[i].year < minYear) {
      minYear = movies[i].year;
    }
  }
  console.log(Number(minYear));
} else console.error("Movies is empty");

if (movies.length > 0) {
  var maxYear = movies[0].year;
  for (i = 0; i < movies.length; i++) {
    if (movies[i].year > maxYear) {
      maxYear = movies[i].year;
    }
  }
  console.log(Number(maxYear));
} else console.error("Movies is empty");

for (i = Number(minYear); i <= Number(maxYear); i++) {
  var year = i;
  var yearMovie = movies.filter(obj => Number(obj.year) === year);
  var count = yearMovie.length;

  var somme = 0;
  for (j = 0; j < count; j++) {
    somme += Number(yearMovie[j].rate);
  }

  if (count !== 0) {
    console.log(year + " : " + Math.round((somme / count) * 100) / 100);
  }
}

function bestYearAvg(movies) {
  // var maxAvg = yearMovie[0].rate;
  // for(i=Number(minYear);i<=Number(maxYear);i++){
  // if()

  for (i = Number(minYear); i <= Number(maxYear); i++) {
    var year = i;
    var yearMovie = movies.filter(obj => Number(obj.year) === year);
    var count = yearMovie.length;

    var somme = 0;
    for (j = 0; j < count; j++) {
      somme += Number(yearMovie[j].rate);
    }

    if (count !== 0) {
      console.log(year + " : " + Math.round((somme / count) * 100) / 100);
    }
  }

  var ratesAvgSorted = yearMovie.sort(function compare(a, b) {
    if (Number(a.rate) > Number(b.rate)) {
      return 1;
    } else {
      return -1;
    }
  });

  return ratesAvgSorted;
}

bestYearAvg(movies);
