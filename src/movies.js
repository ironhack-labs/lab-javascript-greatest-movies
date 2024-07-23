// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movieObj) => {
        return movieObj.director;
    })
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movieObj => 
        movieObj.director === "Steven Spielberg" && movieObj.genre.includes("Drama"))
        .length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    };
    

    const scoreTotal = moviesArray.reduce((scoreCount, movieObj) => {
        if(movieObj.score){
            return scoreCount + movieObj.score;
        } else {
            return scoreCount;
        };
    }, 0);

    // console.log(scoreTotal)
    const scoreAvg = scoreTotal/moviesArray.length;
    return parseFloat(scoreAvg.toFixed(2), 10);
}

scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movieObj => movieObj.genre.includes("Drama"));

    if(dramaMovies.length === 0){
        return 0;
    };
    

    const scoreTotal = dramaMovies.reduce((scoreCount, movieObj) => {
            if(movieObj.score){
                return scoreCount + movieObj.score;
            } else {
                return scoreCount;
            };
        }, 0);

    // console.log(scoreTotal)
    const scoreAvg = scoreTotal/moviesArray.filter(movieObj => movieObj.genre.includes("Drama")).length;
    return parseFloat(scoreAvg.toFixed(2), 10);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = [...moviesArray]
    orderedMovies.sort((movieObj1, movieObj2) => {
        if(movieObj1.year !== movieObj2.year){
            return movieObj1.year - movieObj2.year;
        } else{
            return movieObj1.title < movieObj2.title ? -1 : 1
        }
    })
    return orderedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
