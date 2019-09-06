/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let totalRates = movies.reduce(function(acumulador, item){
        let mov =0;
        if(item.rate != ""){
            mov = parseFloat(item.rate)
       } 
        
        return acumulador + mov
    }, 0)
    return parseFloat((totalRates / movies.length).toFixed(2))
}


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(mov) {
    let dramaMovies = mov.filter(function(item, index) {
        if (item.genre.includes("Drama")) {
            return true
        } else {
            return false
        }
    }) 
    if (dramaMovies.length === 0) {
        return 0
    }
    return ratesAverage(dramaMovies)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
    let durationMovies = movies.sort(function(a, b){
     if (a.duration > b.duration) {
         return 1
     } else if (a.duration < b.duration) {
         return -1
     } else {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
     }
    })
    return durationMovies
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0
    }    
    let moviesStevenDra = movies.filter(function(item, index) {
        if (item.genre.includes("Drama") && item.director === "Steven Spielberg") {
            return true
        } else {
            return false
        }
    }) 
    return moviesStevenDra.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let movAlphab = movies.sort(function(a, b) {
        if (a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
            return -1
        } else {
            return 0
        }
    })
    return movAlphab.map(function(item){
        return item.title
    }).slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    
    let turnHour = JSON.parse(JSON.stringify(movies)).map(function(item){
        let positionH =  item.duration.indexOf("h")
        let hour = parseInt(item.duration.slice(0, positionH))
        let positionM = item.duration.indexOf("m")
        let min=0
        if(positionH===-1){
            min = parseInt(item.duration.slice(0, positionM))
            item.duration=min
        }else{
            if (positionM === -1) {
                item.duration = hour * 60
            } else {
                min = parseInt(item.duration.slice((item.duration.indexOf(" ")), positionM))
                item.duration = (hour * 60) + min
            }
        }
        return item
    })
    return turnHour
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if(movies.length ===0)return null
    let years = movies.map(function(item){
      return item.year
    }) 
    years = [...new Set(years)]
    let yearsAndMovies = [];
    years.forEach(item => {
        yearsAndMovies.push({year: item, movies: movies.filter(function(element){
            return element.year === item
        })})
    });

    yearsAndMovies = yearsAndMovies.map(function(item){
        item.average = ratesAverage(item.movies)
        return item
    })
    if(yearsAndMovies.length===1){
        return `The best year was ${yearsAndMovies[0].year} with an average rate of ${yearsAndMovies[0].average}`
    }else{
        let best =yearsAndMovies.sort(function (a,b){
            if (a.year > b.year) {
                return 1
            } else if (a.year < b.year) {
                return -1
            } else {
                return 0
            }
        }).sort(function (a,b){
            return b.average-a.average
        })[0] 
        return `The best year was ${best.year} with an average rate of ${best.average}`
    }
}

