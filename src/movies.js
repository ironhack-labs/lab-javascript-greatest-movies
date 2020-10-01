// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors (movies) {
    let getAllDirectors = movies.map (function(oneMovie){
        let directors = oneMovie.director;
        return directors;
    })
    return getAllDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies =(arr)=>  { 
let x = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
return x.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (movies.length === 0){
        return 0;
    };
    let ratesTotal = movies.reduce (function(acc, movie){
        if (movie.rate){
            return acc + movie.rate
        } else {
            return acc;
        }
    }, 0)
    return Math.round((ratesTotal/movies.length) * 100) / 100
}

//console.log (ratesAverage)

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (elDrama) => {
    let dramaMovies = elDrama.filter((movie) => {
        return movie.genre.includes("Drama");
    })
    return ratesAverage(dramaMovies);
}

   

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (yearOfRelease) {
    return [...yearOfRelease].sort (function(a,b){
    if (a.year > b.year){
    return 1
    } else if (a.year < b.year){
    return -1
    } else {
    if (a.title > b.title) {
            return 1;
        } else {
        return -1
        }
        return 0;
    }
    })
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
