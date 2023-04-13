// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(function (movie) {
    return movie.director;
});
return directors;
}
getAllDirectors(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {
    let arrSpielbergMovie = arrMovies.filter(function (movie) {
        if (movie.director === "Steven Spielberg") return true;
        return false;
    });

    if (arrSpielbergMovie.lenght === 0) return 0;

    let arrSpielbergDrama = arrSpielbergMovie.filter(function (movie) {
        if (movie.genre.indexOf("Drama") >= 0) return true;
        return false;
    })
    return arrSpielbergDrama.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // if empty array
    if(moviesArray.length === 0){
        return 0;
    }
    //declaring + initializing the totalavg variable
    let avgTotal = 0;
    /*if(moviesArray.score = 0) {
        continue;
    }*/
   const imdbScores = moviesArray.map((movies) => {
        return movies.score;
    } )

    imdbTotalScores = imdbScores.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })

    let averageScores = imdbTotalScores/imdbScores.length

    averageScores = Math.round(averageScores*100)/100;

    return averageScores;
    } 




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
        
    

        const imdbScores = moviesArray.map((movies) => {
            return movies.score;
        } )
    
        imdbTotalScores = imdbScores.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        })
    
        let averageScores = imdbTotalScores/imdbScores.length
    
        averageScores = Math.round(averageScores*100)/100;
    
        return averageScores;
        

        const dramaMovies = moviesArray.filter(function (movie) {
            if (movie.genre.includes("Drama")) {
                return movie;
            }
        })
        const averageDrama = scoresAverage(dramaMovies)
        return averageDrama;
    
        
} 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyMovies = [...moviesArray]
    copyMovies.sort(function(a,b){ 
        if (a.year > b.year) {
            return 1
        } else if ( b.year > a.year ) {
            return -1
        } else {
            if ( a.title > b.title) {
                return 1
            } else if (b.title > a.title) {
                return -1
            }
        }
    })

return copyMovies




}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
