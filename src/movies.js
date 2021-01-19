// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies)=>{
    return movies.map((movies)=>{
        return movies.director
    } )
}
 


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    const stevenSpielberg = movies.filter(element => {
        if (element.director.includes('Steven Spielberg') && element.genre.includes('Drama')) {
            return true
        } else { return 0;
        }
    })
    return stevenSpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (array) {
    if (array.length === 0){
        return 0;
    } else {
        const sum =  array.reduce((acc, elm) => {
            return acc + elm.rate  
        }, 0)
           let average = sum / array.length
        return Number(average.toFixed(2) )
    }
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    const dramaMovies = array.filrter (element => {
        if(element.genere.includes ('Drama')) {
            return Number(movies.toFixed())
        } else {
            return 0;
        }
})
     return dramaMovies.length
    }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (moviesArray){
    const moviesCopy = [...moviesArray]
    const moviesCopyTitle = moviesCopy.map(element => { 
        return element.title})
        
    return moviesCopyTitle.sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
