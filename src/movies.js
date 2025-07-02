
  

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movies => { 
        return movies.directors})
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movies => {
        return movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    })
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const moviesWithScore = moviesArray.filter(movie => {
        return typeof(movie.score) === "number"
    });
    const sum = moviesWithScore.reduce((total,current) => {
        return total + current.score
    },0);
    const avg = sum/moviesWithScore.length;
    return parseFloat(avg.toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movies => {
        return movies.genre.includes("Drama")
    })
    if(dramaMovies.length === 0) return 0;
    const sumScoreDramaMovies = dramaMovies.reduce((total, current) => {
        return total + current.score
    },0);
    const avg = sumScoreDramaMovies/dramaMovies.length
    return parseFloat(avg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copymoviesArray = [...moviesArray]
    const moviesOrdered = copymoviesArray.sort((a,b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year)
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            if (a.title === b.title) return 0;
    })
    return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];
    const orderedMovies = moviesCopy.sort((a,b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });
    const titleOrderedMovies = orderedMovies.map(movie => {
        return movie.title;
    })
    return titleOrderedMovies.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
