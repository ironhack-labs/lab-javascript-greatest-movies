// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
      // Use the filter() method to filter drama movies directed by Steven Spielberg
    const stevenSpielbergDramas = moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    
    return stevenSpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0.00;
    }
    
    // Use the reduce method to calculate the total sum of scores
    const totalScore = moviesArray.reduce((accumulator, movie) => {
        if (typeof movie.score === 'number') {
            return accumulator + movie.score;
        } else {
            return accumulator;
        }
    }, 0);

    // Calculate the average score for movies
    const averageScore = totalScore / moviesArray.length;
    
    // Round the average score to 2 decimal
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // Use the filter method to get an array of drama movies
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    // Check if there are any drama movies in the array
    if (dramaMovies.length === 0) {
        return 0.00;
    }

    // Use the reduce method to calculate the total score of drama movies
    const totalScore = dramaMovies.reduce((accumulator, movie) =>
        accumulator + movie.score, 0);

    // Calculate the average score for drama movies
    const averageScore = totalScore / dramaMovies.length;

    // Round the average score to 2 decimal
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // Copy of the original array to avoid modifying it
    const sortedMovies = moviesArray.slice();

    // Use the sort() method to sort the movies by release year and title
    sortedMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            // Sort alphabetically by title
            return a.title.localeCompare(b.title);
        }
    });

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.slice();

  // Use the sort() method to sort the movies alphabetically by title
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Extract and return only the titles of the first 20 movies
    const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

    return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // Create a new array to store the modified movie objects
    const modifiedMovies = moviesArray.map(movie => {
        // Create a copy of the original movie object to avoid mutating it
        const newMovie = Object.assign({}, movie);

        // Split the duration string into parts
        const durationParts = movie.duration.split(' ');

        let totalMinutes = 0;
        for (const part of durationParts) {
            if (part.includes('h')) {
                totalMinutes += parseInt(part, 10) * 60;
            } else if (part.includes('min')) {
                totalMinutes += parseInt(part, 10);
            }
        }
        
        // Update the duration property
        newMovie.duration = totalMinutes;

        return newMovie;
    });
    
    return modifiedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    
    const years = {};
    moviesArray.forEach(movie => {
        const year = movie.year;
        const score = movie.score;
        
        if (!years[year]) {
            years[year] = { totalScore: 0, movieCount: 0 };
        }
        
        years[year].totalScore += score;
        years[year].movieCount++;
    });
    
    let bestYear = 0;
    let bestAverageScore = 0;
    
    // Find the year with the highest average score
    for (const year in years) {
        const averageScore = years[year].totalScore / years[year].movieCount;
    
        if (averageScore > bestAverageScore || (averageScore === bestAverageScore && year < bestYear)) {
            bestYear = year;
            bestAverageScore = averageScore;
        }
    }
    
    return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
