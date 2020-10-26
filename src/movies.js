// Iteration 1: All directors? - Get the array of all directors.
//getAllDirectors()

const getAllDirectors = movies => movies.map(elm => elm.director)
         
// const allDirectors = array => {
// array.map(elm=>elm.director)
// }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const dramaMovies = array.filter(elm =>
        elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
        return dramaMovies.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    
    if (array.length == 0) {
        return 0
    }  
    const rateAvg = array.reduce((acc, elm) => elm.rate ? acc + elm.rate: acc, 0)
    return Number((rateAvg / array.length).toFixed(2))

}
//--------EXPLICACION CONDICIONALES TERNARIOS

// if (a > b)
// { "mayor" }
// else { "menor" }

// a>b ? "mayor":"menor" 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
       
    const dramaMovies = array.filter(elm => elm.genre.includes("Drama"))
    if (dramaMovies.length == 0) {
        return 0
    }
    const rateAvgDrama = dramaMovies.reduce((acc, elm) =>elm.rate? acc + elm.rate: acc, 0)
    return parseFloat((rateAvgDrama/dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const newSorted = JSON.parse(JSON.stringify(array))
    const yearSorted = newSorted.sort(function(a, b){
        if (a.year < b.year) return -1
        if (a.year > b.year) return 1
        if (a.title < b.title) return -1
        if (a.title >b.title) return 1
    })
    return yearSorted
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const newSorted2 = JSON.parse(JSON.stringify(array))
    const AlphSorted = newSorted2.sort(function (a, b) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1 
        return 0
    })
    if (AlphSorted.length > 20) {
        return AlphSorted.slice(0,20).map(elm=> elm.title)
    }return AlphSorted.map(elm => elm.title)
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes





function turnHoursToMinutes(array) {
    const minDur = JSON.parse(JSON.stringify(array))
    minDur.map(elm => {
        if (elm.duration.length = 8) {
            //la duracion es es de "XH-XXmin"
            hourToMin = parseInt(elm.duration.substr(0, 1) * 60) + parseInt(elm.duration.substr(3, 2))
            elm.duration = hourToMin
            return  minDur 
        }
        else if (elm.duration.length = 7) {
            //la duracion es es de "XH-Xmin"
            hourToMin = parseInt(elm.duration.substr(0, 1) * 60) + parseInt(elm.duration.substr(3, 1))
            elm.duration = HourToMin
            return  minDur 
        }
        else if (elm.duration.length = 2) {
            //la duracion es es de "XH"
            hourToMin = parseInt(elm.duration.substr(0, 1)) * 60
            elm.Duration = hourToMin
            return  minDur 
        }
        else if (elm.duration.length = 5) {
            //la duracion es es de "XXmin"
            hourToMin = parseInt(elm.duration.substr(0, 2))
            elm.duration = hourToMin
            return  minDur 
        }
        
    }) 
    console.log({ minDur })
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYear(array) {
    
}










