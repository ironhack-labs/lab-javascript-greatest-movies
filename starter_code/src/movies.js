/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {

    const moviesCopy = [...movies]
    
    const sortMovies = moviesCopy.sort ( (a, b) => {
        if (a.year > b.year){
            return 1;
        }
    
        if (a.year < b.year){
            return -1;
        }
        if (a.year === b.year) {
            if ( a.title > b.title){
                return 1;
            }
            if (a.title < b.title){
                return -1
            }

        }
    })
    console.log(sortMovies) 
    return sortMovies 
        
    }

orderByYear(movies)
 




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(movies) {

    const spielberg = movies.filter (elm => elm.director === "Steven Spielberg")
    
    const mDrama = spielberg.filter (elm => elm.genre.includes("Drama"))


    return mDrama.length

}
howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const moviesCopy = [...movies]

    const aOrder = moviesCopy.sort ((a,b)=> {
        if (a.title > b.title){
            return 1;
        }
    
        if (a.title < b.title){
            return -1;
        }
        
    })
    const titleT = aOrder.map (elm => elm.title)
    const title20 = titleT.slice(0,20)
    console.log(title20)
    return title20

}
orderAlphabetically (movies)

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length < 1) {
        return 0
    }


    const rateAvg = movies.reduce ((acc, elm) => {
        if (elm.rate){
        return (acc + elm.rate)
        } else {
            return acc
        }
    }, 0)


    let rateAvg2 =(rateAvg/movies.length).toFixed(2)
    
    console.log(rateAvg2)
    return parseFloat (rateAvg2)
}
ratesAverage(movies)
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {


    let dramaMov = movies.filter (elm => elm.genre.includes("Drama"))

    if (dramaMov.length < 1) {
        return 0
    }
    console.log(dramaMov)
    
    let dramaAvg = dramaMov.reduce ((acc, elm) => {
        return (acc +elm.rate)
    },0)


    let medFix =dramaAvg/dramaMov.length
    medFix2 = medFix.toFixed(2)
    console.log (medFix2)
    return parseFloat(medFix2)
}
dramaMoviesRate(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const moviesCopy = [...movies]

    return moviesCopy
}

turnHoursToMinutes(movies)
//return




// BONUS Iteration: Best yearly rate average - Best yearly rate average
