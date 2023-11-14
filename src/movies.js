// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((film) => film.director);
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const spielbergDramas = moviesArray.filter(movie => {return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");

    });
    return spielbergDramas.length;

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }

    const sumOfScores = moviesArray.reduce((acc, movie) => {return acc + (movie.score || 0)}, 0);

    

    return Number((sumOfScores / moviesArray.length).toFixed(2));

   
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
   

    const genreScore = moviesArray.filter(movie => movie.genre.includes("Drama"));


    const dramaScore = genreScore.reduce((acc, movie) => {return acc + (movie.score || 0)}, 0);

    if (genreScore.length === 0){
        return 0
    }

    return Number((dramaScore / genreScore.length).toFixed(2));

    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year !== b.year){
            return a.year - b.year;
        } 
        else {
            return a.title.localeCompare(b.title);
        }
    })

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map((movie) => {
        return movie.title
    })
    .sort((a,b) => {
        return a.localeCompare(b);
    })
    .slice (0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
