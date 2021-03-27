// map, reduce, filter and sort


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(function(movie) {
        return movie["director"];
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllUniqueDirectors(movies) {
    return [...new Set(getAllDirectors(movies))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let spielbergMovies = movies.filter(function(movie) {
        if (movie['director'] === 'Steven Spielberg' && movie["genre"].includes('Drama')) return true
    })
    return spielbergMovies.length;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    let avg = movies.reduce(function(acc, movie) {
        if (movie.hasOwnProperty('rate') && movie['rate'] !== '') {
            return acc + movie['rate']
        }
        return acc + 0
    },0)
    return Number((avg / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function(movie) {
        if (movie['genre'].includes('Drama')) {
            return true
        }
    });
    return ratesAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const toBeOrdered = [...movies]
    const ordered = toBeOrdered.sort(function(a,b) {
        if (a['year'] < b['year']) {
            return -1;
        }
        if (a['year'] > b['year']) {
            return 1;
        }
        if (a['year'] === b['year']) {
            if (a['title'] < b['title']) {
                return -1;
            }
            if (b['title'] < a['title']) {
                return 1;
            }
            return 0;
            }
        return 0;
    })
    return ordered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const titles = movies.map(function(movie) {
        return movie['title']
    })
    const ordered = titles.sort(function(a,b) {
        if (a < b) {
            return -1;
        }
        if (b < a) {
            return 1;
        }
        return 0;
    })
    return ordered.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const moviesCopy = JSON.parse(JSON.stringify(movies));

    let totalPlayTime = moviesCopy.map(function(movie) {
        movie['duration'] = movie['duration'].split(' ');

        let hours = 0;
        let minutes = 0
        for (time of movie['duration']) {
            if (time.includes('h')) {
                hours = (parseInt(time.replace(/\D/g,'')))*60;
            } else if (time.includes('min')) {
                minutes = parseInt(time.replace(/\D/g,''));
            }
        }
        movie['duration'] = hours + minutes;
        return movie;
    })
    return totalPlayTime;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// I haven't finished this yet
function bestYearAvg(movies) {
    if (movies.length === 0) return null;
    const moviesOrderedByYear = orderByYear(movies);

    const groupedByYear = moviesOrderedByYear.reduce(function(acc, movie) {
        const group = movie['year'];
        acc[group] = acc[group] || [];
        acc[group].push(movie);
        return acc;
    }, {})

    for (let year in groupedByYear) {
    }
    return groupedByYear
    // return `The best year was ${year} with an average of ${rate}`
}
