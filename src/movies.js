// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const movies = require('./data')
//console.log(movies);
function getAllDirectors(moviesArray) {
   const director1 = moviesArray.map((movie)=>{
    //console.log(movie.director)
        return movie.director;
    })
    return director1;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
let count = 0;
    if(moviesArray.length === 0)
    {
        return 0;
    }
    const movies = moviesArray.filter((movie)=> (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"))
    )
    return movies.length;
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0)
    {
        return 0;
    }
    const score = moviesArray.reduce((acc,movie)=>{
        if(movie.score === undefined)
        {
            return acc;
        }
        else
        {
            return acc + movie.score;
        }
       
    },0)
    const avg = Math.round((score / moviesArray.length) * 100) / 100
    //console.log(avg)
    return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const score = moviesArray.filter((movie)=>(movie.genre.includes("Drama"))).
    reduce((acc,res)=>{
        if(res.score === undefined)
        {
            return acc;
        }
        else{
            return acc + res.score;
        }
    },0)
    const avg = Math.round((score / moviesArray.length) * 100) / 100
    return avg
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArr = [...moviesArray];
    copyArr.sort((a,b)=> a.year - b.year)
    
    return copyArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyArr = [...moviesArray];
    copyArr.sort((a,b)=>a.title.localeCompare(b.title))
    return copyArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
