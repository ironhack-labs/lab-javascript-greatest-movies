// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((films) => {
        
        return films.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0
    moviesArray.filter((films)=>{
        if(films.director === "Steven Spielberg" && films.genre.includes("Drama")){
            count++
        }
    })
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    let averageScores = moviesArray.reduce((sum, currentScore)=>{
        if(!currentScore.score) currentScore.score = 0;

        return sum + currentScore.score
    } ,0)
        
    return Math.round(averageScores/moviesArray.length * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter((films) =>{
        if(films.genre.includes('Drama')){
            return films;
        }
        else if (!films.genre.includes('Drama')){
            return 0;
        }
    })
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let newArray = moviesArray.slice()
    newArray.sort((a,b)=>{ 
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    });
    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.slice(0)
    let titlesArray = newArray.map((element) =>{
        return element.title
    });

    return titlesArray.sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    let clonedArray = moviesArray.slice(0)
    let hoursArray = clonedArray.map((movie) => {    
        return { ...movie, duration: transformHoursToMinutes(movie.duration) }
    })
    return hoursArray
}

function transformHoursToMinutes(hours) {
    // replace all letters and spaces with an empty string
    hours = hours.replace(/\D/g,'');
    
    return Number(hours.charAt(0)) * 60 + Number(hours.slice(1))
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
