// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsName = [];
    directorsName = moviesArray.map((movie)=>{
        return (movie.director);
    })
    return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let stevenMovies = moviesArray.filter((movie)=>{
        return (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama'))
    })

    return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if (moviesArray.length === 0) return 0;

    let sumMovies = moviesArray.reduce((accumulator, movie)=>{
        if (movie.score) {
            return accumulator + movie.score;
        }
        else {
            return accumulator;
        }
    }, 0);

    return Number((sumMovies/moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovie = moviesArray.filter((movie) =>
        movie.genre.includes('Drama')
    )

    if (dramaMovie.length === 0) return 0;

    let sumMovies = dramaMovie.reduce((accumulator, movie)=>{
        if (movie.genre) {
            return accumulator + movie.score;
        }
        else {
            return accumulator;
        }
    }, 0);

    return Number((sumMovies/dramaMovie.length).toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderArray = [...moviesArray];
    orderArray.sort(function(a,b) {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year){
            return 1;
        }
        else if (a.year === b.year){
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title){
                return 1;
            }
            else if (a.title === b.title){
                return 0;
            }
        }
    })
    return orderArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleMovie = [...moviesArray];

    titleMovie = moviesArray.map((movie)=>{
        return (movie.title);
    })

    titleMovie.sort();

    return titleMovie.splice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let convertedTime = [...moviesArray];
    convertedTime.map((movie)=>{
        let hourMovie = movie.duration.split('h')[0];
        let hourToMinute = Number(hourMovie * 60);

        if (movie.duration.split(' ')[1]) {
            let firstDivision = movie.duration.split(' ')[1];
            let secDivision = Number(firstDivision.split('min')[0]);

            let minutesTotal = secDivision + hourToMinute;
            movie.duration = minutesTotal;
        }
        else {
            movie.duration = hourToMinute;
        }
    });
    return convertedTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
