// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    let directors = array.map((movies) => {
    return movies.director
    })
 return directors
}
getAllDirectors(movies)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let dramaMoviesSpielberg = array.filter((movies) =>{
         return (movies.director === "Steven Spielberg") && (movies.genre.includes("Drama"))       
    })
    return dramaMoviesSpielberg.length
}

howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let allRates = array.reduce((acc, elem) => {
        return acc + elem.rate
      },0)
                                
      let avgRates = allRates/array.length
      return avgRates.toFixed(2)
}
console.log(ratesAverage)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let allAvgDramaRates = array.reduce((acc, elem) => {
        if (movies.genre.includes("Drama")){
        return acc + elem.rate
    } else {return acc}
      },0)

    let numberOfDramas = array.reduce((acc, elem) => {
        if (movies.genre.includes("Drama")){
        return acc + 1
    } else {return acc+0}
      },0)

      let avgDramaRates = allAvgDramaRates/numberOfDramas
      return vgDramaRates.toFixed(2)
                                
}

dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newMovies = JSON.parse(JSON.stringify(movies))
    let sortedArray= newMovies.sort((a, b) => { 
        if (a.year > b.year) {
            return 1;
          }
         else if (a.year < b.year) {
           return -1;
         }
         else {
          if (a.title > b.title) {
            return -1;
          }
         else if (a.title < b.title) {
           return 1;
         }
         else {
           return 0
         }
         }
         })

       return sortedArray

}
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array)  {
    let newMovies = JSON.parse(JSON.stringify(movies))
    let sortedAlphabetically= newMovies.sort((a, b) => { 
        if (a.title > b.title) {
            return 1;
          }
         else if (a.title < b.title) {
           return -1;
         }
         else {
           return 0
         }
         }
         )
         return sortedAlphabetically.splice(0,20)
}

orderAlphabetically(movies)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
