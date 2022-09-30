// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allMovies = require("./data.js");


function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((item) => item.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    var counter = 0;
    const directorSteven = moviesArray.filter((item) => { if (item.director === 'Steven Spielberg' && item['genre'].includes('Drama')) { return counter++ } })
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const scoreSum = moviesArray.reduce((accumulator, currentValue) => {
        if (!currentValue.score) {
            return accumulator
        }
        return accumulator + currentValue.score;
    }, 0) / moviesArray.length;
    const average = Math.round(scoreSum * 100) / 100;
    return average;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((item) => item.genre.includes("Drama"));
    if (dramaMovies == '') return 0;
    const scoreDrama = dramaMovies.map((item) => {if (!item.score) item.score = 0;
    return item.score
    })
    let totalScore = scoreDrama.reduce((a, b) => a + b)
    let averageScore = totalScore / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2))
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearOrder = Array.from(moviesArray);
    yearOrder.sort((a,b) => 
    {
        if(a.year>b.year) return 1;
        if(a.year<b.year) return -1;
        if(a.year === b.year) {
            if(a.title>b.title) return 1;
            if(a.title<b.title) return -1;
        }
    })
    return yearOrder;
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphOrder = Array.from(moviesArray);
    alphOrder.sort((a,b) => {
            if(a.title>b.title) return 1;
            if(a.title<b.title) return -1;
    })
    let twenty = alphOrder.slice(0,20);
    let arrayFinal = [];
    for (let i = 0; i < twenty.length; i++) {
        const title = twenty[i].title;
        arrayFinal.push(title);
    }
    return arrayFinal;
    }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

