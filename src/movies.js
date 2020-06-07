


// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const directors = movies.map(function(movie){
      return movie.director;
    });
    return directors;
    }
 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// I commented the Bonus out because it messed with the test result of Iteration 1 (it has of course not the same length as the original array, if you eliminate the duplicates)

/*
  function getAllDirectors(movies){
  const directors = movies.map(function(movie){
    return movie.director;
  });
  return new Set(directors);
  }

*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(function(movie){
    if (movies.length == 0) return 0;
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });
  return spielbergDramaMovies.length;
  }
  
// Iteration 3: All rates average - Get the average of all rates with 2 decimals;//


function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  let totalRates = movies.reduce(function(sum,val){
                  return sum + (val.rate || 0);
                   },0); 
  return Number((totalRates / movies.length).toFixed(2));
                  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const allDramas = movies.filter(function(movie){
    return movie.genre.includes("Drama");
  });
  return ratesAverage(allDramas);
                  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  function orderByYear(movies){
    let newMovies = JSON.parse(JSON.stringify(movies));
    
   return newMovies.sort(function(a, b){
      if (a.year === b.year){
        return a.title.localeCompare(b.title);
      } else 
      return a.year - b.year;
    });
  }
  
      

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  let allTitles = movies.map(function(movie){
    return movie.title;
  });
  let top20 = allTitles.sort(function(a, b){
    return a.localeCompare(b);
       });
    return top20.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
