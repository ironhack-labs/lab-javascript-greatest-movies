// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {

    const mapped = arr.map(function(element) {
        return element.director
    })
    return mapped
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

    const filterMovie = arr.filter((element) => {

        return (element.director === 'Steven Spielberg' && element.genre.includes('Drama'))
    });
    return filterMovie.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {

    const allRateAvg = arr.reduce((acc, cur) => {

        if(arr.length === 0){
            return 0;
        }

        if(cur.rate === undefined){
            return acc
        }

        let avg = arr.length

        let sumAvg = acc + cur.rate / avg

        return Math.round(sumAvg * 100) / 100

    }, 0)

    return allRateAvg
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

    const filterMovie = arr.filter((element) => {

        return element.genre.includes('Drama')
    });


    const sumMovieRate = filterMovie.reduce((acc, cur) => {

        if(cur.rate === undefined){
            return acc
        }

        let avg = filterMovie.length
        let sumAvg = acc + cur.rate / avg
        return Math.round(sumAvg * 100) / 100

    }, 0);

    return sumMovieRate
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
   

function orderByYear(arr) {

    if(arr.length === 0){
        return 0
    }
    const orderYear = arr.sort((a, b) => {

        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) {
            return -1
        } else {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }
        }
    })

    return orderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    if (arr.length === undefined) {
        return null
    }

    const titles = arr.map((element) => {
        return element.title
    })

    const numTitle = titles

    if (numTitle.length >= 20) {
        return numTitle.sort().slice(0,20)
    } else {
        return numTitle.sort()
    }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
