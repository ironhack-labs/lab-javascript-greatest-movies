// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(elm => {
      return elm.director
    })
    //soy dios:
    let i = 0
    const directorsArrayNoDuplicates = directorsArray.filter(elm2 => {
      i++ //hahahahhaa tarde un rato
      return directorsArray.indexOf(elm2) === i-1
    })

    return directorsArrayNoDuplicates
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, someDirector){
  const SteSpiDraMovies = moviesArray.filter(elm => {
  return (elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'))
  })
  return SteSpiDraMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
