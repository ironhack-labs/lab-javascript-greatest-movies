// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map((elem) =>{
        let directors = elem.director;
        return directors;
    })
    
    directorsArray = directorsArray.filter((director, indice, self) => {

        return self.indexOf(director) === indice;

    });
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaMovies = moviesArray.filter((elemMovie) => {
        let hasDrama = elemMovie.genre.find((elemGenre) => {
            return elemGenre === 'Drama';
        });

        return elemMovie.director === 'Steven Spielberg' && hasDrama;
    });

    return dramaMovies.length;
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    let scoreMovies = moviesArray.reduce((acc, elemMovie) => {
        if(!elemMovie.score){
            elemMovie.score = 0;
        }
         return acc + elemMovie.score;
    }, 0);
    return Math.round((scoreMovies / moviesArray.length) * 100) /100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let scoreDramaMovies = moviesArray.reduce((acc, elemMovie)=> {
        if(!elemMovie.score){
            elemMovie.score = 0;
        }
        let hasDrama = elemMovie.genre.find((elemGenre) => {
            return elemGenre === 'Drama';
        });
        if (hasDrama){
          return acc + elemMovie.score;
        } else {
            return acc + 0;
        }
    }, 0)
    return Math.round((scoreDramaMovies / moviesArray.length) * 100) /100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedYears = moviesArray.toSorted((elemA, elemB) => {
        if(elemA.year > elemB.year){
            return 1;
        } else if (elemB.year > elemA.year){
            return -1;
        } else {
            return 0;
        }
    })
    return orderedYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}








// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
