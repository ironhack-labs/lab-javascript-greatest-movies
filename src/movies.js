// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const filtered = moviesArray.reduce(function(acc, movie){
        if (acc.includes(movie.director) == false) acc.push(movie.director)
        return acc
    }, [])
    return filtered
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length == 0) return 0
    const steveMovies = moviesArray.filter(function(movies){
        return movies.director == "Steven Spielberg"
    })
    const dramaSteve = steveMovies.filter(function(movies){
        return movies.genre.includes("Drama")
    })
    return dramaSteve.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0
    const sum = moviesArray.reduce(function(acc ,movie){
        if (typeof movie.score != 'number') return acc
        return acc + Number(movie.score)
    }, 0)
    return Math.round(sum*100/moviesArray.length)/100 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie = moviesArray.filter(function(movies){
        return movies.genre.includes("Drama")
    })
    return scoresAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyArr = [...moviesArray]
    copyArr.sort(function(a,b){
        if (a.year == b.year){
            if (a.title<b.title) return -1
            if (a.title>b.title) return 1
            if (a.title == b.title) return 0
        }
        return a.year - b.year
    }) 
    return copyArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copyArr = [...moviesArray]
    copyArr.sort(function (a, b) { 
        if (a.title<b.title) return -1
        if (a.title>b.title) return 1
        if (a.title == b.title) return 0
    }) 
    
    if (copyArr.length > 19 ) {
        copyArr = copyArr.slice(0, 20)
    }

    const finale = copyArr.map(function(x){
        return x.title
    })
    return finale
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(moviesArray) {
        let copyArr = [...moviesArray]
        let changed = copyArr.map(function(movie){
            let splited = movie.duration.split('h') 
            if (splited.length>1) movie.duration = Number(splited[0])*60 + Number(splited[1].slice(0,-3))
            else movie.duration = Number(splited[0])*60
            return movie
        })
        return changed
    }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length == 0) return null
    let ordered = orderByYear(moviesArray)
    let toCal = [ordered[0]]
    let count = 1
    for (i=1; i< ordered.length ; i++){
        if (ordered[i].year == toCal[toCal.length-1].year) {
            toCal[toCal.length-1].score += ordered[i].score
            count +=1
        }
        else {
            toCal[toCal.length-1].count = count
            toCal.push[ordered[i]]
            count = 1
        }
    }
    toCal.sort(function(a ,n){
        if (a.rate/a.count < b.rate/b.count) return -1
        if (a.rate/a.count > b.rate/b.count) return 1
        if (a.rate/a.count == b.rate/b.count) return -1
    })
    let n
    let sumScore = 0
    let counting
    for(i=0; n != ''; i++) {
        if (toCal[i].year != toCal[0].year) (n = '')
        else {
            sumScore += toCal[i].score
            count += 1
        }
    }
    return `The best year was ${toCal[i].year} with an average score of ${sumScore/count}`
}
