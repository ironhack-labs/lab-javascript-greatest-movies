// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map((movie) => {
        return movie.director;
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movies = moviesArray.filter((movie) => {
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie;
        }
    })
    return movies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalScores = moviesArray.reduce((sum, review) => {
        if(review.score === "" || !review.score) {
            review.score = 0;
        }
        return sum + review.score;
    }, 0);
    if (!moviesArray.length) {
        return 0
    }
    return Math.round(totalScores / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = moviesArray.filter((movie) => {
        if(movie.genre.includes("Drama")) {
            return movie;
    }
    });
    return scoresAverage(dramaArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMoviesArray = moviesArray.slice();
    newMoviesArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        else {
            return a.year - b.year;
        }
    });
    return newMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    let titleArray = moviesArray.map((movie) => {
        return movie.title;
    })
    return titleArray.slice(0, 20);
}    

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutesArray = moviesArray.map((movie) => {
        let duration = movie.duration;
        let hours = 0;
        let minutes = 0;
        if (typeof duration === "string") {
            const timeParts = duration.split(" ");
      
            if (timeParts[0].includes("h")) {
              hours = parseInt(timeParts[0], 10);
            }
      
            if (timeParts[1]) {
                minutes = parseInt(timeParts[1], 10);
            }
        }
        const totalMinutes = hours * 60 + minutes;
        return {duration: totalMinutes};
    });
    return minutesArray;    
    };

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    } 
    else if (moviesArray.length === 1) {
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
    }
    else {
        MoviesArray.sort((a, b) => {
            if (a.year === b.year) {
                return a.title.localeCompare(b.title);
            }
            else {
                return a.year - b.year;
            }
        });
        return moviesArray
    }
    }
