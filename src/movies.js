// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = function (arrayMuvie) {
    let directors = []
    let x = arrayMuvie.map((y) => y.directors)
    return x
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function (arrayMuvie) {
    let SpielbergFilm = []
    SpielbergFilm = arrayMuvie.filter(y => y.genre.includes("Drama") && y.director === "Steven Spielberg");
    return SpielbergFilm.length;
}
howManyMovies(movies);