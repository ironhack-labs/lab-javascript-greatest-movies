/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

let newRate = movies.map(num => {
    return {
      title: num.title,
      year: num.year,
      director: num.director,
      duration: num.duration,
      genre: num.genre,
      rate: Number(num.rate)
    }
    })
    
    
    console.log(newRate)


ratesAverage = function(rates) {
    let sumOfRates = rates.reduce(function(a,b){
      let sum = a + b.rate;
      return sum
    },0);
    average = (sumOfRates / rates.length).toFixed(2);
    return Number(average);
  }
  

  ratesAverage(newRate)


// Iteration 2: Drama movies - Get the average of Drama Movies

let dramaMovies = newRate.filter(function(number){
    return number.genre.includes('Drama')
  })
  
  dramaMoviesRate = function(rates) {
    if(rates.genre.includes('Drama')) {
        let sumOfRates = rates.reduce(function(a,b){
            let sum = a + b.rate;
            return sum
          },0);
          average = (sumOfRates / rates.length).toFixed(2);
          return Number(average)
        }
  }
  
  
  console.log(dramaMoviesRate(dramaMovies))
  

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
