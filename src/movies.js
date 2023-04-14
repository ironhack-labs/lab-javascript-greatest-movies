// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movies => movies.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    if (moviesArray.length === 0 || spielbergMovies.length === 0) {
      return 0;
    } else if (spielbergMovies.length > 0) {
      return spielbergMovies.length
    }
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const avgScore = moviesArray.reduce(
        (acc, movie) => { 
            if (!movie.score){
                return acc
            }
            return acc + movie.score},0);
    return (Math.round(avgScore/moviesArray.length*100))/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movies => movies.genre.includes("Drama"));
    const dramaMoviesScore = dramaMovies.map(movies => movies.score);
    if (dramaMovies.length ===0){
        return 0;
    } else {
        
        const averageScore = (dramaMoviesScore.reduce((p,p2) => p + p2)/dramaMovies.length);
        return (Math.round(averageScore*100)/100);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYear = moviesArray.toSorted((a,b) => { 
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year});
    return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieNames = moviesArray.map(movies => movies.title);
    const sortedTitles = movieNames.sort();
    const smallSortedTitles = sortedTitles.slice(0,20)
    return smallSortedTitles
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
