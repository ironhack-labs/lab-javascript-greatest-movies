// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map((elem) => {
            return elem.director    
})
uniqueArray = directors.filter(function(item, pos) {
    return directors.indexOf(item) == pos;
})
return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanDirectors(arr){
    uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    })
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let ssMovies = movies.filter((elem) => {
        return elem.director == 'Steven Spielberg'  &&  elem.genre.includes('Drama')
        })
        return ssMovies.length
    }
    

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if(movies.length == 0){
        return 0
    }
 let totalRate = movies.reduce((sum, movie) =>{
     if(movie.rate){
        return sum + movie.rate
     } 
     else {
         return sum
     }
}, 0)

let average = totalRate / movies.length
return Number(average.toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let mapped = movies.filter((elem) => {
        return elem.genre.includes('Drama')
    })
   let average = ratesAverage(mapped)
   return average
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (movies) {

let clonedArr = JSON.parse(JSON.stringify(movies))
    
    clonedArr.sort((elem1, elem2 ) => {
        if(elem1.year > elem2.year){
            return 1
        }
        else if(elem1.year < elem2.year){
            return -1
        }else{
            if(elem1.title > elem2.title){
                return 1
            }else if(elem1.title < elem2.title){
                return -1
            }else{
                return 0
            }
    }
})
return clonedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let clonedArr = JSON.parse(JSON.stringify(movies))

    clonedArr.sort((elem1, elem2) => {
        if(elem1.title > elem2.title){
            return 1
        }
        else if(elem1.title < elem2.title){
            return -1
        }else{
            return 0
        }
    })
    let names = clonedArr.map((elem, index) => {
        return elem.title
    })
    return names.splice(0,20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (moviesArr) => {
    let mins = moviesArr.map((elem, index) => {
        return elem.duration * 60
    })
    return mins
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
