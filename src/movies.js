// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map((movieObj) => {
        return movieObj.director;
    });
    const noRepeat = directorsArr.filter(
        (directorName) =>
            directorsArr.indexOf(directorName) ===
            directorsArr.lastIndexOf(directorName)
    );
    return noRepeat;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const result = moviesArray.filter(function (movie) {
        return movie.genre.includes('Drama') &&
            movie.director === 'Steven Spielberg'
    });
    return result.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

if (moviesArray.length === 0){
    return 0
}
    const result = moviesArray.reduce(function (acc, curr) {
        if (typeof curr.score === 'number') {
            return acc + curr.score;
          } else return acc;
}, 0);
      const average = result / moviesArray.length
      return Number(average.toFixed(2))
   
 }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter(function (movie) {
        return movie.genre.includes('Drama');
      });
      if (dramaArray.length === 0){
        return 0
      }
      const sumOfDrama = dramaArray.reduce(function (acc, curr) {
        if (typeof curr.score === 'number') {
          return acc + curr.score;
        } else return acc;
      }, 0);
      const average2 = sumOfDrama / dramaArray.length
      return Number(average2.toFixed(2))
    }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copy = [...moviesArray];
    const result = copy.sort(function(a,b){
        if (a.year - b.year === 0){
            return a.title.localeCompare(b.title)
        } else return a.year - b.year
    })
    return result

 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
    copy2 = [...moviesArray]
    const sortedAbc = copy2.sort(function(a,b){
        return a.title.localeCompare(b.title)
    })
    const first20 = []
    sortedAbc.forEach(element => {
        first20.push(element.title)  
    });
    console.log(first20)
    return first20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
