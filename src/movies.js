// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = (movies) => {
    return movies.map(movie => movie.director)
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {
    return movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals



let ratesAverage = movies => {
    let sum = movies.reduce(function (accumulator, currentValue) {

        return (accumulator + currentValue.rate)
    }, 0)
    return +(sum / movies.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies


let getDramas = (movies) => {
    return movies.filter(movie => movie.genre.includes("Drama"))
}

let dramaMoviesRate = (movies) => {

    let dramas = getDramas(movies)
    return ratesAverage(dramas)

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = (movies) => {

    let copy = movies.slice(0);

    copy.sort(function (movieA, movieB) {
        if (movieA.year < movieB.year) { return -1 }
        else { return 1 }
    })
    return copy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let titles = (movies) => {
    return movies.map(movie => movie.title)
}

let orderAlphabetically = (movies) => {

 
    titles(movies).sort(function (movieA, movieB) {
        if (movieA.toLowerCase() < movieB.toLowerCase()) { return -1 }
        else { return 1 }
    })
    return titles(movies).slice(0,20)
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (movies) =>{
    movies.forEach(movie => movie.duration= parseInt(movie.duration.substring(0,1))*60+parseInt(movie.duration.substring(3,5)))
      return movies
      } 
    
    
    console.log(countMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
