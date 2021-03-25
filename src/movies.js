// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (arr) => {
  let directors = arr.map((el) => {
    return el.director;
  });
  return directors;
};