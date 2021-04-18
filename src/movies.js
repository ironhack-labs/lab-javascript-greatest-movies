// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const directors = movies.map((movie) => {
        return movie.director;
    })
    return directors;
}
//return a new array with the same length as the original one


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up 
//multiple times in the array of directors. How could you "clean" a bit this array and make it unified 
//(without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    const splielbergMovies = movies.filter(movie =>
        movie.director["Steven Spielberg"] && movie.genre["Drama"]);
        return splielbergMovies.length;    
}
    

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    const ratesSum = movies.reduce(function(acc, movie){
        return acc + movie.rate
    }, 0)
    const averageRate = ratesSum / movies.rate.length;
    const avgRate = averageRate.toFixed(2);
    console.log(`Movies rate average is ${avgRate}`)
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const years = movies.year.sort(function(year1, year2){
        year1-year2;
    if (movie.year1 === movie.year2){
        movie.title.sort()
    } console.log(order)
    })  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
