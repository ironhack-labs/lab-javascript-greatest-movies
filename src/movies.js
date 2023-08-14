// const items = [
//     { id: 1, name: 'Laptop', price: 899 },
//     { id: 2, name: 'Keyboard', price: 49 },
//     { id: 3, name: 'Mouse', price: 29 },
//     { id: 4, name: 'Monitor', price: 199 },
//     { id: 5, name: 'Headphones', price: 99 }
// ];

// // const expensiveItems = items.filter(item => item.price >= 100);
// /*
// const itemNames = items.map(item => item.name);

// const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

// const sortedByPrice = items.slice().sort((a, b) => a.price - b.price);

// const cheaperItems = items.filter(item => item.price < 100);


//   items.forEach(element => {
//     console.log(`Item ${element.name} - ${element.price}`);
//   })*/



// // items.map(element => {
// //   console.log(items.name)
// // })

// const newArr = items.map(element => {
//     return element.name;
// }).sort().reverse();
// console.log(newArr);
// // //Create a new array containing only the item names but in reverse alphabetical order. Make sure not to modify the original array or the original order of item names.

// // Hint: You may need to use a combination of map(), sort(), and reverse() methods to achieve the desired result.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// import data from '/src/data';

function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(element => {
        return element.director;
    })
    return newArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.fiter(movies =>  {
        movies.director === "Steven Spielberg" && movies.genre.includes("Drama");
    });
    return filteredMovies;
}





console.log(javascript_freelancers);
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
