// Iteration 1: All directors? - Get the array of all directors.

/* const allMovieDirections = movies.map(getAllDirectors => items.director)
console.log(getAllDirectors);
 */



 /*    function getAllDirectors(items) {
        let allDirectors = movies.map(items => items.director);
        return getAllDirectors;
    } 
 */

    function getAllDirectors(movies) {
        const allDirectors = movies.map(item => item.director)
        return allDirectors
    }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

    /* const howManyMovies = (movies) => {
        let filmographySpielberg = movies.filter(
            films => films.director.includes('Steven Spielberg'));
        let dramaSpielberg = filmographySpielberg.filter(
            films => films.genre.includes('Drama')
        )
        return dramaSpielberg.length
    } */
  


    function howManyMovies(movies) {
        return movies.filter(i => i.genre.includes("Drama") && i.director === "Steven Spielberg").length;
    } 

    howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

    function ratesAverage(allRates) {
        const sum = allRate.reduce((totalRate, singleRate) => totalRate + singleRate)
        return (sum / allRate.length).toFixed(2)
        console.log(sum)
    }
    ratesAverage(allRates)

// Iteration 4: Drama movies - Get the average of Drama Movies

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
    let moviesList = [...movies];
    let sortedTitleList = moviesList.sort((a, b) => {
      if (a.title > b.title) {
        return 1
      } else if (b.title > a.title) {
        return -1
      } else {
        return 0
      }
    let moviesTitleList = movies.map(
      items => items.title)
    })
    console.log(moviesTitleList)
  }
  
  orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
