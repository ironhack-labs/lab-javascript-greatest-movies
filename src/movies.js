// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const director = movies.map((movies) => {
    return movies.director;
  });
  return director;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let cont = 0;
  const dramaMovie = movies.filter((movies) => {
    if (
      movies.director === "Steven Spielberg" &&
      movies.genre.includes("Drama")
    ) {
      cont++;
    }
  });
  return cont;
}
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    let total = movies.length;
    let sum = 0;
    for (let i = 0; i < total; i++) {
      if (movies[i].rate === "" || movies[i].rate === undefined) {
        sum += 0;
      } else {
        sum += movies[i].rate;
      }
    }
    const avg = sum / total;
    return parseFloat(avg.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    let qnt = 0;
    let sum = 0;
    const dramaMovie = movies.filter((movies) => {
      if (movies.genre.includes("Drama")) {
        qnt++;
        sum = sum + movies.rate;
      }
    });

    if (qnt === 0) {
      return 0;
    } else {
      return parseFloat((sum / qnt).toFixed(2));
    }
  }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  function compareAlpha(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  const orderedAlpha = movies.sort(compareAlpha);
  const resultAlpha = orderedAlpha.map((movies) => {
    return movies;
  });

  function compareNumber(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  }
  const orderedYear = movies.sort(compareNumber);
  const resultNumber = orderedYear.map((movies) => {
    return movies;
  });
  return resultNumber;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  function compareAlpha(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  const orderedTitle = movies.sort(compareAlpha);
  const tittle = orderedTitle.map((orderedTitle) => {
    return orderedTitle.title;
  });
  //console.log(tittle)
  return tittle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
