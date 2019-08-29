/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let sum = movies.reduce(function (sum, movie) {
        sum += parseFloat(movie.rate == "" ? 0 : movie.rate)
        console.log(sum)
        return sum;
    }, 0)

    return parseFloat((sum / movies.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let isDrama = movies.filter(element => {
        return element.genre.indexOf('Drama') !== -1;
    });

    if (isDrama.length === 0) {
        return 0;
    }

    return ratesAverage(isDrama);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movieArray) {
    const orderedArr = movieArray.sort((a, b) => {
        if (a.duration < b.duration) {
            return -1;
        } else if (a.duration > b.duration) {
            return 1;
        } else if (a.duration === b.duration) {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }
        }
    })

    return orderedArr;
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    const stevenTotal = movies.filter(function (drama) {
        return drama.director == "Steven Spielberg" && drama.genre.includes("Drama");
    });

    return stevenTotal.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    return orderedArray = movies.map((movie) => movie.title).sort().slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {
    return moviesArr.map((movie) => {
        movie = Object.assign({}, movie);
        let hour = String(movie.duration).match(/\d+h/g);
        let min = String(movie.duration).match(/\d+min/g);
        hour = hour != null ? Number(hour[0].match(/\d+/g)[0]) : 0;
        min = min != null ? Number( min[0].match(/\d+/g)[0]) : 0;
        movie.duration = hour * 60 + min;
        return movie;
    })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null;
    }

    const newObject = {};
    for (let i = 0; i < movies.length; i++) {
        if (newObject[movies[i].year] === undefined) {
            newObject[movies[i].year] = {
                count: 1,
                rateSum: parseFloat(movies[i].rate),
                rateAvg: parseFloat(movies[i].rate)
            }

        } else {
            newObject[movies[i].year].count += 1;
            newObject[movies[i].year].rateSum += parseFloat(movies[i].rate);
            newObject[movies[i].year].rateAvg = parseFloat((newObject[movies[i].year].rateSum / newObject[movies[i].year].count).toFixed(2));
        }
    }
    const keys = Object.keys(newObject).sort((a, b) => {
        if (newObject[a].rateAvg > newObject[b].rateAvg) return -1;
        if (newObject[b].rateAvg > newObject[a].rateAvg) return 1;
        if (newObject[a].rateAvg === newObject[b].rateAvg) {
            if (+a > +b) return 1;
            if (+b > +a) return -1;
        }
    })

    return `The best year was ${keys[0]} with an average rate of ${newObject[keys[0]].rateAvg}`;
}
