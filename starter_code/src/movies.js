/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(arr) {
   
let arrayByYear = [...arr];
arrayByYear.sort((a,b) => {
    if (a.year > b.year) {
        return 1
    }
    else {
        return -1
    }
    })    
    return arrayByYear;
}    


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let  howMany = [...arr].filter((movie) => (movie.genre.includes(`Drama`)) && (movie.director===`Steven Spielberg`))

        return howMany.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let alphabeticallyOrdered = [...arr].map((movie) => movie.title)
    
    alphabeticallyOrdered.sort()
    //  alphabeticallyOrdered.sort()
     return alphabeticallyOrdered.splice(0,20)    
}



// Iteration 4: All rates average - Get the average of all rates with 2 decimals


    function ratesAverage(arr) {
        if (arr.length===0) {
            return 0
        }

        let averag = [...arr].reduce((ac,cu) => {
            if (typeof cu.rate!==`number`) {
            cu.rate=0
            }
            return ac+cu.rate
            
        },0 )
        let averageRate = averag/arr.length
   
        return +averageRate.toFixed(2)
    }

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaRateArr =[...arr].filter((movie) => (movie.genre.includes(`Drama`)))
    if (dramaRateArr.length===0) {
        return 0
    }
    let dramaRate = dramaRateArr.reduce((ac,cu) => {
        return ac+cu.rate
    },0)
    dramaRate = dramaRate/dramaRateArr.length

    return +dramaRate.toFixed(2)
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let moviesInMinutes = [...arr].map((movie)  => {
        let durationInMin = movie.duration.split(` `);
        if (durationInMin.length===2) {
            durationInMin = parseInt(durationInMin[0])*60 + parseInt(durationInMin[1]);
    
        } else if (durationInMin[0].includes(`h`)) {
            durationInMin =parseInt(durationInMin[0])*60;
        }
        else {
            durationInMin=parseInt(durationInMin[0])
        }
    
    //Problems here ??
    return movie.duration= durationInMin;
    
      
    }) 
    return moviesInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
}