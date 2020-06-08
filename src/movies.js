// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = movies.map(function(movie){
    return movie.director
})

console.log(getAllDirectors)



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// const getAllDirectors = movies.map(function(movie){
//     return !movies.includes(movie);
// })

// console.log(getAllDirectors)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



// function howManyMovies(arr)


const howManyMovies = movies.filter(function(movie) {
    if movie.director === "Steven Spielberg" && if movie.genre.includes "Drama"
})
     




    // const placesWithPool = places.filter(function (place) {
    //     return place.pool === 'yes';
    // }).map(function (place) {
    //     return {
    //         title: place.title
    //     }
    // });

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arr) {
    const average = movies.reduce(function(sum,val){
     return sum + val.rate || 0;
     },0);{
return Number((average / arr.length).toFixed(2));
}

// .filter 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaMovie = movies.filter (function(movie)}
    return movie.genre.indexOf("Drama")
})
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
