// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  
    const directors = moviesArray.map(dir => dir.director);
    return Array.from(new Set(directors));    
}
console.log(getAllDirectors(movies));





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesBySteven = moviesArray.filter((drama) =>  drama.director === "Steven Spielberg" & drama.genre.includes("Drama"));
    return dramaMoviesBySteven.length;

}
console.log(`Drama movies by Steven Spielberg: ${howManyMovies(movies)}`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

        if (moviesArray.length === 0) {
          return 0.00;
        }
      
        const validMovies = moviesArray.filter(movie => typeof movie.score === 'number');
        if (validMovies.length === 0) {
          return 0.00;
        }
      
        const totalScore = validMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
        const averageScore = totalScore / validMovies.length;
        return +averageScore.toFixed(2);
      

}

console.log(`The average of all scores with 2 decimals : ${scoresAverage(movies)} , type : ${typeof(scoresAverage(movies))}`);



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  
    if (dramaMovies.length === 0) {
      return 0.00;
    }
  
    const totalScore = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
    const averageScore = totalScore / dramaMovies.length;
    return +averageScore.toFixed(2);


}
console.log(`the average of Drama Movies : ${dramaMoviesScore(movies)}, type : ${typeof(dramaMoviesScore(movies))}`);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

        const sortedMovies = moviesArray.slice().sort((a, b) => {
          if (a.year !== b.year) {
            return a.year - b.year;
          } else {
            return a.title.localeCompare(b.title);
          }
        });
      
        return sortedMovies;
      

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    
        // Create a new array with just the titles and sort them alphabetically
        const sortedTitles = moviesArray.slice(0, 20).map(movie => movie.title).sort();
      
        return sortedTitles;
      
      
}
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    // Create a new array with the durations converted to minutes
  const convertedMovies = moviesArray.map(movie => {
    const durationParts = movie.duration.split(' ');

    let totalMinutes = 0;
    for (const part of durationParts) {
      const num = parseInt(part);
      if (part.includes('h')) {
        totalMinutes += num * 60;
      } else if (part.includes('min')) {
        totalMinutes += num;
      }
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return convertedMovies;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    
        if (moviesArray.length === 0) {
          return null;
        }
      
        const years = new Set();
        moviesArray.forEach(movie => {
          years.add(movie.year);
        });
      
        let bestYear = null;
        let bestAverage = -1;
      
        for (const year of years) {
          const moviesInYear = moviesArray.filter(movie => movie.year === year);
          const totalScore = moviesInYear.reduce((acc, movie) => acc + movie.score, 0);
          const averageScore = totalScore / moviesInYear.length;
      
          if (averageScore > bestAverage || (averageScore === bestAverage && year < bestYear)) {
            bestYear = year;
            bestAverage = averageScore;
          }
        }
      
        return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(2)}`;
      
      


}
console.log(bestYearAvg(movies));
