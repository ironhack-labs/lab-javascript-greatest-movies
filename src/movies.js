// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const reformatedArr = moviesArray.map(movie => movie.director);

    return reformatedArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filterArr = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

    return filterArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }

    const allScores = moviesArray.map(e => e.score);



    const sumaScore = allScores.reduce(function (acc, currentValue) {
        return acc + currentValue;
    }, 0);

    const avg = sumaScore / moviesArray.length

    const floatAvg = avg.toFixed(2);

    return parseFloat(floatAvg);
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const onlyDrama = moviesArray.filter(el => el.genre.includes('Drama'));

    const onlyDramaScore = onlyDrama.reduce(function (acc, currentValue) {
        return acc += currentValue.score;
    }, 0);

    const averageDrama = onlyDramaScore / onlyDrama.length;

    const floatAvgDrama = averageDrama.toFixed(2);

    if (onlyDrama.length === 0) {
        return 0;
    }

    return parseFloat(floatAvgDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newArrYear = [...moviesArray];

    return newArrYear.sort((a, b) => a.year - b.year);

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newArr = [...moviesArray];

    const titles = newArr.map(movie => movie.title);

    const orderedTitles = titles.sort();

    return orderedTitles.slice(0, 20);

}










// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
