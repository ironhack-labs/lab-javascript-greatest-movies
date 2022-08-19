// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies.map((movie) => {
        return movie.director; 
    });
    return directors;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
     //console.log(movies);
    const stevenMovies = movies.filter((movie) => (movie.director == "Steven Spielberg" && movie.genre.includes("Drama")));
    //console.log(stevenMovies);
    return stevenMovies.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length == 0) {
        return 0;
    }
   
    const suma = movies.reduce((sum, movies) => {
        if (typeof movies.score === "number") {
            return sum + movies.score;
        } else{
            return sum;
        }
        
    }, 0);
    let avg = suma/movies.length;

    return Number(avg.toFixed(2));
    
}
//[{ genre: ['Drama'], score: 8 }]

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length == 1){
    return moviesArray[0].score
    }
    let count = 0;
   let scoreTotal = moviesArray.reduce((sum, movie) =>{
     if(movie.genre.includes("Drama")){
        count += 1
        return sum += movie.score
     }
     return sum
   },0);
   if (scoreTotal == 0){
    return 0
   }
   let avg = scoreTotal/count
   console.log(avg)
   return Number(avg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const newArray = [...movies];
    newArray.sort((a, b) => {
        if (a.year < b.year){
            return -1
        }else if((a.year == b.year ) && (a.title.toLowerCase() < b.title.toLowerCase())){
        return -1
        }
    //return a.year - b.year
    } );
    //console.log(newArray);

    return newArray;
    
    
   
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = moviesArray.map((movie) =>{
        return movie.title
        console.log(movie.title);
    })
    newArray.sort((a,b) => {
        if (a < b){
            return -1
        }
    })
    if( newArray.length > 20){
       let twentyMovies = newArray.slice(0,20);

        return twentyMovies
    }
  


    //console.log(newArray.length)
    return newArray
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
