/* eslint no-restricted-globals: 'off' */
let myMovies = {
    ...movies
}

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array) {

    console.log(array)
    let minutes = []
    let myMovies = {
        ...movies
    }
    let time = []

    array.forEach((elm, i) => {
       time= elm.duration.split(" ")
       minutes[i] = {}
       console.log(time)
        if (elm.duration.includes("h") && elm.duration.includes("min")) {
            
            minutes[i].duration = parseInt(time[0]) * 60 + parseInt(time[1])
            
        } 
        else if(elm.duration.includes("h")) {
            minutes[i].duration = parseInt(time[0]) * 60
            
        }
        else {
            minutes[i].duration = parseInt(time[0])
        }
    }) 
console.log( minutes)
    return minutes

}

// Get the average of all rates with 2 decimals 

function ratesAverage(array){
    
const result = array.reduce((acc, elm) => {
    {
    if(elm.rate != ""){    
    return acc + parseFloat(elm.rate)
} else {
    return acc
}}
}, 0)
    
    return result / array.length
}   

// Get the average of Drama Movies

function dramaMoviesRate(array) {

    
        let dramArray = array.filter(elm => elm.genre.includes("Drama"))
    if (dramArray.length === 0){
        return undefined
    }else{
    
    let dramaAverage = ratesAverage(dramArray)
    
    return Math.round(dramaAverage * 100) / 100
        
    }
    
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    
    let spielCount = 0
    
    let dramaSpielbArray = array.filter(elm => {
        if (elm.genre.includes("Drama") && elm.director.includes("Spielberg")) {
        spielCount++        
        }
    })
    
    if (array.length === 0){
        return undefined
    }
    else {
        return `Steven Spielberg directed ${spielCount} drama movies!`
    }
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {

    let titles =[]
    
    array.forEach((elm, i) =>  titles[i]= elm.title)

    titles.sort()

    return titles.slice(0,20)
   
}

// Best yearly rate average
