// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrat){
    let directorMovies = movies.map((a) =>{
        return a.director;
    });
     return directorMovies
};

    

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let spilbergMovies =movies.filter(function(drama){
       return drama.director==="Steven Spielberg" && drama.genre.includes("Drama");
       })
       return spilbergMovies.length;
   }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(function (dramas) {
        return dramas.genre.includes("Drama");
    })
    return dramaMovies;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
orderByYear = (movies) => {
    let newMovies = movies.map(movie => movie).sort((a,b)=>
    {
    if(a.year === b.year){
    if (a.title > b.title) {
    return 1;
    }
    if (a.title < b.title) {
    return -1;
    }
    return 0;
    }else{
     return a.year - b.year
         }
     }
)
    return newMovies
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let newList = movies.map((movie)=> movie.title).sort((a,b)=>{
        if(a>b){
            return 1;
        }
        if(a<b){
            return -1
        }
       return 0;});
       if (Array.length>= 20){
           return newList.slice(0,20)
       }
           return newList;
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
