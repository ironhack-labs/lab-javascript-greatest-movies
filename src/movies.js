// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(moviesArray) {}   <<< texto original


/* LONG VERSION

function getAllDirectors(moviesArray) {

let result = [];  // array vacio

result = moviesArray.map(el => el.director);

return result

}

*/

///////

/* SHORTER VERSION

function getAllDirectors(moviesArray) {

let result = moviesArray.map(el => el.director);
    
return result

}

*/

///////

/* LO QUE HICE YO: CORRECTO - aun mas short*/

function getAllDirectors(moviesArray) {
    return moviesArray.map (el => el.director);
} 

///////

//========================
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//function howManyMovies(moviesArray) {}    <<< texto original


/* LONG VERSION

function howManyMovies(moviesArray) {

let result = 0;

result = moviesArray.filter(el => {

    return el.director === "Steven Spielberg" && el.genre.includes("Drama"); 
})

return result.length;

}

*/


/* SHORTER VERSION:

function howManyMovies(moviesArray) {
    return moviesArray.filter(el => {
        return el.director === "Steven Spielberg" && el.genre.includes("Drama")}).length;
}
*/

// Lo que hice yo: - aun mas short

function howManyMovies(moviesArray) {
    return moviesArray.filter(el => el.director === "Steven Spielberg" && el.genre.includes("Drama")).length;
}



//========================
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//function scoresAverage(moviesArray) {}    <<< texto original

function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;  // or (!moviesArray.length)

let result = 0;

let movieFiltered = moviesArray.filter(el => el.score);

let movieSum = movieFiltered.reduce((acc, el) => el.score + acc, 0);

result = movieSum / moviesArray.length;

return Math.round(result*100) / 100;

}

/* Porque Math Round?

1 - imagina que tenemos el numero 5,677
2 - lo multiplicamos por 100  ->  567.7
3 - Aplicamos Math Round  ->  568
4 - Lo dividimos entre 100  -> 5.68

*/


// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {}     <<< texto original

function dramaMoviesScore(moviesArray) {

    let dramaMovies =  moviesArray.filter((el) => el.genre.includes("Drama"));

    let result = scoresAverage(dramaMovies);

    return result;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {}     <<< texto original


/* function orderByYear(moviesArray) {

const copiaArray1 = [...moviesArray];
// >>>>> he buscado maneras de duplicar arrays sin modificar el original :slightly_smiling_face: buscad el "spread operator" para ello

let movieYearOrdered = copiaArray1.sort( (a,b) => a.year - b.year);

console.log(movieYearOrdered);

return movieYearOrdered;
}
*/


function orderByYear(moviesArray) {

    const copiaArray1 = [...moviesArray];
    // >>>>> he buscado maneras de duplicar arrays sin modificar el original :slightly_smiling_face: buscad el "spread operator" para ello
    
    let movieYearOrdered = copiaArray1.sort( (a,b) => {
        
        if (a.year !== b.year){
            return a.year - b.year;  //sort by year first
        } else {
            // if years are the same, sort by title alphabetically
            return a.title.localeCompare(b.title);
        }
    });
    return movieYearOrdered;
    }




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}     <<< texto original

function orderAlphabetically(moviesArray) {
   // Extract titles from movie objects
   let titleArray = moviesArray.map(movie => movie.title);

   // Sort the titles alphabetically
   titleArray.sort((a, b) => a.localeCompare(b));

   // Limit the number of titles to 20
   if (titleArray.length > 20) {
    titleArray = titleArray.slice (0, 20);
   }
    return titleArray
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}     <<< texto original

function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}     <<< texto original

function bestYearAvg(moviesArray) {}

