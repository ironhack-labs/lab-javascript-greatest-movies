// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(movie => movie.director)
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes("Drama"))
    return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0
    } else if (moviesArray.forEach(function(movie) {
        if (!movie.score) {
            movie.score = 0
        }
    }));

    let avg = moviesArray.reduce((sum, movie) => sum + movie.score, 0);
    return Math.round((avg / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if (dramaMovies.length == 0) {
        return 0;
    }
    
    let avg = dramaMovies.reduce((sum, dramaMovie) => sum + dramaMovie.score, 0)
    return Math.round((avg / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearMovies = moviesArray.map(movie => movie)
    yearMovies.sort(function(older, younger) {
        if (older.year == younger.year) {
			return older.title[0].localeCompare(younger.title[0]);
		} else {
			return older.year - younger.year;
		}
    });
    
    return yearMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesTitle = moviesArray.map(movie => movie.title)
    moviesTitle.sort((current, next) => current.localeCompare(next))
    
    return moviesTitle.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesArrayClone = moviesArray.map(movie => {
        const movieClone = { ...movie }
        
        let movieDuration = movieClone.duration.replace('h', '').replace('min', '').split(' ');
        let movieMin;
        
        if (movieDuration.length == 1) {
            movieMin = parseInt(movieDuration[0]) * 60;
        } else {
            movieMin = parseInt(movieDuration[0]) * 60 + parseInt(movieDuration[1]);
        }
        
        movieClone.duration = movieMin;
        return movieClone;
    });
    
    return moviesArrayClone;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length == 0) return null

    let years = moviesArray.map(movie => movie.year)
    let sortArr = years.map(year => {
        let movieYear = moviesArray.filter(movie => movie.year == year)
        let avgScore = movieYear.reduce((curr, next) => {
            if (next.score) return curr + next.score
            else return curr
        }, 0);
        
        avgScore = avgScore / movieYear.length;
        return { year: year, score: avgScore }
    });

    sortArr.sort((a, b) => {
        if (a.score == b.score) {
            if (a.year < b.year) return -1
            else return 1
        }
        else return b.score - a.score
    });
    
    return `The best year was ${sortArr[0].year} with an average score of ${sortArr[0].score}`
}
