// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies){

    let allDirectors = movies.map((theDirector) => {
      return theDirector.director
      
      
    });
    return allDirectors
    }
    

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {

let dramaM = movies.filter(theDrama =>
  theDrama.genre.includes ("Drama") && theDrama.director.includes ("Steven Spielberg"))
    

return dramaM.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Hice este ejercicio con mis companeros, pero no lo entiendo en absoluto.

function ratesAverage (arr){
    let rates = (theRate) => {
        if (!theRate.rate){
            return 0;
        }
      return theRate.rate;
    }
    let average = arr.reduce((accu, current) => {
        accu += rates(current) / arr.length;
        return accu;
    }, 0);
    return Number(average.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (arr){
  let dramaRate = (theDrama) => {
    if (!theDrama.rate){
        return 0;
    }
  return theDrama.rate;
}
let dramaAverage = arr.reduce((accu, current) => {
    accu += dramaRate(current) / arr.length;
    return accu;
}, 0);
return Number(dramaAverage.toFixed(2));


}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
