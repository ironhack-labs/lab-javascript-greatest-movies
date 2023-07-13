// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectorsArray = moviesArray.map((movieArray) => {
        return movieArray.director;
    });

    return allDirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const manyMovies = moviesArray.filter((movie) => {        
        if(movie.genre.includes("Drama") && movie.director === "Steven Spielberg"){
           return movie;
        }
    });

    return manyMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const calculateAvg = moviesArray.reduce((sum, nextNumber) => {
        if(nextNumber.score === "" || !nextNumber.score){
            nextNumber.score = 0;
        } 

        return sum + nextNumber.score;
    }, 0);

    if(moviesArray.length === 0){
        return 0;
    }

    return Math.round(calculateAvg / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaGenre = moviesArray.filter((movie) => {
        if(movie.genre.includes("Drama")){
            return movie;
        }
    });

    return scoresAverage(dramaGenre);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = moviesArray.slice();

    newArr.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        } else{
            return a.year - b.year;
        }
    });

    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let getTitle = moviesArray.map((movie) => {
        return movie.title;
    });
    
    getTitle.sort();

    if(getTitle.length > 20){
        return getTitle.slice(0, 20);
    }

    return getTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let numberOfMinutes = moviesArray.map((movieDuration) => {
        let duration = movieDuration.duration;
        let index = duration.indexOf("h");
        let getMin = duration.indexOf("min");
        let hours = Number(duration.subString(0, index)) * 60;
        let min = Number(duration.subString(index + 1, getMin));
        let timer = hours + min;

        movieDuration.duration = timer;
    });

    return numberOfMinutes; 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
