// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) { return moviesArray.map(element => element.director) }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaMovies = moviesArray.filter(element => {
        return element.director == 'Steven Spielberg' && element.genre.includes('Drama')
    })
    return stevenDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0;
    }
    let totalScore = moviesArray.reduce((a, b) => {
        if (b.score === undefined) {
            return a
        }
        return a + b.score
    }, 0)
    return parseFloat((totalScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))        //nuevo array compuesto de peliculas que incluyan el string Drama en su género 
    if (dramaMovies.length === 0) {
        return 0
    }
    let scoreSum = dramaMovies.reduce((a, b) => {                                       //si la película tiene propiedad score se suma el valor y devuelve el valor total a la variable scoreSum
        if (!b.score) {
            return a
        }
        return a + b.score
    }, 0)
    return parseFloat((scoreSum / dramaMovies.length).toFixed(2))                         //Divisíon de el totalScore entre el tamaño del array dramaMovies
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesCopy = [...moviesArray]
    moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
           return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })
    return moviesCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesCopy = [...moviesArray]
    //let moviesList = moviesCopy.map((movie) => { return movie.title }).sort((a, b) => { a.localeCompare(b) })
    let moviesList = moviesCopy.map((movie) => { return movie.title }).sort((a, b) => {return a.localeCompare(b)})
    
    console.log(moviesList.slice(0,20))
    return moviesList.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}




/*
const scores = moviesArray.map(element => element.score)
return scores.reduce((total, current)=> {
        return (total+current)/scores.length
    })*/