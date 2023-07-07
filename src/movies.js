// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(movie => movie.director);
    let allDirectorsCleaned = [];
    allDirectors.forEach((director) => {
        if (!allDirectorsCleaned.includes(director)) {
            allDirectorsCleaned.push(director);
        }
    });
    return allDirectorsCleaned;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaBySpielbergMovies = moviesArray.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
    return dramaBySpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let sumOfScores = moviesArray.reduce((accumulator, movie) => {
        let movieScore = movie.score || 0;
        return accumulator + movieScore;
    }, 0);
    let averageScore = sumOfScores / moviesArray.length;
    return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.map(movie => movie);
    return newArray.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) {
            return movie1.title.localeCompare(movie2.title);
        } else {
            return movie1.year - movie2.year;
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.map(movie => movie.title);
    return newArray.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = moviesArray.map(movie => movie);
    newArray.forEach(movie => {
        let movieHours = Number(movie.duration[0] * 60);
        let movieMinutes = 0;
        if (movie.duration.length < 3) {
            movie.duration = movieHours;
        } else {
            movieMinutes = Number(movie.duration[3] + movie.duration[4]);
        }
        movie.duration = movieHours + movieMinutes;
    }) 
    return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    const dictionary = {};
    moviesArray.forEach(movie => {
        if (!dictionary[movie.year]) {
            dictionary[movie.year] = [];
            dictionary[movie.year].push(movie);
        } else {
            dictionary[movie.year].push(movie);
        }
    });

    let highest = 0;
    let bestYear;

    for (const year in dictionary) {
        const currentYearAverage = scoresAverage(dictionary[year]);
        if (currentYearAverage > highest) {
            highest = currentYearAverage;
            bestYear = year;
        } else if (currentYearAverage === highest) {
            const oldestYear = year < bestYear ? year : bestYear;
            bestYear = oldestYear;
        }
    }
 
    return `The best year was ${bestYear} with an average score of ${highest}`;
} 


