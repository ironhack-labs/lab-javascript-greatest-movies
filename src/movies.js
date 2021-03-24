// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arr => {
    let directors = arr.map(movie => {
        return movie.director
    })
    return directors
}
//console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arr => {
    let totalDramasSteven = arr.filter(drama => drama.genre.includes('Drama') && drama.director === 'Steven Spielberg')
    return totalDramasSteven.length
}

//console.log(howManyMovies(movies))



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
    let sum = arr.reduce((acc, currentValue) => {
        if (currentValue.rate === undefined)
            return acc;
        return acc + currentValue.rate / arr.length;
    }, 0)
    return Math.round(sum * 100) / 100
}

//console.log(ratesAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
    let dramaGenre = arr.filter(dramas => dramas.genre.includes("Drama"))

    let dramaAverageRate = dramaGenre.reduce((acc, currentValue) => {
        return acc + currentValue.rate / dramaGenre.length
    }, 0)
    return Math.round(dramaAverageRate * 100) / 100
}

//console.log(dramaMoviesRate(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
    let sortByYear = arr.slice().sort((a, b) => {
        if (Number(a.year) > Number(b.year)) return 1;
        if (Number(a.year) < Number(b.year)) return -1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1
    })
    return sortByYear
    }
    
    
  //console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
    const size = 20
    let onlyTitle = arr.map(el => el.title).sort((a,b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    })
    return onlyTitle.slice(0, size)
  }
  
  //console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average