// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie) {
        return movie.director;

    })
  }
   function getAllDirectorsUnique(moviesArray)
  return getAllDirectors(moviesArray)
  .filter(function(director,i,sourceArray) { 
        return sourceArray.[i](director) === ;i

    })
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 const steavenMovies = moviesArray.filter(function(movie){
     return  movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })

    return steavenMovies.length





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.lenght === 0) return

    const totalScore = moviesArray.reduce(function(acc,val) {
      if(!val.score) return acc
      return acc + val.score

    },0
   
    return  Number((totalScore / moviesArray.lenght)toFixed)(2))
  }




// Iteration 4: Drama movies - Get the average of Drama Movies

 function dramaMoviesRate(moviesArr) {
        const dramaMoviesScore = moviesArr.filter(function (movie) {
          return movie.genre.includes("Drama");
        });
      
        return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
return moviesArray.slice(
  .sort(function(a,b) {
    // if(a.year === b.year) {
      // returna.title.localeCompare(b.title)
      // }

      //return a.year - b.year
      return a.year - b.year || a.title.localeCompare(b.title)
    })
  }


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
return moviesArray
.map(fuction(movie) {
  return movie.title

})
.sort()
.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
