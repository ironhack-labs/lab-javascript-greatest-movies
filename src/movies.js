

console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((oneMovie) => oneMovie.director);
	return directors;
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spilbergMovies = moviesArray.filter(
		(eachMovie) =>
			eachMovie.director === "Steven Spielberg" &&
			eachMovie.genre.includes("Drama")
	);
	return spilbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

     
    const scores = moviesArray.reduce((acc, val) => {
        if (val.score) {
        return acc + val.score;
        }

        else {
        return acc;    
        }
        
    }, 0);
    return Math.round((scores / moviesArray.length) * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie) =>
	eachMovie.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    }

    const scores = dramaMovies.reduce((acc, val) => {
        if (val.score) {
        return acc + val.score;
        }

        else {
        return acc;    
        }
        
    }, 0);
    return Math.round((scores /dramaMovies.length) * 100) / 100;
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const yearMovies = [...moviesArray];
    yearMovies.sort (function(a, b){
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });

    return yearMovies;
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const nameMovies = [...moviesArray];
    nameMovies.sort (function(a, b){
        if (a.title < b.title) return -1;
        if (a.title === b.title) return 0;
        if (a.title > b.title) return 1;
        
    });
    const titles = nameMovies.map((oneMovie) => oneMovie.title).slice(0,20);
    return titles;
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
