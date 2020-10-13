// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    const arrayOfDirectors = array.map(function(movie){
      return movie.director;
    })
    return arrayOfDirectors
  }
  getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const stevenSpielberMovies = arr.filter(function(movie){
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return stevenSpielberMovies.length
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if(!arr.length) return 0;
    const sumNums = arr.reduce(function(acc, next){
        return acc + next.rate 
     },0)
     return Math.round(sumNums/arr.length * 100)/100
   }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  if(!arr[0].genre.includes('Drama')) return 0;
  let filteredArr = arr.filter(word => word.genre.includes("Drama"));
  return ratesAverage(filteredArr)
}    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let sortedYear = arr.slice()
    sortedYear.sort(function(a, b){
      if (a.year === b.year) {
        return a.title - b.title
      } else {
        return a.year - b.year 
      }
    })
    return sortedYear
   }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let sortedTitle = arr.slice(0,20)
    sortedTitle.sort(function(a, b){
      return a.title.localeCompare(b.title)
    })
    return sortedTitle.map(title => title.title)
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
