// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const allDirectors = movies.map(item => item.director)
    return allDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    let spielbergFilms = movies.filter(
      films => films.director.includes("Steven Spielberg"))

    let dramaFilms = spielbergFilms.filter(
      films => films.genre.includes("Drama"))
    return dramaFilms.length
  }
  
  howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Q: how to access object inside array?
//NO NEED! use map to get all rates on new array!

const allRates = movies.map(item => item.rate)
console.log(allRates)
//Use reduce function to get sum of all rates
//create average by dividing sum / array.length

function ratesAverage(allRates) {
  
    const sum = allRates.reduce((totalRate, singleRate) => totalRate + singleRate)
    return +(sum / allRates.length).toFixed(2)
  
    console.log(sum)
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
//Same logic as iteration 3, but in the previous array shuould filter only drama movies
//Filter by drama, then create a new array of ratings, then average

function dramaMoviesRate(array) {
    const dramaArr = movies.filter(
      films => films.genre.includes("Drama")
    )  
    const dramaRates = dramaArr.map(films => films.rate)
    console.log(dramaRates)
    const sum = dramaRates.reduce((totalRate, singleRate) => totalRate + singleRate)
    return +(sum / dramaRates.length).toFixed(2)
  
    console.log(sum)
  }
  
  dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    return movies.sort(function (x, y) {
     return x.year - y.year;
   });
   }
   
   console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    let movieTitlesList = [...movies];
    let sortedMovies = movieTitlesList.sort((a,b) => {
      if (a.title > b.title) {
        return 1
      } else if (b.title > a.title){
        return -1
      } else{
        return 0
      }
    
    })
      console.log(sortedMovies)
  }
  
  orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
