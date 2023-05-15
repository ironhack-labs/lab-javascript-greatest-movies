// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const onlyDirectors = moviesArray.map((element) => element.director);
    return onlyDirectors;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    let count = 0;
    moviesArray.filter((object) => {
     if(object.director === 'Steven Spielberg' && object.genre.includes('Drama')){
        count++; 
        }
    }); 
    return count;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
 if(moviesArray.length === 0){
      return 0;
}
 let sumScores =  moviesArray.reduce((acc, currentV) => { 
     if(!currentV.score){   
            currentV.score = 0;
    };  
        return acc + currentV.score}, 0);

        let result = sumScores / moviesArray.length
    return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let filteredMovies = moviesArray.filter((element) => {
        return element.genre.includes('Drama') && element.score;
    });

    if(filteredMovies.length === 0){
        return 0;
    } else {
        let dramaScore = 
            filteredMovies.reduce((acc, currentV) => {
                if(typeof currentV.score !== 'number'){
                    currentV.score = 0;
                    return acc + currentV.score;
                } else {
                return acc + currentV.score;
            }
        }, 0) /filteredMovies.length;
     return Math.round(dramaScore * 100) / 100;    
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
