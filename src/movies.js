

// Iteration 1: All directors? - Get the moviesay of all directors.

function getAllDirectors(movies){ 
  const allDirectors = movies.map(function(mov){
    return mov.director;
  })
  return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the moviesay of directors. How could you "clean" a bit this moviesay and make it unified (without duplicates)?

function findUniqueDirectors(movies) {
  const uniqueDirectors = [...new Set(getAllDirectors(movies))];
  return uniqueDirectors ;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){ 
  const numberOfDramas = movies.filter(function(movies){
    return movies.director.includes('Steven Spielberg') && movies.genre.includes('Drama');
  })
  return numberOfDramas.length;  
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
   
  const sumRating = movies.reduce(function(acc, val){
    if (movies.length === 0) return 0;
    if (val.rate !== '' && 'rate' in val) { 
    return acc + val.rate} else {return acc}
  }, 0);
  const avg = sumRating / movies.length;
  return Number(avg.toFixed(2));
                           
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  const numberOfDramas = movies.filter(function(movies){
    return movies.genre.includes('Drama');
  }); 
  const dramaRates = numberOfDramas.map(function(movies){
    return movies.rate;
  }); 
  const sumOfRates = dramaRates.reduce(function(acc, val){
  return acc + val;
  }); 
  const avg = sumOfRates / dramaRates.length;
  return Number(avg.toFixed(2)); 
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
  const sortedByYear = JSON.parse(JSON.stringify(movies.sort(function(a, b){ 
    return a.year-b.year || a.title.localeCompare(b.title)
  })));
  return sortedByYear;  
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies){
  const movieTitles = movies.map(function(movies){
    return movies.title;
  })
  const first20Movies = movieTitles.sort(function(a, b){
    return a.localeCompare(b);
  }) 
  return first20Movies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
