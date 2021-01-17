// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){

    const allDirectors = movies.map(function(movie) {
            return movie.director 
        })
    return allDirectors
    }
    

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function uniquifyDirectors(array) {

    if (array.length === 0) {
      return null}
  
    let uniquifiedArray = []
    for (let i = 0; i < array.length; i++) {
      if (uniquifiedArray.indexOf(array[i]) === -1) {
          uniquifiedArray.push(array[i]);
      } }
      return uniquifiedArray
  }
  
console.log(uniquifyDirectors(getAllDirectors(movies)))



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(array) {
    const StevenSpielbergDramas = movies.filter(function(movie) {
       for (let i = 0; i < movie.genre.length; i++) {
         if (movie.genre = "Drama" )
           return movie.director === "Steven Spielberg"
       }
          
      }   )
    return StevenSpielbergDramas}
    

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  
    const allRates = movies.reduce(function(acc, movie) {
     return acc + movie.rate
   }, 0)
    if (movies.length === 0) {
           return 0;
       } else {
     return allRates/movies.length;
   }
   }
   
   console.log(ratesAverage(movies))
   
// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies){
  
    const allRates = movies.reduce(function(acc, movie) {

        if (movie.genre = 'drama') {}
     return acc + movie.rate
   }, 0)
    if (movies.length === 0) {
           return 0;
       } else {
     return allRates/movies.length;
   }
   }
   
   console.log(ratesAverage(movies))



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    const sortedByYear = movies.sort(function(a,b) {
      return a.year - b.year
    })
    return sortedByYear}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//ordering alphabetically ALL movies
function orderAlphabetically(array) { 
const sortedMovies = movies.sort(function(a, b) {
  var nameA = a.title.toUpperCase(); // ignore upper and lowercase
  var nameB = b.title.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1; //nameA comes first
  }
  if (nameA > nameB) {
    return 1; // nameB comes first
  }
  return 0;  // names must be equal
})
return sortedMovies}

function TwentyOutOfSorted(sortedMovies) {
  
    for (let i = 0; i < 20; i++) {
      TwentyOutOfSorted.push(sortedMovies[i])
    }
    return twentyTitles
  }
  
console.log(TwentyOutOfSorted(sortedMovies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
