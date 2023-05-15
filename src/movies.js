// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {

const findDirector = moviesArray.map(function (name) {
    return name.director
})

return findDirector
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(moviesArray) {

//     const findDirector = moviesArray.map(function (name) {
//         if(!moviesArray.IndexOf(name.title) === moviesArray.lastIndexOf(name.title))
//         return name.director
//     })
    
//     return findDirector
//     }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    } 

    let count = 0

    moviesArray.filter( function(findSteven) {      
        
        if (findSteven.genre.includes('Drama') && findSteven.director === 'Steven Spielberg') {
        count++;
        }});

return count;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }
  
    let countBestMovies = moviesArray.reduce(function (accumulator, number) {
        if (!number.score) {
            number.score = 0}
        return accumulator + number.score;
    },0)

    let countAverageBestMovies = countBestMovies / moviesArray.length;
return Number(countAverageBestMovies.toFixed(2));
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }

    let bestDramas = moviesArray.reduce(function (accumulator, countDrama) {

        if (!countDrama.genre.includes("Drama")) {
            countDrama.score = 0;
        } else if (countDrama.genre.includes("Drama")){
            return accumulator + countDrama.score;
        }
    },0)
    let result = bestDramas / moviesArray.length; // No idea how to just divide through Drama Movies...
    return Number(result.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newArray = moviesArray.map(function(checkYear) {
        checkYear.sort(function () {
            if(checkYear < checkYear.year) {
                return -1;
            } else if (checkYear > checkYear.year){
                return 1;
            } else if (checkYear.IndexOf(title) === checkYear.lastIndexOf(title)) {
                return checkYear.sort(checkYear.title);
            }}
        )   
    })
    return newArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


