//eslint no-restricted-globals: 'off';

//Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies){
return parseFloat(((movies.reduce((ac, cu)=>ac+(+cu.rate),0))/movies.length).toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
let rateDrama = (movies.filter(movies=> movies.genre.includes("Drama")))
if(rateDrama==0){
return 0
}
return parseFloat(((rateDrama.reduce((ac,cu)=>ac+(cu.rate),0))/rateDrama.length).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
    return movies.sort((a, b) => (a.duration > b.duration) ? 1 : (a.duration === b.duration) ? ((a.duration > b.duration) ? 1 : -1) : -1);
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    let howManySteven=movies.filter(movies => movies.genre.includes("Drama") &&
    movies.director === "Steven Spielberg");
      return howManySteven.length;
    }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    const titleMovies = movies.map(function (movie){
        return movie.title;
    });
    titleMovies.sort().splice(20);
    return titleMovies;
 }S

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    let newMovies=[]
    let newMoviesCopy=[...newMovies, ...movies.duration]
    newMoviesCopy= newMovieCopy.map(newMoviesCopy.duration.split(' ').reduce((t, s) => t += (s.includes('h')) ? parseInt(s.replace(/h/g, '')) * 60 : parseInt(s.replace(/min/g, '')), 0))
         return newMoviesCopy

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
