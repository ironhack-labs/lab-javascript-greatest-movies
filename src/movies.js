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