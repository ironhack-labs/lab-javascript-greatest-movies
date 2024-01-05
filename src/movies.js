// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let newMovies = moviesArray.filter((movie) => {
        return (movie.genre.includes("Drama") && movie.director === "Steven Spielberg")
    })
    return newMovies.length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; 
    }  
    let averageScores = moviesArray.reduce((acc, movie) => {

       if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }

        }, 0)
    let calculateAverageScores = averageScores / moviesArray.length;
    let avg = (calculateAverageScores.toFixed(2))
    return Number(avg)
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => 
        movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies)
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Xico, tive de copiar esta e preciso de 15 minutos contigo para perceber a lógica:

function orderByYear(moviesArray) {
    let moviesByYear = [...moviesArray];
    moviesByYear.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (b.year > a.year) {
            return -1;
        } else if (a.title > b.title) {
            return 1
        } else if (b.title > a.title) {
            return -1;
        } else {
            return 0;
        }
    })
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesByTitle = moviesArray.map((movie) => movie.title) 
    return moviesByTitle.sort().slice(0, 20);
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
