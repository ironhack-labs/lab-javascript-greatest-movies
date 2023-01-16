// Iteration 1: All directors? - Get the array of all directors.

/*We need to get the array of all directors.
Since this is a warm up, we will give you a hint:
you have to map through the array of movies and
get all the directors into one array as a final result.
Go ahead and create a function named getAllDirectors()
that receives an array of movies as an argument and returns a new (mapped) array.*/

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

     let directorsArr= moviesArray.map(function(movie){
        return movie.director
    })

    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*Go ahead and create a howManyMovies() function
that receives an array as a parameter and filter 👀 
the array so we can have only the drama movies where Steven Spielberg is the director. */

function howManyMovies(moviesArray) {
if (moviesArray.length === 0) {
    return 0}
    let spielbergArr = moviesArray.filter(function(movie){
        if (movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')){
            return true;
        }
        return false;
     })

     return spielbergArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == "") return 0;

    let sum = moviesArray.reduce(function(acc, movie){ 
        if (movie.score == "" || movie.score == undefined) return acc
        return acc + movie.score; 
      }, 0) 
      
      return Number((sum / moviesArray.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies

/*Drama is the genre that repeats the most on our array.
Create a dramaMoviesScore() function
that receives an array as a parameter
to get the average score of all drama movies!
Let's see if it is better than the general average.
Again, rounded to 2 decimals!*/

/*function dramaMoviesScore(moviesArray) {

    if (moviesArray.length === 0) {
        return 0}
        let dramasArr = moviesArray.filter(function(movie){
            if (movie.genre.includes('Drama')){
                return true;
            }
            return false;
         })
    
         //return Number((sum / moviesArray.length).toFixed(2))
}*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/*We need to sort the movies in ascending order by their release year.
This should be easy using one of the methods we have just learned.
Create a function orderByYear() that receives an array as a parameter
and returns a new sorted array.

If two movies have the same year, order them in alphabetical order by their title!

Important: Your function should return a new array,
containing the movies ordered by the year.
Your function should not modify (mutate) the original array.
You may need to do some research on how to make a "copy" or "clone" an array.
*/

/*function orderByYear(moviesArray) {

    moviesArray.slice().sort(function(a, b) {
        if (a.year === b.year) {
            return a.score - b.score
        }
    
        return a.year - b.year
    })
    
    console.log(reviews)*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
