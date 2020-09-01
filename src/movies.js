// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
     return array.map( film => film.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanArray(array) {
    array.filter((director, index) => {
        return getAllDirectors(array).indexOf(director === index);
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    var spielbergDramaMovies = array.filter(film => film.director==="Steven Spielberg" && film.genre.includes("Drama"));
     return spielbergDramaMovies.length;
   }
   
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (!array.length) {
        return 0;
    }
    const sum = array.reduce ((acc, curr) => {
        if (!curr.rate) {
            return acc;
        }
            return acc+curr;
        }, 0)
    }
    const avg = sum / array.length;
    return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMovies(array) {
    const = filteredDrama = array.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(filteredDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const newSortedArray = array.sort((year1, year2) => {
        if (year1.year === year2.year){
            return movie1.title.localeCompare(movie2.title)
        }
        return movie1.year-mmovie2.year;
    })
    return newSortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabeticaly(array) {
    const sortedArray = array.sort(movie1, movie2 => {
        
    })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

