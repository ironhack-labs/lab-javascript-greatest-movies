// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    var directors = movies.map(function (movie) {return movie.director})
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    var steven = movies.filter(movie => (movie.director==="Steven Spielberg" && movie.genre.includes("Drama")))
    return steven.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    
    if (array.length === 0) {
        return 0
    } else {
        const avg = array.reduce((accumulator, promedio) => 
        { 
            if (promedio.rate){ 
                return accumulator + promedio.rate
            }else {return accumulator}
           }, 0)
    console.log(Number((avg / array.length).toFixed(2)))
        
    return Number((avg / array.length).toFixed(2))
    }

   
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let genreFilter = array.filter(movie => {return movie.genre.includes("Drama");})
    return ratesAverage(genreFilter);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const sorted = [...array].sort(function(a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
          }
          return a.year - b.year;
        });
        return sorted;
      }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    const sort = [...array].sort(function(a, b) {
         if (a.title < b.title) {
    return -1
        }
        else if (a.title > b.title){
            return 1;
        }
        else {
            return 0;
        }
    }).map(movie=>(movie.title)).slice(0, 20);
    return sort;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
