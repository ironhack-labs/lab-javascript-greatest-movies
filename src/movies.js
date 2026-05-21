// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return [... new Set(moviesArray.map((movie) => movie.director))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    
    const total = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
    return parseFloat((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies=moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) {
        return 0;
    }
    const total = dramaMovies.reduce((total, movie) => total+movie.score, 0);
    return parseFloat((total/dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((movie1, movie2 ) => {
        if (movie1.year !== movie2.year) {
            return movie1.year - movie2.year;
        }
        return movie1.title.localeCompare(movie2.title);
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray]
        .map(movie => movie.title)
        .sort()
        .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
        let hours =0;
        let minutes=0;
        
        if(movie.duration.includes('h')){
            hours = parseInt(movie.duration);
        }
        if(movie.duration.includes('min')){
            minutes = parseInt(movie.duration.split('h')[1]);
        }
        return {
            ...movie,
            duration: hours*60+minutes
        };
    });
};

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const years = {};

    moviesArray.forEach(movie => {
        if (!years[movie.year]) {
            years[movie.year] = [];
        }
        years[movie.year].push(movie.score);
    });

    let bestYear = 0;
    let bestAverage = 0;

    for (let year in years) {
        const scores = years[year];
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

        if (average > bestAverage || (average === bestAverage && Number(year) < bestYear)) {
            bestAverage = average;
            bestYear = Number(year);
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
