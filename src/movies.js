// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


const getAllDirectors = (movies) =>  {
    return movies.map((element)=> 
     element.director
)
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesArray) { 
   const filteredMovies = moviesArray.filter((element) => (element.director === 'Steven Spielberg' && element.genre.includes('Drama')))
   return filteredMovies.length
}    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const sum = moviesArray.reduce((accumulator, element) => {
        if(element.score) {
            return accumulator + element.score;
        } else {
            return accumulator
        }
    }, 0);

    return Math.round((sum *100 ) / moviesArray.length) / 100

}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((element) => {
        return element.genre.includes('Drama')
    })

    return scoresAverage(dramaMovies);
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedMovies = [...moviesArray] 
    sortedMovies.sort((movie1, movie2) => {
    if (movie1.year<movie2.year) {
        return -1;
    }
    if (movie1.year>movie2.year) {
        return 1;
    }
    if (movie1.year === movie2.year) {
        return movie1.title.localeCompare(movie2.title);
    }
});
    return sortedMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map((element) => element.title);
    movieTitles = movieTitles.sort();
    return movieTitles.slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
