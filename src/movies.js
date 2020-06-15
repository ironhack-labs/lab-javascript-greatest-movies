// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr)
{ const allDir = arr.map(movie => {
  return movie.director;
  }); return allDir;
  }
  getAllDirectors(movies);

  // A little help with writing the Syntax with Mikayla and Nick


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Having trouble to get it  will still keep working on it. 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    const spielbergMovies = arr.filter(drama => {
      if(drama.director === 'Steven Spielberg' && drama.genre.includes('Drama'))
        return drama;
    });
       return spielbergMovies.length;
    }
    howManyMovies(movies);

    // colab with Mikayla but logic makes sense. Collab with Mikayla to practise the Syntax

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

  // A help with writing the Syntax with Mikayla and Nick 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    if(arr.length === 0) return 0;
    var dramaType = movies.filter(function(drama){
        return drama.genre.includes("Drama");
      });
      return ratesAverage(dramaType);
}

// A little help with logic of Thomas 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    if(arr.length === 0) return 0;
    const sortedArr = arr.sort(function(a, b){
      if(a.year > b.year) return 1;
      if(a.year < b.year) return -1;
      if(a.title > b.title)return 1;
      if(a.title < b.title) return -1;
      return 0;
      })
      return sortedArr;
  }
  console.log(orderByYear(movies));

  // Used notes to get Order from Saturday class function makes sense just need to practise Syntax 



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(arr){
//     const sortedArrAlpha = arr.sort(function(a, b){
//         if(a.title > b.title) return 1;
//         if(a.title < b.title) return -1;
//         return 0;
//         })
//         return sortedArrAlpha;
// }
// console.log(orderAlphabetically(movies));

function orderAlphabetically(arr){
    if (arr.length === 0){
      return 0
    }
      const sortedArrAlpha = arr.sort(function(a, b){
          if(a.title > b.title) return 1;
          if(a.title < b.title) return -1;
          return 0;
          })
          return sortedArrAlpha;
          if (sortedArrAlpha.length > 20){
     constNewList = sortedArrAlpha.length.slice(0,19);
     return constNewList


// got to map 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// didnt have time 

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


//didnt have time

