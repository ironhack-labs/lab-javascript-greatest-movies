// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = movies.map(movies => movies.director);
  return directors;  
}

function getAllDirectors(moviesArray){
    
    const directors = movies.map(movies => ({director :movies.director}));
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length ===0){
        return 0;
    }
    const SpielbergMovies = moviesArray.filter(movies => movies.director ==='Steven Spielberg');

    if (SpielbergMovies.length === 0){
        return 0;
    }
    const SpielbergDramaMovies = SpielbergMovies.filter(movies =>
        movies.genre.includes('Drama')
        );

    return SpielbergDramaMovies.length;
}

   

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let sumScore = 0;
    let countMovies = 0;

    moviesArray.forEach(movies => {
        if (movies.scoresAverage !== undefined){
            sumScore += movies.score;
            countMovies++;
        }    
    });

    if (countMovies === 0){
        return 0;
    }
    const scoresAverage = sumScore / countMovies;
    return Number(scoresAverageDrama.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    if(moviesArray.length ===0){
        return 0;
    }
    let sumScore = 0;
    let countMovies = 0;

          
    moviesArray.forEach(movies => {
        if (movies.genre.includes('Drama')){
            sumScore += movies.score;
            countMovies++;
        }    
    });

    if (countMovies === 0){
        return 0;
    }
   const scoresAverageDrama = sumScore / countMovies;
    return Number(scoresAverageDrama.toFixed (2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    if(moviesArray.length ===0){
        return [];
    }
    
    const sortedArray= moviesArray.slice().sort((a,b) => a.year -b.year); 
    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    if(moviesArray.length ===0){
        return [];
    }
    
    //const titleOrder= moviesArray.slice().sort((a,b) => a.title.localCompare(b.title)).slice(0,20); 
    const titleOrder= moviesArray.slice().map(movies => movies.title).sort((a,b)=> a.localCompare(b));
    
    return titleOrder.slice(0,20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
