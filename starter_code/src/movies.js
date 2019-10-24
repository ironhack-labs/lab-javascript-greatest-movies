/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arreglo){
    if(arreglo.length == 0)
        return 0
    return + (arreglo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rate
    }, 0)/arreglo.length).toFixed(2)
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arreglo){
    return ratesAverage(arreglo.filter((movie) => {
        return movie.genre.indexOf('Drama') != -1
    }))
}


// Iteration 3: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arreglo){
    return arreglo.sort((a, b) => {
        if(a.year != b.year)
            return a.year - b.year
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0
    })
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arreglo){
    return arreglo.filter((movie) => {
        return movie.director == 'Steven Spielberg' && movie.genre.indexOf('Drama') != -1
    }).length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arreglo){
    return arreglo.map((movie) => {
        return movie.title
    }).sort((a, b) => {
        return a < b ? -1 : a > b ? 1 : 0
    }).slice(0, 20)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arreglo){
    return arreglo.map((movie) => {
        let duration = movie.duration.split(' ')
        let durationInMinutes = 0
        if(duration.length == 1){
            durationInMinutes = duration[0].indexOf('h') == -1 ? +duration[0].replace('min', '') : +duration[0].replace('h', '')*60
        }else{
            durationInMinutes = +duration[0].replace('h', '')*60 + +duration[1].replace('min', '')
        }
        return {
            ...movie,
            duration: durationInMinutes
        }
    })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arreglo){
    let groupedByYear = {}
    arreglo.forEach(element => {
        if(element.year in groupedByYear == false)
            groupedByYear[element.year] = []
        groupedByYear[element.year].push(+element.rate)
    })
    let arrayOfAverage = []
    for(let key in groupedByYear){
        arrayOfAverage.push([key, 
            + (groupedByYear[key].reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0)/groupedByYear[key].length).toFixed(2)])
            
    }
    console.table(arrayOfAverage)

    // return 'The best year was 2007 with an average rate of 8'
}
