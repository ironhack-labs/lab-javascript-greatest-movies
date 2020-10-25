// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors =(data)=>{
    const listOfDirectors = data.map((movie) => movie.director)
    return listOfDirectors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (data) =>{
    const dramaMoviesOfSpielberg = data.filter((movie)=>{
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
})
return dramaMoviesOfSpielberg.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (data)=>{
    if(data.length === 0) {
        return 0.00
    }
const totalAverage = data.reduce((counter,movie)=>{

    if(Number(movie.rate)){
        return counter+movie.rate
    } else {
        return counter
    }
}, 0)
return Number((totalAverage / data.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (data) => {
    const dramaMovies = data.filter((movie) => movie.genre.includes("Drama"))
    return ratesAverage(dramaMovies)

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
