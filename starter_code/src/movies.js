/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(arr) {
   
let arrayByYear = [...arr];
arrayByYear.sort((a,b) => {
    if (a.year > b.year) {
        return 1
    }
    else {
        return -1
    }
    })    
    return arrayByYear;
}    


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let  howMany = [...arr].filter((movie) => (movie.genre.includes(`Drama`)) && (movie.director===`Steven Spielberg`))

        return howMany.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let alphabeticallyOrdered = [...arr].map((movie) => movie.title)
    
    alphabeticallyOrdered.sort()
    //  alphabeticallyOrdered.sort()
     return alphabeticallyOrdered.splice(0,20)    
}



// Iteration 4: All rates average - Get the average of all rates with 2 decimals


// function ratesAverage(arr) {
//     let AverageRate = [...arr].map((movie) => movie.rate).reduce((ac,rate) => )


// }

// These are the best movies based on their rates, so supposedly all of them have a remarkable rate. In this iteration, we want to know the average rate of all of them and display it on the console. Create a ratesAverage() function that receives an array as a parameter and solves the challenge.

// The rate must be returned rounded to 2 decimals!

// 💡 Maybe you want to "reduce" the data to a single value. 😉

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
