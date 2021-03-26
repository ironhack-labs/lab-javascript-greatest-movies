// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const directorsName = movies.map(function(movie){
        return movie.director
    })
    return directorsName;
}
getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){

    const spielbergMovies = movies.filter(function(movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return spielbergMovies.length;
}
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){

    //if (movies.length === 0) return 0;

    const sumRates = movies.reduce(function(sum,movie){
        if (!movie.rate) return sum
        else return sum+movie.rate
    },0)
    //console.log(sumRates)

    const countRates = movies.length

    const average = sumRates/countRates
    
    console.log(average.toFixed(2))

    return Number(average.toFixed(2)) || 0
   
}
ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    const dramaMovies = movies.filter(function(movie){
        return movie.genre.includes("Drama")
    });
    //console.log(dramaMovies)

    const dramaRates = dramaMovies.reduce(function(sum,movie){
        if (!movie.rate) return sum
        else return sum+movie.rate
    },0)
    //console.log(dramaRates)

    const dramacountRates = dramaMovies.length

    const dramaAverage = dramaRates/dramacountRates

    //console.log(dramaaverage)
    return Number(dramaAverage.toFixed(2)) || 0

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){

    const sortByYear = movies.concat().sort(function(a,b){

        return a.year - b.year
    })

    return sortByYear


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(){

    const sortTitle = movies.concat().sort(function(a,b){

        return a.title - b.title
    })
  //console.log(sortTitle)
    return sortTitle


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
