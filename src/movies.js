// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
let directorsList = moviesArray.map(movie => movie.director);
return directorsList;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray){
    let spiel=0;
    const spielbergDrama=moviesArray.filter((movie) =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    spiel = spielbergDrama.length
    return spiel
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
   
    if (moviesArray.length == 0)
    return 0

    let scoreMovie = []
    for (let index = 0; index < moviesArray.length; index++) {
        let score = moviesArray[index].score;

        if ( !score ) {
            score = 0;
        }
        scoreMovie.push(score);       

    }

    let sum = 0
    for (let index = 0; index < scoreMovie.length; index++) {
        sum = (sum + scoreMovie[index]);
    }

    let promedio = sum/scoreMovie.length;
    return parseFloat(promedio.toFixed(2));
} 
     
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

const dramaMovies = moviesArray.filter((movie) =>
movie.genre.includes("Drama")
);
if (dramaMovies == '') return 0;
const scoreDrama = dramaMovies.map((pelicula) => {
if (!pelicula.score) pelicula.score = 0;
return pelicula.score
})
let totScore = scoreDrama.reduce((a, b) => a + b)
let mediaScore = totScore / dramaMovies.length;
return parseFloat(mediaScore.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
let anual = Array.from(moviesArray);
anual.sort((a,b) => 
{
    if(a.year>b.year) return 1;
    if(a.year<b.year) return -1;
    if(a.year === b.year) {
        if(a.title>b.title) return 1;
        if(a.title<b.title) return -1;
    }
})
return anual;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    
        let anual = Array.from(moviesArray);
        anual.sort((a,b) => {
                if(a.title>b.title) return 1;
                if(a.title<b.title) return -1;
        })
        let veinte = anual.slice(0,20);
        let arrayFinal = [];
        for (let index = 0; index < veinte.length; index++) {
            const title = veinte[index].title;
            arrayFinal.push(title);
        }
        return arrayFinal;
        }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
