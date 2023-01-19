// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const direcFind = moviesArray.map((find) => find.director)
    return direcFind;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenFilms = moviesArray.filter((el) => el.director === "Steven Spielberg" && el.genre.includes("Drama"));
    return stevenFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0;

        const avg = moviesArray.reduce((acc ,val) => {
    if(!val.score) {return acc}
        return acc + val.score}, 0);
    const decimal = avg / moviesArray.length;
    return Math.round(decimal * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const avgDram = moviesArray.filter((drama) => drama.genre.includes("Drama"))
    if(!avgDram.length) return 0;
    const dram = avgDram.reduce((acc ,val) => {
        if(!val.score) {return acc}
            return acc + val.score}, 0);
      const decimal2 = dram / avgDram.length;
    return Math.round(decimal2 * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortOrd = [...moviesArray];
    const ord = sortOrd.sort((a, b) => {
        if(a.year < b.year) return -1
        if(a.year > b.year) return 1
        if(a.title < b.title) return -1
        if(a.title > b.title) return 1
    })
    
    
    
    return ord;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arr = [...moviesArray]
    const ordMov = arr.map((twenty) => twenty.title)
    return ordMov.sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
