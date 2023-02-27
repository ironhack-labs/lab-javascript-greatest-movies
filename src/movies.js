// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(function (element) { return element.director });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesNewArray = [...moviesArray];
    const moviesNum = moviesNewArray.filter(function (element) {
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama');
    })
    return moviesNum.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const moviesNewArray = [...moviesArray];
    if (moviesNewArray.length == 0) {
        return 0;
    }
    const averageScore = moviesNewArray.reduce((function (cal, movie) {
        if (movie.score) {
            return cal + movie.score;
        } else {
            return cal;
        }
    }), 0) / moviesNewArray.length;
    const result = averageScore.toFixed(2) * 1;
    return result;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesNewArray = [...moviesArray];
    const drama = moviesNewArray.filter(element => element.genre.includes('Drama'));
    return scoresAverage(drama);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesNewArray = [...moviesArray];
    const orderByYear = moviesNewArray.sort((a, b) => a.year - b.year);
    const newOrder = orderByYear.sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
    })
    return newOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesNewArray = [...moviesArray];
    const first2oTitle = moviesNewArray.map((element) => {
        return element.title;
    });
    const first2oTitleOrder = first2oTitle.sort();
    const first20 = first2oTitleOrder.filter((element, i) => i < 20);


    return first20;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesNewArray = moviesArray.map((movies) => movies);
    moviesNewArray.forEach(function (element) {
        if (element.duration.includes('h') && element.duration.includes('m')) {
            const hourNum = Number(element.duration.slice(0, element.duration.indexOf('h')));
            const minNum = Number(element.duration.slice(element.duration.indexOf(' ') + 1, element.duration.indexOf('m')));
            element.duration = (hourNum * 60 + minNum);


        } else if (element.duration.includes('m')) {
            const minNum = Number(element.duration.slice(0, element.duration.indexOf('m')));
            element.duration = minNum;

        } else if (element.duration.includes('h')) {
            const hourNum = Number(element.duration.slice(0, element.duration.indexOf('h')));
            element.duration = (hourNum * 60);
        } else {
            element.duration = 0;
        }
    });

    return moviesNewArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const moviesNewArray = [...moviesArray];
    const newOrder = moviesNewArray.sort((a, b) => a.year - b.year);

}

