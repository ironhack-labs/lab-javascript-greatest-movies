// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const arrayOfDirectors = movies.map((movie) => movie.director);
  return arrayOfDirectors;
}

//reduce??? 1.1

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const SpielbergDrama = movies.filter(
    (movie) =>movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return SpielbergDrama.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

//Works on CodePen : including "should return average even if one of the movies does not have score"

function scoresAverage(movies) {
 
      const listMoviesWithScore = movies.filter(movie => movie.score);
      const totalScores = listMoviesWithScore.reduce(function (acc, review) {
         return acc + review.score;
      },0);
    

    // included this line to try to fix the last objective, it didn't work :(
    if (listMoviesWithScore.length === 0){
        return avgScoreRound = 0
    };
    
    if (totalScores===0 || totalScores==='NaN' || totalScores===undefined){
      return avgScoreRound = 0;
    };
    
    if (totalScores!==0) {
    
      let avgScore = totalScores/listMoviesWithScore.length;
      let avgScoreRound = +avgScore.toFixed(2);
        return avgScoreRound;
    };
  
};


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    const dramaScoreTotal = dramaMovies.reduce(function (acc, review) {
        return acc + review.score;
    },0);

    if (dramaMovies.length === 0){
        return avgDramaScoreRound = 0
    }

    if (dramaMovies.length !== 0){
    const avgDramaScore = dramaScoreTotal / dramaMovies.length;
        const avgDramaScoreRound = +avgDramaScore.toFixed(2);
        return avgDramaScoreRound;
    }
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  function orderByYear(movies) {

    const cloneMovies = Array.from(movies);

    for (let i=0; i<cloneMovies.length; i++){
      
        if (cloneMovies[i].year !==cloneMovies[i++].year){
            const sortedYear = cloneMovies.sort((movie1, movie2) => movie2.year - movie1.year);
            return sortedYear;
        };
        if (cloneMovies[i].year === cloneMovies[i++].year){
            let sameyear= cloneMovies.sort((movie1, movie2) => movie1.title - movie2.title);
            return sameyear.reverse();
        };

    };
    
    return orderByYear;
  }
   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const cloneMovies = Array.from(movies);
  
    const sortedAlphabetically = cloneMovies.sort((movie1, movie2) => movie2.title - movie1.title);
  
    const arrayTitleMovies = sortedAlphabetically.map((movie) => movie.title);
  
    const twentyArrayMovies = arrayTitleMovies.slice (0,19);
 
  
    return twentyArrayMovies
  
  
    //slice 20 primeiros
    //tirar apenas o titulo para return

    //se mais que 20 titulos returnar apenas 20.
    //se menos que 20 titulos passamos para o array, mostrar todos os titulos que ha

}
   

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {

    const cloneMovies = Array.from(movies);

    const hoursArray = cloneMovies.map(function (hours.duration) {
        return hours
    })

    return cloneMovies

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}
