// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let arrDirectors = moviesArray.map(directors => directors.director)  
    return arrDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter(condition1 => condition1.director === "Steven Spielberg" && condition1.genre.indexOf("Drama") > -1)
    return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0) {
        return 0
    }

    let scores = moviesArray.map(cond1 => cond1.score)
    let total = scores.reduce(function(num1, num2) {
       if (num2) {
        return num1 + num2;
       }
       else {
        return num1
       }
    }, 0)

    let finalData =  total / scores.length
    let finalScore = Math.round((finalData * 100))/100

    return finalScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(condition1 => condition1.genre.indexOf("Drama") > -1)
    if(dramaMovies.length === 0) {
        return 0
    }
    else {
        let dramaScores = dramaMovies.map(cond1 => cond1.score)
        let total = dramaScores.reduce((num1, num2) => (num1 + num2));
        let finalData =  total / dramaMovies.length
        let finalScore2 = (Math.round(finalData * 100))/100
        return finalScore2
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let movies2 = [...moviesArray]
    movies2.sort((element1, element2) => {
        if (element1.year > element2.year) return 1
        if (element1.year < element2.year) return -1
        if (element1.title > element2.title) return 1
        if (element1.title < element2.title) return -1
    })
    return movies2
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movies3 = [...moviesArray]
    let alphabetOrder = movies3.map(cond1 => cond1.title)
    alphabetOrder.sort()
    let finalAnswer = alphabetOrder.splice(0,20)
    return finalAnswer
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
