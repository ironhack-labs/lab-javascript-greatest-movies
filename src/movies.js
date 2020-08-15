// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(moviesArr) {
  
    const directors = moviesArr.map(function(movie){
  
    return movie.director 
    })
return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//create function that gets all movies by Spielberg that are a drama

// this gets me all the Spielberg Movies:
function getAllSpielberg (moviesArr) {

    const spielbergmovie = moviesArr.map (function(movie){

        if (movie.director === 'Steven Spielberg')
        return movie.director = 1
      
      else 
      return movie.director = 0
    })
return spielbergmovie
}

// get all Drama: but this doesn't work because it only takes movies that are explicitly from the  Drama genre

function getAllDrama (moviesArr) {
    const allDrama = moviesArr.map (function(movie){
      if (movie.genre[''] === 'Drama')
        return  1
      else return 0
    })
    return allDrama
  }


//all the Spielberg Dramas

function howManyMovies(moviesArray)  {
    const DramaSpielberg = moviesArray.filter(function(movie){
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return DramaSpielberg.length
  };



//first Try down here, forgot the length 

function howManyMovies(moviesArray)  {
    const DramaSpielberg = moviesArray.filter(function(movie){
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return DramaSpielberg
  };
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// I need the sum of all rates and divide them by the amount of all rates

// I need to access all the rates
// I need to count the rates
// I need to divide the sum of all rates by the amount of rates

// accessing all the rates: (got an reference error telling me that element is not defined)

/*
function ratesAverage (someArr) {
    const rates = []
    someArr.forEach(element => console.log(element.rate))
    return element.rate
}
*/

function ratesAverage (someArr) {
    const rates = []
    someArr.forEach((el) => {
      if (el.rate){
        rates.push(el.rate)  
      }
    })
  const sum = rates.reduce(function (acc, val) {

     return acc + val / rates.length
 },0)
 return sum.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// I need to count all the Drama Movies and divide them by the amount of all drama movies
// I need to access all the Drama Movies and create a new variable that is a number (because I need a number)
// I need to count all the 


function dramaMoviesRate(someArr){
    const dramaamount = []
    someArr.forEach((el) => {
      if (el.genre.includes('Drama')){
        dramaamount.push(el.rate)  
      }
    })
  const sum = dramaamount.reduce(function (acc, val) {

     return acc + val / dramaamount.length
  
 },0)
 return sum.toFixed(2)
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//this returns an empty array because I don't know how to push something in the sorted varibale in the function here. 

function orderByYear (someArr) {
    const sortedArr = []
  function ascending(a, b) {
      if (a > b) {
          return 3;
      }
      if (a === b) {
          return 0;
      }
      if (a < b) {
          return - 3;
      }
  }
    return sortedArr
  }
  

// I need to check every year (iterating of the object in the array)
// I need to compare the first year with the one right to it, when the first one is greater i take it and put it right to the second one - I do this with every year until I am done



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(){

    items.sort( (a, b) => a.localeCompare(b)
}

// I need to make a cut after the 20th title
// I need to check every title (iterate over them)
// I take the first title and check for the letter. Then I compare this letter to the second title. When the first letter of the first title comes first in the alphabet the first title stays at it's place. Then I compare the first title with the third and do the same. i do this until every title got checked. 
// When two title have the same first letter, I have to check the second letter

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
