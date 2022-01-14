// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((film => film.director))

}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {



  stevenDramas = arr.filter(film => film.director === "Steven Spielberg" && film.genre.includes("Drama"));
  return stevenDramas.length;

}

//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let arr2 = []
  if(arr.length === 0){
    return 0
  }

  const num = arr.map((data) => {

      if(!data.score){

        data.score = 0;
      }

      return data.score
  });
  
  const average = num.reduce((acumulador, valorActual) => {
    //console.log("acumulador", acumulador)
    //console.log("valor", valorActual)
      return acumulador + valorActual

  },0);

  let total = average / num.length
  //let decimal = total.toFixed(2)
  let total2 = Number(total.toFixed(2))
    return total2

}

//console.log(scoresAverage(movies))



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  
  //filter = arr.map((film => film.score))
  
  dramas = arr.filter(film => film.genre.includes("Drama"));
    return scoresAverage(dramas)
  //filter = dramas.map((film => film.score))
  
  //const average2 = filter.reduce((acumulador2, valorActual2) => {
    //console.log("acumulador", acumulador2)
    //console.log("valor", valorActual2)
      //return acumulador2 + valorActual2

  //});
  
  let total2 = average2 / filter.length
  //let decimal = total2.toFixed(2)
  let total3 = Number(total2.toFixed(2))
    return total3

}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  //let newArray = []
  const copy = arr.map((film) => film)

  //newArray = Object.assign(copy)
  copy.sort(function(a, b){
    if ( a.year === b.year){
      if (a.title > b.title){
        return 1
      }else{
        return -1
      }
    }else 
    return a.year - b.year
  })
    return copy
}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let alpha = arr.map(film => film.title)

    alpha.sort()
    return alpha.slice(0,20)


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
