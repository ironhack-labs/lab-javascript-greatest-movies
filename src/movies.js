// Iteration 1: All directors? - Get the array of all directors.
//console.log(movies);

// function getAllDirectors(movies){
//     return movies.map(function (movie)
//     {
//     return movie.director;
// })
// }

//easier ES6 notation
function getAllDirectors(movies){
    return movies.map(movie => movie.director);
}
console.log(getAllDirectors(movies));
console.clear();

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(movies){
//     let filteredMovies = movies.filter(function (movie){
//         if (movie.director === 'Steven Spielberg') {
//             return true
//         }
//         return filteredMovies;
        
//         }

//     )}

//     console.log(howManyMovies(movies));
function howManyMovies(movies){

    let filteredMovies = movies.filter(function(movie){
        if ((movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama'))){
            return true}
            
    })
    return filteredMovies.length;
} 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
 function ratesAverage(movies){
     if (movies.length === 0){return 0
    } else {
        let avg = movies.reduce(function(acc, val){
            //conditioanl statement, if not return acc.
            if (val ===''){
                return 0;
            } else {
                return acc + val.rate;
            }
        },0)/movies.length;
        return parseFloat(avg.toFixed(2));
    }
}

console.log(ratesAverage(movies))



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(function(movie){
        if(movie.genre.includes('Drama')){
            return true
        }
    })
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    return movies.map(movie => movies.sort(function (a,b){
        return a.year-b.year
    }));
    
    //return moviesByYear
}

// const moviesByYear = movies.sort(function (a,b){
//     return a.year-b.year
// })



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
