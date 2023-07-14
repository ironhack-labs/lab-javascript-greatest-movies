// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newDirectorsArray = moviesArray.map((allDirectors) => {
        return allDirectors.director;
    });
    return newDirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter((spielbergDirection) => {
        if (spielbergDirection.director === "Steven Spielberg" && spielbergDirection.genre.includes("Drama")) {
            return spielbergDirection;
        }
    })
    return spielbergMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalScore = moviesArray.reduce((sum, indiviualScore) => {
        if (indiviualScore.score === " " || !indiviualScore.score){
            indiviualScore.score = 0;
        }
        return sum + indiviualScore.score;
    }, 0);

    if (moviesArray.length === 0) {
        return 0;
    }
    
    return Math.round(totalScore / moviesArray.length * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => {
        if (movie.genre.includes("Drama")) {
            return movie;
        }
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let newArray = [...moviesArray]
return newArray.sort((a,b) => {
    if (a.year > b.year) return 1
    else if(a.year < b.year) return -1
    else if(a.title > b.title) return 1
    else if(a.title < b.title) return -1
    return 0
})
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titlesArr = moviesArray.map((films) => {
        return films.title;
    })
    titlesArr.sort();

    return titlesArr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesDuration = moviesArray.map((time) => {
        return time.duration;
    })
    return moviesDuration
}

// for loop or parseInt() - declare, initialize two variables
// sort() | split() to remove the spaces
// use the inclues() to verify and remove
// write the syntax is the challenge now


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}