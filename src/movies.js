// Iteration 1: All directors? - Get the array of all directors.


/*function getAllDirectors (array) {
    return array.map(function(item){
          return item.director
    })
}

getAllDirectors(movies)
*/

const getAllDirectors = (movies) => {
    return movies.map ((movie) => {
      return movie.director
    })
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    return (movies.filter( (movie) => {
      return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")
    })).length
  }
  howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    if(!movies.legth) return 0
    let prom = 0
     prom = movies.reduce(function(acc, cv)  {
      if (cv === 0) {
      return parseFloat((acc + cv.rate) / movies.length).toFixed(2) 
      }
    })

}
   

// Iteration 4: Drama movies - Get the average of Drama Movies



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
