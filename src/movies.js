// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let movieDirectors = [];
    for (var i = 0; i < moviesArray.length; i++) {
        let movie = moviesArray[i];
        movieDirectors.push(movie.director);
        }
    return movieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let countMovies =  0;
    for (var i = 0; i < moviesArray.length; i++) {
        let movie = moviesArray[i];
        if (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama')>=0) {
            countMovies++;
        } 
    }
    return countMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let sumScores = 0;
    for (var i = 0; i < moviesArray.length; i++) {
        let movie = moviesArray[i];
        if (movie.hasOwnProperty('score')){
            sumScores = movie.score+sumScores;
        }
    }
    const avgScores = sumScores / moviesArray.length;
    //const avgScores = avgScore;
    return Math.round(avgScores * 1e2 ) / 1e2;
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
            return 0;
        }
        let sumDrama = 0;
        let countDrama = 0;
        for (var i = 0; i < moviesArray.length; i++) {
            let movie = moviesArray[i];
            if (movie.genre.indexOf('Drama')>=0){
                sumDrama = movie.score + sumDrama;
                countDrama++;
           }
    }
    if (countDrama === 0) return 0;
    const avgDrama = sumDrama / countDrama;
    return Math.round(avgDrama * 1e2 ) / 1e2;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderYear = [...moviesArray];
    /*for (var i = 0; i < moviesArray.length; i++) {
        let movie = moviesArray[i];
        orderYear.push(movie);
        
    }*/
    orderYear.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        else {
            return a.year - b.year;
        }

    });
   return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    for (var i = 0; i < moviesArray.length; i++) {
        let movie = moviesArray[i];
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
