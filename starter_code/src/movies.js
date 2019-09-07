/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = arrMovies => {
    const arrRates = arrMovies.map(movie => {
        if(movie.rate === ""){
            return 0;
        } else {
            return parseFloat(movie.rate)
        }
    })
    const result = arrRates.reduce( (totalRate, rate) => (totalRate + rate), 0)/arrRates.length
    return Number(result.toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arrMovies => {

    const arrGender = arrMovies.filter( movie => {
        if ( movie.genre.includes('Drama')) {
            return true;
        } else {
            return false;
        }
        
    })

    if (arrGender.length > 0){
        return ratesAverage(arrGender)
    } else {
        return 0;
    }

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
    return movies.sort((a,b) =>{
        if(a.duration === b.duration){
            return a.title > b.tittle ? 1 : -1
        }

        return a.duration - b.duration
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
