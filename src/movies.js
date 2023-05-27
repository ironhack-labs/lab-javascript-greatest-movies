// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(movie =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    return filteredMovies.length;
}
const numberOfMovies = howManyMovies(movies);
console.log(numberOfMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const sumeOfScores = moviesArray.reduce((total, movie) => {
        if (movie.hasOwnProperty("score")) {
            return total + movie.score;
        }
        return total;
    }, 0);
    const averageScore = sumeOfScores/moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if(dramaMovies.length === 0){
        return 0;
    }
    const sumeOfScoresDram = dramaMovies.reduce((total, movie) => {
       if(movie.hasOwnProperty("score")){
        return total + movie.score;
       } 
       return total;
    },0);
    const averageScore = sumeOfScoresDram/dramaMovies.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
        if (a.year !== b.year) {
      return a.year - b.year;
    } else {
        return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

const sortedMovies = orderByYear(moviesArray);
console.log(sortedMovies);
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray];
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    const titles = sortedMovies.map(movie => movie.title);
    return titles.slice(0, 20);
}
const sortedTitles = orderAlphabetically(moviesArray);
console.log(sortedTitles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
        const modifiedMovies = moviesArray.map(movie => {
        const modifiedMovie = { ...moviesArray };
        const durationParts = movie.duration.split(' ');
        const hours = parseInt(durationParts[0], 10) || 0;
        const minutes = parseInt(durationParts[1], 10) || 0;
        const durationInMinutes = hours * 60 + minutes;
        modifiedMovie.duration = durationInMinutes;
        return modifiedMovie;
        });
        return modifiedMovies;
      }
      const modifiedMovies = turnHoursToMinutes(moviesArray);
      console.log(modifiedMovies); 


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
