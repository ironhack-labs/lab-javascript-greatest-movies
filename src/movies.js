


// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    let directors = movies.map(function(movie){
        return movie.director
        })
        return directors
    }
    
  getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(array){
    let spilberg = movies.filter(function(movie){
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
        return true
        })
      return spilberg
     } 

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    let sum = movies.reduce(function(acc, val){
    return acc + val.rate
    }, 0)
    let average = sum / array.length
    return average.toFixed(2)
    }
ratesAverage(movies);
    

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaAverage(array){
    let drama = movies.filter(function(movie){
    if (movie.genre.includes("Drama")){
    return true
    } 
    })
  return ratesAverage(drama)
   }
dramaAverage(movies);



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const sorted = movies.slice().sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sorted;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const ordered = movies.map(function (movie) {
        return movie.title
    }).sort(function (a, b) {
        return a.localeCompare(b);
    }).slice(0, 20);

    return ordered;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
