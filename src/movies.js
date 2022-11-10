// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const count = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return count.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0
    }
    else {
        const cleanArray = moviesArray.filter(movie => movie.score || movie.score>0)
        const sumScores = cleanArray.reduce((sum, movieScore) => sum + movieScore.score,0)  
        return Math.round((sumScores/moviesArray.length)*100)/100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    if (!moviesArray.length){
        return 0
    } 
    
    else {
        const subArray = moviesArray.filter(movie => movie.genre.includes('Drama') && (movie.score || movie.score>0))
        if(!subArray.length){
          return 0
        }
        else {
          const sumScores = subArray.reduce((sum, movieScore) => sum + movieScore.score,0) 
          return Math.round((sumScores/subArray.length)*100)/100
        }
         
    }


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesSorted = [...moviesArray]
    moviesSorted= moviesSorted.sort((movie1,movie2)=> {
      if(movie1.year>movie2.year){ return 1}
      if(movie1.year<movie2.year){return -1}
      if(movie1.title>movie2.title){return 1}
      if(movie1.title<movie2.title){return -1}
      
    } )
    return moviesSorted 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesSortedA = [...moviesArray]
    moviesSortedA = moviesSortedA.sort((a,b)=> a.title.localeCompare(b.title))
    moviesSortedA.splice(20, moviesSortedA.length)
    moviesSortedA = moviesSortedA.map(movie => movie.title)
  return moviesSortedA

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { 
    let newMovieArray = moviesArray.slice()
    newMovieArray = newMovieArray.map(function(movie) {
      
       let indexHour= movie.duration.indexOf('h') 
       let hour = Number(movie.duration.slice(0,indexHour))  
      
        if(movie.duration.includes('min')){ 
            let indexMin= movie.duration.indexOf('min')  
            let min = Number (movie.duration.slice(indexHour+2,indexMin)) 
            movie.duration = (hour*60)+min 
        } 
      else { movie.duration = (hour*60)  }
      return movie
    })
    return newMovieArray
 }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
