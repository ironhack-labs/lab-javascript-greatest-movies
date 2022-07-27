const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => {
    const rawList = moviesArray.map(
        (movie) => movie.director
    );

    const cleanList = rawList.filter(
        (director, index) => rawList.indexOf(director) === index
    );

    return cleanList;
};
// console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {
    const steven = moviesArray.filter(
        (movie) => movie.director === "Steven Spielberg"
    );

    const stevenDrama = steven.filter(
        (movie) => movie.genre.includes("Drama")
    );

    return stevenDrama;
};
// console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
    const totalScore = moviesArray.reduce(
        (totalScore, movie) => totalScore += movie.score
    , 0);

    let scoreAverage = totalScore / moviesArray.length;
    return scoreAverage.toFixed(2);
};
console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
    const moviesDrama = moviesArray.filter(
        (movie) => movie.genre.includes("Drama")
    );
    
    const scoreDrama = moviesDrama.reduce(
        (scoreDrama, movie) => scoreDrama += movie.score
    ,0 );

    let scoreDramaAverage = scoreDrama / moviesDrama.length;
    return scoreDramaAverage.toFixed(2);
};
console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (originalArray) => {
    const moviesArray = originalArray.slice();

    moviesArray.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1;
        } else if (movie1.year < movie2.year) {
            return -1;
        } else {
            if (movie1.title > movie2.title) {
                return 1;
            } else {
                return -1;
            }
        }
    });

    return moviesArray;
};
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (originalArray) => {
    const moviesArray = originalArray.slice(0, 20);

    const titleMovies = moviesArray.map(
        (movie) => movie.title
    );

    return titleMovies.sort();

};
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (() => {

});

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (() => {

});
