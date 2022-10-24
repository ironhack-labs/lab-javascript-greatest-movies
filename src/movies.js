
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movies => movies.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const sSDramas = moviesArray.filter(movies => (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')));
    return sSDramas.length;
}
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sumScore = moviesArray.reduce(((el, val) => el + (val.score || 0)), 0);
    const avv = sumScore / moviesArray.length;
    return Number(avv.toFixed(2));
}
console.log(scoresAverage(movi));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movies => movies.genre.includes('Drama'));

    const sumDrama = drama.reduce((el, val) => el + (val.score || 0), 0);

    const avvDrama =  sumDrama / drama.length;
    return drama.length === 0 ? 0 : Number(avvDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = [...moviesArray];
    const resultByYearOrAlpha = newMoviesArray.sort((a, b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year);
    return resultByYearOrAlpha;    
}
console.log(orderByYear(movi));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movies => movies.title).sort();
    const orderedTitles = titles.sort();
    return orderedTitles.slice(0, 20);
}
console.log(orderAlphabetically(movi));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesMinutes = moviesArray.map((movie) => {
        // "2h 39min"
        let onlyDigitsOfTime = movie.duration.split(' ').map(timeComponent => {
            // "2h" o "39min", now discard all no digits, make results numbers
            const number = Number(timeComponent.replace(/[^0-9]/g, ''));
            return timeComponent.includes('h') ? (number * 60) : number;
        });
        // [120, 39]
        return { ...movie, duration: onlyDigitsOfTime.reduce((totalDuration, minComponent) => totalDuration + minComponent, 0)};
        //return { ...movie, duration: numberOfMinutes }; // return the copy of your arr, modify only duration
    })
    return moviesMinutes;
}
console.log(turnHoursToMinutes(movi));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average 
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
      }
    else if (moviesArray.length === 1) {
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
      }
    const grouppedMovies = moviesArray.reduce((groups, el) => { //to group all movies by year
        if (el.year in groups) {
            groups[el.year].push(el); // groups: {2010: [{...}, {...}], 1999: [...], ...}
        }
        else {
            groups[el.year] = [el];
        }
        return groups;
    },
    {});
    let bestYear = undefined;
    let bestScore = 0;
    for (let year in grouppedMovies) { //loop and 
        if (grouppedMovies.hasOwnProperty(year)) {
            const sumScore = grouppedMovies[year].reduce(((val, el) => val + (el.score || 0)), 0);
            const avg = sumScore / grouppedMovies[year].length;
            if (avg > bestScore) {
                bestScore = avg;
                bestYear = year;
            }
        }
    }
    return `The best year was ${bestYear} with an average score of ${bestScore}`;
}
console.log(bestYearAvg(movi));