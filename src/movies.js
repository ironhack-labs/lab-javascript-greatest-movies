// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr)
{ const allDir = arr.map(movie => {
  return movie.director;
  }); return allDir;
  }
  getAllDirectors(movies);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    const ssMovies = arr.filter(drama => {
      if(drama.director === 'Steven Spielberg' && drama.genre.includes('Drama'))
        return drama;
    });
       return ssMovies.length;
  }
  howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    const sumOfRates = arr.reduce((accum, currentRate) => {
      if(currentRate.rate){
        accum+=currentRate.rate;
      }return accum;
      }, 0);
    const avgOfRates = sumOfRates/arr.length;
   if(arr.length === 0){
     return 0;
   } return parseFloat(avgOfRates.toFixed(2)); //did not know about parseFloat until mikayla :)
  }
  ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(someArr){
    if(someArr.length === 0){
        return 0;
    } else {
    let onlyDrama = someArr.filter(movie => movie.genre.includes('Drama'))
    return ratesAverage(onlyDrama) 
  }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArr){
    const sortedbyYear = someArr.slice().sort((x, y) => {
      if (x.year < y.year) return -1;
      if (x.year > y.year) return 1;
      if (x.title > y.title) return -1; // could not get titles to sort :(      
      if (x.title < y.title) return 1;
      else return 0;
    }); return sortedbyYear
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(someArr){
    const sortedByName = someArr.slice().sort((x, y)=>{
      if (x.title > y.title) return 1;
      if (x.title < y.title) return -1;
      return 0;
    
    }); const titlesOnly = sortedByName.map(movie => movie.title);

    return titlesOnly.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
