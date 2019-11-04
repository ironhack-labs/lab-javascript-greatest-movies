/* eslint no-restricted-globals: 'off' */

/**********************************************************************/
// General Sorting Function
function sorting( arr ) {
    // temporary array of objects with position and value
    let mapped = arr.map(function(el, idx) {
        return { index: idx, value: el };
        })

    // sorting the mapped array containing the objects
    mapped.sort(function(a, b) {
        //Numeric values
        if ( typeof a.value === 'number' && typeof b.value === 'number') {
            return a.value - b.value; 
        }        
        //Non-numeric values
        else {
            return a.value.localeCompare(b.value);
        }
    });

    // container for the resulting order
    let result = mapped.map( el => arr[el.index] );
    return result;
}
/**********************************************************************/

// Callback function to sorted by title
function ordered ( val1, val2 ) {
    //let title1Upper = title1.toUpperCase();
    //let title2Upper = title2.toUpperCase();
    //if( title1Upper < title2Upper ) return -1
    //else if( title1Upper > title2Upper ) return 1
    //else return 0
    return typeof val1 == 'number' && typeof val2 == 'number' ? val1 - val2 : val1.localeCompare(val2);
}

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

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
