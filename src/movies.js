// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorName =[];
    directorName = moviesArray.map((i)=>{
        return i.director;
    })
    return directorName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = 0;
    if (moviesArray.length === 0){
        return 0;
    }
    else {
        moviesArray.filter((i)=>{
            if (i.director === "Steven Spielberg" && i.genre.includes("Drama")){
                stevenMovies ++; 
            }
        })
        return stevenMovies;
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    else { 
        const scoreTotal = moviesArray.reduce((accumulator, element)=>{
           if (element.score === undefined){
            return accumulator
           }
           return (accumulator + element.score);
    }, 0);
    let avgTotal = scoreTotal / moviesArray.length  
    return Math.round(avgTotal * 100) / 100;
 }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter((element)=>{
        return element.genre.includes("Drama");
    })
    return (scoresAverage(dramaScore));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderYear = [...moviesArray]
    orderYear.sort((a,b)=>{
        if (a.year < b.year){
            return -1;
        }
        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }
    });
    return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderTitles = [...moviesArray];
    orderTitles.sort((a, b)=>{
        return a.title.localeCompare(b.title);
    });
    return orderTitles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
