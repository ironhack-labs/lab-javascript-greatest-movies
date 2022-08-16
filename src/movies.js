// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(movie =>{
        return movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return stevenMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoreSum = moviesArray.reduce((sum, value)=>sum + value.score, 0)
    let movieAv = (scoreSum/moviesArray.length).toFixed(2);
    if(moviesArray.length == 0){
        return 0;
    }else {
        return +movieAv;
    }
    
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie =>movie.genre.includes("Drama"))
    const dramaScoreSum = dramaMovies.reduce((sum, value)=>sum + value.score, 0)
    let dramaScoreAv = (dramaScoreSum/ dramaMovies.length);
    if(dramaMovies.length == 0){
        return 0;
    }else {
        return +dramaScoreAv.toFixed(2);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr= [].concat(moviesArray)
    const newOrder= newArr.sort((a,b)=>{
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        }else {
           return 0; 
        }
        
    });
    return newOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newtitleOrder= moviesArray.sort((a,b)=>{
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }else {
            return 0;
        }
          
    });
    let newArr= newtitleOrder.slice(0,20);
    let titleArr = newArr.map((value)=> value.title)
   
    return titleArr;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArr= [].concat(moviesArray);

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
