// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
    let directorsArr = array.map((movie) => {
        return movie.director
    })
    return directorsArr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (array){
    let dramaMovies = array.filter ((movie) => {
        return movie.director ==="Steven Spielberg" && movie.genre.includes("Drama")
    })
        return dramaMovies.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (movies){
    if(movies.length===0){
        return 0

    }else{
    let total = movies.reduce ((acc, movies) =>{
        if ( movies.rate == undefined){
            return acc
        } else {
        return acc + movies.rate }
    },0)
    let average = total/ movies.length
    average= average.toFixed(2)
    average = Number(average)
    return average
}
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
    if (!movies.includes("Drama")){
        return 0
    }else { 
        let TotalDramaRates = movies.reduce ( (acc, movies)=>{
            if (movies.genre.includes("Drama")){
                return acc + movie.rate;
            }else{
                return acc + 0
            }
        }, 0);
        let totalDramaMovies = movies.reduce ( (acc, movies) =>{
            if (movies.genre.includes("Drama")){
                return acc + movies.length;
            }else{
                return acc + 0
            }
        }, 0)
    
    let avgDrama = TotalDramaRates/totalDramaMovies
    avgDrama = avgDrama.toFixed(2)
    avgDrama = Number(average)
    return parseFloat(avgDrama)
    }
    }   
 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies){
    if (movies.includes("year")){
    movies.filter ((movie) =>{
    movie[1].sort ((a,b) =>{
            if (a.movies.year > b.movies.year){
                return 1
            }else if (a.movies.year < b.movies.year){
                return -1;
            }else {
                return 0
            }
        })
    })
    let newSort = JSON.parse(JSON.stringify(movies.year));
    return newSort
}}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (movies){
    if (movies.includes("title")){
        movies.filter ((movie) =>{
        movie[1].sort ((a,b) =>{
                if (a.movie.title > b.movie.title){
                    return 1
                }else if (a.movie.title < b.movie.title){
                    return -1;
                }else {
                    return 0
                }
            })
        })
        let titleSort = JSON.parse(JSON.stringify(movie.title));
        return titleSort
    }}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
