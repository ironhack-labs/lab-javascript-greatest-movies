/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let movieYear = [...array];
  //let movies  = movies.years.forEach((year) => console.log(movies.year.value))
  movieYear.sort((s1, s2) => {
    if (s1.year > s2.year) return 1;
    else if (s1.year < s2.year) return -1;
    if (s1.year === s2.year) {
      s = s1.titlelocaleCompare(s2.title);
      return s;
    }
  });
  return movieYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let filteredMovies = array.filter(movie => {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
      return true;
  });
  //["director"] === ["Steven Spielberg"] && ["genre"] === ["drama"])

  //movies.filter((movies["director"] => ["Steven Spielberg"]
  return filteredMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  //     let alphaMovies = movies.map(movie => movie.title){

  //         //alphaMovies.sort();
  //      if (alphaMovies.slice(0, 20) < 20) alphaMovies;
  //     if (alphaMovies.slice(0, 20) > 20)  alphaMovies.slice(0, 20);
  // })
  // }

  let alphaMovies = [...array].map(movie => (movie = movie.title));
  alphaMovies = alphaMovies.sort(function(s1, s2) {
    return s1.localeCompare(s2);
  });
  let orderedMovies = alphaMovies.slice(0, 20);
  return orderedMovies;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(array) {
//     let rates = [...array];
//  if (movie.rate === 0) return 0;
// }
//  rates = array.reduce(ac, movie) => {
//     if (movie.rates !=== true) return movie.rate = 0;
//     return ac + movie.rate
// }, 0)

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let drama = Number.array.filter(movie => movie.genre.includes("Drama"));
  if (drama === false) return 0;
  return drama;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes() {

//}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
