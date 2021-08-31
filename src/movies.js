// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  return movies.map(movie => movie.director);

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  

    //Create array with movies directed by Steven Spielberg
    const moviesByHim = movies.filter(movie => movie.director === "Steven Spielberg");
  
    //Create array with movies from him that belong to drama genre
    const dramaGenre = moviesByHim.filter(eachGenre => eachGenre.genre.includes('Drama'));

    //Return how many movies there are in that last new array
    return dramaGenre.length;
  }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  

   
   //Should return 0
    if(!movies.length){
        return 0;
  }else{

    //Look for the scores of each movie and sum them in the acc
    const totalScores = movies.reduce((acc, singleMovie) => {
                                                            if (typeof singleMovie.score === 'number'){   //Looking for movies only with score
                                                                return acc + singleMovie.score;
                                                             }else{                                       //No score then return accumulation
                                                                return acc;
                                                            }
                                                            }
                      ,0);                                                                                //Start currentValue to 0
    
   //Look for the average score
    const averageScore = totalScores / movies.length;
  //Round average
    let roundedAverage = parseFloat(averageScore.toFixed(2));                                             //.toFixed gives string so I used parseFloat

  //Return result
    return roundedAverage; 
  }
}
  
  

  
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
   
  //New array with movies that belong to drama genre
  const dramaGenreMovies = movies.filter(theGenre => theGenre.genre.includes('Drama'));
  //Call previous function                                                             
  return scoresAverage(dramaGenreMovies);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)      COMO UN OBJETO
function orderByYear(movies) {
  //Create array with years
  const yearArray = movies.map(movie => {
                                        return {
                                          title: movie.title,
                                          year: movie.year
                                        };  
                                        }
                              );

  //Sort array
  const sortedByYear = yearArray.sort((a, b) => b.year - a.year);   //Error was I was doing a - b to get the order from older to new, and when I wanted to order the titles it didn/t work
  const sortedByYearAndTitle = sortedByYear.sort().reverse();       // I used reverse here to reverse both
  return sortedByYearAndTitle;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

//New array with only the titles  
  const copyMovies = movies.map(movie => movie.title); 

//Order the new array alphabetically
  const sortCopyMovies = copyMovies.sort()

//Show only first 20 titles
  const twentyMovies = sortCopyMovies.slice(0, 20) 
  
  return twentyMovies


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let durationArray = movies.map(movie => movie.duration);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
