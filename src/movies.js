
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) { 
    return arr.map(function (item) {
        return item.director;
    })
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

    return arr.filter(function(item) {
      if (item.director === 'Steven Spielberg' && item.genre.includes('Drama')) {
        return true;
      }
    }).length
    
  };
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }; 
    
   const clean = arr.map(function(item) {
     if (!item.rate) {
        return item.rate = 0;
      } else {
         return item.rate
      } 
    });
     
  
    const count = clean.reduce(function (acc, val) {
        return acc + val
       }, 0);    
       
    return Math.round((count/arr.length) * 100) / 100;
    };


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {

    const dramaFilter = arr.filter(function (item) {
      return item.genre.includes('Drama')   
    });
    
    if (dramaFilter.length === 0) {
      return 0;
    }
  
    const sum = dramaFilter.reduce(function (acc, val) {
        return acc + val.rate;  
    }, 0);  
    
    
    return Math.round((sum / dramaFilter.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const newArr = arr.slice();
    const ordered = newArr.sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year
        } 
        else if (a.title > b.title) { 
            return 1;
        }
        else if (a.title < b.title) {
            return -1
        }
    });
    return ordered;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {

    const newArr = arr.slice();
    
    const sorted = newArr.sort( function (a, b) {
      if (a.title > b.title) {
        return 1; 
      }
      else if (a.title < b.title) {
        return -1; 
      }
      else {
        return 0;
      }
    }) 
    
    const titleArr = sorted.map(function (item) {
      return item.title
    })
    
    return titleArr.slice(0, 20)
  };
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
