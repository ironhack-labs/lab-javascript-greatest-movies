// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(
        (movie) => movie.director == "Steven Spielberg"
      );
    
     return stevenMovies.filter(element => element.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0)  {
        return 0
    } 
  
  
    else {
  
       const arrayFilter = moviesArray.filter(element => element.score || 0)
       const scoreList = arrayFilter.map(element => element.score)
       let average = scoreList.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / scoreList.length
      return Number(average.toFixed(2))
    }


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const listfiltered = moviesArray.filter(element => element.genre.includes("Drama"))

    if (listfiltered.length == 0) {
        return 0
    } else {
        const scoreList = listfiltered.map(element => element.score)
        const sum = scoreList.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        let average = sum / scoreList.length
        average = average.toFixed(2)
        return Number.parseFloat(average)
    }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedByYearArray = [...moviesArray] 
    sortedByYearArray.sort((a, b) =>  
       a.year - b.year) 
       
    return sortedByYearArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray]

    newArray = newArray.map(element => element.title).sort()

    if (newArray.length > 20) {
        newArray = newArray.slice(0, 20)
    }

    return newArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = [...moviesArray]

    
    return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
