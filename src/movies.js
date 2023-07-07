// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map((movies) => movies.director);
    return directors;   
}

getAllDirectors();



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter ((movie) => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

howManyMovies();

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (!movies.length){
        return 0
    }

    const total = movies.reduce((sum, movie)=> sum + movie.score, 0)
    const result= total / movies.length
    return (Math.round(result * 100)) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const drama = movies.filter(drama => drama.genre.includes('Drama'))
    if (!drama.length){
        return 0
    }

    const dramaScore = drama.reduce((sum, movie) => sum + movie.score, 0) / drama.length
    return (Math.round(dramaScore * 100)) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const nueva = movies.map((item) => item);
    nueva.sort((a,b) => {
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year){
            return 1;
        } else if (a.year == b.year){
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title){
                return 1;
            } else if (a.title == b.title){
                return 0;
            }
        } 
    })
    return nueva;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let newArray2 = movies.sort( movies => {
        if (movies.title) {
            return movies.title;
        }

        if(movies.length > 20){
            return movies.splice(0,20)
        }

    })
    return newArray2;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
