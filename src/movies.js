// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArray) {
    return movieArray.map((movie) => {
        let allDirectors = 
             movie.director
        
            
        return allDirectors;
    })

}

// console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// function removeDups(movies) {
//   let unique = {};
//   movies.forEach(function(i) {
//     if(!unique[i]) {
//       unique[i] = true;
//     }
//   });
//   return Object.keys(unique);
// }

// console.log(removeDups(movies)); 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let films;
    return films = array.filter(function(movie) {
    return movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")
    }
    ).length
    } 
    
  
  console.log(howManyMovies(movies))


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let moviesRates = "";
    return arr.reduce((acc, rate) => { 
    return  (acc + rate.rate)
    }, 0) / arr.length; 
  }
  
  console.log(ratesAverage(movies).toFixed(2));
  

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let ratesOfDrama = arr.filter(function(movie) {
    return movie.genre.includes("Drama");
  }
)

return ratesAverage(ratesOfDrama);  
};

console.log(dramaMoviesRate(movies).toFixed(2))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  const order = arr.sort(function(movie1, movie2) {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title)
    } return movie1.year - movie2.year 
    }
  ) 
  return order;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(lotsOfMovies) {
  return [...lotsOfMovies]
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(eachMovie => eachMovie.title)
    .slice(0, 20);
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
