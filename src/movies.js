// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    const directors = array.map(element => element.director)
    return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    const bySpielberg = array.filter(movie => movie.director === "Steven Spielberg")
    const bySpielbergDrama = bySpielberg.filter(movie => movie.genre.includes("Drama"))
    return bySpielbergDrama.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
    let moviesArrayWRate = moviesArray.map((movie) => {
      if (typeof movie.rate !== "number") {
        movie.rate = 0;
        return movie;
      } else {
        return movie;
      }
    });
    if (moviesArrayWRate.length === 0) {
      return 0;
    }
    let sum = moviesArrayWRate.reduce((acc, cValue) => {
      return acc + cValue.rate;
    }, 0);
    return Number((sum / moviesArrayWRate.length).toPrecision(3));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let moviesArrayWRate = array.map((movie) => {
        if (typeof movie.rate !== "number") {
            movie.rate = 0;
            return movie;
        } else {
            return movie;
        }
    });
    let dramaMoviesWRate = moviesArrayWRate.filter(movie => movie.genre.includes("Drama"))
    dramaMoviesWRate.reduce((sum, movie)=>{
        return sum += movie.rate;
    },0)
    return Number((dramaMoviesWRate/moviesArrayWRate.length).toPrecision(3));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
