// Iteration 1: All directors? - Get the array of all directors.
console.log("- -  - - - -Itération 1  - - - - - - - ")
function getAllDirectors(movies) {
  console.log("--------- !!!");
  let cloneMovies = [...movies];
  console.log('----newArray------ ! ! ! ! ! ');
  console.log(cloneMovies);
  console.log("-------------------- ! ! ! ! !!")
  console.log(cloneMovies.director)
  let directorMoviesArray = cloneMovies.map((movie) => movie.director);
  console.log("! ! ! ! director movies ! !  ! !");
  console.log(directorMoviesArray)
  return directorMoviesArray
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
console.log(" - - - - - -Iteration 2 - - - - - - - ");
function howManyMovies(movies) {
  console.log("--------- !!!");
  let totalMovies = movies.filter((drama) => {
    if (drama.director === "Steven Spielberg" && drama.genre.includes("Drama"))
      return drama;
  });
  return totalMovies.length;
} 
console.log(" - - - - - - - -Drama - - - - - - -")
console.log(" - - -- - - - - - - - - - - -- - - - - - ")
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  console.log("--------- !!!");
  console.log(movies)
  const total = movies.reduce((ac, movie) => ac + movie.rate , 0);
  const avg = Number((total / movies.length).toFixed(2));
  console.log(total)
  return movies.length === 0  ? 0 : avg;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  console.log(movies)
  console.log("--- - - - - - - - -- - - - - - - - - - - - - -- - - - - - - - - - - - - - -- - - - -")
  let totalMovies = movies.filter((drama) => {
    if (drama.genre.includes("Drama"))
    console.log("")
      return drama;
  });
  const total = movies.reduce((ac, movie) => ac + movie.rate , 0);
  const avg = Number((total / movies.length).toFixed(2));
  console.log(total)
  return movies.length === 0  ? 0 : avg;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newArray = [...movies];
  let sortArray = newArray.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 )
  return sortArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newArray = [...movies];
  let orderArray = newArray.sort((a, b) => (a.title > b.title) ? 1 : -1 );
  if (orderArray.length <= 20) {
  return orderArray
} else if (orderArray.length > 20) {
  return orderArray.slice(0, 20)
}
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
