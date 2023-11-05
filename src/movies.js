// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//Solotion:
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map(movie => movie.director); //create a new array 'directorsArray' that only includes movie directors form 'moviesArray'
  return directorsArray //map movie to director, returns a new array.
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
      const stevenSpielbergDramaMovies = moviesArray.filter(movie => { //create a new array 'stevenSpielbergDramaMovies' from 'moviesArray'. filtered to only include genre:drama, and director:Steven Spielberg.
        return (
          movie.director === 'Steven Spielberg' &&
          movie.genre.includes('Drama')
        );
      });
    
      return stevenSpielbergDramaMovies.length; //returns the number of drama movies directed by Steven Spielberg. it will return 0 if the array is empty .
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { //return 0 if an empty array is passed.
  if (moviesArray.length === 0) {
    return 0;
  }

  const scores = moviesArray.map((movie) => { // Create an array 'scores' to store scores from the array 'moviesArray'.
    return typeof movie.score === 'number' ? movie.score : 0; // Check if the 'score' property of each movie is a number, and if not, consider it as 0.
  });

  const sum = scores.reduce((acc, score) => acc + score, 0);// Calculate the sum of scores using the reduce method. summing all the scores in the array to to a single value. so we can devide it by the number of movies to get the average score. 
  const average = sum / moviesArray.length;// Calculate the average score.
  return parseFloat(average.toFixed(2));// Convert the average to a float and round it to two decimal places.
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama')); //create a new array 'dramaMovies' that from 'moviesArray', filtered to only include genre: drama.

    if (dramaMovies.length === 0) {//return 0 if the array is empty.
      return 0;
    }
  
    const totalScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);// Calculate the sum of scores using the reduce method.
    const averageScore = totalScore / dramaMovies.length;// Calculate the average score.
  
    return parseFloat(averageScore.toFixed(2)); // Convert the average to a float and round it to two decimal places.
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
  const sortedMovies = moviesArray.slice(); // Create a new array copied from 'moviesArray'.

   sortedMovies.sort((a, b) => { // Sort the 'sortedMovies' array by year in ascending order.
    if (a.year === b.year) { // If years are the same, sort them by title alphabetically.   
      return a.title.localeCompare(b.title);
    } else {  
      return a.year - b.year; // Sort by year in ascending order.
    }
  });

  return sortedMovies; //returns the new sorted array.
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray.map(movie => movie.title); // Create a new array copied from 'moviesArray', only includes tittles.

  // Sort the titles alphabetically.
  sortedTitles.sort();

  // Return only the first 20 titles or all of them if there are fewer than 20.
  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
  const modifiedMovies = moviesArray.map(movie => {// Create a new array
    
    const durationParts = movie.duration.split(' ');// Split the duration string into hours and minutes

    let totalMinutes = 0;

    for (const part of durationParts) {
      if (part.includes('h')) {// Extract hours and convert to minutes     
        totalMinutes += parseInt(part, 10) * 60;
      } else if (part.includes('min')) { // Extract minutes
        totalMinutes += parseInt(part, 10);
      }
    }
    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return modifiedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
      }
    
      // Create an object to store the average scores for each year
      const yearScores = {};
    
      moviesArray.forEach(movie => {
        const year = movie.year;
        const score = movie.score;
    
        if (!yearScores[year]) {
          yearScores[year] = { totalScore: 0, count: 0 };
        }
    
        yearScores[year].totalScore += score;
        yearScores[year].count += 1;
      });
    
      let bestYear = null;
      let bestAverage = 0;
    
      for (const year in yearScores) {
        const average = yearScores[year].totalScore / yearScores[year].count;
        if (average > bestAverage || (average === bestAverage && year < bestYear)) {
          bestYear = year;
          bestAverage = average;
        }
      }
    
      return `The best year was ${bestYear} with an average score of ${bestAverage}`;
    }

