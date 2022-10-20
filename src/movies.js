// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // se recorre el array original y crea una copia
    let newArr = moviesArray.map((eachDirector)=>{
        // retorna cada director del array recorrido
        return eachDirector.director
    })
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let newArr = moviesArray.filter((eachMovie)=>{
        // console.log(eachMovie.genre)
        if(eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes('Drama')){
            // eachMovie.genre.indexOf('Drama')!= -1
            return true
        }else {
            return false
        }
    })
    return newArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    let sumScore = moviesArray.reduce((acc,eachMovie)=>{
        if(eachMovie.score === undefined){
            return acc;
        } else {
            let num = Number(eachMovie.score)
            return acc + num
        }
    },0)
    let averageTotal = sumScore / moviesArray.length
    return Number (averageTotal.toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    //encontrar solo peliculas de drama!!!
    let dramaMovies = []
    let newArr = moviesArray.filter((eachMovie)=>{
        // console.log(eachMovie.genre)
        if(eachMovie.genre.includes ('Drama')){
            dramaMovies.push(eachMovie)
        }
    })

    let sumScore = dramaMovies.reduce((acc,eachMovie)=>{
        if(eachMovie.score === undefined){
            return acc;
        } else {
            let num = Number(eachMovie.score)
            return acc + num
        }
    },0)
    let averageTotal = sumScore / moviesArray.length
    return Number (averageTotal.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = structuredClone(moviesArray)
    let sortedbyYear = newArr.sort((film2,film1)=>{
        if (film2.year > film1.year){
            return 1;
        }else if(film2.year < film1.year){
            return -1
        }else if (film2.title > film1.title){
            return 1
        }else if (film2.title < film1.title){
            return -1
        }else return 0
    })
    return sortedbyYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneArr = structuredClone(moviesArray)
    let sortedByLetter = cloneArr.sort((film2,film1)=>{
        if (film2.title > film1.title){
            return 1
        }else if (film2.title < film1.title){
            return -1
        }else return 0
    })
    let mapByTitle = sortedByLetter.map ((eachMovie)=>{
        return eachMovie.title
    })
    let firstTwentyFilms = mapByTitle.slice(0,20)
    return firstTwentyFilms;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
