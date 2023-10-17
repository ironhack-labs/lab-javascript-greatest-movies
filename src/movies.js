// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (moviesArray) { //se fosse imprimir, imprimiria a lista com todos os diretores
    // const movies = [] (array já existe com: title, year, director, duration, genre and score)
    return moviesArray.map(listDirectors =>listDirectors.director
    )
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) { 
    
return moviesArray.filter(movie =>{ //busca director dentro de movie.director
    return movie.director=== "Steven Spielberg" && movie.genre.include("Drama")
}).length // busca e inclui "Drama" em movie.genre.include
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0)
    return 0;

    const total = moviesArray.reduce((accumulator, movie) =>{
        if(movie.score){
            return accumulator + movie.score
        }
        else{
            return accumulator + 0
        }
    }, 0)

    const average = (total / moviesArray.length).toFixed(2);
return Number(average) //.tofixed(2) with 2 decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    dramaMovies = moviesArray.filter((dramaGenre) =>{
        return dramaGenre.genre.includes("Drama")
    }, 0)

    if(dramaMovies.length === 0){
    return 0;
    }

    avg = dramaMovies.reduce((accumulator, currentValue) =>{
        return (accumulator + currentValue.score)
    }, 0)

    return Math.round((avg/dramaMovies.length)*100)/100

    //or to get average:
    //return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
