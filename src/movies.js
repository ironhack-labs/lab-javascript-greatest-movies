// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(directorsMovies => directorsMovies.director) 
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length > 1){
        const spierbergDrama = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama") )
        return spierbergDrama.length;
    }
   return 0;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    };
    const total = moviesArray.reduce((acc, ele) => {
        if(ele.score){
            return acc + ele.score;
        }else{
            return acc;
        }  
    },0);
    const average = total / moviesArray.length;
    return Number(average.toFixed(2));

};


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter(allDrama => allDrama.genre.includes("Drama"))
   return scoresAverage(moviesDrama);

};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderYearsClone = moviesArray.map(years => years);
    const orderYear = orderYearsClone.sort((a, b) => {
        if(a.year < b.year){
            return -1;
        }
        if(a.year > b.year){
            return 1;
        }
        if(a.year === b.year){
           if(a.title < b.title) return -1;
           return 1;
        }
    });
    return orderYear
};


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleMovies = moviesArray.map(movie => movie.title);
    const orderTitle = titleMovies.sort((x, y) => {
        if(x < y){
            return -1;
        }
        if(x > y){
            return 1;
        }
    });
    const Top20Movies = orderTitle.splice(0,20);
    return Top20Movies;
};
 



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
