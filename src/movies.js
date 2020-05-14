// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (moviesArr) {

    const allDirectors = moviesArr.map(movie => movie.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

    const noRepeatDirectors = allDirectors.filter((director, index) => allDirectors.indexOf(director) === index)

    return noRepeatDirectors

}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesArr) {

    if (moviesArr.length === 0) {
        return 0
    }
    
    const dramaSpielberg = moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))

    return dramaSpielberg.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (moviesArr) {

    if (moviesArr.length === 0) {
        return 0;
    }

    const averageRates = moviesArr.filter(theMovie => theMovie.rate).reduce ((acc, movie) => acc + movie.rate, 0) / moviesArr.length;

    return Number(averageRates.toFixed(2));  

}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (moviesArr) {

    
    const onlyDrama = moviesArr.filter(movie => movie.genre.includes('Drama'))

    const dramaRates = onlyDrama.map(movie => movie.rate)
    
    const averageDramaRates = dramaRates.reduce((acc, rate) => acc + rate, 0) / onlyDrama.length

    if (onlyDrama.length === 0) {
        return 0
    }

    return Number(averageDramaRates.toFixed(2))

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (moviesArr) {

    const newArr = moviesArr.map(movie => movie)
    
    const sortYearsTitle = newArr.sort((movie1, movie2) => {
  
      if (movie1.year > movie2.year) {
        return 1
      } 
      if (movie1.year < movie2.year) {
        return -1;
      } 
  
      if (movie1.year === movie2.year) {
  
        if (movie1.title > movie2.title) {
          return 1
        }
        if (movie1.title < movie2.title) {
          return -1
        }
  
      } 
  
    })
    
    return sortYearsTitle      
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (moviesArr) {
    
    const sortedArrTitle = moviesArr.map(movie => movie.title).sort()
  
    return sortedArrTitle.slice(0, 20)
  
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
