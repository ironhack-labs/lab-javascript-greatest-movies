/* eslint no-restricted-globals: 'off' */
// const movies = require("./data")
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr) {
    const newArray = [...arr]
    newArray.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else {
                return -1;
            }

        }

    });
    // console.log(newArray);
    return newArray;
}







// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const newArray = [...arr]
    const SpielbergArray = newArray.filter(function (movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {

            return true
        } else {
            return false
        }
    })

    return SpielbergArray.length;

}

// console.log(howManyMovies(movies));


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const newArray = [...arr]
    newArray.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } else {
            return 0;

        }

    });
    twentyFirstArray = [];
    if (newArray.length > 20) {
        for (let i = 0; i < 20; i++) {
            twentyFirstArray.push(newArray[i].title)
        }
    } else {
        for (let i = 0; i < newArray.length; i++) {
            twentyFirstArray.push(newArray[i].title)

        }
    }
    return twentyFirstArray
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0
    }
    const averageRate = arr.reduce(function (acc, movie) {
        if (movie.rate) {
            acc += movie.rate / arr.length
        }
        return acc
    }, 0)

    return Math.round(averageRate * 100) / 100;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average