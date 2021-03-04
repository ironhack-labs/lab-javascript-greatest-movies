// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
    let directors = movies.map(function (movie){
        return movie.director
      });
    
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    if (movies.length == 0) {
        return 0
    }
    let dramaSpielberg = movies.filter(function (movie) {
        return ( movie.genre.indexOf ("Drama") != -1 && movie.director == "Steven Spielberg") 
        
    });
    return dramaSpielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length == 0)
        return 0;
        let rateSum = movies.reduce(
            (accumulator, movie) => accumulator + movie.rate, 0
            );
            return parseFloat((rateSum/movies.length).toFixed(2)); 
    }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    if (movies.length == 0) {
        return 0;
    }
    let drama = movies.filter(function (movie) {
        return ( movie.genre.indexOf ("Drama") != -1) 
        
    })
    if (drama.length == 0) {
        return 0;
    }
    let dramaRate = drama.reduce(
            (accumulator, drama) => accumulator + drama.rate, 0
            );
            return parseFloat((dramaRate/drama.length).toFixed(2)); 
      return dramaRate;
    };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let orderedMovies = movies.map((movie) => movie);
    return orderedMovies.sort((a,b) => {

        if (a.year - b.year === 0){
            return a.title.localeCompare(b.title);

        } else {
            return a.year - b.year
        }
        return a.year - b.year || a.title || localeCompare(b.title);
        });
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let firstTwentyMovies = movies.map(function(movie){
     return movie.title;
    });
    return firstTwentyMovies.slice(0,19).sort();
 }

 //Didn't understand the two tests in Jasmine that were wrong. One was about an array greater than 20, but my slice does this without having to create an if statement, I think! Second error I couldn't understand neither. 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


