// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map(el => el.director)
    return directorsArr
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    else {
        let count = 0
        moviesArray.filter(movie => {
            if(movie.director === "Steven Spielberg") {
                let genre = movie.genre
                genre.forEach(el => el === "Drama" ? count +=1 : 0); 
            }
        })
        return count
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    else {
        let count = 0
        moviesArray.map(movie => movie.hasOwnProperty('score') ? count += movie.score : 0)
        let result = count / moviesArray.length
        return parseFloat(result.toFixed(2))
    }
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    else {
        let count = 0
        let newArr = []
        moviesArray.filter(movie => {
            if(movie.hasOwnProperty('score')) {
                let genre = movie.genre
                genre.forEach(el => {
                    if(el === "Drama") {
                        count += movie.score
                        newArr.push(movie.score)
                    }
                })
            }
        })
        let result = count / newArr.length
        let unroundedResult = parseFloat(result.toFixed(2))
        return (count === 0 ? 0 : unroundedResult)
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMovies = [...moviesArray]
    newMovies.sort((a,b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year-b.year)
    return newMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderMovies = []
    moviesArray.forEach(movie => {
        let title = movie.title
        orderMovies.push(title) 
    })
    let sortedMovies = orderMovies.sort()
    let under20 = sortedMovies.slice(0,20)
    return under20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
