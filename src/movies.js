// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    const allDir = arr.map(movie => {
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
   } return parseFloat(avgOfRates.toFixed(2));
  }
  
  ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    if(arr.length === 0){
      return 0;
    } else {
      const dramas = arr.filter(movie => movie.genre.includes('Drama'))
      return ratesAverage(dramas);
    }
  }
    
  dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    const sortedMovies = arr.slice().sort((a,b) =>{
      if(a.year<b.year){
        return -1;
      } else if(a.year>b.year){
        return 1;
      } else if(a.title > b.title){
        return 1; 
      } else if(a.title<b.title){
        return -1;
      }
      
        return 0;
      
    }); return sortedMovies; 
    }
    
    orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    const alphaMovies = arr.slice().sort((a,b)=> {
      if(a.title<b.title){
            return -1;
        }else if(a.title>b.title){
            return 1;
        } else {
            return 0;
        }
}); 
        const justTitles = alphaMovies.map(movie => movie.title); 
      return justTitles.slice(0,20);
} 

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    const movieDurations = arr.map(movie => movie.duration.split(" "));
    const justNumbers = movieDurations.map(duration => {
      let hours = duration[0].replace("h", "");
      if(duration[1]){
        return duration[1].replace("min", "");
      }
    }); return justNumbers;
  } 
  turnHoursToMinutes(movies);
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){
    if(arr.length === 0){
        return null;
    }
}