// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) =>{
    let directors = movies.map((elemento) =>{
        return elemento.director;
    })
    
    return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies){
    const dramaSs = movies.filter((movie) =>
    movies.director === "Steven Spierlberg" && movie.genre.includes("Drama")
    );
    return dramaSs.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
   const ratings = movies.reduce((sum, e) => {
       if (e.rate){
           return sum += e.rate;
       }else {
           return sum += 0;
       }
   },0);

   if (ratings===0){
       return 0;
   }
   const ratesAverage = ratings/movies.length;
   return Number(ratesAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const dramas = movies.filter((movie) => movie.genre.includes("Drama"));

    const average = ratesAverage(dramas);
    return average;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {
    let result = movies.slice().sort((a,b) =>{

    
        if (a.year < b.year) return -1; 
        if (a.year > b.year) return 1; 
        if (a.year === b.year) {
                if (a.title < b.title) return -1; 
                if (a.title > b.title) return 1; 
                if (a.title === b.title) return 0;
        }
    } 
)
return result
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let result = [];
    for (let movie of movies){
        result.push(movie.title);
    }
result = result.sort().slice(0, 20);
return result;
}
   
    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
