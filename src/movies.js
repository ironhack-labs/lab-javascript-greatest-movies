// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    const directorNameList = movies.map((elem) => {
      return elem.director;
    }); return directorNameList;
  } 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    const steve = movies.filter((elem) => {
      return elem.director === `Steven Spielberg` && elem.genre.includes(`Drama`);
    }); return steve.length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies.length === 0){
        return 0;
    }
    const getRates = movies.map((elem) => {
      return elem.rate;
    })
    const avgRate = getRates.reduce((accum, currValue) => {
      return accum + currValue;
    }, 0);  return (avgRate / getRates.length).toFixed(2)*1;
    
    
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter((elem) => {
      return elem.genre.includes(`Drama`);
    });
    if (dramaMovies.length === 0){
        return 0;
    }
    const dramaRate = dramaMovies.map((elem) => {
      return elem.rate;
    });
    const dramaAvgRating = dramaRate.reduce((accum, currVal) => {
      return accum + currVal;
    }, 0); return (dramaAvgRating / dramaMovies.length).toFixed(2)*1;
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  const orderByYear = (movies) => {
    const sortedYears = [...movies].sort((a,b) => {
      return a.year - b.year;
    }); return sortedYears;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
