// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    return moviesArray.map((val) => val.director)
}
    

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const num = moviesArray.filter(item => item.director === 'Steven Spielberg' && item.genre.includes("Drama"))
    return  num.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    
    const moviesScore = moviesArray.reduce ((accumulator, movie) => {
        if (movie.score) {
            return accumulator + movie.score;
        } else {
        return (accumulator);
        }
    }, 0)
    return Number((moviesScore / moviesArray.length).toFixed(2));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   // if (moviesArray.length === 0) return 0;
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newClone = moviesArray.map((movies)=> movies)
    newClone.sort((a,b) => {
        if(!(a.year - b.year)) {
            if(a.title.toLowerCase() < b.title.toLowerCase()) return -1 
            else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1 
            else return 0 
        } else {
            return a.year -b.year
        }
    })
    return newClone
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(function (movie) {
        return movie.title;
    })
    const alphabeticalOrder = movieTitles.sort().slice(0, 20);
    return alphabeticalOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
