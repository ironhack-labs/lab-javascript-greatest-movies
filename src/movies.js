// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directores = moviesArray.map((movie) => {
      return movie.director;
    });
    return directores;
  }
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(moviesArray) {
    let moviesSpielberg = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return moviesSpielberg.length;
  }
  
  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(moviesArray) {
    if ( moviesArray.length === 0 )
    return 0
 
     
    let moviesScore = moviesArray.filter ( movie => "score" in movie )
     let sum = moviesScore.reduce( (sumMovies, movie ) => sumMovies + movie.score, 0) 
     let avrg = sum / moviesArray.length 
     return Number(avrg.toFixed(2))
  }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArray) {
    let dramaScore = moviesArray.filter ( movie => movie.genre.includes("Drama"))
      if ( dramaScore.length === 0)
        return 0;
    let sum = dramaScore.reduce ( ( sumMovies, movie ) => sumMovies + movie.score, 0 )
    let average = sum / dramaScore.length;
    return Number(average.toFixed(2))
  }
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesArray) {let newArray = moviesArray.slice();
    newArray.sort(function(movie1, movie2){
        let result = movie1.year - movie2.year
        if (result === 0){
            result = movie1.title.localeCompare(movie2.title);
        }
        return result;
    });
    
    return newArray;
}
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.slice();
    newArray.sort(function(movie1, movie2){
        return movie1.title.localeCompare(movie2.title)
    })

    let titles = newArray.map(movie => movie.title)
    let top20 = titles.slice(0, 20)
        return top20;
  }
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes(moviesArray) {}
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {}














