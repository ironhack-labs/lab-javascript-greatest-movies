// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = arr => {
    const directors = arr.map(elm => {
        return elm.director
    }) 
    return directors.filter((word, index) => {
        if (directors.indexOf(word) === index) {
            return true
        } else {
            return false
        }
    })
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arr => {
    let spielbergMovies = 0
    
    const directors = arr.map(elm => {
        return elm.director
    })
    directors.forEach(elm => {
        if (elm === "Steven Spielberg") {
            return spielbergMovies += 1
        }
    })
    return spielbergMovies
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
    if (array.length === 0 ){
        return 0
    } else {
        let sum = 0
        array.reduce((acc, elm) => {
            return sum = acc + elm.rate
        }, 0)
        const average = (sum / array.length).toFixed(2)
        return parseFloat(average)
    }
}

//ratesAverage(movie)

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    const dramaMovies = []
    arr.map(elm => {
        genre = elm.genre
        if (genre.includes("Drama")) {
            dramaMovies.push(elm)
        }
    })
    let sum = 0
    if (dramaMovies.length === 0) {
        return 0
    } else {
        dramaMovies.reduce((acc, elm) => {
            return sum = acc + elm.rate
        }, 0)
        const dramaRatingAverage = (sum / dramaMovies.length).toFixed(2)
        return parseFloat(dramaRatingAverage)
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    const newArrMovies = []
    arr.map(elm => {
        newArrMovies.push(elm)
    })

    const compare = (elm1, elm2) => {
        const yearA = elm1.year
        const yearB = elm2.year

        let comparison = 0
        
        if (yearA > yearB) {
            comparison = 1;
        } else if (yearA < yearB) {
            comparison = -1
        }
        return comparison
    }
    newArrMovies.sort(compare)
    return newArrMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    const newArrMovies = []
    arr.map(elm => {
        const titles = elm.title
        newArrMovies.push(titles)
    })
    
    newArrMovies.sort();
    if (newArrMovies.length > 20) {
        return newArrMovies.slice(0, 20)
    } else {
        return newArrMovies
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {
    const newArrMovies = []
    arr.map(elm => {
        newArrMovies.push(elm)
    })
    newArrMovies.map(elm => {
        const duration = elm.duration
        const hours = parseInt( duration.slice(0,1) ) * 60;
        const minutes = parseInt( duration.slice(3, duration.indexOf("min")) )
        elm.duration = hours + minutes;
        console.log(typeof elm.duration, elm.duration)
        return elm
    })
    return newArrMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
