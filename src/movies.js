// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((element) => {
        return element.director});
    return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return  moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    } 
    const total = moviesArray.reduce((acc, movie) =>{ 
        if (!movie.score){
            return acc
        }
        return acc + movie.score;
    },0) // this means that param1 = 0 which is accumulator and then we add first score to 0 and so on 
    return Number((total / moviesArray.length).toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
const dramaMovies = moviesArray.filter(movie=> movie.genre.includes('Drama'))

if(dramaMovies.length === 0){
    return 0 
}
    const total = dramaMovies.reduce((acc, movie) =>{ 
        if (!movie.score){
            return acc
        }
        return acc + movie.score;
    },0) // this means that param1 = 0 which is accumulator and then we add first score to 0 and so on 
    return Number((total / dramaMovies.length).toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
const orderArray = [...moviesArray]
orderArray.sort((a,b)=> {
    if(a.year > b.year){
        return 1;
    }else if(b.year > a.year){
    return -1;
    } else {
     if(a.title > b.title)
     { return 1} else if(b.title > a.title){
        return -1;
     }  
    }
})
return orderArray;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const orderArray = moviesArray.map((element)=> {
    return element.title});
    if(orderArray.length > 20){
        return orderArray.sort().slice(0,20)
    };
    return orderArray.sort();
    }





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const removeHArray = moviesArray.map((element)=>{
    return element.duration.split("h");
})



return orderArray;

}
//
// format of string '2h 33min' use .slice 
// 



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
