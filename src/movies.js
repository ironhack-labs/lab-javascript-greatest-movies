// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(Element=>Element.director);
    return directors;
}
console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpielberg = moviesArray.filter(Element=>Element.director ==="Steven Spielberg"&& Element.genre.includes("Drama"));
    return stevenSpielberg.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let average = moviesArray.reduce((acc, curr) => acc + curr.score, 0) / moviesArray.length;
    return average.toFixed(2);   
}
console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(Element=>Element.genre.includes("Drama"));
    let dramaMoviesScore = dramaMovies.reduce((acc, curr) => acc + curr.score, 0) / dramaMovies.length;
    return dramaMoviesScore.toFixed(2);
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let ordered = moviesArray.sort((a, b) => a.year - b.year, (a, b) => a.title - b.title);
    return ordered;
}
console.log(orderByYear(movies));
// const orderedMovies= movies.map(movie =>{ 
//     let ordered = movies.sort((a, b) => a.year - 		b.year);
//   return ordered});
//   console.log(orderedMovies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let ordered = moviesArray.sort((a, b) => a.title - b.title);
    return ordered;
}
console.log(orderAlphabetically(movies.slice(0,20)));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
