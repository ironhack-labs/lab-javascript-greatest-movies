// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((currentMovie, currentIndex) =>`${currentMovie.director}`);
            return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const newResult = moviesArray.filter((currentMovie) =>
        currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama")
    );
    return newResult.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    
    const totalMovies = moviesArray.reduce((acc, currentMovie)=>{
       return acc + (currentMovie.score || 0)} , 0 )
    const average = totalMovies/moviesArray.length
    return Number(average.toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (dramaMovies.length === 0) return 0;

    const dramaMovies = moviesArray.filter(currentMovie => currentMovie.genre.includes("Drama"));

    const totalScore = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);

    const avg = totalScore / dramaMovies.length;

    return Number(avg.toFixed(2)); // Ensure the result is a number with 2 decimals
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesCopy = moviesArray.slice();


    return moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title); 
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(moviesArray) {
        const moviesCopy = moviesArray.slice();

        const sortedTitles = moviesCopy.map(movie => movie.title)  
            .sort((a, b) => a.localeCompare(b)); 

        return sortedTitles.slice(0, 20);
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
