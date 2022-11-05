// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) { // Function one - To acquire all directors 
    // 1.) This is to get all the array of all the directors, to map through the array of movies
    return moviesArray.map((movie) => movie.director);
    // array.map = access the Database
    // ((movie) => movie.director); = Accessising movie > director 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { //Function two - To get number of Spielberg movies 
    let numberOfSpielbergMovies = moviesArray.filter( 
    // numberOfSpielbergMovies = moviesArray.filter( : variable = array.filter
        (movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
        // movie > movie drector = spielberg & genre > drama = what we are filtering/looking for
    )
    return numberOfSpielbergMovies.length;
    // return variable.length to return the number of what we were finding
}

//Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { // Function three - To display avg score of all of them
     // Map movies 
     moviesArray.map((movie) => movie.score);
    
    if (moviesArray.length === 0) {
        return 0;
    }

    let average = 0;

    let sumScore = moviesArray.reduce(function (result,item) {
        return result + (item.score || 0);
    }, 0);
    
    average = (sumScore / moviesArray.length)
    

    return average;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // Map Drama 
    let dramaMovies = moviesArray.filter(movie => movie.score && movie.genre.includes("Drama"));

    let averageDrama = 0;

    let sumDrama = dramaMovies.reduce(function (result, item) {
        return result + item.score;
    }, 0);
    
    averageDrama = (sumDrama / dramaMovies.length)

    if (!dramaMovies.length) return 0;
    return averageDrama;
    
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    return yearSort = moviesArray.sort(function(a,b) {
        if (a.year === b.year) { 
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    }; 


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphabetArray = [ ]; //Make an array 

    alphabetArray = moviesArray.map(movie => movie.title) //Access
    let orderSort = alphabetArray.sort(); //Variable = what we accessed.sort
    return orderSort.slice(0, 20); //.Slice = top 20


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
