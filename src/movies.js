// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((director)=>director.director)
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if(moviesArray.length===0){
        return 0;
    }
    let sum = 0;
    moviesArray.filter((numbOfMovies)=>{
        if(numbOfMovies.director === 'Steven Spielberg' && numbOfMovies.genre.includes("Drama")){
            sum++
        }      
    })
    return sum
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0;
    }
    const movieScore = moviesArray.reduce((acc, curr)=> {
        if(typeof curr.score === "number"){
            return acc + curr.score;
        }
        return acc
        
        }, 0);
          
    return Math.round(movieScore / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie)=> {return movie.genre.includes("Drama")})
    if(dramaMovies.length === 0){
        return 0;
    }
    const dramaScore = dramaMovies.reduce((acc, curr)=> {
        if(typeof curr.score === "number"){
            return acc + curr.score;
        }
        return acc
        
        }, 0);
          
    return Math.round(dramaScore / dramaMovies.length * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMoviesArray = moviesArray.slice();

    return newMoviesArray.sort((a,b)=>{
        if(a.year > b.year){
           return +1;
        }else if (a.year < b.year){
            return -1;
        }else if(a.year === b.year){
            return a.title.localeCompare(b.title)
           }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMoviesArray = moviesArray.slice();

    const moviesTitles = newMoviesArray.map((movies)=> movies.title)

    const movAlfOrder = moviesTitles.sort((a, b)=>a.localeCompare(b))

    return movAlfOrder.slice(0, 20);


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
