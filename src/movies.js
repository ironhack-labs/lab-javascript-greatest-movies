// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let directorsArray = [];
    directorsArray = moviesArray.map((element) => {
        return element.director;
    })
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {
    let spielbergDramaMovies = moviesArray.filter((movie) =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
        return spielbergDramaMovies.length;
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

    let imdbTotalScores = moviesArray.reduce(function(accumulator, currentValue) {
        if (currentValue.score) {
            return accumulator + currentValue.score;
        } else {
            return accumulator;
        }
    }, 0)

    let averageScores = imdbTotalScores/moviesArray.length

    averageScores = Math.round(averageScores*100)/100;

    return averageScores;
}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter((movie) =>
        movie.genre.includes("Drama"));

    if (dramaMovies.length===0) {
        return 0;
    }


    let dramaMoviesTotalScores = dramaMovies.reduce((accumulator, currentValue) => {
        if (currentValue.score){
            return accumulator + currentValue.score;
        } 
            return accumulator;
        }, 0);

    let averageDramaMoviesScores = dramaMoviesTotalScores/dramaMovies.length;
    return Math.round(averageDramaMoviesScores*100)/100;

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
    let copyOfMoviesArray = [...moviesArray];
    copyOfMoviesArray.sort(function(a,b){
        if(a.year>b.year) {
            return 1;
        } else if (b.year>a.year) {
            return -1;
        } else {
            if(a.title>b.title) {
                return 1;
            } else if (b.title>a.title) {
                return -1;
                }
                return 0;
        }
    })
    return copyOfMoviesArray;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    let copyOfMoviesTitles = [...moviesArray].map(element=> element.title);
   
    let top20Movies = copyOfMoviesTitles.sort(function(a,b){
        if (a>b) {
            return 1;
        } else if (b>a) {
            return -1;
        }
    })
    return top20Movies.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let copyOfMoviesDuration = [...moviesArray].map(element => element.duration);

    let hoursToMinutes = copyOfMoviesDuration

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
