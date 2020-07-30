// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
    const directors = moviesArray.map(films => `${films.director}`)
    return directors

}
    
 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const Spielberg = array.filter (movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return Spielberg.length 
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (array) => {
    if (array.length === 0) { return 0 }
    let sum = array.reduce((sum, {rate}) => {
      if (!rate) { rate = null }
      return sum + rate;
    }, 0)
    sum = sum / array.length
    sum = parseFloat(sum.toPrecision(3));
    return sum
  };
// Iteration 4: Drama movies - Get the average of Drama Movies
  
function dramaMoviesRate(movies){
    let dramaAverage = movies.filter(x => x.genre.includes("Drama"))    
    let avrg = dramaAverage.reduce(function(acc, currentValue){return acc + currentValue.rate / dramaAverage.length }, 0)
    return Number(avrg.toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderbyYear = arrayOfMovies => {
    const ArrayInOrder =  arrayOfMovies.slice().sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year- b.year;
    });
    return ArrayInOrder;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (films) {

    const newArray = [...films].map(function(film){
        return film.title
    })
    let sortedArray = newArray.sort();
    let returnedTitles = newArray.slice(0,20)
    return returnedTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
