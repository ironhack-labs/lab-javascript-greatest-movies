// Iteration 1: All directors? - Get the array of all directors.

//const getAllDirectors = movies.map((e)=> {
//    const AllDirectors= e.director
//    return AllDirectors
//})

const getAllDirectors =(movies)=>{
     movies.map((e)=>{
        return e.director
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    return movies.filter (movie=> (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")>-1))
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage= movies.reduce((acumulador, valorActual) => {
    return (acumulador.rate + valorActual.rate) /movies.length 
}0)

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMovies = movies.filter(function(dramaMovie) {
    return (dramaMovie.director==="Steven Spielberg" || dramaMovie.genre.indexOf('Drama') !== -1)
    }).length

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    const moviesByYear= movies.sort(a,b) => a.year -b.year);
    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    const movieNew= arr.map(e=> e.title)
    movieNew.sort()
    const 20first= movieNew.slice(0,20)
    return 20first
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
