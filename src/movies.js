// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    return array.map(movie=>movie.director);
}

getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    let spielDramaList = array.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return spielDramaList.length
  }

  howManyMovies(movies)
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (array){

    if(!array.length){
    return 0 }

let sum = array.reduce(function(accumulator, movie){
  if (movie.rate){
return accumulator + movie.rate }
else{
  return acc; 
}}, 0)

return Math.round((sum/array.length)*100)/100

}

ratesAverage(movies)
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

    let dramaList = array.filter(movie => movie.genre.includes("Drama"))
    return ratesAverage(dramaList)
    }
    
    dramaMoviesRate(movies)
    
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){

    let orderList = array.sort(function(a,b){ 
   
     return a.year - b.year;
   })
   return orderList
   }
   
   orderByYear(movies)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let titleList = array.map(function(movie){
    return movie.title
    })
    
    let alphaList = titleList.sort(function(a,b){
      if(a < b){
        return -1;
      }
       else if(a > b){
        return 1;
      }
      else{
        return 0;
      }
    })
    return alphaList.slice(0,20)
    }
    
    
    
    
    orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
