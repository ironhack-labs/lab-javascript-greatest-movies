// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    let directorsArr = moviesArr.map((el, ind) => 
    {return moviesArr[ind].director})
    return directorsArr
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    let spielbergDramas = moviesArr.filter ((el, ind) => {
        return moviesArr[ind].director == "Steven Spielberg" && moviesArr[ind].genre.includes("Drama")
        }
    )
    return spielbergDramas.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    let newMoviesArr = moviesArr
    if(newMoviesArr.length == 0) {
        return 0
    } else {
      for (let i = 0; i < newMoviesArr.length; i++) {
        if (newMoviesArr[i].rate == undefined) {
          newMoviesArr.splice(i, 1)
        }
      }
    let moviesTotalScore = newMoviesArr.reduce((acc, val) => {
        return acc + val.rate;
    }, 0);
    return Math.round((moviesTotalScore / newMoviesArr.length)*100)/100
}}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
    let onlyDrama = moviesArr.filter(el => el.genre.includes("Drama"));
    let dramaAverage = ratesAverage(onlyDrama);
    return dramaAverage
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
