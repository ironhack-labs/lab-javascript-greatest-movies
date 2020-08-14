// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map(function(i) {
        return i.director;
    }) 
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(i => i.genre.includes("Drama") && i.director === "Steven Spielberg").length;
} 


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let avrg = movies.filter(movie => movie.rate).reduce(function(total, value) {
      return total + value.rate / movies.length
    }, 0)

    return Number(avrg.toFixed(2))
  }

 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaAvrg = movies.filter(i => i.genre.includes("Drama"))
let avrg = dramaAvrg.reduce(function(total, value) {
return total + value.rate / dramaAvrg.length
}, 0)

return Number(avrg.toFixed(2))
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let listOfMovies = [...movies];
    listOfMovies.sort(function (a, b) {
      if (a.year === b.year){
        return a.title.localeCompare(b.title);
      } return a.year - b.year;
});
console.log(listOfMovies)
  return listOfMovies;
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let movieOrder = [];
movies.map(function(movie){
    movieOrder.push(movie.title)
})  

if (movieOrder.length> 20) {
movieOrder = movieOrder.sort().slice(0,20);
return movieOrder

}  
return movieOrder.sort() }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
