// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectArray = moviesArray.map(movie => movie.director)
    return allDirectArray;
  }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let sumStevenSpielbergMovies = 0
    for (elem in moviesArray) {
    if (moviesArray[elem].director === 'Steven Spielberg' && moviesArray[elem].genre.includes('Drama')) {
        sumStevenSpielbergMovies += 1;
    }
    }
    return sumStevenSpielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
let avg = 0;
if (!moviesArray.length) {
    return 0;
}
for (elem in moviesArray) {
    avg += moviesArray[elem].score;
}
let number = (avg/moviesArray.length).toFixed(2)
let numberToStr = Number(number)
return numberToStr;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let sumScore = 0;
let nDramaMovies = 0;
for (elem in moviesArray) {
    if (moviesArray[elem].genre.includes('Drama')) {
    sumScore += moviesArray[elem].score
    nDramaMovies += 1
    }
}
if (nDramaMovies === 0) {
    return 0;
}
let avg = sumScore/nDramaMovies;
// console.log({nDramaMovies,sumScore})
return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
const orderedArray = moviesArray.sort((a,b) => {
    return a.year - b.year;
});
return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let titlesArr = []
for (elem in moviesArray) {
    titlesArr.push(moviesArray[elem].title)
}
const sliceArray = titlesArr.sort().slice(0,20)
return sliceArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArrays) {
const newArr = moviesArrays.map(function(movie) {
    try {
    let decimal = Number(movie.duration[3] + movie.duration[4]);
    movie.duration = Number((movie.duration[0])* 60) + decimal;
    } catch(err) {
    movie.duration = Number((movie.duration[0])* 60);
    }
    return movie
})
return newArr;
}

console.log(movies[0].duration[0])

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
const bestYear = moviesArray.reduce(function(a ,b) {
    return a + 1;
},0)
return bestYear;
}
  
// duration: '1h 36min'
console.log(getAllDirectors(movies))
// console.log(howManyMovies(movies))
// console.log(scoresAverage(movies))
// console.log(dramaMoviesScore(movies))
// console.log(orderAlphabetically(movies))
// console.log(orderByYear(movies))
// console.log(turnHoursToMinutes(movies))
// console.log(howManyMovies(movies))
// console.log(bestYearAvg(movies))
// console.log(arrayOrdered)
// console.log(getAllDirectors(movies))