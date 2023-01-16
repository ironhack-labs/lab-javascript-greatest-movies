// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    const directors = moviesArray.map(function(movie){
        return movie.director    
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSpielberg = moviesArray.filter(function(movie){
    if (movie.director==='Steven Spielberg' && movie.genre.includes('Drama') )
        return movie
    })
    return moviesSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if(moviesArray==""){
        return 0
    }

    let average = moviesArray.reduce(function(acc, movie){
    
    if(movie.score == undefined){
        return acc;
    }

    return acc + movie.score
    },0) 
    return Number((average/moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray = moviesArray.filter(function(movie){
    if (movie.genre.includes('Drama') )
        return movie
    })
    
    return scoresAverage(dramaArray)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.slice(0);
    newArray.sort(function(a,b){

    if(a.year === b.year){
    return a.title.localeCompare(b.title)
    }

    return a.year - b.year 
    }) 

    return newArray
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.slice(0);
    newArray.sort(function(a,b){
        return a.title.localeCompare(b.title)
        return newArray
    })
    let titles = newArray.map(function(movie){
        return movie.title
    })
    return titles.splice(0,20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newMovies = moviesArray.map(function(movie){
        let time = movie.duration
        
        time = time.split("h")
        let hours = Number(time[0])*60
        let minutes = time[1]
        
        if(minutes[1] === ""){
        minutes=0
        }
        minutes = Number(time[1].slice(0,-3))
    
        newTime= hours+ minutes
        movie.duration = newTime
        return movie 
        })
        return newMovies
    }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
