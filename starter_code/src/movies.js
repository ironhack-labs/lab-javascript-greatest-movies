/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
    const sorted = obj["year"].sort( (a,b)=> a-b).join('')
    const newArray = array.map(obj =>  newArray)
    // (a,b) => a-b)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = array => { const newArray = array.filter(obj => {
    if (obj.director.includes('Steven Spielberg') && obj.genre.includes('Drama')){
}})
    return newArray.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {
    const newArray = array.sort().slice(0,20).map(obj => obj.title.toLowerCase())
    return newArray
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
    let counter = 0;
    array.forEach(value => {
    counter += value.rate;
})
    if (array.length === 0){
        return 0
    } else {
        return (counter/array.length.toFixed(2))
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {
    let counter = 0;
    const newArr = array.filter(value => value.genre.includes('Drama'))
    newArr.forEach(obj => counter += obj.rate)
    if (array.length === 0){
        return 0
    } else {
        return Number((counter/array.length).toFixed(2))
    }
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
