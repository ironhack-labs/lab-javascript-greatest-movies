// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(function (el) {
    return el.director;
  });

  // let directors = movies.map(data => data.director)
  // return directors;
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(function (el) {
    return el.director === "Steven Spielberg" && el.genre.includes("Drama");
  }).length;
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  average = movies.reduce(function (total, el) {
    let final = 0;
    if (el.rate === undefined) {
      return total;
    } else {
      final = total + el.rate;
    }
    return final;
  }, 0);

  return Number((average / movies.length).toFixed(2));
}

console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const dramaMovies = array.filter(function (element) {
    return element.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
}
dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let yearOrder = movies.slice().sort(function (a, b) {
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

    return a.year - b.year;
  });
  return yearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieList = movies.map(function (element) {
    return element.title;
  });

  const titleOrder = movieList.sort();

  return titleOrder.splice(0, 20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
