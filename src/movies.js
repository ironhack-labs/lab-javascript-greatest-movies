// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    directorsMovies= moviesArray.map(movieDirector => movieDirector.director)
    return directorsMovies

};




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) return 0
    let spielMovies = moviesArray.filter((moviesSearch) => moviesSearch.director === "Steven Spielberg" && moviesSearch.genre.includes("Drama"));
    return spielMovies.length

    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const scoreMovies = moviesArray.reduce((acc, val) => {
        if(!val.score) {return acc}
        return acc + val.score}, 0);

        const decimalScore = scoreMovies / moviesArray.length;
        return Math.round(decimalScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const filteringMovies = moviesArray.filter(moviesSearch => moviesSearch.genre.includes("Drama"));
     return scoresAverage(filteringMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    sortedArray = []
    for(let i = 0; i < moviesArray.length; i++){
        sortedArray[i] = moviesArray[i]
    }
    sortedArray.sort((a, b) => a.year - b.year)
    return sortedArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    sortedArray = []
    for(let i = 0; i < moviesArray.length; i++){
        sortedArray[i] = moviesArray[i]
    }
    const sortedMovies = sortedArray.map((el) => el.title)
    return sortedMovies.sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
