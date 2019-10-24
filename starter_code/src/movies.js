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


  dramaMoviesRate = function(rates) {
    let dramaMoviesFilter = rates.filter(function(number){return number.genre.includes('Drama')})
          let sumOfRates = dramaMoviesFilter.reduce(function(a,b){
              let sum = a + b.rate;
              return sum
            },0);
          if (sumOfRates > 0) {
            let average = (sumOfRates / dramaMoviesFilter.length).toFixed(2);
              return Number(average)
          }
          else {
            return 0
          }
    }
  
  dramaMoviesRate(newRate)
  

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

orderByYear = function(object) {
    let yearSort = object.sort(function(a,b) {
      return a.year-b.year;
    })
    return {
      yearSort
    }
    }
    
orderByYear(newRate)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


howManyMovies = function(rate){
    let spielbergFilter = rate.filter(function(name){
    return name.director.includes("Spielberg") && name.genre.includes("Drama")
  })
  if (spielbergFilter.length) {return spielbergFilter.length}
  else 0
  }
  howManyMovies(newRate)


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
