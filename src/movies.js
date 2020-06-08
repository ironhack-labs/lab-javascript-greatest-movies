// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const mapped = movies.map(elm => elm.director)    
    return mapped
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    
    const dramaMovies = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return dramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    const lenMovies =movies.length

    if (lenMovies <1){
        return 0
    }

    const average = movies.reduce((acc, elm) => {

        if (elm.rate){
            return acc + elm.rate
        }else{
            return acc
        }
    },0)

    realAverage = average/lenMovies
    return Math.round(realAverage *100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama"))
    const lenDramaMovies= dramaMovies.length

    if (lenDramaMovies<1){
        return 0
    }

    const dramaAverage = dramaMovies.reduce((acc, elm) => {

        if (elm.rate){
            return acc + elm.rate
        }else{
            return acc
        }
    },0)

    realDramaAverage = dramaAverage/lenDramaMovies
    return Math.round(realDramaAverage*100)/100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){

    const sortArr = [...movies].sort((a,b) => {

        if (a.year > b.year){
            return 1
        }else if (a.year < b.year){
            return -1
        }else{
            if (a.title > b.title){
                return 1
            }else return -1
        }
    })
    
    return sortArr

    // const sortArr = [...movies].sort((a,b) => a.year - b.year)
    // return sortArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){

    let copyMoviesSorted = [...movies].sort((a,b) => a.title.localeCompare(b.title))
    let titles = copyMoviesSorted.map(elm => elm.title)
    titles.splice(20)
    return titles


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
