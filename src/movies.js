// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const onlyDirectors = moviesArray.map(function (element) {
        return element.director;        
    });
    return onlyDirectors; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const sumOfStevenSpielbergDrama = moviesArray.filter(function (element) {
        if (element.director === "Steven Spielberg" && element.genre.includes === "Drama")
//        console.log(element.director);
        return + 1;        
    });

//    console.log(sumOfStevenSpielbergDrama);
    return sumOfStevenSpielbergDrama += 1;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoreImdb = moviesArray.reduce(function (acc, currentValue) {
        return acc + currentValue.score;        
    }, 0);
//    console.log(scoreImdb.toFixed(2) / moviesArray.length);
    return scoreImdb.toFixed(2) / moviesArray.length;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const moviesArrayCopy = [...moviesArray];
    
    const sorting = moviesArrayCopy.year.sort(function (a, b) {
        return a - b;        
    });
    console.log(moviesArrayCopy);
    return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
