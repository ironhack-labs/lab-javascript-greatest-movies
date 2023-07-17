
// ---------- [COMPLETED] ----------

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {

    const directorsOnly = moviesArray.map(function (eachDirector) {

        return eachDirector.director;

    });

    return directorsOnly
}

// ---------- [COMPLETED] ----------





// ---------- [NOT DONE] ----------

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// ---------- [NOT DONE] ----------





// ---------- [COMPLETED] ----------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {

    const filteredMovies = moviesArray.filter(function (eachMovie) {

        return eachMovie.director.includes("Steven Spielberg") && eachMovie.genre.includes("Drama");

    });

    return filteredMovies.length

}


/* function howManyMovies(moviesArray) {

    let filteredMovies = 0

    moviesArray.filter(function (eachMovie) {

        if (eachMovie.director.includes("Steven Spielberg") && eachMovie.genre.includes("Drama")) {

            filteredMovies++;
            return true // not needed

        } else {

            return false / not needed

        }

    });

    return filteredMovies

} 

CONFIRM: WHY this doesn't work?? >>> return true and false not needed, start with the empty return and run the filled one

*/


// ---------- [COMPLETED] ----------





// ---------- [COMPLETED] ----------

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const dramaScoresAvg = moviesArray.reduce(function (acc, eachMovie) {

        if (!eachMovie.score) {

            //console.log('No tiene score')
            eachMovie.score = 0

        } //console.log('Tiene score')
        return acc + eachMovie.score

    }, 0);

    const dramaAvg = dramaScoresAvg / moviesArray.length

    //console.log(dramaAvg)

    //console.log(typeof dramaAvg)

    const dramaAvgRounded = Number(dramaAvg.toFixed(2))

    //console.log(dramaAvgRounded)

    //console.log(typeof dramaAvgRounded)

    return dramaAvgRounded

}

// ---------- [COMPLETED] ----------





// ---------- [COMPLETED] ----------

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const filteredDrama = moviesArray.filter(function (eachMovie) {

        return eachMovie.genre.includes("Drama");

    });

    if (filteredDrama.length === 0) {
        return 0
    }

    const dramaAvg = filteredDrama.reduce(function (acc, eachMovie) {

        //console.log('Tiene score')
        return acc + eachMovie.score

    }, 0);

    const finalAvg = dramaAvg / filteredDrama.length

    //console.log(finalAvg)

    //console.log(typeof finalAvg)

    const finalAvgRounded = Number(finalAvg.toFixed(2))

    //console.log(finalAvgRounded)

    //console.log(typeof finalAvgRounded)

    return finalAvgRounded

}

// ---------- [COMPLETED] ----------





// ---------- [COMPLETED] ----------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    let newArray = JSON.parse(JSON.stringify(moviesArray));

    const orderedMovies = newArray.sort(function (a, b) {

        if (a.year !== b.year) {

            return a.year - b.year; //if year A > year B then organize A > B 

        } else { // if year B <= year A then 

            if (a.title > b.title) { //organize by title 

                return 1;

            } else {

                return -1;

            }
        }
    });

    return orderedMovies;
}


/* [PARTIAL ALTERNATIVE - CHECK HOW TO ADD TITLE SORT ON TOP OF IT]

function orderByYear(moviesArray) {

    let newArray = JSON.parse(JSON.stringify(moviesArray))

    const orderedMovies = newArray.sort(function (a, b) {

        return a.year - b.year

        // console.log(newArray) -- WHY THIS CONSOLE LOG DOESN'T WORK? 

    });

    return orderedMovies

}

*/

// ---------- [COMPLETED] ----------





// ---------- [IN PROGRESS] ----------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    let alphabeticalArray = JSON.parse(JSON.stringify(moviesArray));

    alphabeticalArray.sort(function (a, b) {

        if (a.title > b.title) {

            return 1;

        } else {

            return -1;

        }

    });

    //console.log(typeof alphabeticalOrder)

    //console.log(alphabeticalOrder)

    const top20 = alphabeticalArray.slice(0, 20)

    const top20Titles = top20.map(function (eachTitle) {

        return eachTitle.title

    });

    //console.log(top20Titles)

    return top20Titles


}


/* function orderAlphabetically(moviesArray) {

    let newArray = JSON.parse(JSON.stringify(moviesArray));

    const alphabeticalOrder = newArray.sort(function (eachTitle) {

        return newArray.title

    });

    return alphabeticalOrder;

} */

// ---------- [IN PROGRESS] ----------





// ---------- [NOT DONE] ----------

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// ---------- [NOT DONE] ----------






// ---------- [NOT DONE] ----------

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

// ---------- [NOT DONE] ----------
