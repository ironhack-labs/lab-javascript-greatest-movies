/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear( moviesArr) {

    let orderedArray = [...moviesArr];

    // Callback function to order alphabetical by title
    function orderByTitle ( title1, title2 ) {
        let title1Upper = title1.toUpperCase();
        let title2Upper = title2.toUpperCase();

        if( title1Upper < title2Upper ) return -1
        else if( title1Upper > title2Upper ) return 1
        else return 0
    }
    
    orderedArray.sort( (elm1, elm2) => { 
        if ( elm1.year - elm2.year == 0 ) return orderByTitle(elm1.title, elm2.title)
        return elm1.year - elm2.year;
    });

    return orderedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
