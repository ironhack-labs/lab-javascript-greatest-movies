// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // let newArr = moviesArray.map((elemt) => elemt.director);
    // console.log(newArr);
    return moviesArray.map((elemt) => elemt.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const drama = moviesArray.filter(movie => {
        if (movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')) return movie
    })
    return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const totalScore = moviesArray.reduce((total, movie) => {
        //return total + movie.score 
        return movie.score ? total + movie.score : total;
    }, 0);
    const average = (totalScore / moviesArray.length);
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movie => {
        if (movie.genre.includes('Drama')) return movie
    })
    return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderByYear = moviesArray.sort((a, b) => {
        if (a.year == b.year) {
            // var titleA = a.title.toUpperCase();
            // var titleB = b.title.toUpperCase();
            // return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
            return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
        }
        return a.year - b.year
    })
    return [...orderByYear];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(item => item.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesInMinutes = moviesArray.map(movie => {
        const duration = movie.duration.split(" ");
        let mins = 0;
        for (let time of duration) {
            if (time.includes("h")) {
                mins += parseInt(time) * 60;
            } else {
                mins += parseInt(time);
            }
        }
        return { ...movie, duration: mins };
    })
    return moviesInMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;

    /* Creating a object with array of scores, the keys are the year*/
    let dictionary = {};
    for (const movie of moviesArray) {
        !Object.keys(dictionary).includes(movie.year.toString())
            ? dictionary[movie.year] = [movie.score]
            : dictionary[parseInt(movie.year)].push(movie.score);
    }
    let bestYear = 0;
    let bestAverage = 0;
    for (const key in dictionary) {
        let scoreArray = dictionary[key];
        let sum = scoreArray.reduce((accumulator, value) => {
            return value ? accumulator + value : value;
        }, 0);
        let average = sum / scoreArray.length;
        if (average > bestAverage) {
            bestAverage = average;
            bestYear = key
        }
    }
    return `The best year was ${bestYear} with an average score of ${Number(bestAverage.toFixed(1))}`
};


