// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(givenArray) {
  let newMappedArray = givenArray.map(movie => movie.director)
    return newMappedArray
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(givenArray) {
    let newFilterArray = givenArray.filter(function(movie) {
        return movie.director === "Steven Spielberg" && (movie.genre[0] === "Drama" || movie.genre[1] === "Drama"  || movie.genre[2] === "Drama" || movie.genre[3] === "Drama");
    })
       return newFilterArray.length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(givenArray) {
    if (givenArray.length === 0) return 0;

    let filter = givenArray.filter(movie => movie.rate >= 0)

    let average = filter.reduce((sum, movie) => {
        return (sum + movie.rate / givenArray.length);
    }, 0);
    return Number((average).toFixed(2)) 
    
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(givenArray) {

let drammaMovies = givenArray.filter(movie => movie.genre.includes("Drama"))

let averageDramma = drammaMovies.reduce((sum, movie) => {
    return (sum + movie.rate / drammaMovies.length);
}, 0);
    return Number((averageDramma).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(givenArray) {

    if (givenArray.length === 0) return [];

    let releasedOrder = givenArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        } 
        if (a.year === b.year) {
              if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    }});
    return releasedOrder
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(givenArray) {
    
    let newMappedArray = givenArray.map(movie => movie.title);

    let newArray = newMappedArray.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });

    let newArray20 = newArray.slice(0, 20)

    return newArray20
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
