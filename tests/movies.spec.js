// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    if(!(Array.isArray(movies) && movies.length > 0)) 
        return [];
    let result = [];

    for(let i=0; i< movies.length; i++) {
        result.push(movies[i].director);
    }
    return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    if(!(Array.isArray(movies) && movies.length > 0)) 
        return 0;
    let count=0;
    for(let i=0; i < movies.length; i++) {
        if(movies[i].director == "Steven Spielberg" && movies[i].genre.indexOf("Drama") > -1) {
            console.log(movies[i]);
            count++;
        }
    }
    return count;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if(!(Array.isArray(movies) && movies.length > 0)) 
        return 0;

    let average = 0;
    for(let i=0; i < movies.length; i++) {
        average += movies[i].rate || 0;
    }   
    return Math.round((average / movies.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    if(!(Array.isArray(movies) && movies.length > 0)) 
        return 0;

    let count = 0;
    let average = 0;
    
    for(let i=0; i < movies.length; i++) {
        if(movies[i].genre.indexOf( "Drama") > -1) {
            average += movies[i].rate;
            count += 1;
        }
    } 
    if(count == 0) return 0;
    return Math.round((average / count) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//If two movies have the same year, order them in alphabetical order by their title! :heavy_check_mark:

function comp(e1, e2) {
    if(e1 == e2)
        return 0;
    if(e1 > e2)
        return 1
    if(e1 < e2)
        return -1
}

function orderByYear(movies) {
    if(!(Array.isArray(movies) && movies.length > 0)) 
        return [];

    return movies.sort((m1, m2) => comp(m1.year, m2.year) || comp(m1.title, m2.title))
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    if(!(Array.isArray(movies) && movies.length > 0)) 
        return [];

    let result = []
    for(let i=0; i < movies.length; i++) {
        result.push(movies[i].title);
    }
    return result.sort(comp).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

