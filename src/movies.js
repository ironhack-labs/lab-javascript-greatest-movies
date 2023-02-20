// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(element => element.director);
    
    /*const newArray = moviesArray.map(function(element) {
        if (newArray.includes(element.director)=== false){
            return element.director;
        }
    }
    )*/

    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergCount =0;
    moviesArray.filter(element => {
        if (element.director === "Steven Spielberg" && element.genre.includes("Drama")){
            spielbergCount++}
    })
    return spielbergCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {return 0};

    const totalReviews = moviesArray.reduce((acc, element) => {
        if (element.score === "" || element.score === undefined) {return acc + 0}
        else {return acc + element.score};
    }, 0);

    const averageReviews = totalReviews / moviesArray.length;
    return Math.round(averageReviews*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter(element => element.genre.includes("Drama"));
    return scoresAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedArray = [...moviesArray].sort((a,b) => {
        if (a.year !== b.year) {return a.year-b.year}
        if (a.year === b.year) {return a.title.localeCompare(b.title)}});
    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray){
    const copyArray = [...moviesArray];
    const titlesArray = copyArray.map(movie => movie.title);
    let sortedArray = titlesArray.sort();
    return sortedArray.length < 20 ? sortedArray : sortedArray.splice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
