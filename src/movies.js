// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsList = moviesArray.map(movie => movie.directors);
    return directorsList;   
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    } else {
        const spielbergDramas = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
        return spielbergDramas.length;
    }
};
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    } else {
        const scores = moviesArray.reduce((acc,curr) => acc+= curr.score, 0);
        const avg = scores/moviesArray.length;
        return Math.round(avg * 100) / 100;
    }       
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaArr = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaArr.length === 0) {
        return 0;
    } else {
        const dramaScores = dramaArr.reduce((acc, curr) => acc+=curr.score, 0);
        return dramaScores/dramaArr.length;
    }   
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedByYear = moviesArray.slice().sort((a,b) => a.year - b.year || a.title.localeCompare(b.title));
    return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedByTitle = moviesArray.slice().sort((a,b)=> a.title.localeCompare(b.title))
    const titles = orderedByTitle.map(mov => mov.title);
  
    return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    const newArray = [...moviesArray];
    
    newArray.forEach(function(movie) {
        const hr = parseInt(movie.duration.substring(0, movie.duration.indexOf('h')));
        
        const min = parseInt(movie.duration.substring(movie.duration.indexOf(" ") + 1));
  
        movie.duration = (hr * 60) + min;
    });
    return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
