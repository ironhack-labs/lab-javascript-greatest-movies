/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let yearOrder = movies.slice().sort((a, b) => {
    if (a.year < b.year) return -1;
    else if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  return yearOrder;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
//   const stevenFilms = movies.filter(function(movies) {
//     return (
//     movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
//   );
//   });
//   return stevenFilms.length;
// }
let totalCount = 0;
for (let i = 0; i < movies.length; i++) {
  let bothConditions = movies[i].director.includes("Steven Spielberg") && movies[i].genre.includes("Drama")
  if(bothConditions){
    totalCount++
  }
}
return totalCount
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(movies) {
  let yearOrder = movies.slice().sort(function(a, b) {
    if (a.title.localeCompare(b.title) > 0) {
      return 1;
    } else {
      return -1;
    }
  });

  return yearOrder.slice(0, 20).map(elemen => {
    return elemen.title;
  });
}
// let copyArray = [...arr];
// copyArray.sort(function(a, b) {
//   return a.title.localeCompare(b.title);
// });
// let firstTwenty = copyArray.slice(0, 20);
// let firstTwentyTitles = firstTwenty.map(movie => {
//   return movie.title;
// });
// return firstTwentyTitles;
// }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let aveRates = movies.reduce(function(acc, cur) {
    if (cur.rate) return acc + cur.rate;
    else return acc + "";
  }, 0);
  return Math.round((aveRates / movies.length) * 100) / 100 || 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const filmDrama = movies.filter(function(movies) {
    return movies.genre.includes("Drama");
  });
  let averadRates = filmDrama.reduce(function(acc, cur) {
    if (cur.rate) return acc + cur.rate;
    else return acc + "";
  }, 0);

  return Math.round((averadRates / filmDrama.length) * 100) / 100 || 0;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// BONUS Iteration: Best yearly rate average - Best yearly rate average


