// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const getDirectorsArr = moviesArray.map(movie => movie.director);
    return (getDirectorsArr)
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SpielbergDrama = moviesArray.filter( movies => movies.director === 'Steven Spielberg' && movies.genre.includes ("Drama"))
    return SpielbergDrama.length;
}
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const averageScore = moviesArray.reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);
    let averageDecimal = (averageScore / moviesArray.length);
    return (averageDecimal.toFixed(2) * 1);
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let onlyDramaArr = moviesArray.filter( movies => movies.genre.includes("Drama"));
    if (onlyDramaArr.length === 0){
      return 0
    }
    const sumDramaScore = onlyDramaArr.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0)
    /* console.log(sumDramaScore) */
    return (((sumDramaScore/onlyDramaArr.length).toFixed(2))* 1) 
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArray = [...moviesArray]
    copyArray.sort(function(a , b){
      if ( a.year != b.year ) {
        return a.year - b.year
      } else { 
        return a.title.localeCompare(b.title);
      }
    });
    return copyArray
  }





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyTitleArr = moviesArray.map(movie => movie.title)
    copyTitleArr.sort()
    if (copyTitleArr.length > 20) {
        return copyTitleArr.slice(0, 20)
    }   
    if (copyTitleArr.length <= 20){
        return copyTitleArr
    }    
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copyArray = [...moviesArray]
    copyArray.forEach(movie => {
        movie.duration = movie.duration / 60
    })
    return copyArray

}





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray){
    if (moviesArray.length === 0) {
      return null;
    }
}

