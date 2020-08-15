// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let newArray = movies.map(function(movie){
        return movie.director; 
    })
    return newArray;
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    
    const totalMovies = movies.filter(function (item) {
        const isSteven = item.director === 'Steven Spielberg';
        const isDrama = item.genre.indexOf('Drama') >= 0;
        return isSteven && isDrama;
    });
    return totalMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies){
    if (movies.length === 0) return 0;
    const ratedMovies = movies.filter(function(item){
        return item.rate > 0;
    })
    const sum = ratedMovies.reduce(function (total, movie){
        return total + movie.rate;
    }, 0)
    const avg = sum / movies.length;
    return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function(item){
        const isDrama = item.genre.indexOf('Drama') >= 0;
        return isDrama;
    })
    return ratesAverage (dramaMovies);
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const newArray = movies.map(function(item){
        return item;
    })
    const oldestFirst = newArray.sort(function(a, b){
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } 
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        }
        return a.year - b.year;  
    }); 
    return oldestFirst;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const newArray = movies.map(function(item){
        return item.title;
    });
    const oldestFirst = newArray.sort();

return oldestFirst.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
