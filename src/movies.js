
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map (function(movie){
        return movie.director;
    })
    return directors;
} 


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){

    let occurance = movies.filter(function(movie) {

        if (movie.director != "Steven Spielberg"){
            return false;
            
        }
        if (movie.genre.indexOf("Drama")== -1 ) {
            return false;
        }

        return true;
    });

    return occurance.length;
     
}


howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length == 0) {
        return 0;
    }

   let total = movies.reduce(function(acc, curr){
       if(!curr.rate) {
           return acc;
       }

        return acc + curr.rate;
    
    }, 0);

    let avg = total/movies.length;
    return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let occurances = movies.filter(function(movie) {

        if (movie.genre.indexOf("Drama")== -1 ) {
            return false;
        }

        return true;
    });
    if (occurances.length ==0){
        return 0;
    }

    let total = occurances.reduce(function(acc, curr){
            return acc + curr.rate;
    }, 0);

    let avg = total/occurances.length;
    return avg;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let sorted = movies.sort(function(a, b){
        return a.year > b.year;
    });

    return sorted;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let alpha = movies.sort(function(a,b){
        return a.title.localeCompare(b.title);
    });

    let titles= alpha.map(function(movie){
        return movie.title;
    });

    return titles.slice(0,20);

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes






// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
