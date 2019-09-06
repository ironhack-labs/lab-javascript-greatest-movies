/* eslint no-restricted-globals: 'off' */
// let movies = require("./data.js")
// let movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: '1994',
//       director: 'Frank Darabont',
//       duration: 100,
//       genre: ['Crime', 'Drama'],
//       rate: '9.3'
//     },
//     {
//       title: 'The Godfather',
//       year: '1972',
//       director: 'Francis Ford Coppola',
//       duration: 180,
//       genre: ['Crime', 'Drama'],
//       rate: '9.2'
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: '1974',
//       director: 'Francis Ford Coppola',
//       duration: 190,
//       genre: ['Crime', 'Drama'],
//       rate: '9.0'
//     }
// ]

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
let ratesAverage =function(array){
    let totalRate = array.reduce((contador,valorAtual) => {
            if(valorAtual.rate == ""){
                valorAtual.rate = 0
            }
            return contador + parseFloat(valorAtual.rate);
    },0)
    return parseFloat((totalRate / array.length).toFixed(2))
}

// Iteration 2: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = function(array) {
    let arrayFiltrado = array.filter( filme => {
        return (filme.genre.indexOf('Drama') >= 0)
    })
    if(arrayFiltrado.length > 0){
        return ratesAverage(arrayFiltrado)
    }else {
        return 0
    }
    
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
let orderByDuration = function(array){
    
    let arrayOrdered = array.sort( (a,b) => { 
        if( a.title != undefined && b.title != undefined){
            return a.title.localeCompare(b.title)
        }else {
            return 0
        }
       
    })
    arrayOrdered.sort((a,b) => {
        return a.duration - b.duration
    })
    return arrayOrdered
} 
// let a = '2h 22min'
// let b = a.split('h ').join("")


let howManyMovies = function(array){
    array.filter( movie => {
        
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
