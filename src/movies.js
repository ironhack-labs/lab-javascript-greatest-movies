// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray
    .filter ((moviesArray) => moviesArray.director)
    .map ((moviesArray) => moviesArray.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
     const result = moviesArray.filter(film => film.director === 'Steven Spielberg' && film.genre.includes('Drama'))
        return result.length;   
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // const scoAvg = moviesArray.reduce((total, next) => total + next.score.length, 0) / moviesArray.length
    // console.log (scoAvg.length)

    if  (moviesArray.length === 0)
    return (0)
    let moviesScr = moviesArray.filter(movie => movie.score !== undefined)
    let scrAvg = moviesScr.reduce((total, next) => total + next.score, 0)
    return (Number((scrAvg/moviesArray.length).toFixed(2)))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // const dramaAvg = moviesArray.reduce ((total, next) total + next.genre.includes('Drama'), 0)/ next.genre.includes('Drama').length
    const drama = moviesArray.filter( movie => movie.genre.includes('Drama'))
    console.log(drama)

    if (!drama.length) return 0

    const totalScr = drama.map (movie => movie.score)
    // console.log('los scores--->',totalScr)
    const avg = totalScr.reduce((total,next) => total + next, 0)/ totalScr.length
    return (Number(avg.toFixed(2)))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = [...moviesArray]
   return newArr.sort(function (a, b) {
        if (a.year > b.year) {
    return 1
  }
        if (a.year < b.year) {
    return -1
  }
        if (a.year === b.year){
             if(a.title > b.title){
            return 1
             }
            if (a.title < b.title){
            return -1
            } 
    return 0
  }
})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const top20Titles = moviesArray.sort((a,b) =>{
        if (a.title > b.title){
            return 1
        }
        if (a.title < b.title){
            return -1
        } 
        return 0
    })

.map((el) => el.title)
return  top20Titles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const result =  []
    //const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    
    moviesArray.forEach((movie) => {
        let mins = 0
        let movLen = movie.duration
        movLen = movLen.split(" ")

        movLen.forEach((number) => {
            if (number.slice(number.length -1) === "h"){
                let addH = number.substring(0, number.length -1)
                addH = Number.parseFloat(addH)
                addH = addH * 60
                mins += addH
                // console.log (addH)
            } 
            else if (number.slice(number.length -3) === "min"){
                let addM = number.substring(0, number.length -3)
                addM = Number.parseFloat(addM)
                mins += addM
                // console.log (addM)
            }
            
        })
        // console.log ( mins)
        
        let newMov = {...movie}
        newMov.duration = mins
        result.push(newMov)
    })
    return result
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    // 1st - reduce total-año -> crear arrays con año-nota 
        // let years avg = [{... , ...},{... , ...},....]
        // iterar total por año y conseguir cantidad del array
        // conseguir la media
    // reduce el mayor año con la mayor media u ordenar por media
    
}
