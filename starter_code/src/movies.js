/* eslint no-restricted-globals: 'off' */
// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    
let avg = (movies.reduce((total, movie) => total += parseFloat(movie.rate || 0), 0) / movies.length)
avg = avg.toFixed(2)
return parseFloat(avg)
}


    //   let rateAvg = 0;
//   for (let i = 0; i < movies.length; i++) {
//     rateAvg +=  parseFloat(movies[i].rate);
//   }
//   return rateAvg / movies.length;
// }
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(movie => {
        // Any movie whose genre property includes "Drama"
       return movie.genre.includes('Drama')
    }) 
    let rates = ratesAverage(dramaMovies) 
    // (if dramaMovies is empty), return 0, otherwise return our computed average
    if ( dramaMovies.length){
        return rates 
    } else {
        return 0
    }
    } 

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    return moviesArr.sort((m1, m2) => m1.title.localeCompare(m2.title)).slice(0, 20).filter(e => e).map(e => e.title)
}
     



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
