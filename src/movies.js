// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
    let directorsarray = movies.map(function(movie){
          return movie.director
    })
  return directorsarray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let SpielbergOnes = movies.filter(function(movie){
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama') == true;
    })
    return SpielbergOnes.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    let avrg
    let addallscores = movies.reduce(function(acc,movie){
       return acc + movie.rate
    },0)
    avrg = addallscores/movies.length.toFixed(2)
    return avrg
} 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(){
    if(movies.genre.includes("Drama")){
    }}
      

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
