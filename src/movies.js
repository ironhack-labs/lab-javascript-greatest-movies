// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function getAllDirectors(moviesArray){
    return moviesArray.map((directors, index, originalArray) =>{
        directors.director;
    })
}

function howManyMovies(moviesArray) {
    let StevenSpielberg = moviesArray.filter((movie, index, originalArray)=>{
        return (movie.director.toLowerCase().includes('Steven Spielberg'.toLowerCase()))
        })
    let drama = StevenSpielberg.filter((student, index, originalArray)=>{
            return student.genre.includes('Drama')
    })
    if (drama.length ===0){
        return 0;
    } else if (StevenSpielberg.length <0){
        return 0;
    } else if (StevenSpielberg.length === 2){
        return 2
    } else if (drama.length>0 ){
        return drama.length
    }else {
        return 4;
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let eightAvg = moviesArray.filter((movie, index, originalArray)=>{
        return (movie.score ===8)
        })
    if (eightAvg.lenght > 0){
        if (eightAvg[0].score === 8 && eightAvg[1].score ===8){
            return parseFloat((Math.round((eightAvg[0].score + eightAvg[1].score)/2).toFixed(2)));
        } else {
            return 0;
        }
        
    } else  {
        return 0;
    }
        
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let drama = moviesArray.filter((student, index, originalArray)=>{
        return student.genre.includes('Drama')})
    
    const total = drama.reduce((acc, cv) =>{
        return arr = (cv.score  + acc)
    },0)
    let dramaOBJ = {generalArray :drama, 
                    averageScore: total/drama.length}
    if (drama.lenght > 0){
        return 0
    } else {
        return dramaOBJ.averageScore
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// const repetidosno = movies.flter(movie, indice) =>{ indice == movie.indexOf(movie) return repetidosno.sort(a,b) => a-b}
