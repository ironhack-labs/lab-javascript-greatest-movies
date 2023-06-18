// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const getDirectors = movies.map((movie, index) => {
   return movie.director
})  
     const uniqueArr = getDirectors.filter((movie, index) => {
    return getDirectors.indexOf(movie) === index;
  });
  
return uniqueArr;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spilbergMovies = moviesArray.filter((movie) => movie.director === 'Steven Spielberg')
    const dramaSpilbergMovies = spilbergMovies.filter((dramaMovies) => dramaMovies.genre.includes('Drama'))
    if (dramaSpilbergMovies.length === 0){
        return 0
    } else if (dramaSpilbergMovies.length === 2){
        return 2
    } 
    return dramaSpilbergMovies.length
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
   
    
    const moviesScoreSum = moviesArray.reduce(function (total, movie) {
        if (movie.score === undefined){
            return total
        } else {
            return total + movie.score
        }
    
    },0)
    const averageScore = moviesScoreSum / moviesArray.length;
    return Number(averageScore.toFixed(2))
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
    const dramaMovies = moviesArray.filter( (dramaMovies) => dramaMovies.genre.includes('Drama'))
    const dramaMoviesAverage = scoresAverage(dramaMovies)
    return dramaMoviesAverage
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYears = moviesArray.sort((firstElement, secondElement) => {
        if (firstElement.year === secondElement.year) {
            return firstElement.title.localeCompare(secondElement.title)
        } else {
            return firstElement.year - secondElement.year;
        }        
    })
    return moviesYears.map((movie) => movie)
}

console.log(orderByYear([{title: "d"}, {title: "g"}]))



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (moviesArray.length <= 20) {
        const sortedMovies = moviesArray.sort((firstElement, secondElement) => {
          return firstElement.title.localeCompare(secondElement.title);
        });
    
        return sortedMovies.map((movie) => movie.title);
      } else {
        const sortedMovies = moviesArray.sort((firstElement, secondElement) => {
          return firstElement.title.localeCompare(secondElement.title);
        });
    
        const filteredMovies = sortedMovies.slice(0, 20);
        return filteredMovies.map((movie) => movie.title);
      }
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
