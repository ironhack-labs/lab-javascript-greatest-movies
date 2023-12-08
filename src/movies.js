// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(number){
        return number.director
})}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(function(number){
    return number.director === 'Steven Spielberg' && number.genre.includes("Drama")
    })
    return filteredMovies.length }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
   // Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0
    }
    const validMovies = moviesArray.filter(function(element){
        return typeof element.score=== `number`
    })
    // also filter(element => typeof element.score ===number)

    const totalScore = validMovies.reduce(function(sum, currentScore){
        return sum + currentScore.score},0)
    const averageScore = totalScore/moviesArray.length
    const roundedAverageScore = Math.round(averageScore*100)/100
    return roundedAverageScore
       
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
   let dramaMovies =  moviesArray.filter(function(element){
    if (element.genre.includes("Drama")){
        return element
    } })


   if (dramaMovies.length === 0){
    return 0
    }

    let totalScore = dramaMovies.reduce(function(sum,currentScore){
    return sum + currentScore.score
    },0)

    const averageScore = totalScore/dramaMovies.length
    const roundedAverageScore = Math.round(averageScore*100)/100
    return roundedAverageScore
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMovies = [...moviesArray]
    let moviesByYear = newMovies.sort(function(a,b){
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year 
    })
    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let newMovies = [...moviesArray]

    let orderedMovies = newMovies.sort(function(a,b){
        return a.title.localeCompare(b.title)
    })

    const first20Movies = orderedMovies.slice(0, 20)

    let justTitle = first20Movies.map(function(object){
        return object.title})  

    
    return justTitle }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
