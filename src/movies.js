// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let moviesCopyArray = [...moviesArray];
    const directorsArray = moviesCopyArray.map(movie => movie.director);
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filterArrayCopy = [...moviesArray];
    const movieDramaArray = filterArrayCopy.filter(movieDrama => ((movieDrama.director === 'Steven Spielberg') && (movieDrama.genre.includes('Drama'))))
    return movieDramaArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoreArrayCopy = [...moviesArray];
    if(scoreArrayCopy.length === 0){
        return 0;
    }
    const avgScore = scoreArrayCopy.reduce(function(accumulator,currentValue){
      if((currentValue.score === undefined)||(currentValue.score === null)){
        return accumulator;
      }
    return accumulator + currentValue.score} ,0)
    let movieAvgScore =  avgScore/scoreArrayCopy.length;
    return Math.round(movieAvgScore*100)/100;   
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovieArrayCopy = [...moviesArray];
    const dramaMovieArr = dramaMovieArrayCopy
        .filter(dramaMovie => dramaMovie.genre.includes("Drama"));
    const dramaScore = dramaMovieArr.reduce(function(accumulator,currentValue){
        if((currentValue.score === undefined)||(currentValue.score === null)){
            return accumulator;
        }
    return accumulator + currentValue.score} ,0)
    if(dramaMovieArr.length > 0 ){
        let dramaMovieScoreAvg =  dramaScore/dramaMovieArr.length;
        return Math.round(dramaMovieScoreAvg*100)/100;
    }else{
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesOrderByYearCopy = [...moviesArray];
    moviesOrderByYearCopy.sort(function(a,b){
        if(a.year ===  b.year){
          if(a.title < b.title){
            return -1;
          }
    
        }else{
          return a.year - b.year;
        }   
    
    })
    return moviesOrderByYearCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderCopy = [...moviesArray];
    orderCopy.sort(function(a,b){
        return a.title < b.title ? -1 : 1;
    })
    let titleArray =[];
    orderCopy.forEach(function(element){
        titleArray.push(element.title);

    })
    if((titleArray.length > 0) && (titleArray.length <= 20)){
        return titleArray
      }else{
        return titleArray.slice(0,21)
      }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
