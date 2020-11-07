// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies){
    return movies.map(movie => movie.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){
    const moviesSpielberg = movies.filter (movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return moviesSpielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies){
    if (movies.length===0) {
        return 0
    }
    //const rates = movies.reduce ((acc,movie) => acc + movie.rate , 0 );
    const rates = movies.reduce (function(totalRates , currentMovie) {
        if (typeof (currentMovie.rate) != 'number'){
            currentMovie.rate=0;
        }
        totalRates += currentMovie.rate
        return totalRates
    },0)
    const rateAvg = (Math.round(rates/movies.length*100)/100);
    return rateAvg;
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const moviesDrama= movies.filter(movie =>movie.genre.includes("Drama"))
    return ratesAverage(moviesDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


     
function orderByYear(movies) {

        let orderedMovies = movies.filter(movie => movie.year);

        orderedMovies.sort((a,b) => {   

                if (a.year === b.year){
                    
                    return a.title.localeCompare(b.title);
                }

                return a.year - b.year;
            
        });                        

        return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    
    const movieArr = movies.map(movie => movie.title);

    movieArr.sort();
    
    return movieArr.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
