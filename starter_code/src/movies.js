/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let moviesorder = [...movies];

  const orderByYear = moviesorder.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return orderByYear;
}

console.log(orderByYear);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesSt) {
  const hasStv = moviesSt.filter(
    elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama")
  );
  return hasStv.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(orderA) {
  let superOrder = orderA
    .map(elm => elm.title)
    .sort((a, b) => a.localeCompare(b));
  const metaOrder = superOrder.splice(0, 20);
  return metaOrder;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(ratesBest) {
  if (ratesBest.length === 0) {
    return 0;
  } else {
    let ratesTop = ratesBest
      .filter(elm => elm.rate)
      .reduce((acc, elm) => acc + elm.rate, 0);
    let ratesMed = ratesTop / ratesBest.length;
    let ratesDec = ratesMed.toFixed(2);
    return +ratesDec;
  }
}

//console.log(+ratesBest);

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(dramaQ) {
  let dramaQeen = dramaQ.filter(elm => elm.genre.includes("Drama"));
  if (dramaQeen.length === 0) {
    return 0;
  } else {
    let dramaKing = dramaQeen.reduce((acc, elm) => acc + elm.rate, 0);
    let dramaboy = dramaKing / dramaQeen.length;
    let dramasP = dramaboy.toFixed(2);
    return +dramasP;
  }
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
