//add this to verify in console nodemon : import { movies } from './data.js';

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) { 
    return movies.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsWithoutDuplicate(movies) {
    return movies.reduce((directorListWithoutDuplicate, movie) => {
        if (directorListWithoutDuplicate.includes(movie.director) === false) {
            directorListWithoutDuplicate.push(movie.director);
        } 
        return directorListWithoutDuplicate;
    }, []);   
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieList) {
    const dramaMoviesOfSs = movieList.filter(movie => movie.genre.includes('Drama') && movie.director === "Steven Spielberg");
    return dramaMoviesOfSs.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieList) {
    if (movieList.length === 0) {
        return 0;
    }
    const sumRate = movieList.reduce((sum, currentMovie) => {
        if (typeof currentMovie.rate === "number") {
            return sum + currentMovie.rate;
        }
        return sum;
    }, 0);
    return Math.round((sumRate/movieList.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieList) {
    let dramaList = movieList.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaList);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieList) {

    const newMovieList = JSON.parse(JSON.stringify(movieList));

    return newMovieList.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList) {
    let newList = movieList.map(movie => movie.title);
    newList.sort((a, b) => a.localeCompare(b));
    if (newList.length <= 20) {
        return newList;
    }
    return newList.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieList) {
    return movieList.map(movie => {
        const duration = movie.duration;
        // const { duration } = movie;
        let hour = 0;
        let minute = 0;
        if (duration.indexOf('h') !== -1) {
            hour = Number(duration.slice(0, duration.indexOf('h')));
        }
        if (duration.indexOf('m') !== -1) {
            minute = Number(duration.slice(duration.indexOf(' ') + 1,  duration.indexOf('m')));
        }
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: hour * 60 + minute,
            genre: movie.genre,
            rate: movie.rate
        };    
    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function getAllYearsWithoutDuplicate(movies) {
    return movies.reduce((yearListWithoutDuplicate, movie) => {
        if (yearListWithoutDuplicate.includes(movie.year) === false) {
            yearListWithoutDuplicate.push(movie.year);
        } 
        return yearListWithoutDuplicate;
    }, []);   
}

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null;
    }
    const listOfYears = getAllYearsWithoutDuplicate(movies);
    const listOfYearRate = listOfYears.map(function(year){
        const moviesOfTheYear = movies.filter(movie => movie.year === year);
        return {
            year: year,
            rate: ratesAverage(moviesOfTheYear)
        };
    });
    listOfYearRate.sort((a, b) => {
        if (a.rate === b.rate) {
            return a.year - b.year;
        } 
        return b.rate - a.rate;
    });
    const bestYearRate = listOfYearRate[0];
    return `The best year was ${bestYearRate.year} with an average rate of ${bestYearRate.rate}`;
}
