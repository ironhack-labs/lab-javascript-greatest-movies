/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(m){

  if(m.length === 0){
    return [];
  }
    return m.sort(function(a, b){
      if(a.year === b.year){

        if(a.title > b.title){
          return 1;
        }
        else if (a.title < b.title){
          return -1;
        }
          return 0;
      } 
      return a.year - b.year;
      })
}

orderByYear(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(m){
    return m.filter(function(d){
    return d.director === "Steven Spielberg" && d.genre.includes("Drama");
  }).length
  }
  
  howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(m){

    if(m.length === 0){
     return [];
   }
    return m.sort(function(a, b){
      return a.title.localeCompare(b.title);


    }).map(function(m){
      return m.title
    }).slice(0,20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(m){

  if(m.length === 0){
    return 0;
  }

  return parseFloat((m.reduce(function(acc, movie){
    if(movie.rate === ""){
        movie.rate = 0
    }    
    return movie.rate + acc
  },0) / m.length).toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(m){
  return m.filter(function(d){
  return d.genre.includes("Drama");
  }).length
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average
