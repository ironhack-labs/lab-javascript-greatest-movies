/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array){
    return parseFloat((array.reduce((acc, current) => acc + parseFloat(current.rate), 0) / array.length).toFixed(2))
}

console.log(typeof(ratesAverage(movies)))
 
// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arrayDrama){
    const arrayGenDrama = arrayDrama.filter(arrD => arrD.genre.indexOf('Drama') >= 0)

  if(arrayGenDrama == []){
    return 0
  }else
    return parseFloat((arrayGenDrama.reduce((accD, currentD) => accD + parseFloat(currentD.rate), 0) / arrayGenDrama.length).toFixed(2))
}

console.log(dramaMoviesRate(movies))


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(){
    movies.sort(function(a) {
      return reverse(a.duration)
    })
}

console.log(orderByDuration(movies))
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
