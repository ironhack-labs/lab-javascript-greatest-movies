// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies){
    let directors = movies.map(function(movie){
        return movies.directors;
    });
    return directors;
}   

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let dramaMovies = movies.filter(function(movie){
        movie.director == "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return dramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movie){
    if (movies.length == 0){
        return 0;
    }
    let totalRates = movies.reduce(function(acc, movie){
        return acc + movie.rate || 0            ;
    }, 0);
    return Number((totalRates/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMovies = movies.filter((movie) => {
    return movies.genre.includes("Drama");
});
return ratesAverage(dramaMovies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    let cloneMovies = JSON.parse(JSON.stringify(movies));
    cloneMovies.sort(function(a, b){
        if (a.year > b.year){
            return 1;
        }
        else if (a.year < b.year){
            return -1;
        }
        else {
            if (a.title > b.title){
                return 1;
            }
            else if (a.title < b.title){
                return -1;
            }
            else {
                return 0;
            }
        }   
    })
    return cloneMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let cloneMovies = JSON.parse(JSON.stringify(movies));
    if (a.title > b.title){
        return 1;
    }
    else if (a.title < b.title){
        return -1;
    }
    else {
        return 0;
    }
    let movieTitle = cloneMovies.map(function (movie){
        return movie.title;
    })
    return movieTitle.splice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    let updateMovies = movies.map(function(movie){
        let str = "2h 22min"
        let time = movie.duration.split("")
        let hours = time [0]
        let min = time [1]

        return movie;
    })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
