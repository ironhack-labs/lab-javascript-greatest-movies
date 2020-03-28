/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    const moviesByYear = arr.slice().sort(function (a, b) {
        if(a.year == b.year){
          return a.title.localeCompare(b.title);
        } 
        return a.year - b.year;
    });
    return moviesByYear;
  }
  orderByYear(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    const numberOfDramaMovies = arr.filter(function(movie) {
        if(movie.genre.includes("Drama")) {
            return movie;
            
            //(movie.reduce(function(acc, val){
            //        return acc + val.length;
            //}, 0));
        }
    });
    const stevenMovies = numberOfDramaMovies.filter(function(movie) {
        if(movie.director === "Steven Spielberg") {
            return movie;
        }
    });
    console.log("numberOfDramaMovies", numberOfDramaMovies);
    console.log("stevenMovies", stevenMovies);
    return stevenMovies.length;

}
howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    function compare( a, b ) {
        if ( a.title < b.title )return -1;
        if ( a.title > b.title )return 1;
        return 0;
      }
  
    const alphabeticallyArray = arr.slice().sort(compare);
      
    const top20 = alphabeticallyArray.slice(0,20);
    
    let top20Title = [];
    
      for(let i = 0; i < top20.length; i++){
        top20Title.push(top20[i].title);
      }   
      return top20Title;
  }
  
  orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length === 0) return 0;


    const sumOfallRates = arr.reduce(function(acc, val){
        if(val.rate !== undefined){  // I thought this test: "Return average even 
            return acc + val.rate;   // if one of the movies does not have rate!" would be solved here.
        }    
    }, 0);
  
    const averageRate = sumOfallRates / arr.length;
    return parseFloat(averageRate.toFixed(2));

  }

  ratesAverage(movies);
  

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){

    const dramaMovies = arr.filter(function(movie) {
      if(movie.genre.includes("Drama")) return movie;
  });
    if(dramaMovies.length === 0) return 0;
    
    const sumOfRates = dramaMovies.reduce(function(acc, val){
      return acc + val.rate;
    }, 0);
  
    const averageRate = sumOfRates / dramaMovies.length;
      return parseFloat(averageRate.toFixed(2));
  }
  
  dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){  

    let newMoviesArray = arr.slice(); // here, arr is already returning an object, I don't understand why
  
    for(let i = 0; i < newMoviesArray.length; i++){
        const splittedDuration = newMoviesArray[i].duration.split(' ');
  
        let durationSum = 0;
        
        for(let j = 0; j < splittedDuration.length; j++){
          if(splittedDuration[j].indexOf('h') !== -1){
            durationSum += parseInt(splittedDuration[j]) * 60;
          } else if(splittedDuration[j].indexOf('min') !== -1){
            durationSum += parseInt(splittedDuration[j]);
          } 
        } 
    
        newMoviesArray[i].duration = durationSum;
        // console.log();
    }
    console.log(typeof(arr));
    return newMoviesArray;
    
  }
  
  const arr = turnHoursToMinutes(movies);
  
//  these tests failed:
//  Should return an array
//  Should return a new array, not update the original one
//  The duration of the movie should be a number
  


// BONUS Iteration: Best yearly rate average - Best yearly rate average
