// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function fn4Direcrtor(currEle, currIdx, fullArray) {
    return currEle.director
}

function getAllDirectors(moviesArray) {
    const directors=moviesArray.map(fn4Direcrtor);
    return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function fn4DramaSS(currEle, currIdx, fullArray) {
    return currEle.director === 'Steven Spielberg' && currEle.genre.includes('Drama')
}
function howManyMovies(moviesArray) {
    const mvs = moviesArray.filter(fn4DramaSS)
    return mvs.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function fn4Sum(accumulator, currEle) {
    accumulator = accumulator + (currEle.score || 0);
    return accumulator;
}

function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const sum = moviesArray.reduce(fn4Sum, 0);
    return parseFloat((sum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function fn4Drama(currEle) {
    return currEle.genre.includes('Drama')
}
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const dramas = moviesArray.filter(fn4Drama)
    if (!dramas.length) {
        return 0;
    }
    const sum = dramas.reduce(fn4Sum, 0);
    return parseFloat((sum / dramas.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movies = moviesArray.map(function (ele) {
        return ele;
    })
    const sorted = movies.sort(function(a, b){
        return a.year-b.year;
    })
    return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = moviesArray.map(function (ele) {
        return ele;
    })
    const sorted = movies.sort(function(a, b){
        if(a.title === b.title){
            return 0;
        }else if(a.title > b.title){
            return 1;
        }else{
            return -1;
        }
    })
    const sliced = sorted.slice(0,20);
    sliced.forEach(element => {
        console.log(element.title);
    });
    return sorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
