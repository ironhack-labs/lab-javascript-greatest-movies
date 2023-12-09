// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray){
    const directorsArray = moviesArray.map(element => element.director, 0);
    return directorsArray
}


function cleanAllDirectors(moviesArray){
    let newArr = [];
    for (let i = 0; i<moviesArray.length; i++){
        if (newArr !== moviesArray[i].director){
            newArr.push(moviesArray[i])
        }
    }
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray){
    if (moviesArray.length === 0){
        return 0;
    }
    const spielbergOnly = moviesArray.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'));
    return spielbergOnly.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const totalScores = moviesArray.reduce((sum, element) => sum + element.score, 0);
    const averageScore = totalScores/moviesArray.length;
    return Math.round(averageScore*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
// return an array with only the drama movies using filter() and then calculate the average from there
function dramaMoviesScore(moviesArray){
    const dramaMoviesOnly = moviesArray.filter(element => element.genre.includes('Drama'))
    const totalDramaScore = dramaMoviesOnly.reduce((sum, element) => sum + element.score, 0);
    const averageDramaScore = totalDramaScore/dramaMoviesOnly.length
    if (dramaMoviesOnly.length === 0){
        return 0;
    }
    return Math.round(averageDramaScore*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

 
function orderByYear(moviesArray) {
    let copyMovies = [...moviesArray]

    copyMovies.sort((a, b)=>{
    if (a.year === b.year){
        return a.title.localeCompare(b.title)
    }
    return a.year - b.year})

    return copyMovies
}

// but how can I put this into a new array?


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(element => element.title);
    const orderedTitles = movieTitles.sort()
    return orderedTitles.slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// filter the array so that the time appears as minutes?
// turn the duration string into a number, and then split the number in two?

function turnHoursToMinutes(moviesArray) {
    let copiedArr = [...moviesArray]

    const numsStr = copiedArr.map((element) => element.duration.replace(/\D/g, ''))
    const numsOnly = parseFloat(numStr)

}

// would need to do a deep copy. If we do a shallow copy here and change a string to a number.
// we don't want to mutate the original array

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}
