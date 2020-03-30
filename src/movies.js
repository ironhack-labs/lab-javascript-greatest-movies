/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const newArr = [...arr]
    const titleOrder = newArr.sort((a, b) => {
        if(a.title > b.title){
            return 1
        }
        if(a.title < b.title){
            return -1
        }
        return 0;
    })
    const byYear = titleOrder.sort((a, b) => a.year - b.year)

    return byYear

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  const dramaMovies = arr.filter(elm => elm.genre.includes("Drama"));
  const dramaSpielberg = dramaMovies.filter(
    elm => elm.director === "Steven Spielberg"
  );

  if (dramaSpielberg) {
    return dramaSpielberg.length;
  } else {
    return 0;
  }
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const newArr = [...arr]
    const orderArr = newArr.sort((a, b) => {
        if(a.title > b.title){
            return 1
        }
        if(a.title < b.title){
            return -1
        }
        return 0
    })
    const shortArr = orderArr.slice(0, 20)
    const shortTitles = shortArr.map(elm => elm.title)

    return shortTitles

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if (arr.length) {
    const moviesRate = arr.filter(elm => elm.rate);
    const allRates = moviesRate.reduce((acc, elm) => acc + elm.rate, 0);
    const avG = allRates / arr.length;
    const avGRounded = avG.toFixed(2);
    const average = parseFloat(avGRounded);

    return average;
  } else {
    return 0;
  }
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaMovies = arr
        .filter(elm => elm.genre.length === 1)
        .filter(elm => elm.genre.includes("Drama"))
    const sum = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)
    const dramaAvg = sum / dramaMovies.length
    const avgFixed = dramaAvg.toFixed(2)
    const average = parseFloat(avgFixed)

    //   if (dramaMovies.length === 0) {
    //     return 0;
    //   }

    //   return average;

    return dramaMovies.length === 0 ? 0 : average
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    
    const newArr = arr.map(elm => {
        let num1 = 0;
        let num2 = 0;
        let newDuration = {...elm}
        if(elm.duration.split(' ').length === 1){
            num1 = parseInt((elm.duration.split(' '))[0])*60
            newDuration.duration = num1
        } else if(elm.duration.split(' ').includes('min')){
            num2 = parseInt((elm.duration.split(' '))[1])
            newDuration.duration = num2
        } else {
            num1 = parseInt((elm.duration.split(' '))[0])*60
            num2 = parseInt((elm.duration.split(' '))[1])
            newDuration.duration = num1 + num2
        }
        return newDuration
    })

    return newArr
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
