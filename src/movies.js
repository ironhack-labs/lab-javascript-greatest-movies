// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const listOfDirectors = moviesArray.map(movie => movie.director);
    return listOfDirectors;
} 
/*     const orderedDirectors = moviesArray.filter((director, index) => {moviesArray.indexOf(director) === index}
return;
); */


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenDrama = moviesArray.filter(movies =>  movies.director === "Steven Spielberg" && movies.genre.includes("Drama")); 
    return stevenDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
   
    const scoreAverage = moviesArray.reduce((acc, curr) => 
        {if (typeof curr.score === "number") { 
            return acc + curr.score;
        }
        return acc;
      }, 0) / moviesArray.length;
    return +(scoreAverage.toFixed(2));
        
 } 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let movieDrama = moviesArray.filter(drama => drama.genre.includes("Drama"));
    if (movieDrama.length === 0) {
        return 0;
    }
    const movies = movieDrama.reduce((acc, curr) => {
        if (typeof curr.score === "number" && curr.genre.includes("Drama")) {
            return acc + curr.score;
        }
        return acc;
    }, 0) / movieDrama.length;
    return +(movies.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMovies = moviesArray.map((elem) => elem);
    copyMovies.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.title.localeCompare(b.title);
    });
    return copyMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesOrder = moviesArray.slice(0);
    let titles = moviesArray.map((element) => element.title)
    titles.sort();
    const twenty = titles.slice(0, 20)
    return twenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
