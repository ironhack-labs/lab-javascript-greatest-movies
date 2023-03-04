// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map(function (movie) {
        return movie.director
        
    })
    // directorsArr: ["Steven S.", ...]
    return directorsArr

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSteve = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return moviesSteve.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let avg = moviesArray.reduce(function(acc, movie) {
        if (movie.score === null || movie.score === undefined) {
            movie.score = 0
        }

        return acc + movie.score/moviesArray.length
    }, 0)

    return Number(avg.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = moviesArray.filter(movie => movie.genre.includes('Drama'))

    let dramaAvg = dramaArr.reduce(function(acc, drama) {
        return acc + drama.score/dramaArr.length
    }, 0)

    return Number(dramaAvg.toFixed(2))


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearArr = moviesArray.slice()

    return yearArr.sort(function (a, b) {
        if (a.year<b.year) return -1
        if (a.year>b.year) return 1
        if (a.year===b.year) {
            
                if (a.title<b.title) return -1
                if (a.title>b.title) return 1
                if (a.title===b.title) return 0
            
        }
    })
    

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArr = moviesArray.map(function (movie) {
        return movie.title
    })

    titleArr.sort()

    if (titleArr.length>20) {
        return titleArr.slice(0, 20)
    } else {
        return titleArr
    }




}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minuteArr = moviesArray.slice()

    
    minuteArr.forEach(function (movie) {
        if (typeof movie.duration === 'string') {
            if (movie.duration.includes('min')) {
                const splittedDuration = movie.duration.split(" ")
                
                let minuteDuration = Number(splittedDuration[0].substring(0,splittedDuration[0].length-1))*60 + Number(splittedDuration[1].substring(0,splittedDuration[1].length-3))
                movie.duration = minuteDuration
            } else {
                movie.duration = Number(movie.duration.substring(0,movie.duration.length-1))*60
            }
            
        }
        
    })

    console.log("minuteArr=", minuteArr)
    return minuteArr


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

// Create bestYearAvg() function that receives an array of movies and gives us an answer to know which year has the best average score
function bestYearAvg(moviesArray) {
    




    
}
