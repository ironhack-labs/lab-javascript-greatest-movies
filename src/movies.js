// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
const directorsArr = movies.map(movie => {
    return movie.director;
})
    return directorsArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaArr = movies.filter(spielbergDrama => {
    return spielbergDrama.director === "Steven Spielberg" && spielbergDrama.genre.includes("Drama");
})
    return dramaArr.length;
} 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    const totalRate = movies.reduce(function (acc, rating) {
        if (typeof rating.rate === "number") {
        return acc + rating.rate;
        } else {
        return acc + 0;
        }
    }, 0); 
    let avgRate = totalRate/movies.length
    return Math.round(avgRate * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies


/* This was my first solution, but then when trying to figure out why it doesn't work,
I realised that I could just reuse the function from previous iteration: */

// const dramaMovies = movies.filter (dramaMovie => {
//     for (let i = 0; i < movies.length; i++) {
//     return dramaMovie.genre[i] === "Drama"}
// });

// function dramaMoviesRate(dramaMovies) {
//       if (movies.genre.includes("Drama") === false) {
//         return 0;
//     }
//     const totalDramaRate = dramaMovies.reduce(function (acc, dramaRating){
//       return acc + dramaRating.rate;
//   }, 0);
//     let avgDramaRate = totalDramaRate/dramaMovies.length
//     return Math.round(avgDramaRate * 100) / 100
// }

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(dramaMovie => {
       return dramaMovie.genre.includes("Drama")
    })
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {
    let newArr = movies.slice()
    let ascArr = newArr.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            } if (a.title > b.title) {
                return 1;
            }
        } else {
            return a.year - b.year;
        }
    })
    return ascArr
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    let titleArr = movies.map(titles => {
        return titles.title
    })
    let sortedArr = titleArr.sort((a, b) => {
        if (a < b) return -1;
        if (b < a) return 1;
        if (a === b) return 0;
    })
    return sortedArr.slice(0,20)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
