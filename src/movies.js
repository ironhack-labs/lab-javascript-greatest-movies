// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => movies.map(elm => elm.director)



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => movies.filter(elm => elm.director.includes("Steven Spielberg") && elm.genre.includes("Drama")).length




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

reduce((acc) => { }, valorInicial)

const ratesAverage = (movies) => {

    movies.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0)


}


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {

    const dramaFilter = movies.filter(elm => elm.genre.includes("Drama"))

    return ratesAvg(dramaFilter)





}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {

    let yearArray = movies.map(elm => {

        return elm.year



    }

}

const orderByYear = (movies) => movies.map(elm => elm.year)

console.log(elm.year);

// const yearList = JSON.parse(JSON.stringify(orderByYear))




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
