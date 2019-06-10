/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies){
    let moviesMin = movies.map(movie => {
        let duracion = movie.duration;
        let newDuration = duracion.split(" ")

        if (duracion.includes("h")  && duracion.includes("min") ){
            let horasToMin = parseInt(newDuration[0]) * 60 + parseInt(newDuration[1])
            duracion= horasToMin 

        } else if (duracion.includes("h") ){
            let calculo = parseInt(newDuration[0]) * 60 
            duracion = calculo;           

        }else if(duracion.includes("min")){
            let minutes = parseInt(newDuration[0])
            duracion = minutes;
        }
       
        return {...movie, duration: parseInt(duracion)}
        
    })
    return moviesMin
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){

   let avg = movies.reduce((prev, current) => {
    return prev + current.rate

    }, 0) / movies.length

    return parseFloat(avg.toFixed(2))
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
    let moviDrama = movies.filter(movie => movie.genre.includes(`Drama`))

    if (moviDrama.length == 0){
    return undefined
    }
    return ratesAverage(moviDrama)

}
// Order by time duration, in growing order
function orderByDuration(movies){

    let moviesOrder = movies.sort(function(a,b) {
        if (a.duration > b.duration) return 1
        if (a.duration === b.duration) {
            if (a.title > b.title) return 1
            if (a.title < b.title) return -1       
        }
        if (a.duration < b.duration) return -1
    })   
    return moviesOrder
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
    if (movies.length === 0){
        return undefined
    }
    let movisDrama = movies.filter(movie => movie.genre.includes(`Drama`))
    let moviesSpilber = movisDrama.filter(movie =>movie.director.includes('Steven Spielberg'))
    
    return (`Steven Spielberg directed ${moviesSpilber.length} drama movies!`)
    }

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let moviesOrder = movies.sort(function(a,b) {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
    })   
    
    let movisTittle = moviesOrder.map(movie => {
       return movie.title 
    })
    
    return movisTittle.splice(0,20)

}


// Best yearly rate average
