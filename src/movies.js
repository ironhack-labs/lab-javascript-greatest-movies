// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((arr) => arr.director); 
    return directors;
   
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const dramaMovie = moviesArray.filter((movie) => movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
   return dramaMovie.length;
   
   }
   
   


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    let sum = moviesArray.reduce((acc, val) => {
        return acc+val.score; }, 0);    

    let sum1 = moviesArray.reduce((acc, val) => { 
        if(val.score === undefined) {
            val.score = 0;  
        }
        return acc+val.score; }, 0);

    let avg = Math.round((sum/moviesArray.length)*100)/100;
    return avg;
    
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let sum = moviesArray.reduce((acc,val) => {
    if(moviesArray.genre === 'Drama') {
        return acc+val.score;
    } else {
        return 0;
    }
    }, 0)
    let avg = Math.round(sum/moviesArray.length)*100/100;
    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
   /* function orderByYear(moviesArray) {
    let sortArray = moviesArray.sort((a,b) => {
    return a.score - b.score;
    });
    let sortMovies = sortArray.filter((movie) => movie.genre.includes("Drama"));

    return sortMovies;
    } */
    function orderByYear(moviesArray) {
        let yearOrder = Array.from(moviesArray);
        yearOrder.sort((a,b) => 
        {
            if(a.year>b.year) return 1;
            if(a.year<b.year) return -1;
            if(a.year === b.year) {
                if(a.title>b.title) return 1;
                if(a.title<b.title) return -1;
            }
        })
        return yearOrder;
        }
    


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
