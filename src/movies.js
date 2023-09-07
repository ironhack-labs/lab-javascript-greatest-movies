// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let filteredMovie = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))

    return filteredMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    let score = moviesArray.reduce((acc, curr) => {
        if (curr.score && !isNaN(curr.score)) {
            acc += curr.score
        }
        return acc
    }, 0)

    // console.log("scoresAverage-score", score)
    let avg = score / moviesArray.length;
    avg = Math.round(avg * 100) / 100;

    return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let filteredMovie = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if (filteredMovie.length === 0) {
        return 0;
    }

    let score = filteredMovie.reduce((acc, curr) => {
        if (curr.score && !isNaN(curr.score)) {
            acc += curr.score
        }
        return acc
    }, 0)
    let avg = score / filteredMovie.length;
    avg = Math.round(avg * 100) / 100;

    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [].concat(moviesArray);
    sortedMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return sortedMovies;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [].concat(moviesArray);
    sortedMovies.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    //console.log("sorted movies", sortedMovies)
    let titles = sortedMovies.map(movie => movie.title)
    //console.log("map_transformed_array", titles);
    return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray));

    let clock = newArray.map(movie => {
        let time_flow = convertHoursAndMinutesToMinutes(movie.duration)
        movie.duration = time_flow;
        return movie;
    })
    console.log("clock", clock);
    console.log("movies array", moviesArray);
    return clock;
}
function convertHoursAndMinutesToMinutes(timeString) {
    const [hours, minutes] = timeString.split(' ');
    //console.log("split", hours, minutes)

    const hoursInMinutes = parseInt(hours) * 60;
    //console.log("parsehours", hoursInMinutes)
    const parsed_minutes = parseInt(minutes)
    // console.log("parseminutes", parsed_minutes)

    const totalMinutes = hoursInMinutes + parsed_minutes;
    //  console.log("total_minutes", totalMinutes)
    return totalMinutes;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}


/*- Declare functions using the function expression and arrow function syntax.
- Pass functions as arguments to other functions(callbacks).
  - Pass arrays and objects to functions as arguments.
  - Iterate over arrays using the `forEach()` method.
  - Manipulate arrays using the `map()`  method.
  - Filter array elements using the `filter()`  method.
  - Reduce array values using the `reduce()`  method.
  - Sort arrays using the `sort()`  method.
  - Explore and apply different ways to copy an array(`slice()` and spread operator`...`).

*/
