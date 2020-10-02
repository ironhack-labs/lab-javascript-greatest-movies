// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let primerEjercicio = movies.map(function (nameDirectors) {
        return nameDirectors.director
    });
    return primerEjercicio;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let stevenSpil = movies.filter(function (drama) {
        return drama.genre.includes("Drama");
    }).filter(function (director) {
        return director.director.includes("Steven Spielberg")
    })
    return stevenSpil.length;
}
console.log(howManyMovies(movies))


 // Iteration 3: All rates average - Get the average of all rates with 2 decimals

 function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    let avgRate = movies.reduce(function (sum, movie) {
            if (movie.rate) {
                return sum + movie.rate;
            } else {
                return sum;
            }
        }, 0) / movies.length;
    return Math.round(avgRate * 100) / 100;
}
console.log(ratesAverage(movies));

    // Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(movies) {
        const dramaMovies = movies.filter(movie => {
            return movie.genre.includes("Drama");
        });
    
        return ratesAverage(dramaMovies);
    }

    // Iteration 5: Ordering by year - Order by year, ascending (in growing order)




    // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    



    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
    // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average