// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

const allDirectors = getAllDirectors(moviesArray); 
const uniqueDirectors = allDirectors.filter((director, index) => {
    return allDirectors.indexOf(director) === index;
});

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    function isSpielbergDrama(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    }
    return moviesArray.filter(isSpielbergDrama).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScore = moviesArray.reduce((accumulator, movie) => {
        if (movie.score) {
            return accumulator + movie.score;
        }
        return accumulator;
    }, 0);

    const average = totalScore / moviesArray.length;
    return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    function isDrama(movie) {
        return movie.genre.includes("Drama");
    }
    const dramaMovies = moviesArray.filter(isDrama);
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newArray = [...moviesArray];

    newArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray]
        .sort((a, b) => a.title.localeCompare(b.title)) 
        .map((movie) => movie.title)                   
        .slice(0, 20);                                   }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
        const movieCopy = { ...movie };
        let totalMinutes = 0;
        const parts = movieCopy.duration.split(" ");
        parts.forEach ((part) => {
            if (part.includes("h")) {
                totalMinutes += parseInt(part) * 60;
            } else if (part.includes("min")) {
                totalMinutes += parseInt(part);
            }
        });
        movieCopy.duration = totalMinutes;
        return movieCopy;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    } 

    const yearGroups = {};

    moviesArray.forEach((movie) => {
        if (!yearGroups[movie.year]) {
            yearGroups[movie.year] = [];
        }
        yearGroups[movie.year].push(movie);
    });

    let bestYear = null;
    let highestAverage = -1;

    for (let year in yearGroups) {
        const moviesInYear = yearGroups[year];
        const averageScore = scoresAverage(moviesInYear);
        
        if (averageScore > highestAverage) {
            highestAverage = averageScore;
            bestYear = year;
        } else if (averageScore === highestAverage) {
            // Tie-breaker: if scores match, pick the older (smaller) year
            if (Number(year) < Number(bestYear)) {
                bestYear = year;
            }
        }
    }

    return `The best year was ${bestYear} with an average score of ${highestAverage}`;
}