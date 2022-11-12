// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // you have to map through the array of movies 
   const directorsArray = moviesArray.map(function (movie) {
    // get all the directors into one array as a final result. 
    return movie.director
    });
    return directorsArray;
}
getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesOfSteven = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') === true);
    return dramaMoviesOfSteven.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// we want to know the average score of all of them 
// and display it on the console. 
// Create a scoresAverage() function that receives an array as a parameter 
// and solves the challenge.
// The score must be returned rounded to 2 decimals!
// 💡 Maybe you want to "reduce" the data to a single value. 😉
function scoresAverage(moviesArray) {
    // pull scores into a new array 
    const scoresArr = [];
    for (let value of Object.values(moviesArray)) {
        scoresArr.push(value.score);
    }
    // use reduce to arrive at a sum of the array 
    const sum = scoresArr.reduce(function (a,b) {
        return a + b;
    })
    // divide the sum by moviesArray.length
    // round to two decimals 
if (sum > 0) return +(sum / moviesArray.length).toFixed(2);
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
// Create a dramaMoviesScore() function that receives an array as a parameter 
// to get the average score of all drama movies! 
// Let's see if it is better than the general average.
// Again, rounded to 2 decimals!
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama') === true);
    const dramaScoresArr = [];
    for(let value of Object.values(moviesArray)) {
        dramaScoresArr.push(value.score);
    }
    const sum = dramaScoresArr.reduce(function (a,b){
        return a+b;
    })   
    if (sum > 0) return +(sum /moviesArray.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

const sortedArr = moviesArray.map(function(value){
    return value
})
   const newSortedArr = sortedArr.sort(function(a,b) {
        return a.year - b.year
    })

    // need guidance on localeCompare - do not get
   // if (a.title.localeCompare(b.title) === 0) {
     //   return a.title - b.title
   // }

    // const finalArr = newSortedArr.sort(function(a,b) {
        // return a.title - b.title
    // })
return newSortedArr

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// first put all the titles into an array from the object 
// then use sort to sort the titles
// then splice the first 20 titles 
function orderAlphabetically(moviesArray) {
    const titleArr = [];
    for (let value of Object.values(moviesArray)) {
        titleArr.push(value.title);
        titleArr.sort()
    }
    const arrayOfTwenty = titleArr.splice(0,20)
    return arrayOfTwenty.sort()
}

/* const alphabeticArr = moviesArray.sort(function(a,b) {
    return a.title - b.title
})
return Object.values(alphabeticArr)
*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
