// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    count = 0;
   moviesArray.forEach(movie => {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
       count++
     }
   })
  return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const scoreSum = moviesArray.reduce((sum, movie) => {
        if (movie.score) return sum + movie.score
        return sum    
      },0)
      return Number((scoreSum/moviesArray.length).toFixed(2))
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes("Drama")
      })

      if(dramaMovies.length === 0) return 0
  
     const dramaScores = dramaMovies.reduce((sum, movie) => {
       return  sum + movie.score
     },0)

     return Number((dramaScores/ dramaMovies.length).toFixed(2))
     
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray]
    let sorted = newArray.sort( (a,b) => {
        if (a.year === b.year) return  a.title.localeCompare(b.title)
        return a.year - b.year
      })
      return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = [...moviesArray]
     let sortedByTitle = newArray.sort((a,b) => {
        return  a.title.localeCompare(b.title)
    }).map(movie => {return movie.title})

    return sortedByTitle.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = [...moviesArray]
    newArray.forEach(movie => {
      let timeSplit = movie.duration.split(" ")
      console.log(timeSplit)
      if (timeSplit.length === 1){
        movie.duration = parseInt(timeSplit[0] + timeSplit[1])
      }
      else {
        movie.duration = (parseInt(timeSplit[1][0]) * 60) + parseInt((timeSplit[1][0] + timeSplit[1][1]))
      }
    })
    return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
