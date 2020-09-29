// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
let moviesDirectors = movies.map((movie) => {movie.director
return movie.director;
})
console.log(moviesDirectors);
return moviesDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
 let Spilbergmovies =movies.filter(function(dramaMovies){
    return dramaMovies.director==="Steven Spielberg" && dramaMovies.genre.includes("Drama");
    })
    return Spilbergmovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
let avg = movies.reduce((rates,movie) => {
return rates + (movie.rate || 0)
 },0)
return (Math.round(avg/movies.length*100)/100 ||0);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(function (dramaMovie) {
        return dramaMovie.genre.includes("Drama");
    })
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    let newMoviesList = movies.map(movie => movie).sort((a,b)=>{ 
            if(a.year===b.year){
             if(a.title>b.title){
                 return 1;
             }
             if(a.title<b.title){
                 return -1
             }
            return 0;
            }else{
                return a.year-b.year
            }
         }
        )
        return newMoviesList;
     }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let newOrder = movies.map((movie)=> movie.title).sort((a,b)=>{
        if(a>b){
            return 1;
        }
        if(a<b){
            return -1
        }
       return 0;});
       if (Array.length>= 20){
           return newOrder.slice(0,20)
       }
           return newOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
