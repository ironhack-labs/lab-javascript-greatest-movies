// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*function getAllDirectors(moviesArray) {
    let directors = [];

    directors = movies.map(function(movie){
        return movie.director;
    }) 
    console.log(directors);
    return directors;
}*/

function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie){
        return movie.director;
    });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // Filter the array to get only the drama movies directed by Steven Spielberg
    const spielbergDramas = moviesArray.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    
    // Return the number of drama movies directed by Steven Spielberg
    return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {
//     if (moviesArray.length === 0){
//         return 0;
//     }

//     let sum = 0;
//     for (let i = 0; i < moviesArray.length; i++) {
//         if (moviesArray[i].score){
//             sum = sum + moviesArray[i].score;
//         }
//     }
//     let average = sum / moviesArray.length;
//     const roundedAverage = Math.round(average * 100) / 100;
//     return roundedAverage;
// }

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const sum = moviesArray.reduce((accumulator, movie) => {
        if (movie.score) {
            return accumulator + movie.score;
        }
        return accumulator;
    }, 0);

    let average = sum / moviesArray.length;
    return Math.round(average * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    
    if (dramaMovies.length === 0) {
        return 0;
    }

    const totalScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
    const averageScore = totalScore / dramaMovies.length;

    return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice();
    
    sortedMovies.sort((a, b) => {
        if(a.year !== b.year) {
            return a.year - b.year;
        } else {
            if (a.title < b.title) return -1;
           if (a.year > b.year) return 1;
        }
            return 0;
        });

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovies = moviesArray.slice();
    const alphaMovies = orderedMovies.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });
    const top20Movies = alphaMovies.slice(0, 20);
    const movieTitles = top20Movies.map(movie => movie.title);
    return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
