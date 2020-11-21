// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    return arr.map(function (arr) {
    return arr.director
})
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    return arr.filter(function (arr) {
    return arr.director === 'Steven Spielberg' && arr.genre.includes('Drama')
}).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let myresult=0;
function ratesAverage(arr) {
    if (arr.length === 0) {return 0} else{
  myresult= arr.reduce(function (acc,v){
      if(!v.rate){ v.rate=0}
    return acc + v.rate
  },0)/arr.length
  return parseFloat((myresult.toFixed(2)));}
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
