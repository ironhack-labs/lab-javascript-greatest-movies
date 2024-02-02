// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    let Directors= moviesArray.map(movie=>movie.director)
    
    return Directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg'))

    return dramaMovies.length; 
   
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    return moviesArray.length === 0 ? 0 : parseFloat((
            moviesArray
        .filter(movie => movie.score !== undefined)
        .reduce((acc, movie) => acc+movie.score, 0)
             / moviesArray.length).toFixed(2))
     
    
    
    // if (moviesArray.length === 0) {
    //     return 0;
    //   }
    // else{
    //     const totalScores = moviesArray
    //     .filter(movie => movie.score !== undefined)
    //     .reduce((acc, movie) => acc+movie.score, 0);
    //     return parseFloat((totalScores / moviesArray.length).toFixed(2));
    // }      

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    else{
        const totalScores = moviesArray
        .filter(movie => movie.score !== undefined && movie.genre.includes('Drama') )
        .reduce((acc, movie) => acc+movie.score, 0);
        let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
        if(dramaMovies.length>0){
            return parseFloat((totalScores / dramaMovies.length).toFixed(2));
        }
        else return 0;
        
    }      
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray]
    .sort((a, b)=>{
    if (a.year !== b.year){
        return a.year - b.year;
    } else {
    // return a.title - b.title;
    return a.title[0].localeCompare(b.title[0]);
    }
});
return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      }).slice(0, 20).map(function(movie) {
        return movie.title;
      });
    

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {


  const selectMovies = moviesArray.filter((item) => {
    return item.duration.match(/\d[h] \d\d[m][i][n]$/);
  });
  
  const convertToMinutes = (timeStr) => {
    let time = timeStr.split(" ")
    let hours = parseInt(time[0], 10);
    let mins = parseInt(time[1], 10);
    return hours * 60 + mins;
  }
  
  return filmsWithNewDurations = selectMovies.map(film => ({
    ...film,
    duration: convertToMinutes(film.duration)
  }));
  
}      
    


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

  if(moviesArray.length>0){

    const yearlyAverages = new Map();

    moviesArray.forEach(entry => {
    const { year, score } = entry;
    if (!yearlyAverages.has(year)) {
      yearlyAverages.set(year, { total: 0, count: 0 });
    }
    yearlyAverages.get(year).total += score;
    yearlyAverages.get(year).count += 1;
  });
  
  // Calculate the average for each year
  const result = Array.from(yearlyAverages).map(([year, { total, count }]) => ({
    year: parseInt(year),
    average: total / count,
  }));

  // Find the year with the highest average
  const sortedResult = result.sort((a, b) => {
   if (b.average !== a.average) {
    return b.average - a.average; // Sort by average in descending order
   } else {
     return a.year - b.year; // If tied, sort by year in ascending order
    }
  });

  console.log(sortedResult);

    const bestYear = sortedResult[0];
    return 'The best year was ' +  bestYear.year + ' with an average score of '+ bestYear.average;
  }
  else return null;

}             
