// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies) {
let directors = movies.map (function (movie) {
    return movie.director
})
return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    let allSpielbergMovies = movies.filter (function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });
    return allSpielbergMovies.length; 
    }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// function ratesAverage(movies) {
//     // let rateArray = movies.map(function(movie){
//     //     return movie.rate;
//     // });

//     // if (rateArray.length === 0) {
//     // return 0;
//     // }

//     let ratingsCombined = movies.reduce(function(sum,value) {
//         if (value.rate === "" || value.rate ==== null) {
//             return sum;
//         }
//         console.log("this is sum", sum)
//         console.log("this is valueee", value.rate)
        
//         return sum + value.rate;
//     },0)
//     console.log("this is ratingsCombined", ratingsCombined/movies.length);
//     //console.log(Number(ratingsCombined/rateArray.length).toFixed(2));
//     //return Number((ratingsCombined/rateArray.length).toFixed(2));
// };

function ratesAverage(movies) {
    // let rateArray = movies.map(function(movie){
    //     return movie.rate;
    // });

    // if (rateArray.length === 0) {
    // return 0;
    // }
    if (movies.length === 0) {
        return 0;
        }
        let ratingsCombined = movies.reduce(function(sum,value) {
            if (value.rate === "" || value.rate == null) {
                return sum;
            }
            console.log("this is sum", sum)
            console.log("this is valueee", value.rate)
            
            return sum + value.rate;
        },0)
        console.log("this is ratingsCombined/movies.length",ratingsCombined/movies.length);
        //return Number((ratingsCombined/rateArray.length).toFixed(2));
        return Number((ratingsCombined/movies.length).toFixed(2));
    }; 
    ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
