// Iteration 1: All directors? - Get the array of all directors.
    
function getAllDirectors(dataMovies){
        
    const directors = dataMovies.map(elem => elem.director)

    return directors

}
getAlldirectors(movies)
    
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
/*
const directors = getAllDirectors(movies)


function cleanArray (dataDirectors){
 
    const newDirectors = [...dataDirectors]
    
    //versión con filter 
    const uniqueDirectors = newDirectors.filter((elem,index) => newDirectors.indexOf(elem) === index)
    
    //versión con new Set
    const uniqueDirectors = [...new Set(newDirectors)]

    return uniqueDirectors
}

cleanArray(directors)  

*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(dataMovies){
    
    const dramaBySpielberg = dataMovies.filter(elem => elem.director === 'Steven Spielberg' && elem.genre.indexOf('Drama') != -1)

    return dramaBySpielberg.length

}
howManyMovies(movies)
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(dataMovies){

    const newDataMovies = [...dataMovies]

    if (newDataMovies.length === 0) {
        return 0
    }

    const movieWithRate = newDataMovies.filter(elem => elem.rate)

    const averageRates = movieWithRate.reduce((acc, elem) => acc + elem.rate, 0)

    const result = parseFloat((averageRates/movieWithRate.length).toFixed(2))

    return result

}
ratesAverage(movies)
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(dataMovies){

    
    const movieWithDrama = dataMovies.filter(elem => elem.genre.includes('Drama'))

    if (movieWithDrama == 0){
        return 0
    }

    const averageRates = movieWithDrama.reduce((acc, elem) => acc + elem.rate, 0)

    const result = parseFloat((averageRates/movieWithDrama.length).toFixed(2))
    
    return result

}
dramaMoviesRate(movies)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(dataMovies){

    const newDataMovies = [...dataMovies]
    
    const orderMovies = newDataMovies.sort((a,b) => (a.year - b.year))

    return orderMovies

}
orderByYear(movies)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(dataMovies){

    const newDataMovies = [...dataMovies]

    const orderByAlpha = newDataMovies.sort((a,b) => (a.title.localeCompare(b.title)))

    const result = orderByAlpha.slice(0, 20).map(elem => elem.title)

    return result

}
orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(dataMovies){

    //const newDataMovies = [...dataMovies]
    let newDataMovies = JSON.parse(JSON.stringify(dataMovies))
    let result= []
    let hours = []

    const replaceHours = newDataMovies.map(elem => elem.duration.replace("h","").replace("min",""))     
    
    for(let i=0; i<replaceHours.length; i++){
        result = replaceHours[i].split(" ")
        hours = result[0]*60 + parseInt(result[1])
        newDataMovies[i].duration = hours  
    }  
    return newDataMovies
}
turnHoursToMinutes(movies)
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(dataMovies){
   
    if (dataMovies.length === 0) {
        return null
    }
    const newDataMovie = [...dataMovies]

    const yearAndRate = newDataMovie.reduce(elem => {
        return{
            year:elem.year,
            rate:elem.rate
        }

    })



}
bestYearAvg(dataMovies)