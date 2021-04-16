// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(allDirectors) {
  const director = allDirectors.map((directed) => directed.director);
  return director;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movie) {
  if (movie.length === 0) {
    return 0;
  }
  const filterMovies = movie.filter((StSpFilms) => {
    return (
      StSpFilms.director.includes("Steven Spielberg") &&
      StSpFilms.genre.includes("Drama")
    );
  });
  return filterMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(averageOfMovies) {
  if (averageOfMovies.length === 0) {
    return 0;
  }
  const rate = averageOfMovies.reduce((acc, val) => {
    return acc + parseFloat(val.rate);
  }, 0);
  return parseFloat((rate / averageOfMovies.length).toFixed(2));
}
//Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dramaRate) {
  const drama = dramaRate.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray) {
  function compare(a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
    return 0;
  }
  const ascendingArray = movieArray.slice().sort(compare);
  return ascendingArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(firstOrder) {
    const clone = [...firstOrder]
  clone.sort((a, b) => (a.title < b.title ? -1 : 1));
  const top20 = [];
  let limit = 20;
  if (clone.length < 20) {
    limit = clone.length;
  }
  for (let i = 0; i < limit; i++) {
    top20.push(clone[i].title);
  }
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
