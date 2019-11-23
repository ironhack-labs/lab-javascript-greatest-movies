/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(m){

  if(m.length === 0){
    return [];
  }
    return m.sort(function(a, b){
      return a.year - b.year;
    })
}

orderByYear(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(m){
    return m.filter(function(d){
    return d.director === "Steven Spielberg";
  })
  }
  
  howManyMovies(movies)

/*

  function howManyMovies(m){
    m.forEach(function(e){
    console.log(e)
      e.forEach(function(g){
      if(g === "Drama"){
        console.log("hola")
      }
    })
    })
      return m.filter(function(d){
      return d.director === "Steven Spielberg";
    })
    }
    
    howManyMovies(movies)
    */
  


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
