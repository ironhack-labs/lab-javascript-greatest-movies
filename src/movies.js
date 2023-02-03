// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const allDirectors = moviesArray.map(movie => movie.director);
   return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spilbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spilbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;

    const scoresFromAllMovies = moviesArray.map(movie => movie.score); 
    const movieHasScore = scoresFromAllMovies.filter(movie => typeof movie === 'number')
    if(movieHasScore === 0) return 0;
    const sumScores = movieHasScore.reduce((acc, cur) => acc + cur, 0);
    const average = sumScores / movieHasScore.length
    return average
    

    /* const movieHasScore = moviesArray.map(movie => typeof movie.score === 'number');
    const scores = movieHasScore.reduce((acc, cur) => acc + cur.score, 0);  
    const average = scores/movieHasScore.lentgh;
    return average.toFixed(2); */
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.map(movie => movie.genre.includes('Drama'));
    const movieHasScore = dramaMovies.filter(movie => typeof movie.score === 'number');
    const averageOfDramaMovies = movieHasScore.reduce((acc, cur) => acc + cur.score, 0);
    const average = averageOfDramaMovies/movieHasScore.length;
    return average.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = [...moviesArray];
    moviesByYear.sort((a, b) => a.year - b.year) 
    return moviesByYear;  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map( movie => movie.title);
    const movieTitlesByAlfaOrder = movieTitles.sort((a, b) => a.localeCompare(b));
    const top20 = movieTitlesByAlfaOrder.slice(0, 20);
    return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
