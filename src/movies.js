// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const directorsArray = array.map(function(movie){
        return movie.director
    })
    return directorsArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){

    const numberDramaSpielberg = array.filter( function(movie){
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            return true;
        }
    });
    return numberDramaSpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if (!array.length){
        return 0
    }

    const sum = array.reduce(function(acc, movie){
        if(movie.rate){
            return acc + movie.rate
        }
        else {
            return acc
        }   
    },0)

    const avgRate = sum/array.length
    const avgRateRounded = Math.round(avgRate*100)/100;

    return avgRateRounded;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    const dramaArray = array.filter( function(movie){
        return movie.genre.includes("Drama");
    })
    return ratesAverage(dramaArray)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// How should we create a new array, i am already doing it by creating orderdArray?
function orderByYear(array){
    const orderedArray = array.sort( function(movie1, movie2){
        if (movie1.year != movie2.year){
            return movie1.year - movie2.year;
        } else {
            return movie1.title - movie2.title;
        }
    })
    return orderedArray
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
