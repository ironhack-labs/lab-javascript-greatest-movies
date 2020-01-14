/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newArr = arr.slice(0);
    return newArr.sort(function(a, b) {
    	if (a.year > b.year) {
    		return 1;
     	}
    	else {
    		return -1;
     	}
    }); 
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (arr){
    let numSpielbergDramas = 0; 
    if(arr.director === 'Steven Spielberg' && arr.genre.includes('Drama'){
numSpielbergDramas = numSpielbergDramas +1;
return true;
}else{
   return false; 
}

}
let totalSpielbergDramas = movies.filter(howManyMovies);



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let newArr = arr.slice(0);
    let sorted = newArr.sort(function(a, b){
        if (a.title > b.title){
            return 1;
        }else{
            return -1;
        }
    })
    return sorted.map(function (films){
    return films.title}).slice(0, 20);
    }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
  if(arr.length === 0){
return 0;
  }
  let sum = arr.reduce(function(a, movieRate){
      return a + movieRate.rate;
  },0);
 return totalAvg =(sum / movies.length).toFixed(2);
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramaMovies = arr.filter(function(movie) {
      if (movie.genre.includes("Drama")) {
        return true;
      }
    });
    return ratesAverage(dramaMovies);
  }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
