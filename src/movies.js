// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsFiltered(moviesArray) {
    const directors = getAllDirectors(moviesArray);
    let filteredDirectors = [];
    directors.forEach(director => {
        if(!filteredDirectors.includes(director)) filteredDirectors.push(director);
    });
    return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const sumScores = moviesArray.reduce((acc, movie) => {
        if(movie.score) return acc + movie.score;
        else return acc;
    }, 0);
    const average = sumScores / moviesArray.length;
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(filteredMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.map(movie => movie);
    return sortedMovies.sort((a, b) => {
        if(a.year > b.year) return 1;
        else if(a.year < b.year) return -1;
        else { // If two movies have the same year, order them alphabetically by their title
            if(a.title > b.title) return 1;
            else if(a.title < b.title) return -1;
        }
        return 0;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.map(movie => movie);
    sortedMovies.sort((a, b) => {
        if(a.title > b.title) return 1;
        else if(a.title < b.title) return -1;
        return 0;
    });
    return sortedMovies.splice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    return moviesArray.map(movie => {
        let durationArray = movie.duration.split(" ");
        let minutes = 0;
        durationArray.forEach(element => {
            if(element.includes("h")) {
                minutes += element.slice(0, element.length - 1) * 60;
            } else if(element.includes("min")) {
                minutes += element.slice(0, element.length - 3) *1;
            }

        });
        return { ...movie, duration: minutes };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const moviesByYear = [];

    // Build an array of objects with the year and the movies of that year
    moviesArray.forEach(movie => {
        if (!moviesByYear.some(entry => entry.year === movie.year)) {
            moviesByYear.push({ year: movie.year, movieList: [movie] });
        } else {
            const index = moviesByYear.findIndex(entry => entry.year === movie.year);
            moviesByYear[index].movieList.push(movie);
        }
    });

    // Calculate the average score of each year
    moviesByYear.forEach(movieYear => {
        movieYear.average = movieYear.movieList.reduce((acc, movie) => acc + movie.score, 0) 
        / movieYear.movieList.length;
    });

    // Sort the array by average score and then by year
    moviesByYear.sort((a, b) => {
        if (a.average > b.average) return -1;
        else if (a.average < b.average) return 1;
        else {
            if (a.year > b.year) return 1;
            else if (a.year < b.year) return -1;
        }
    });

    return `The best year was ${moviesByYear[0].year} with an average score of ${moviesByYear[0].average}`;
}