// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let moviesDirectors = moviesArray.map((cinema) =>{
        return cinema.director
    })
    return moviesDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter = 0;
    const resultMovies = moviesArray.filter((spielberg) => {
        if(spielberg.director === 'Steven Spielberg' && spielberg.genre.includes ('Drama')){
            counter ++
        }
    })
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
  
    let scoresTotal = moviesArray.reduce((sum, scoreReview)=>{
        if(scoreReview.score === " " || !scoreReview.score){
        scoreReview.score = 0;
        }
        return sum + scoreReview.score;
    }, 0)


    return Math.round(scoresTotal / moviesArray.length * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((films)=> {
        if(films.genre.includes('Drama')){
            return films;
    } 
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderYear = [...moviesArray]
    return orderYear.sort((a,b) => {
        if (a.year > b.year) return 1
        else if(a.year < b.year) return -1
        else if(a.title > b.title) return 1
        else if(a.title < b.title) return -1
        return 0
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphabetically = moviesArray.map((films)=>{
        return films.title;
    })

    alphabetically.sort();
        return alphabetically.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let hoursToMinutes = [...moviesArray]
    return hoursToMinutes
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
