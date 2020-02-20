/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (array) {
       const newArr = [...array]
       newArr.sort((a,b) => {
           if(a.year === b.year){
               if (a.title < b.title){
                   return -1
               } else if (a.title > b.title) {
                   return 1
               } else {
                   return 0;
               }
           } else {
               return a.year - b.year;
           }
       })
       return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (array) {
   let arrayFiltered = array.filter(cadaElementoArray => cadaElementoArray.director === "Steven Spielberg" && cadaElementoArray.genre.includes("Drama"))
   return arrayFiltered.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
      let newArr = [...array]
      let orderedMovies = newArr.sort((a,b) => {
          if (a.title < b.title) {
              return -1
          } else if (a.title > b.title) {
              return 1 
          } else {
              return 0;
          } 
      }
      )
      let twentyMovies = orderedMovies.slice(0, 20);
      return twentyMovies.map(cadaElementoArray => { return cadaElementoArray.title})
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage (array) {
    if (array.length === 0) {return 0}
    let newArray = [...array];
    let ratedMovies = newArray.map(cadaElemento => { return cadaElemento.rate});
    ratedMovies = ratedMovies.filter(cadaElementoArray => cadaElementoArray > 0);
    let sum = ratedMovies.reduce((accumulator, cadaElemento) => accumulator + cadaElemento);
    let average = sum / array.length;
    return Math.round((average)*100)/100;
    }

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    let newArray = [...array];
    let arrayFiltered = array.filter(cadaElementoArray => cadaElementoArray.genre.includes("Drama"))
    let average = ratesAverage(arrayFiltered)
    return average;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let newArray = [...array];
    let arrayFiltered = array.filter(cadaElementoArray => cadaElementoArray.duration);
    
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
