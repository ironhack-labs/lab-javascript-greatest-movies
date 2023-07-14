// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let greatDirectors = moviesArray.map((allDirectors)=>{
        return allDirectors.director;
    })
    return greatDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let steveMovies = moviesArray.filter((movie)=>{
        if(movie.director ===  "Steven Spielberg" && movie.genre.includes("Drama")){
            return movie;
        }
    })
    return steveMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    let averScore = moviesArray.reduce((acc, var2)=>{
        if(var2.score === " " || !var2.score){
            var2.score = 0;
        }
        return acc + var2.score;
    }, 0);
    return Math.round(averScore / moviesArray.length *  100) / 100;
    };

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaAver = moviesArray.filter((movie)=>{
        if(movie.genre.includes("Drama")){
             return movie;
        }
    })
    return scoresAverage(dramaAver)
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let alphMovies = moviesArray.slice();

    alphMovies.sort((a, b)=>{
        if(a.year === b.year){
            return a.title.localeCompare(b.title)}
                else{
                    return a.year - b.year;
                }
            })
            return alphMovies;
        }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphArr = moviesArray.map((movie)=>{
        return movie.title;
    })
    alphArr.sort();
    if(alphArr.length > 20){
        return alphArr.slice(0, 20)
    }
    return alphArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutesArr = moviesArray.slice();
    let hours;
    let minutes;

    if(typeof minutesArr.duration === "string"){
        hours = (minutesArr.duration[0] * 60 );
        minutesArr.duration += minutesArr.duration[3];
        if(typeof minutesArr.duration[4] === "number"){
            return minutesArr.duration += (minutesArr.duration[3]*10)
        };
    }
    let turned = hours + minutes

    minutesArr.duration = turned
    return minutesArr
};

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
