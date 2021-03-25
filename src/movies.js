// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (arr) => {
    let directors = arr.map((el) => {
        return el.director;
    });
    return directors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (arr) => {
    return arr.filter((el) => el.director === "Steven Spielberg" && el.genre.includes("Drama")).length;};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (arr) => {
    let average = arr.reduce((acc, movie) => {
      if (movie.rate === "" || !movie.rate) {
        acc += 0;
      } else {
        acc += movie.rate / arr.length;
      }
      return acc;
    }, 0);
    return parseFloat(average.toFixed(2));
};