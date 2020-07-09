// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let answer = movies.map(function(movie){
        return movie.director;
    })
    return answer;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let drama;
      let spiel = movies.filter(function(movie) {
          for (let i = 0; i < movie.genre.length; i++) {
              drama = movie.genre[i] === "Drama" && movie.director === "Steven Spielberg";
            if (drama) {
                break;
            }        
      } 
      return drama;
    })
    return spiel.length;
 }
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    } 
    let sum = movies.reduce(function(acc, movie) {
        return acc + movie.rate;
    }, 0)
    let average = sum / movies.length;
    return Number(average.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramas;

    dramas = movies.filter(function(movie) {
        for (let i = 0; i < movie.genre.length; i++) {
            
          if (movie.genre[i] === "Drama") {
              dramas += movie;
          } 
        }
          return dramas;
        })

    if (dramas.length === 0) {
        return 0;
    } else {
    let sumDrama = dramas.reduce(function(acc, dramas) {
        return acc + dramas.rate;
        }, 0)
    
    let dramaAvg = sumDrama / dramas.length;
    return Number(dramaAvg.toFixed(2));
}}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let newMovies = JSON.parse(JSON.stringify(movies));
function orderByYear(newMovies) {
    let yearSort = newMovies.sort(function(num1, num2){
    if (num1.year > num2.year){
     return 1;
   }
   else if (num1.year < num2.year) {
       return -1;
    }
   else {
      return 0;
    }
    })
    return yearSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let alphaMovies = JSON.parse(JSON.stringify(movies));
function orderAlphabetically(alphaMovies) {
    alphaMovies.sort(function(a, b){
    if (a.title > b.title){
     return 1;
   }
   else if (a.title < b.title) {
       return -1;
    }
   else {
      return 0;
    }
    })
    if (alphaMovies.length > 20) {
        alphaMovies.splice(20); 
    }
    return alphaMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
