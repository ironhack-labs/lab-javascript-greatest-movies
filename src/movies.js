// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = moviesArray => {
    let directores = moviesArray.map(movie => {
        return movie.director
    })
    return directores
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    let dramonesDeSpielberg = moviesArray.filter((peli) => {
      return peli.director === 'Steven Spielberg' && peli.genre.includes('Drama');
    });
    return dramonesDeSpielberg.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (moviesArray) => {
    if(moviesArray.length === 0){
        return 0
      }
    const sumaRatings = moviesArray.reduce((acc, pelis)=> {
        if(pelis.rate) {return acc + pelis.rate
        } else {
            return acc}
    }, 0)
    const average = sumaRatings / moviesArray.length
    const aDecimales = Math.round(average*100)/100
    return aDecimales
}

// perdón por lo feo que está, mi cabeza no hacía click y sólo se me ocurrió esta forma 

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (moviesArray) => {
    let dramones = moviesArray.filter(peli => peli.genre.includes("Drama"));
    if (dramones.length === 0) {
        return 0;
    }
    return ratesAverage(dramones)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
