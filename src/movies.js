// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directorNames = movies.map(elm => elm.director)
    return directorNames
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const stevenDrama = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return stevenDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if(movies.length === 0) {
        return 0
    } else {
        let avgRates = movies.reduce((acc, elm) => {
            //Se comprueba si existe la propiedad buscada. En caso contrario, devuelve sólo el acumulado.
            if(elm.rate) {
                return acc + elm.rate
            } else {
                return acc
            }
        }, 0) / movies.length
        let avgFixed = Math.round(avgRates * 100) / 100
        return avgFixed
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const drama = movies.filter(elm => elm.genre.includes("Drama"))
    if(drama.length === 0) {
        return 0
    } else {
        const avgDramaRates = drama.reduce((acc, elm) => {
            if(elm.rate) {
                return acc + elm.rate
            } else {
                return acc
            }
        }, 0) / drama.length
        let avgDramaFixed = Math.round(avgDramaRates * 100) / 100
        return avgDramaFixed
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const copySort = [...movies].sort((a, b) => {
        if(a.year === b.year) {
            //localeCompare() devuelve -1 o 1 en función de la precedencia entre los títulos a comparar, muy útil para combinar con el sort. Devuelve 0 en caso de ser iguales.
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    return copySort
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const copySortTitle = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    const twentyTitles = copySortTitle.map(elm => elm.title).slice(0, 20)
    return twentyTitles
}

orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const newMovies = movies.map(elm => {
        let hours = elm.duration.slice(0, 1)
        let minutes = elm.duration.slice(3, 5).replace(/[a-z]/gi, '') //Aunque Jasmine lo pase, se hace necesario el .replace() para evitar que luego aparezcan NaN en el nuevo array

        if(elm.duration.charAt(1) === "h") {
            let total = (hours * 60) + Number(minutes)
            return {
                ...elm,
                duration: total
            }
        } else {
            let total2 = Number(elm.duration.slice(0, 2))
            return {
                ...elm,
                duration: total2
            }
        }
    })
    return newMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average