/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesOrderedByYear = [...movies]

    moviesOrderedByYear.sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year
        }
        if (a.title === b.title) {
            return 0;
        }
        return a.year > b.year ? 1 : -1;
    });

    return moviesOrderedByYear

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    return (movies.filter(eachMovie => eachMovie.director == 'Steven Spielberg' && eachMovie.genre.includes('Drama'))).length

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    return movies.map(a => a.title).sort().slice(0, 20)

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const moviesAverageRate = [...movies.filter(eachMovie => eachMovie.rate > 0)]

    if (moviesAverageRate.length) {

        return (parseFloat((moviesAverageRate.reduce((acc, eachMovie) => acc + eachMovie.rate, 0) / movies.length).toFixed(2)));

    } else {

        return 0
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const moviesAverageRateDrama = [...movies.filter(eachMovie => eachMovie.genre.includes('Drama'))]

    return ratesAverage(moviesAverageRateDrama)

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let copy = [...array]

    let duration = copy.map(eachMovie => {
        const copyArr = {
            ...eachMovie
        }
        if (eachMovie.duration.includes('min') && eachMovie.duration.includes('h')) {
            copyArr.duration = (eachMovie.duration[0] * 60) + parseInt(eachMovie.duration.substr(- 5, 2))
            return copyArr
        } else if (eachMovie.duration.includes('h')) {
            copyArr.duration = (eachMovie.duration[0] * 60)
            return copyArr
        } else if (eachMovie.duration.includes('min')) {
            copyArr.duration = parseInt(eachMovie.duration.substr(- 5, 2))
            return copyArr
        } else {
            copyArr.duration = 0
            return copyArr
        }
    });

    return duration

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {

    const distinctYears = [...new Set(movies.map(x => x.year))]
    let arrayLen = movies.length
    let averageRatingPerYear = []

    distinctYears.sort()

    switch (arrayLen) {

        case 0:
            return null;
            break;
        case 1:
            return (`The best year was ${movie[0].year} with an average rate of ${ratesAverage(movies)}`);
            break;
        default:
            distinctYears.forEach(eachYear => averageRatingPerYear.push(movies.filter(eachMovie => eachMovie.year == eachYear)))

            console.log(averageRatingPerYear)
            //return (`The best year was ${movie[0].year} with an average rate of ${ratesAverage(averageRatingPerYear)}`);
            console.log(`The best year was ${averageRatingPerYear[0].year} with an average rate of ${ratesAverage(averageRatingPerYear)}`);
            break;
    }




}




