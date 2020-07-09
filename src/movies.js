// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let answer = movies.map(function(movie){
        return movie.director;
    })
    return answer;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getUniqueList(movies) {
    let list = [];
    for (let i = 0; i <movies.length; i++) {
        let director = movies[i].director;
        if (list.indexOf(director) < 0) {
            list.push(director);
        }
    }
    return list;
}

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
        if (movie.rate) {
            return acc + movie.rate;
        }
        else {
            return acc
        }
    }, 0)
    let average = sum / movies.length;
    return Number(average.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramas = movies.filter(function(movie) {
        return movie.genre.includes('Drama');
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

function orderByYear(movies) {
    let newMoviesArr = JSON.parse(JSON.stringify(movies));
    let yearSort = newMoviesArr.sort(function(a, b){
    if (a.year > b.year){
     return 1;
   }
   else if (a.year < b.year) {
       return -1;
    }
   else {
      if (a.title > b. title) {
          return 1;
      } 
      else if (a.title < b.title) {
          return -1;
      }
      else {
          return 0;
      }
    } 
    })
    return yearSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles 
// Something with .map?

function orderAlphabetically(movies) {
let alphaMovies = JSON.parse(JSON.stringify(movies));
    alphaMovies = alphaMovies.map( (movie) => {
        return movie.title;
    })

    alphaMovies.sort(function(a, b) {
    if (a > b){
     return 1;
   }
   else if (a < b) {
       return -1;
    }
   else {
      return 0;
    }
    })
    alphaMovies.splice(20); 
    return alphaMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// Logic: seperate hours and min (duration.split(" ")), delete the letters ((splice(n, n)), for hours: * 60, do hours + minutes, use .map to change array and insert new duration values.

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// Logic: sort per year. Calculate average per year. Looks for highest average.

