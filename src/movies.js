
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {

    const directors = array.map(elm => elm.director)
    return Array.from(new Set(directors)) //    BONUS INCLUIDO

}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

    const filteredArr = movies.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'))
    const length = parseInt(filteredArr.length)
    return length

}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    const avg = movies.reduce((acc, elm) => !elm.rate ? acc + 0 : acc + elm.rate / movies.length, 0)
    return parseFloat(avg.toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const drama = movies.filter(elm => elm.genre.includes('Drama'))
    const average = drama.reduce((acc, elm) => acc + elm.rate / drama.length, 0)
    return parseFloat(average.toFixed(2))

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    let clonedMovies = JSON.parse(JSON.stringify(movies))
    let yearOrdered = clonedMovies.sort(function (a, b) {
        if (a.year < b.year) return -1
        if (a.year > b.year) return 1
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
    })
    return yearOrdered
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    let clonedMovies = JSON.parse(JSON.stringify(movies))
    let orderedAlph = clonedMovies.sort(function (a, b) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
    })

    if (orderedAlph.length > 20) { return orderedAlph.slice(0, 20).map(elm => elm.title) }
    return orderedAlph.map(elm => elm.title)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {

    if (movies.length === 0) { return null }

    //  SET DE AÑOS 
    const years = movies.map(elm => elm.year)
    const yearsSet = Array.from(new Set(years))
    const yearsSetOrdered = yearsSet.sort((a, b) => b - a)  //  PARA EL CASO DE EMPATE COGER EL QUE MAS ANTIGUO

    let maxAvg = 0  //  MEDIA ANUAL MAS ALTA   
    
    let maxAvgYear  //  AÑO CON LA MEDIA MAS ALTA

    let moviesByYear    //  PELICULAS SEPARADAS POR AÑO
    
    let moviesByYearAvg //  MEDIA DE LAS PELICULAS POR AÑO

    
    //  PARA CADA AÑO DEL SET ORDENADO CALCULO LA MEDIA Y COMPARO CON EL QUE TIENE MAYOR MEDIA HASTA EL MOMENTO
    
    yearsSetOrdered.forEach(year => {   

        moviesByYear = movies.filter(elm => elm.year === year)
        moviesByYearAvg = moviesByYear.reduce((acc, elm) => acc + elm.rate / moviesByYear.length, 0)
        if (moviesByYearAvg >= maxAvg) {
            maxAvg = moviesByYearAvg
            maxAvgYear = year
        }
    })

    return `The best year was ${maxAvgYear} with an average rate of ${maxAvg}`

}
