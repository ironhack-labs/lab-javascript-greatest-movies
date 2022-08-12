
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(a => a.director);
}

console.log(getAllDirectors(movies))

// if we want also to filter the directors :
function getAllDirectorsAndFilter(moviesArray) {
    return Array.from(new Set(moviesArray.map(a=> a.director)))
}
console.log(getAllDirectorsAndFilter(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(a => a.director === 'Steven Spielberg' && a.genre.includes('Drama')).length
}
console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    sum = 0;
    moviesArray.forEach(movie => {
        if ('score' in movie) {
            sum += movie.score;
        }
    });
    return parseFloat((sum/moviesArray.length).toFixed(2))


}
console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let new_arr = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const new_arr_length = new_arr.length;
    if (new_arr_length === 0) {
        return 0
    }
    return parseFloat((new_arr.reduce((prev,next) => prev + next.score,0) / new_arr_length).toFixed(2))
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let new_arr = moviesArray.slice();
    new_arr.sort((a,b) => {
        if (a.year === b.year) {
            if (a.title.localeCompare(b.title) === -1)  {
                return -1
            } else if ((a.title.localeCompare(b.title) === 1)) {
                return 1
            }
        } else {
            return a.year - b.year
        }
    })
    return new_arr
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let new_arr = moviesArray.slice()
    .map(a => a.title)
    .sort((a,b) => { 
        // localeCompare logic for comparing alphabetically
        if (a.localeCompare(b) === -1)  {
            return -1
        } else if ((a.localeCompare(b) === 1)) {
            return 1
        }
    });
    return new_arr.length >= 20 ? new_arr.slice(0,20) : new_arr;
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let working_arr = JSON.parse(JSON.stringify(moviesArray))
    // copied the array deeply

    working_arr.forEach(movie => {
        let new_duration_arr = movie.duration.split(' ')
        let new_duration_minutes = 0
        if (new_duration_arr.length === 1) {
            // if the arr contains only the hours then hours times 60
            new_duration_minutes = parseInt(new_duration_arr) * 60
        } else {
            // if it contains hours and minutes continue as supposed to
            let hours = parseInt(new_duration_arr[0]);
            let minutes = parseInt(new_duration_arr[1]);
            new_duration_minutes = hours*60 + minutes;
        }
        movie.duration = new_duration_minutes;
    })

    return working_arr;
}

console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }


    let working_arr = JSON.parse(JSON.stringify(moviesArray));
    // copy the array deeply :3

    let years_of_movies = Array.from(new Set(working_arr.map(movie => movie.year)));
    let best_year = 4000 // I hope nobody uses my work in the year 4001
    let best_average = 0
    years_of_movies.forEach(year => {
        let temp_arr = working_arr.filter(a => a.year === year)
        let temp_arr_length = temp_arr.length;
        let average_score = (
            temp_arr
            .map(movie => movie.score)
            .reduce((prev, next) => prev + next) 
            / temp_arr_length
            )

        if (average_score >= best_average && year < best_year) {
            best_average = parseFloat(average_score.toFixed(2));
            best_year = year;
        }
    })
    return `The best year was ${best_year} with an average score of ${best_average}`
}
