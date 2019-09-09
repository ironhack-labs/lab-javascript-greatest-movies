/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = arrMovies => {
    const arrRates = arrMovies.map(movie => movie.rate === "" ? 0 : parseFloat(movie.rate))
    const result = arrRates.reduce((totalRate, rate) => (totalRate + rate), 0) / arrRates.length
    return Number(result.toFixed(2));
}

/*
if (movie.rate === "") {
    return 0;
} else {
    return parseFloat(movie.rate)
}
*/
 
// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arrMovies => {
    const arrGender = arrMovies.filter(movie => movie.genre.includes('Drama'))
    return arrGender.length > 0 ? ratesAverage(arrGender) : 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = movies => {
    return movies.sort( (a, b) => {
        if (a.duration === b.duration) {
            return a.title > b.tittle ? 1 : -1;
        }
        return a.duration - b.duration
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const  howManyMovies = movies => {
    const arrDramaMovies = movies.filter(movie => 
        movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg'))
    return arrDramaMovies.length;
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies => {

    const orderedMovies = movies.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)

    if (orderedMovies.length > 20) {
        return orderedMovies.map(movie => movie.title).filter((movie, i) => (i <= 19));
    } else {
        return orderedMovies.map(movie => movie.title);
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const  turnHoursToMinutes = movies => {
    const finalArray = movies.map(movie => {
        const dura = movie.duration
        let mins = 0;
        if (dura.includes('h') && dura.includes('min')) {
            mins += Number(dura.split(' ')[0].split('h')[0]) * 60
            mins += Number(dura.split(' ')[1].split('min')[0])
        } else if (dura.includes('h')) {
            mins += Number(dura.split('h')[0]) * 60
        } else {
            mins += Number(dura.split('min')[0])
        }
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: mins,
            genre: movie.genre,
            rate: movie.rate
        }
    })
    return finalArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {
    const yearsArray = []
    movies.forEach(movie => {
        if (yearsArray.indexOf(movie.year) === -1) {
            yearsArray.push(movie.year)
        }
    })

    const moviesByYearArr = yearsArray.map(year => movies.filter(movie => movie.year === year))

    const yearsAvgArr = moviesByYearArr.map(item => 
        ({ year: item[0].year, avg: ratesAverage(item) }))

    if (yearsAvgArr.length > 0) {

        const finalResult = yearsAvgArr.reduce((acc, resu) => {
            if (acc === null) {
                return resu
            }

            const objAcc = yearsAvgArr.find(res => res.year === acc.year)

            return (resu.avg > objAcc.avg) 
                || (resu.avg == objAcc.avg && resu.year < objAcc.year) ? resu : objAcc

        }, null)

        return `The best year was ${finalResult.year} with an average rate of ${finalResult.avg}`

    } else {
        return null;
    }
}