/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr) {
    // create a copy
    let copyMovies = Array.from(movieArr);
    // sort by year
    return copyMovies.sort((mov1, mov2) => (mov1.year !== mov2.year ? mov1.year - mov2.year : mov1.title.toUpperCase() > mov2.title.toUpperCase() ? 1 : mov1.title.toUpperCase() < mov2.title.toUpperCase() ? -1 : 0));
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movieArr) {
    const spielbergMovies = movieArr.filter(movie => movie["director"] === "Steven Spielberg" && movie["genre"].includes("Drama"));
    return spielbergMovies.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
    // create a copy
    let copyMovies = Array.from(movieArr);
    // sort by title
    copyMovies.sort((mov1, mov2) => mov1.title.toUpperCase() > mov2.title.toUpperCase() ? 1 : mov1.title.toUpperCase() < mov2.title.toUpperCase() ? -1 : 0);
    // definition of the result array length (max => 20)
    let limitLength = 0;
    copyMovies.length > 20 ? limitLength = 20 : limitLength = copyMovies.length;
    // creating the result array
    let first20Alph = [];
    for (let i=0; i < limitLength; i++) {
        first20Alph.push(copyMovies[i].title);
    }
    return first20Alph;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
