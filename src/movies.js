// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => moviesArray.map(movie => movie.director)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergArr = []
    for (let i=0; i<moviesArray.length; i++)
    if (moviesArray[i].director === `Steven Spielberg` && moviesArray[i].genre.includes(`Drama`)){
        spielbergArr.push(moviesArray[i])
    } return spielbergArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    let totalScore = 0
    moviesArray.forEach(movie =>{
     totalScore+=movie.score
}) 
return Number((totalScore/moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaTotalScore = 0
    let dramaArray = []
    for (let i=0; i<moviesArray.length; i++)
    if (moviesArray[i].genre.includes(`Drama`)) {
        dramaTotalScore += moviesArray[i].score
        dramaArray.push(moviesArray[i])
        if (!dramaArray.length) return 0;
    }
    if (!dramaArray.length) return 0;
    return Number((dramaTotalScore/dramaArray.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearsArray = moviesArray.map(movie => movie.year)
    let orderedYears = yearsArray.sort((a, b) => a - b);
    return orderedYears
}
//the above code (iteration 5) functions fine, so not sure why error messages in specrunner

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   let firstTwenty = moviesArray.map(movie=>movie.title);
    firstTwenty = firstTwenty.slice(0,20)
    firstTwenty.sort()
    return firstTwenty
}
//Again, the above code works fine! So not sure why this is getting reds on Specrunner

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutesArray = []
    for (let i=0; i<moviesArray.length; i++){

    }return minutesArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
