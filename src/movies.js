/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let newMovies = [...arr]
        return newMovies.sort((a,b) =>{
    if(a.year === b.year) {
        return a.title.localeCompare(b.title) //string compare, sort by utseld will work with string and numbers but not more complex data
    }
    else {
        return a.year - b.year
    }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
    let sbMovies = arr.filter(obj => obj.director === "Steven Spielberg" && obj.genre.includes("Drama"));
    return sbMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
    const orderAlphabetically = (arr) => {
        let copyOfArray = [...arr];
        copyOfArray.sort((a,b) => {
        return a.title.localeCompare(b.title) 
        })
        const movieOrder = copyOfArray.map((eachMovie) => {        // function (param) {return} is the same as (param) => {return } this can also be written as (param) => implied return code
        return eachMovie.title
        // return parameter -> eachMovie = each element of an arr; arr[i]
    })
    return movieOrder.slice(0,20)
    }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if(arr.length === 0) {
        return 0
    } else {
    let copyOfArray = [...arr]
    const sum = copyOfArray.map((eachMovie) => {
        return eachMovie.rate
    }, 0)
    let den = sum.length
    let avg = sum.reduce((a, b) => a + b, 0)/den
    return Number(avg.toFixed(2))
    }
}


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr, genre) => {
    let arrDrama = []
    let copyOfArray = [...arr]
    const count = copyOfArray.map((eachMovie) => {
        return eachMovie.genre.includes(genre)
    })
    for (let i = 0; i < count.length; i++) {
      if(count[i] === true) {
        arrDrama.push(copyOfArray[i])
      }
    }
  return ratesAverage(arrDrama)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
