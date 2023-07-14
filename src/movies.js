// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorOfMovies = moviesArray.map((director)=>{
        
        return director.director;
    })

    return directorOfMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    // Created a array if director is "Steven Spielberg" and genre is "Drama"
    // Use includes to find only a Drama movies
    let moviesSteven = moviesArray.filter((movie)=>{
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            return movie;
        }
    });

    return moviesSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    // If array is empty
    if(!moviesArray.length)return 0;

    // Use to get all values from a score
    const arrayScores = moviesArray.map((getScore)=> {
        return getScore.score;
    })

    
    // Use a filter to put a undefined values equals to zero
    let reviewFiltered = arrayScores.filter((value)=>{
        if(value === 0){
            return 0;
        }else{
            return value;
        }
    });
    
    // Use to sum all values
    const allScore = reviewFiltered.reduce((sum, reviewScore)=>{
        return sum + reviewScore
    });
    
    // Calculate a average
    let avg = allScore/arrayScores.length;
    let rounded = avg.toFixed(2);
    
    return Number(rounded);

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaMovies = moviesArray.filter((movie)=>{
        if(movie.genre.includes("Drama")){
            return movie;
        }
    })

    let avgScoreDrama = scoresAverage(dramaMovies);



    return avgScoreDrama;

    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    // Copy of original array
    let copyMovies = [...moviesArray];

    // Sort 
    copyMovies.sort((a,b)=>{

        // Sort by title when year is equal
        if(a.year === b.year){
            let title1 = a.title.toLowerCase();
            let title2 = b.title.toLowerCase();

            if (title1 < title2) {
                return -1;
            }
            if (title1 > title2) {
                return 1;
            }
            return 0;
        // Sort by year
        }else{
            return a.year-b.year;
        }        
    });

    return copyMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    // Copy original array
    copyMovies = [...moviesArray];

    // Get only titles
    copyMovies = moviesArray.map((movieTitle)=>{
        return movieTitle.title;
    });

    // Sort array
    copyMovies.sort();

    // Return and slice
    return copyMovies.slice(0, 20);
    
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

