var { testmovies } = require("./data.js");


// Iteration 1: All directors? - Get the array of all directors.

//  function getAllDirectors (){
//     let directorslist = moviesList.map(getdirector(movie));

//  return directorslist;
//  }


// function getdirector(movie){
//     return movie.director;
// }


    function getAllDirectors (moviesList){ 
        const getdirector = moviesList.map(movie => { 
            return movie.director;
           
        });
        return getdirector;
    }
 

// _Bonus_: It seems some of the directors had directed multiple moviesList so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama moviesList did STEVEN SPIELBERG direct?

function howManyMovies(moviesList){

    let filmSteve = moviesList.filter(movie =>{
        return ( movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));       
        });
    if(filmSteve.length === 0){
        return 0;
    }      
        return filmSteve.length;
    }

        
    

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(moviesList) {
    if(moviesList.length===0){
        return 0;
    }
   let getAverage = moviesList.reduce(function (sum, value) {
        return sum + value.rate
        }, 0) / moviesList.length

    return Math.round(getAverage*100)/100;
}


// Iteration 4: Drama moviesList - Get the average of Drama Movies

function dramaMoviesRate(moviesList) {
   
    if(moviesList.genre.includes("Drama")){
        return 0;
    }
    if (moviesList.genre.includes("Drama")) {
    let getDramaAverage = moviesList.reduce(function (sum, value) {
            return sum + value.rate
            }, 0) / moviesList.length 
        return getDramaAverage
        
    }
}
    
     
        


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function compare(a, b) {
    let yearA = a.year
    let yearB = b.year
    let comparison = 0
    if (yearA > yearB) {
        comparison = 1
    } else if (yearA < yearB) {
        comparison = -1
    } else if (yearA = yearB) {
    } 
        return comparison;
}
function orderByYear (movies) {
    return movies.sort(compare)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let getOdered = movies.sort((a,b)=>{
    if (a < b) return -1; // a is less than b
    if (a > b) return 1; // a is greater than b
    if (a === b) return 0; 

});
return getOdered;
}

// function orderAlphabetically(moviesList){
    
//     const getTitleOrdered = moviesList.sort((a,b)=>{
 

// }) return getTitleOrdered;
// }

// BONUS - Iteration 7: Time Format - Turn duration of the moviesList from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average;ge F
