// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr){
let newMoviesArr = moviesArr.map(function(element){
    let nameDirector = element.nameDirector;
    return nameDirector;
}

)
return newMoviesArr;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr){
let moviesFiltered = moviesArr.filter(function(movie){
     return  movie.director === "Steven Spielberg" && movie.genre.includes("Drama")

})
return moviesFiltered.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(ratesArr){
    if(!ratesArr.length){ return 0};

    
    let avgRates = ratesArr.reduce(function(acc, currentValue){
    if(currentValue.rate){

        return (acc + currentValue.rate);
    }else{
        return acc;
    }
    } ,0)
    return parseFloat((avgRates / ratesArr.length).toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr){
    let moviesDrama = moviesArr.filter(function(movie){
        return movie.genre.includes("Drama")
    })
     return ratesAverage(moviesDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr){
    let sortedMatriz = moviesArr.sort(function(a,b){
        
    })

}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
