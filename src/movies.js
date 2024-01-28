// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((movie) => movie.director);
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        if (moviesArray.length === 0) {
            return 0;}
        const stevenMovies = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")})
        return stevenMovies.length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sum = moviesArray.reduce((accumulator, movie) => {
        if (typeof movie.score === "number"){
        return accumulator + movie.score;}
        else {return accumulator};
    }, 0)
    const average = sum/moviesArray.length;
    const roundedDown = Math.ceil(average * 100) / 100;
    return roundedDown;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.some(movie => movie.genre.includes("Drama"))) {
        return 0;
    }
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    const sumDrama = moviesArray.reduce((accumulator, movie) => {
        if (typeof movie.score === "number" && movie.genre.includes("Drama")){
            return accumulator + movie.score
        }
        else {return accumulator}
    }, 0)  
    const average = sumDrama/dramaMovies.length;
    const rounded = Math.floor(average * 100)/100;
    return rounded;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderYear = moviesArray.slice();
    orderYear.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1;
        }
        else {
            return a.title.localeCompare(b.title);
        }
    }) 
        
    return orderYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.slice();
        newArray.sort((a, b) => {
        return a.title.localeCompare(b.title);
    })
    if (newArray.length >= 20) {
        return newArray.slice(0, 20).map(movie => movie.title)
    }
    else {return newArray.map(movie => movie.title)
    }
    

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
