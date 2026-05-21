// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movies = moviesArray
    .filter((movie) => movie.director === "Steven Spielberg")
    .filter((movie) => movie.genre.includes("Drama"));
    return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const sum = moviesArray.reduce((total, movie) => {
        const score = typeof movie.score === "number" ? movie.score : 0;
        return total + score
    }, 0);

    const avg = sum / moviesArray.length;
    return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let count = 0;
    let sum = 0;
    moviesArray.forEach((movie) => {
        if(movie.genre.includes("Drama")){
            count++;
            sum += movie.score;
        }
    });
    if(count == 0){
        return 0;
    }


    return Math.round((sum / count) * 100) / 100;
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray];

    const sortedArray = newArray.sort((movie1, movie2) => {
        if(movie1.year !== movie2.year){
            return movie1.year - movie2.year;
        }
        return movie1.title.localeCompare(movie2.title);
    })
    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const names = moviesArray.map((movie) => movie.title);
    names.sort((name1, name2) => name1.localeCompare(name2));
    return names.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
