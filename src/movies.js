// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let movieDirectors = arr.map(function(name){
  return name.director
    })
 return movieDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(reducedArray) {
    let spielbergDrama = reducedArray.reduce(function(acc, val){
        if (val.director === 'Steven Spielberg'){
          return acc + val.director;
        } else {
          return acc
        }
      }, 0)
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if(arr.length === 0) {
    return 0
  }
  let sumOfrates = arr.reduce(function(sum, val){
    return sum + val.rate
  }, 0)
  let average = sumOfrates / arr.length;
     let roundedAvg = average.toFixed(2);
     let avgNumbers = Number(roundedAvg);
  return avgNumbers
}

ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaMovies = array.filter(function (movie){
     if (movie['genre'].includes('Drama')) {
       return true
     }
  }).reduce(function(sum, drama){
    return sum + drama.rate
  }, 0)
  let average = dramaMovies / array.length;
   let roundedAvg = average.toFixed(2);
    let avgNumbers = Number(roundedAvg);
  return avgNumbers
}
 
dramaMoviesRate(movies) 
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let moviesByYear = movies.slice();

function orderByYear(arr) {
  let orderedMovies = arr.sort(function(a, b) {
       return a.year - b.year
  }).sort(function(movie1, movie2){
     return movie1.title - movie2.title
  })
  return orderedMovies
}

orderByYear(moviesByYear)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let moviesByLetter= movies.slice(0, 21);

function orderAlphabetically(arr) {
     let orderedMovies =[];
   for (let i=0; i<arr.length; i++){
   // let orderAlphabeth = 'A'
    let title = arr[i]['title']
    let orderedTitles = title.split(' ').sort(function(title1, title2){
      return title1 - title2
    }).join();
  }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
