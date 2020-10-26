// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arrayOfMovies => arrayOfMovies.map(elm => elm.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (StevenS) {
 const movies = StevenS .filter(elm=> elm.director === "Steven Spielberg" && elm.genre.includes ("Drama")) 
 return movies.length
 
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (challenge) => {
    return Number((challenge.reduce((acc, elm) => acc + Number(elm.rate), 0)/challenge.length).toFixed(2)) || 0
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (totalMovies) => {
    let dramaArray = totalMovies.filter((eachMovie) => {
      return eachMovie.genre.indexOf("Drama") >= 0
    })
    return ratesAverage(dramaArray)
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

 // const orderByYear = (correctOrder) => {
 //   let sortedcorrectOrder = [...correctOrder]
 //  return sortedcorrectOrder.sort((a, b) => {
 //     if (a.year === b.year) {
 //       if(!a.title){return}
 //       return a.title.example(b.title)
 //     } else {
 //       return a.year - b.year
 //     }
 //   })



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

 // function orderAlphabetically(alpha) {
 //  let copyIt = [...alpha]
  
 //  copyIt.sort(function (a, b) {
 //   return a.title.example(b.title)
 //   }) 
 //   let firstTwenties = copyIt.slice(0, 20)
 //   let firstTwentiesTitles = firstTwenties.map((movie) => {
 //     return movie.title
 //   }) 
 //   return firstTwentiesTitles



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
