// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director).filter((director, index, array) => array.indexOf(director) === index);   
}
*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    const scoreAverage = moviesArray.reduce((acc, movie, index, array) => {
        if(!movie.score) {
            movie.score = 0;
        }
        return acc + movie.score / array.length; 
    }, 0);
    return Math.round(scoreAverage * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    return moviesArray.toSorted((movieA, movieB) => {
        if (movieA.year !== movieB.year) {
            return movieA.year - movieB.year;
        } else {
            return movieA.title.localeCompare(movieB.title);
        }
    });
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    const orderByTitle = moviesArray.map(movie => movie.title).sort();
    if (orderByTitle.length > 20) {
        return orderByTitle.slice(0, 20);
    } else {
        return orderByTitle;
    }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    
    const copiedMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    
    return copiedMoviesArray.map(movie => {
        
        if (movie.duration.includes("h") && movie.duration.includes("m")) {
            const hours = movie.duration.slice(0, movie.duration.indexOf("h"));
            const minutes = movie.duration.slice(movie.duration.indexOf("h") + 2, movie.duration.indexOf("m"));
            movie.duration = (parseInt(hours) * 60) + (parseInt(minutes));
        
        } else if (!movie.duration.includes("h")) {
            const minutes = movie.duration.slice(0, movie.duration.indexOf("m"));
            movie.duration = parseInt(minutes);
    
        } else if (!movie.duration.includes("m")) {
            const hours = movie.duration.slice(0, movie.duration.indexOf("h"));
            movie.duration = parseInt(hours) * 60;
        }

        return movie;
    });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    
    let bestYear;
    let bestRate = 0;

    if (moviesArray.length === 0) {
        return null;
    
    } else {
        
        const allYears = moviesArray.map(movie => movie.year);
        const years = allYears.filter((year, index, array) => array.indexOf(year) === index);

        for (let i = 0; i < years.length; i++) {
            const yearMovie = years[i];
            const allMoviesOfTheYear = moviesArray.filter(movie => movie.year === yearMovie);
            const rate = scoresAverage(allMoviesOfTheYear);
            if (rate > bestRate) {
                bestRate = rate;
                bestYear = yearMovie;
            } else if (rate === bestRate && yearMovie < bestYear) {
                bestYear = yearMovie;
            }
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestRate}`
}
console.log(bestYearAvg(movies))
