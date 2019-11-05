/* eslint no-restricted-globals: 'off' */

/************** TOOLS ****************/
// Utility function to sorted by title
function ordered ( val1, val2 ) {
    return typeof val1 == 'number' && typeof val2 == 'number' ? val1 - val2 : val1.localeCompare(val2);
}

// Utility function to format time
function timeFormat( acc, cur ) {
    if ( cur.includes('min')) cur = parseInt( cur )
    else if ( cur.includes('h')) { cur = parseInt( cur ) * 60 }
    return acc + cur;
}
/************************************/


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear( moviesArr) {
    let orderedArray = [...moviesArr];
    
    orderedArray.sort( (elm1, elm2) => { 
        if ( elm1.year - elm2.year == 0 ) return ordered (elm1.title, elm2.title)
        return ordered( elm1.year, elm2.year);
    });

    return orderedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies( arr ) {
    return arr.filter( elm => elm.genre.includes('Drama') && elm.director.toUpperCase() === "STEVEN SPIELBERG").length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically( moviesArr ) {
    let orderedArray = [...moviesArr];

    let onlyFirst20Titles = orderedArray
            .sort( ( elm1, elm2 ) => ordered( elm1.title, elm2.title))
            .map( elm => elm.title)
            .filter( (elm, idx) => idx < 20 );
            
    return onlyFirst20Titles;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage( moviesArr ) {
    if ( moviesArr.length == 0 ) return 0;
    
    // Sum of all movies' rate
    let ratesSum = moviesArr.reduce( function(acc, cur) {
        if ( !cur.rate ) cur.rate = 0;
        return acc + cur.rate;
    }, 0);
    
    // Average
    let avg = Math.round( (ratesSum / moviesArr.length) * 100) / 100  ;
    return avg;    
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate( moviesArr ) {
    let dramaMovies = moviesArr.filter( el => el.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes( moviesArr ) {
    
    let moviesArrFormatted = moviesArr
                .map( elm => {
                    elm.duration = elm.duration
                                    .split(' ')
                                    .reduce( timeFormat, 0)
                    return elm;
                });
    
    return moviesArrFormatted;            
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg( moviesArr ) {
    
}