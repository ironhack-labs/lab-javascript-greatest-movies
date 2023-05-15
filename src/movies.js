// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const getAllDirectors = moviesArray.map(function (element) {
        return element.director
    })
    return getAllDirectors 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let count = 0
    const onlyDramaMovies = moviesArray.filter((element, index) => {
        if (element.genre.includes('Drama') && element.director === "Steven Spielberg") {
            return count += 1;
        }
    })
    return onlyDramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
if (!moviesArray || moviesArray.length === 0) {
    return 0;
}
else {
const sum = moviesArray.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
const average = sum / moviesArray.length;
return average
} }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    if (moviesArray.genre.includes('Drama')) {
const DramaScore = moviesArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score / moviesArray.length;
}, 0);
}
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    const newArr = moviesArray.map(moviesArray => moviesArray * 1);
    const newArrOrder = newArr.sort((a,b) => a = b);
    return newArrOrder
}
  



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
