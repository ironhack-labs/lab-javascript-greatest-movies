// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    let directors = array.map( elm => elm.director)
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){

  const numberDramas = array.map(elm => {
      array.filter( elm => elm.director.toLowerCase() === 'steven spielberg' && elm.genre.includes( 'Drama')
      )})
      return numberDramas.lenght
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){

    if (array= []){
        return 0
    } else{
        let rating= array.map(elm => elm.rate)
        let sumRating = rating.reduce((acc, elm) => {
        return acc + elm
        },0)
    return (sumRating.toFixed (2) /rating.lenght)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let dramas = array.filter(elm => elm.genre.includes('Drama'))
    return ratesAverage(dramas)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    const moviesbyyear = (array) => {
        return array.sort(function(a, b){
          return a.year - b.year;
        });
      }
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const moviesbyabc = (array) => {
        array.sort(function(a, b){
          return a.title - b.title;
        });
    }
      
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
