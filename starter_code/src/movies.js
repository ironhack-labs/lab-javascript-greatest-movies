/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let copyArray = array.slice();
    return copyArray.sort(function(a, b) {
      if (a.year > b.year) {
        return 1;
      } else {
        return -1;
      }
    });
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
var howManyMovies =  movies.filter(function(dramamovie) {
	if (dramamovie.genre.includes ("Drama"))
  return dramamovie.director == "Steven Spielberg"
});

console.log(howManyMovies)
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let copyMovies = movies.slice()
    copyMovies.sort((a, b) => {
        if(a.title > b.title){
            return 1
        }else{
            return -1
        }
    });
    
     let titles = copyMovies.map(element =>{
         return element.title
     })
     return titles.slice(0,20)
}




// Iteration 4: All rates average - Get the average of all rates with 2 decimals
let rates = movies.map(element => {
    return element.rate
})

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let ratesAverage = rates.reduce(reducer)/rates.lengthc
console.log(ratesAverage.toFixed(2));
// Iteration 5: Drama movies - Get the average of Drama Movies
var howManyMovies =  movies.filter(function(dramamovie) {
	if (dramamovie.genre.includes ("Drama"))
  return true
});

let dramaRates = howManyMovies.map(element =>{
         return element.rate
     })
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let dramaRatesAverage = dramaRates.reduce(reducer)/dramaRates.length

console.log(dramaRatesAverage.toFixed(2))
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
let getMinutes = movies.map(element =>{
    let durationMinutes = parseInt(element.duration.substr((element.duration.search("min"))-2).slice(0,2),10)+(element.duration.slice(0,1) *60)
    element.duration = durationMinutes
  })
  
  console.log(movies)
// BONUS Iteration: Best yearly rate average - Best yearly rate average
